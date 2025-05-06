import React, { useState } from 'react';
import WebCam from '../components/WebCam';
import "./takephoto.css"
import { useAppContext } from '../components/GlobalVariable';
function TakePhoto() {
  const { image, setImage,permissionGranted } = useAppContext();
 
  return (
    <div className="w-full h-full flex items-center align-middle justify-center bg-[linear-gradient(to_top,_#fff1eb_0%,_#ace0f9_100%)]">
      {permissionGranted && (
        <div className="w-full  flex items-center justify-center">
            <WebCam setImage={setImage} image={image} />
        </div>
      )}
    </div>
  );
}

export default TakePhoto;