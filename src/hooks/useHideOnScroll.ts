import { useEffect, useState } from 'react';

export function useHideOnScroll() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 스크롤이 100px 이상일 때만 숨기기/보이기 감지
      if (currentScrollY > 100) {
        // 아래로 스크롤 중일 때 (숨기기)
        if (currentScrollY > lastScrollY) {
          setVisible(false);
        }
        // 위로 스크롤 중일 때 (보이기)
        else {
          setVisible(true);
        }
      } else {
        // 맨 위에서는 항상 보이기
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return visible;
}

