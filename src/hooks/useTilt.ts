import { useEffect } from 'react';

export default function useTilt() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>('.glass-card'));
    if (cards.length === 0) return;

    const cleanups: Array<() => void> = [];
    const throttleMap = new Map<HTMLElement, number>();

    cards.forEach((card) => {
      const onMouseMove = (e: MouseEvent) => {
        const now = Date.now();
        const lastTime = throttleMap.get(card) || 0;
        
        // Throttle to ~60fps (16ms)
        if (now - lastTime < 16) return;
        throttleMap.set(card, now);

        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        card.style.transform = `
          perspective(1000px)
          rotateX(${-y * 8}deg)
          rotateY(${x * 8}deg)
          translateY(-4px)
        `;
      };

      const onMouseLeave = () => {
        card.style.transform = '';
        throttleMap.delete(card);
      };

      card.addEventListener('mousemove', onMouseMove);
      card.addEventListener('mouseleave', onMouseLeave);

      cleanups.push(() => {
        card.removeEventListener('mousemove', onMouseMove);
        card.removeEventListener('mouseleave', onMouseLeave);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);
}
