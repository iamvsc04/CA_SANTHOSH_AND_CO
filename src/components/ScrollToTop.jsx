import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the modern scrollTo for IE, Edge, Chrome and Firefox
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything, it's just for the side effect
} 