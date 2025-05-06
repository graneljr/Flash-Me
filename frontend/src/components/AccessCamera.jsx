import React, { useState ,useEffect} from 'react';
import Swal from 'sweetalert2';
import chad from "../images/chad-dalke.png";
import { useNavigate } from 'react-router-dom';
const AccessCamera = ({permissionGranted, setPermissionGranted}) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const askForCameraPermission = () => {
    navigator.permissions.query({ name: 'camera' }).then((permissionStatus) => {
      if (permissionStatus.state === 'granted') {
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then((stream) => {
            stream.getTracks().forEach((track) => track.stop());
            setPermissionGranted(true);
            setError(null);
            localStorage.setItem("cameraPermission", "true");
            navigate("/photo-shoot");
          })
      .catch(() => {
        setError('Camera access denied or unavailable.');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Your browser does not support camera access or permission was denied.',
          footer: `
            <a target="_blank" href="https://support.google.com/chrome/answer/2693767?hl=en&co=GENIE.Platform%3DDesktop">Allow Camera on Laptop or PC</a><br>
            <a target="_blank" href="https://support.google.com/chrome/answer/2693767?hl=en&co=GENIE.Platform%3DAndroid">Allow Camera on Mobile</a>
          `,
        });
      });
      }else{
        setPermissionGranted(false);
        localStorage.setItem("cameraPermission", "false");
        setError('Camera access denied or unavailable.');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Your browser does not support camera access or permission was denied.',
          footer: `
            <a target="_blank" href="https://support.google.com/chrome/answer/2693767?hl=en&co=GENIE.Platform%3DDesktop">Allow Camera on Laptop or PC</a><br>
            <a target="_blank" href="https://support.google.com/chrome/answer/2693767?hl=en&co=GENIE.Platform%3DAndroid">Allow Camera on Mobile</a>
          `,
        });
      }
  })

  };
  useEffect(() => {
    const saved = localStorage.getItem("cameraPermission");
    if (saved === "true") {
      setPermissionGranted(true);
      navigate("/photo-shoot");
    } else if (saved === "false") {
      setPermissionGranted(false);
    }
  }, []);

  return (
    <>
      {!permissionGranted && (
        <div className='flex flex-col small-screen:w-[80%] items-center justify-center'>
          <img src={chad} alt="Camera Icon" />
          <button
            onClick={askForCameraPermission}
            className="
            w-1/2 small-screen:!px-[5px] small-screen:!py-[10px] md:w-[40%] md:!py-[14px] md:text-[20px] lg:w-[30%] rounded-[5px] bg-purple-600 text-white
             hover:bg-white hover:text-purple-600 transition duration-300 small-screen:text-[12px] font-bold ease-in-out cursor-pointer"
          >
            Enable Camera
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      )}
     
    </>
  );
};

export default AccessCamera;
