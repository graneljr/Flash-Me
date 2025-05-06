import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
const useCapture = (webcamRef, image, setImage, setImageCount,canvasRef,filter) => {
  const navigate = useNavigate()
  const capture = useCallback(() => {
  
    if (webcamRef.current && image.length < 3) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      const video = webcamRef.current.video;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.filter  = filter;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const filteredImage = canvas.toDataURL('image/png');
      const imageSrc = filteredImage;
      setImage((prev) => [...prev, imageSrc]);
      setImageCount((prev) => prev + 1);
    }
   if(image.length === 2){
  setTimeout(()=>{
    navigate("/display-images")
    setImageCount(0)
  },2000)
   }
  }, [webcamRef, image, setImage, setImageCount,canvasRef,filter]);

  return capture;
};

export default useCapture;
