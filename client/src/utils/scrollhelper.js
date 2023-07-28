import { useEffect } from 'react';

const useScrollHelper = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

export default useScrollHelper; 