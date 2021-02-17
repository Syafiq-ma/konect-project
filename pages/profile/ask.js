import { useState, useCallback, useEffect } from 'react';
import DisplayDesktop from '../../components/desktop/ask/ask';
import DisplayMobile from '../../components/mobile/ask/ask';

const getDisplay = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

function Ask() {
  const display = getDisplay(750);
   return (
    <div>
      {display?<DisplayMobile/>:<DisplayDesktop/>}  
   </div>
)}

export default Ask;