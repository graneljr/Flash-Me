import React, {  useState } from "react";
import Timer from './Timer';
import CaptureBtn from "./CaptureBtn";
import DisplayImages from "./DisplayImages";
import Filter from "./Filters";
import Reset from "./ResetBtn";
import Time from "./Time";
import useCapture from "./Capture";
import { useAppContext } from "./GlobalVariable";
const CamOptions = ({webcamRef, canvasRef}) => {
  const { imageCount, started, countdown,setCountdown,setStarted ,setImageCount ,image,setImage,filter,setFilter} = useAppContext();
  const handleChange = (event) => {setSelecteTimer(event.target.value); setCountdown(event.target.value);};
  const [selectTimer, setSelecteTimer] = useState(countdown);
  const capture = useCapture(webcamRef, image, setImage, setImageCount,canvasRef,filter);
  Time( started, countdown, imageCount, setCountdown, capture, setStarted, selectTimer);
    return ( 
      <div className="w-full h-[40vh] flex flex-col gap-y-8">
  <div className="h-1/2">
    <DisplayImages image={image}/>
  </div>
  <div className="flex justify-between h-1/3">
    <CaptureBtn setStarted={setStarted} />
    <Timer handleChange={handleChange} selecteTimer={selectTimer} />
    <Filter filter={filter} setFilter={setFilter} />
  </div>
  <div className="flex justify-center">
    <Reset
      setImage={setImage}
      setImageCount={setImageCount}
      setStarted={setStarted}
    />
  </div>
</div>    
     );
}
 
export default CamOptions;