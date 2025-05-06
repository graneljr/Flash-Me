import html2canvas from "html2canvas";
const DownloadBtn = ({frameRef}) => {
  const downloadImage = () => {
   
    html2canvas(frameRef.current,{scale:4}).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "Flash Me.png"; 
      link.click();
    }).catch((error) => {
      console.log("Error generating canvas:", error);
    });
  };

  return <button onClick={downloadImage} className="bg-green-500 hover:bg-green-600 text-white font-bold !py-2 !px-4 rounded small-screen:w-[90%] small-screen:h-[50px]
lg:w-[70%] xl:w-[60%] 2xl:w-1/2">
    Download Image
  </button>
}
 
export default DownloadBtn;