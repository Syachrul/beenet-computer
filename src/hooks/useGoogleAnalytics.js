import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook untuk melacak page_view di Google Analytics 4 (GA4)
 * setiap kali route berubah di React Router.
 *
 * Karena di index.html kita set `send_page_view: false`,
 * hook ini yang bertanggung jawab mengirim page_view manual.
 */
export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

    // Pastikan Measurement ID tersedia dan fungsi gtag sudah dimuat
    if (measurementId && typeof window.gtag === 'function') {
      window.gtag('config', measurementId, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};

export default useGoogleAnalytics;
