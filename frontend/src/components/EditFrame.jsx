import smile1 from "../images/smiley-4832492_640-removebg-preview.png"
import smile2 from "../images/smiley-4832465_640-removebg-preview.png"
import smile3 from "../images/smiley-4836188_640-removebg-preview.png"
import shocked1 from "../images/smiley-4883983_640-removebg-preview.png"
import shocked2 from "../images/smiley-4832483_640-removebg-preview.png"
import shocked3 from "../images/smiley-4832519_640-removebg-preview.png"

import { useState} from "react";
import DownloadBtn from "./DownloadBtn"
const EditFrame = ({setFrameColor, setStickers,setHashtags, hashtags,frameRef ,className}) => {
  const [hashtag, setHashtagsValue] = useState("");
    const colors = [
        "#FFB5E8", // Baby Pink
        "#B28DFF", // Soft Violet
        "#AFF8DB", // Mint Cream
        "#FFD6A5", // Peach Cream
        "#85E3FF", // Cotton Blue
        "#FFABAB", // Blush Rose
        "#D5AAFF", // Lavender Milk
        "#FFC9DE", // Sakura Pink
        "#C4FAF8", // Frost Aqua
        "#FFFFD1", // Butter Yellow
      ];
      const laughter = [smile1, smile2, smile3]
      const shocked = [shocked1, shocked2, shocked3]

      const getValue = (e) => {
        setHashtagsValue(e.target.value);
      }

      const addHashtags = () => {
        
        const newHashtags = hashtag
        .split(/[\s,]+/)
        .map(tag => tag.trim())
        .filter(tag => tag && !hashtags.includes(tag));
      
      if (newHashtags.length > 0) {
        setHashtags([...hashtags, ...newHashtags]);
        setHashtagsValue('');
      }
      }
    return (
        <div className={`" flex flex-col items-center justify-center gap-y-11" ${className}`}>
        <h1 className="text-2xl font-bold mb-4">Edit Frame</h1>
        <div className="flex flex-col items-center justify-center gap-y-4">
        <p className="text-gray-600 mb-4">Choose a frame color:</p>
       <div className="grid grid-cols-5 gap-4">
       {colors.map((color, index) => (
      <div
        key={index}
           className="max-[1024px]:!w-[35px] max-[1024px]:!h-[35px] small-screen:w-[25px] small-screen:h-[25px] rounded-full cursor-pointer hover:scale-105 transition-transform
           lg:w-[35px] lg:h-[35px]"
        style={{ backgroundColor: color }}
        onClick={() => setFrameColor(color)}
      ></div>
    ))}
  </div> 
    </div>
      <div className="w-full flex flex-col small-screen:w-[90%] h-auto items-center justify-center gap-y-4">
        <p className="text-gray-600 mb-4">Stickers</p>
        <div className="grid grid-cols-3 gap-4 items-center  justify-items-center">
          <button onClick={()=> setStickers("")} className="!p-[15px] small-screen:!p-[7px] text-red-500 bg-white transition-all ease-in-out hover:bg-red-500 rounded-[7px] font-bold hover:text-white duration-500">Default</button>
            <img src={smile1} onClick={()=> setStickers(laughter)} className="w-1/2 h-full rounded-[15px] block " alt=""/>
            <img src={shocked1} onClick={()=> setStickers(shocked)} className="w-1/2 h-full rounded-[15px] block " alt=""/>
        </div>
      </div>
      <div className="w-full flex small-screen:w-[90%] h-auto flex-col items-center justify-center gap-y-4 !mb-[15px]">
        <p className="text-gray-600 mb-4">Add Hashtags</p>
        <input type="text" name="hashtag" className="small-screen:w-[80%] h-[50px]  rounded-[7px] border-2 border-gray-300 focus:outline-none focus:border-blue-500 !px-4" value={hashtag} onChange={getValue}/>  
        <div className="flex justify-around w-full">
        <button onClick={addHashtags} className="!p-[15px] w-[100px] small-screen:w-1/3 small-screen:h-[50px] text-white bg-blue-500 transition-all ease-in-out hover:bg-blue-600 rounded-[7px] font-bold duration-500">Add</button>
            <button onClick={() => setHashtags([])} className="!p-[15px] small-screen:w-1/3 small-screen:h-[50px] text-red-500 bg-white transition-all ease-in-out hover:bg-red-500 rounded-[7px] font-bold hover:text-white duration-500">Reset</button>
        </div>
      </div>
      <DownloadBtn frameRef={frameRef}/>
</div>

     );
}
 
export default EditFrame;