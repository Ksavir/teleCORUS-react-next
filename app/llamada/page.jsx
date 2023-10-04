
import Button from '../../components/Button'
import Image from 'next/image'
import LocalVideo from '../../components/LocalVideo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDisplay, faPhone, faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Llamada() {
    return (
        <div className="bg-gray-100 min-h-screen min-w-full relative">
            <div id="container" className="relative">
                <div className="bg-sky-200 w-full h-full">
                    <div id="local" className="participant flex flex-col flex-wrap min-h-screen">
                        <LocalVideo />
                    </div>
                </div>
                <div
                    className="absolute bottom-0 right-0 m-4 rounded-lg flex justify-end items-end w-3/5"
                >
                    <img
                        src="/Luna.jpg"
                        alt="Video de prueba"
                        className=" w-1/5 h-auto rounded-3xl"
                    />
                </div>
            </div>
        </div>
    );
}



// export default function Llamada() {


//     return (
//         <div className="bg-gray-100 min-h-screen min-w-full">
//             <div id="container" className="relati">
//                 <div className="">
//                     <div className="bg-sky-200 w-full h-full">
//                         <div id="local" className="participant flex flex-col flex-wrap min-h-screen">
//                             <LocalVideo />

//                         </div>
//                     </div>

//                     <div id="a1" className="bg-green-400 absolute bottom-0 right-0">
//                         <img
//                             src="/Luna.jpg"
//                             alt="Video de prueba"
//                             width={200}
//                             height={100}
//                             className='w-1/4 h-1/4 rounded-3xl m-auto p-2'
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }