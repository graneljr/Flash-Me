import { useEffect } from 'react';
const Time = (started, countdown, imageCount, setCountdown, capture , setStarted, selectTimer) => {

      useEffect(() => {
        let interval;
        if(imageCount !== 3) {
        if (started && countdown > 0) {
          interval = setInterval(() => {
            setCountdown((prev) => prev - 1); 
          }, 1000);
        }
      }else{
        setStarted(false)
      }
    
        if (countdown === 0) {
          capture(); 
          setCountdown(selectTimer);
        }
        return () => clearInterval(interval);
      }, [started, countdown, imageCount, setCountdown, capture, setStarted, selectTimer]);

}
export default Time;