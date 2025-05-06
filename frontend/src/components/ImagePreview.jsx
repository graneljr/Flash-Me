import { forwardRef } from "react";
const ImagePreview = forwardRef(({ image, frameColor, stickers, hashtags }, ref) => {
  return (
    <div className={`flex justify-center items-center max-[350px]:w-[70%] max-[450px]:w-[65%] max-[600px]:w-[50%] max-[600px]:!mt-[10%] max-[800px]:w-[40%] max-[800px]:!mt-[11%]
      max-[1024px]:w-[30%] max-[1024px]:!mt-[10%] lg:w-[23%] xl:w-[20%] 2xl:w-[15%]
      `}
      style={{ backgroundColor: frameColor }}
      ref={ref}>
      <div className="flex flex-col gap-6 items-center !p-[20px] ">
        <div className="rounded overflow-hidden flex items-center justify-center relative">
          <img src={image[0]} className="w-full h-full object-contain outline-0" />
          {stickers[0] && (<img src={stickers[0]} className="w-[100px] h-[100px] absolute top-0 right-1 outline-0 border-0 shadow-none p-0 m-0"
            style={{ transform: "rotate(-20deg)" }} alt="" />)}
        </div>
        <div className="rounded overflow-hidden flex items-center justify-center relative">
          <img src={image[1]} className="w-full h-full object-contain outline-0" />
          {stickers[1] && (<img src={stickers[1]} className="w-[100px] h-[100px] absolute top-0 left-0 "
            style={{ transform: "rotate(39deg) scaleX(-1)" }} alt="" />)}
        </div>
        <div className="rounded overflow-hidden flex items-center justify-center relative">
          <img src={image[2]} className="w-full h-full object-contain outline-0" />
          {stickers[2] && (<img src={stickers[2]} className="w-[100px] h-[100px] absolute bottom-0 right-0 "
            style={{ transform: "rotate(20deg)" }} alt="" />)}
        </div>
        {hashtags.length !== 0 && <div className="mt-4">
          <div className="flex flex-wrap gap-2 mt-2 justify-center">
            {hashtags.map((tag, index) => (
              <div
                key={index}
                className="!px-3 !py-1 rounded-full text-sm flex items-center justify-center"
                style={{
                  backgroundColor: "rgb(219, 234, 254)", // Light blue background
                  color: "rgb(29, 78, 216)", // Dark blue text color

                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>}
      </div>

    </div>
  );
});

export default ImagePreview;
