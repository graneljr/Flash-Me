const CaptureBtn = ({setStarted}) => {
    return (
        <div className="flex justify-center items-center w-1/3">
              <button onClick={() => setStarted(true)} className="w-[80%] h-[50%] !p-[10px] rounded-[5px] font-bold text-[15px] bg-purple-600
             text-white hover:bg-white hover:text-purple-600 transition duration-300 ease-in-out">
            Capture
           </button>
        </div>
    ) 
}
 
export default CaptureBtn;