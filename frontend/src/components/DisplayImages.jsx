const DisplayImages = ({ image }) => {
  return (
    <div className="flex h-full  gap-x-5">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="w-1/3 h-full rounded overflow-hidden flex items-center justify-center"
        >
          {image[index] ? (
            <img
              src={image[index]}
              alt={`Snap ${index + 1}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-[gray] text-sm">Empty Slot</span>
          )}
        </div>
      ))}
    </div>

  );
}

export default DisplayImages;