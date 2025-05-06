import { useNavigate } from "react-router-dom";
import { useEffect ,useState } from "react";
import { useAppContext } from "./GlobalVariable";

const HomeTagline = () => {
    const { setPermissionGranted } = useAppContext();
    const navigate = useNavigate();
    const handleClick = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          stream.getTracks().forEach(track => track.stop());
          console.log("✅ Camera access allowed");
          setPermissionGranted(true);
          localStorage.setItem("cameraPermission", "true");
          navigate("/photo-shoot");
        } catch (err) {
          setPermissionGranted(false);
          localStorage.setItem("cameraPermission", "false");
          navigate("/access-camera");
        }
      };
      const header = [["F","l","a","s","h"," ","M","e"], ["F","r","e","e"]];

      const [currentWordIndex, setCurrentWordIndex] = useState(0); // which word
      const [letterIndex, setLetterIndex] = useState(0); // which letter
      const [direction, setDirection] = useState(1); // 1 = typing, -1 = deleting
      const [displayedText, setDisplayedText] = useState(""); // what is shown
    

      useEffect(() => {
        const interval = setInterval(() => {
          const currentWord = header[currentWordIndex];

          setLetterIndex((prev)=>{
            let nextIndex = prev + direction

            if(nextIndex > currentWord.length){
              setDirection(-1)
             return prev -1
            }
            if(nextIndex < 0){
              setDirection(1)
             return 0
             
            }
            return nextIndex
          })
        },1000); 
        
        return () => clearInterval(interval);
      }, [direction, currentWordIndex, header]);
      useEffect(() => {
        if (letterIndex === 0 && direction === 1) {
          setCurrentWordIndex((prev) => (prev + 1) % header.length);
        }
      }, [letterIndex, direction]);
      
      useEffect(() => {
      const currentWord = header[currentWordIndex]
     console.log(currentWordIndex)
      setDisplayedText(currentWord.slice(0, letterIndex).join(""))
      }, [letterIndex, currentWordIndex, header]);
    
    return ( 
        <div className="text-black flex flex-col justify-center gap-4 slide-in-animation small-screen:w-[55%] small-screen:h-[40%]
        lg:w-[30%] lg:h-[40%]">
          <h1 className="letter-animation font-bold small-screen:text-[30px] text-[70px] sm:text-[clamp(30px,6vw,40px)] lg:text-[55px]">{displayedText}{currentWordIndex === 0 && letterIndex === 8 &&(<span className="inline-block translate-y-[-10px]">📸</span>)}</h1>
            <h2 className="font-medium small-screen:text-[clamp(15px,4vw,25px)]">Making Awkward Faces Acceptable</h2>
            <p className="font-medium lg:text-[20px] small-screen:text-[clamp(8px,3vw,20px)] small-screen:w-[100%] lg:w-[70%]">Easily capture and share your favorite moments in just a few clicks, anytime, anywhere.</p><br/>
            <button 
                onClick={handleClick} 
                className="lg:w-[40%] !p-[15px] rounded-[30px] bg-[linear-gradient(135deg,#b8860b,#ffd700)] text-white 
                    hover:scale-105 transform hover:shadow-[0_0_20px_#ffd700] transition duration-500text-[20px] font-bold 
                    ease-in-out cursor-pointer btn-slide-in-animation opacity-0 
                    small-screen:w-[60%]">
                Try Now
            </button>

        </div>
     );
}
 
export default HomeTagline;