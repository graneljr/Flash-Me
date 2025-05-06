import Webcam from 'react-webcam';
import { useRef , useEffect,useState, useDebugValue} from 'react';
import CamOptions from './CamOptions';
import { useAppContext } from './GlobalVariable';
import { useNavigate } from 'react-router-dom';
const WebCam = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const webcamRef = useRef(null);
  const { imageCount, started, countdown, filter, permissionGranted,setPermissionGranted} = useAppContext();
  useEffect(() => {
      const saved = localStorage.getItem("cameraPermission");
      if (saved === "true") {
        setPermissionGranted(true);
        navigate("/photo-shoot");
      } else if (saved === "false") {
        setPermissionGranted(false);
      }
    }, [])
  

    const videoConstraints = {
      facingMode: 'user',
    };

  return (
  
       <div className="flex flex-col items-center h-full justify-center gap-y-5 small-screen:w-[80%] md:w-[50%] lg:w-[40%] xl:w-[35%]">
      {permissionGranted && (
        <>
        <div className="relative w-full h-1/3">
        <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/png"
        videoConstraints={videoConstraints}
        className="rounded shadow w-full"
        style={{ filter: filter }} 
      />
        {started && countdown > 0 && imageCount !==3 &&(
          <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] text-white font-bold text-4xl z-20">
            {countdown}
          </div>
          
        )}
         <canvas ref={canvasRef} style={{ display: 'none' }} />
        </div>
        <CamOptions webcamRef={webcamRef}canvasRef={canvasRef}/>
      
        </>
      )}
      {!permissionGranted && (
        <div className="text-red-500 mt-2">
          Camera access is required to take photos. Please enable it in your browser settings.
        </div>
      )}
    </div>
  
  
   
  );
};

export default WebCam;

