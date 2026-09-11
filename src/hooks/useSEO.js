import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_ID = 'G-XXXXXXX'; // ganti dengan GA4 Anda

export default function useSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', GA_ID, { page_path: pathname });
    }
  }, [pathname]);
}
