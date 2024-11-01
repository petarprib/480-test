import { useEffect, useRef } from 'react';

export default function useOnClickAway<T extends HTMLElement>(
  onClickAway: () => void,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickAway = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickAway();
      }
    };

    document.addEventListener('mousedown', handleClickAway);
    return () => {
      document.removeEventListener('mousedown', handleClickAway);
    };
  }, [onClickAway]);

  return ref;
}
