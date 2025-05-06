import ImagePreview from "../components/ImagePreview";
import { useAppContext } from "../components/GlobalVariable";
import EditFrame from "../components/EditFrame";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const SetImageToDownload = () => {
    const { image, setFrameColor, frameColor, setImage, hashtags, setHashtags } = useAppContext();
    const frameRef = useRef(null)
    const navigate = useNavigate();
    useEffect(() => {
        if (!image || image.length === 0) {
            alert("Please upload an image first");
            window.location.href = "/photo-shoot";
        }
        
    }, []);
    const [edit, setEdit] = useState(false)

    const goBack = ()=> {
        navigate("/photo-shoot")
        setImage([])
    }
    return (
        <div className="w-full h-full flex items-center justify-around relative overflow-hidden">
            <ImagePreview image={image} frameColor={frameColor} hashtags={hashtags} ref={frameRef} />
            <EditFrame setFrameColor={setFrameColor} setHashtags={setHashtags} hashtags={hashtags} frameRef={frameRef} className={`small-screen:w-[80%] max-[800px]:bg-white small-screen:h-[60vh] max-[800px]:index-10 max-[800px]:absolute
                 max-[800px]:top-[15%] max-[800px]:right-[0%] min-[800px]:w-[30%] min-[800px]:translate-x-0 ${edit ? "translate-x-0 transition-transform duration-300 ease-in-out":"translate-x-150"}`} />
            <button className="hidden max-[800px]:block absolute right-[4%] top-[6%] bg-blue-500 !py-[10px] !px-[20px] text-white font-medium text-[15px] rounded-[10px]"
                onClick={() => setEdit(prev => !prev)}>{edit ? "Close":"Edit"}</button>
            <button className=" absolute left-[4%] top-[6%] bg-blue-500 !py-[10px] !px-[20px] text-white font-medium text-[15px] rounded-[10px]"
            onClick={goBack}>Back</button>
        </div>
    );
}

export default SetImageToDownload;