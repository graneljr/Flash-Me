import AccessCamera from "../components/AccessCamera";
import { useAppContext } from "../components/GlobalVariable";
const AccessCam = () => {
    const { permissionGranted,setPermissionGranted } = useAppContext();

    return ( 
        <div className="w-full h-full flex items-center justify-center bg-[linear-gradient(to_top,_#fff1eb_0%,_#ace0f9_100%)]">
             <AccessCamera setPermissionGranted={setPermissionGranted} permissionGranted={permissionGranted} />
        </div>
     );
}
 
export default AccessCam;