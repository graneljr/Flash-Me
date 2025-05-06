import React, { createContext, useContext, useState,useEffect} from 'react';
const GlobalVar = createContext(null);


export const AppProvider = ({ children }) => {

  const [imageCount, setImageCount] = useState(0);
  const [image, setImage] = useState([]);
  const [started, setStarted] = useState(false);
  const [countdown, setCountdown] = useState(3); 
  const [filter, setFilter] = useState("none");
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [frameColor, setFrameColor] = useState("")

  const [hashtags, setHashtags] = useState([]);
  
  useEffect(() => {
    const saved = localStorage.getItem("cameraPermission");
    setPermissionGranted(saved === "true");
  },[]) 
  return (
    <GlobalVar.Provider value={{ imageCount, started, countdown,setCountdown,setStarted ,setImageCount ,image,setImage , filter,setFilter, permissionGranted, setPermissionGranted, frameColor, setFrameColor, hashtags, setHashtags}}>
      {children}
    </GlobalVar.Provider>
  );
};

export const useAppContext = () => {
  return useContext(GlobalVar);
};