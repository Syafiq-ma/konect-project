import { useState, useCallback, useEffect } from 'react';
import DisplayDesktop from '../../../components/desktop/confirm/confirm';
import DisplayMobile from '../../../components/mobile/confirm/confirm';

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

function Confirm() {
  const display = getDisplay(750)
   return (
    <div>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
</style>
      {display?<DisplayMobile/>:<DisplayDesktop/>}
   </div>
)}

export default Confirm;