import { forwardRef } from "react";

const ImagePreview = forwardRef(({ image, frameColor, hashtags }, ref) => {
  return (
    <div
      className={`
        flex justify-center items-center
        max-[350px]:w-[70%]
        max-[450px]:w-[65%]
        max-[600px]:w-[50%] max-[600px]:!mt-[10%]
        max-[800px]:w-[40%] max-[800px]:!mt-[11%]
        max-[1024px]:w-[30%] max-[1024px]:!mt-[10%]
        lg:w-[23%] xl:w-[20%] 2xl:w-[15%]
      `}
      style={{ backgroundColor: frameColor }}
      ref={ref}
    >
      <div
        className={`
          flex flex-col gap-6 items-center w-[75%] !py-[35px]
          h-auto
          max-[320px]:h-[60svh]
          max-[400px]:h-[65svh]
          max-[600px]:h-[70svh]
        `}
      >
        {image.map((img) => (
          <div
            key={img}
            className="rounded w-full overflow-hidden flex items-center justify-center relative h-full max-h-[60svh]"
          >
            <img
              src={img}
              className="object-contain w-full h-full max-h-full"
              alt="preview"
            />
          </div>
        ))}

        {hashtags.length !== 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2 mt-2 justify-center">
              {hashtags.map((tag, index) => (
                <div
                  key={index}
                  className="!px-3 !py-1 rounded-full text-sm flex items-center justify-center"
                  style={{
                    backgroundColor: "rgb(219, 234, 254)",
                    color: "rgb(29, 78, 216)",
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default ImagePreview;
