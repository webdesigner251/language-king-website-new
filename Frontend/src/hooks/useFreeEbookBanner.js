import { useState, useEffect, useCallback } from 'react';

const useFreeEbookBanner = () => {
  const [bannerData, setBannerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBannerData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/api/free-ebook/banner?t=${Date.now()}`);
      if (response.ok) {
        const data = await response.json();
        setBannerData(data);
        setError(null);
      } else {
        setError('Failed to fetch banner data');
      }
    } catch (err) {
      setError('Error fetching banner data');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBannerData();
  }, [fetchBannerData]);

  return { bannerData, loading, error, refetch: fetchBannerData };
};

export default useFreeEbookBanner;