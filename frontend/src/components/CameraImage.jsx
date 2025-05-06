import {useState, useEffect} from "react";
import chad from "../images/chad-dalke.png";
import kups1 from "../images/kups1.jpg";
import kups2 from "../images/kups2.jpg";
import kups3 from "../images/kups3.jpg";
import kups4 from "../images/kups4.jpg";
const CameraImage = () => {
const images = [chad, kups1, kups2, kups3, kups4];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex(prev =>
          prev === images.length - 1 ? 0 : prev + 1
        );
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);  
    return (  
    <div className="relative w-[30%] h-[50%] overflow-hidden rounded-xl small-screen:w-[85%] small-screen:min-h-[40%] small-screen:max-h-[42%]
    lg:w-[40%]">
    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Slide ${index}`}
        className={`absolute w-full h-full small-screen:h-[90%] object-contain transition-opacity duration-2000 rounded-xl ${
          index === currentIndex ? "slideInImage-and-OutImage" : "opacity-0"
        }`}
      />
    ))}
  </div>
);

}
 
export default CameraImage;