import HomeTagline from "./HomeTagline";
import CameraImage from "./CameraImage";
const HomeContent = () => {
    return ( 
        <div className="w-full h-full  items-center justify-evenly flex bg-transparent absolute z-[100px]  small-screen:flex-col-reverse small-screen:gap-6 
        lg:flex-row lg:items-center lg:justify-evenly ">
            <HomeTagline/>
            <CameraImage/>
        </div>
     );
}
 
export default HomeContent;