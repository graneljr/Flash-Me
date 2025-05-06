import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import TakePhoto from "./TakePhoto";
import About from "./About";
import AccessCam from "./AccessCam";
import "./app.css"
import SetImageToDownload from "./SetImageToDownload";

const App = () => {
   
    return ( 
        <div className="w-full h-[100vh]">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/photo-shoot" element={<TakePhoto/>} />
                <Route path="/access-camera" element={<AccessCam/>} />
                <Route path="/display-images" element={<SetImageToDownload/>} />
            </Routes>
        </div>
     );
}
 
export default App;