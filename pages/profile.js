import { useState, useCallback, useEffect } from 'react';
import DisplayDesktop from '../components/desktop/profile/desktop';
import DisplayMobile from '../components/mobile/profile/mobile';

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

function Profile() {
  const display = getDisplay(750);
   return (
    <div>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
</style>
      {display?<DisplayMobile/>:<DisplayDesktop/>}
   </div>
)}

export default Profile;