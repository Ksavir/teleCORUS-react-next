"use client"


import Link from "next/link";
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDisplay, faPhone, faMicrophone, faMicrophoneSlash,faVideo,faVideoSlash } from '@fortawesome/free-solid-svg-icons'

export default function LocalVideo() {
    const [isMuted, setIsMuted] = useState(false);
    const [isCameraOff, setIsCameraOff] = useState(false);

    const handleMute = () => {
        setIsMuted(!isMuted);
    };

    const handleCamera = () => {
        setIsCameraOff(!isCameraOff);
    };

    return (
        <div className="bg-cover bg-center w-full h-screen bg-no-repeat relative">
            <img
                src="/Luna.jpg"
                alt="Video de prueba"
                className="w-3/4 h-3/4 mx-auto my-auto absolute inset-0 rounded-3xl"
            />
            <div className="flex justify-center gap-6 items-end h-full absolute inset-0 -my-6">
                <button
                    className={`bg-${isCameraOff ? 'red-600 border-0' : 'green-600'} rounded-full border-2 border-white`}
                    onClick={handleCamera}
                >
                    <FontAwesomeIcon className="h-8 p-3 mx-2 text-white" icon={isCameraOff ? faVideoSlash : faVideo} />
                </button>
                <button
                    className={`bg-${isMuted ? 'red-600 border-0' : 'green-600'} rounded-full border-2 border-white`}
                    onClick={handleMute}
                >
                    <FontAwesomeIcon className="h-8 p-3 mx-2 text-white rounded-full" icon={isMuted ? faMicrophoneSlash : faMicrophone} />
                </button>
                <Link href="/fin_llamada">
                    <button className="bg-red-600 rounded-full">
                        <FontAwesomeIcon className="h-8 p-3 mx-2 text-white" icon={faPhone} />
                    </button>
                </Link>
            </div>
        </div>
    );
}





// export default function LocalVideo() {
//     const [isMuted, setIsMuted] = useState(false);
//     const [isCameraOff, setIsCameraOff] = useState(false);

//     const handleMute = () => {
//         setIsMuted(!isMuted);
//     };

//     const handleCamera = () => {
//         setIsCameraOff(!isCameraOff);
//     };

//     return (
//         <div className="">
//             <div className="">
//                 <img
//                     src="/Luna.jpg"
//                     alt="Video de prueba"
//                     className="w-full h-96 rounded-3xl m-auto p-2"
//                     width={300}
//                     height={100}
//                 />
//             </div>
//             <div className="flex flex-wrap justify-center gap-4 my-3">
//                 <button
//                     className={`bg-${isCameraOff ? 'red' : 'green'}-600 rounded-full`}
//                     onClick={handleCamera}
//                 >
//                     <FontAwesomeIcon className="h-8 p-3 mx-2 text-white" icon={isCameraOff ? faVideoSlash : faVideo} />
//                 </button>
//                 <button
//                     className={`bg-${isMuted ? 'red' : 'green'}-600 rounded-full`}
//                     onClick={handleMute}
//                 >
//                     <FontAwesomeIcon className="h-8 p-3 mx-2 text-white rounded-full" icon={isMuted ? faMicrophoneSlash : faMicrophone} />
//                 </button>
//                 <Link href="/fin_llamada">
//                     <button className="bg-red-600 rounded-full">
//                         <FontAwesomeIcon className="h-8 p-3 mx-2 text-white" icon={faPhone} />
//                     </button>
//                 </Link>
//             </div>
//         </div>
//     );
// }



// export default function LocalVideo() {
//     const [isMuted, setIsMuted] = useState(faMicrophoneSlash)
//     const [isCameraOff, setIsCameraOff] = useState(faVideoSlash)

//     const muteButton = isMuted ? faMicrophoneSlash: faMicrophone
//     const mutedClassName = isMuted ? 'bg-red-600 rounded-full' 
//     : 'bg-green-700 rounded-3xl'

//     const handleMute = () => {
//         setIsMuted( isMuted === faMicrophone ? faMicrophoneSlash : faMicrophone)
//     }

//     const cameraButton = isCameraOff ? faVideoSlash : faVideo
//     const cameraClassName = isCameraOff ? 'bg-red-600 rounded-full' : 
//     'bg-sky-700 rounded-3xl'

//     const handleCamera = () => {
//         setIsCameraOff( isCameraOff === faVideoSlash ? faVideo : faVideoSlash)
//     }


//     return (
//         <>
//             <div className="">
//                 <div className="">
//                     <Image
//                         src="/Luna.jpg"
//                         alt="Video de prueba"
//                         className=" w-full h-96 rounded-3xl m-auto p-2"
//                         width={300}
//                         height={100}
//                     />
//                 </div>
//                 <div className="flex flex-wrap justify-center gap-4 my-3">
//                     <button className={cameraClassName} onClick={handleCamera} >
//                         <FontAwesomeIcon className="h-8 p-3 mx-2 text-white" icon={cameraButton}
//                             />
//                     </button>
//                     <button className={mutedClassName} onClick={handleMute}>
//                         <FontAwesomeIcon className="h-8 p-3 mx-2 text-white rounded-full" icon={muteButton} 
//                             />
//                     </button>
//                     <Link href="/fin_llamada">
//                         <button className="bg-red-600 rounded-full">
//                             <FontAwesomeIcon className="h-8 p-3 mx-2 text-white" icon={faPhone} />
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </>
//     )
// }