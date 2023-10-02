"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDisplay, faPhone, faMicrophone, faMicrophoneSlash,faVideo,faVideoSlash } from '@fortawesome/free-solid-svg-icons'



export default function LocalVideo({initialMuted, initialCameraOff}) {
    const [isMuted, setIsMuted] = useState(initialMuted)
    const [isCameraOff, setIsCameraOff] = useState(initialCameraOff)

    const muteButton = isMuted ? faMicrophoneSlash : faMicrophone
    const mutedClassName = isMuted ? 'bg-red-700 rounded-3xl' 
    : 'bg-sky-700 rounded-3xl'

    const handleMute = () => {
        setIsMuted(!isMuted)
    }

    const cameraButton = isCameraOff ? faVideoSlash : faVideo
    const cameraClassName = isCameraOff ? 'bg-red-700 rounded-3xl' : 
    'bg-sky-700 rounded-3xl'

    const handleCamera = () => {
        setIsCameraOff(!isCameraOff)
    }


    return (
        <>
            <div className="">
                <div className="">
                    <Image
                        src="/Luna.jpg"
                        alt="Video de prueba"
                        className=" w-9/12 h-96 rounded-3xl m-auto p-2"
                        width={300}
                        height={100}
                    />
                </div>
                <div className="flex flex-wrap justify-center gap-4 my-3">
                    <button className={cameraClassName}>
                        <FontAwesomeIcon className="h-12 p-3 mx-2 text-white" icon={cameraButton}
                            onclick={handleCamera} initialCameraOff />
                    </button>
                    <button className={mutedClassName}>
                        <FontAwesomeIcon className="h-12 p-3 mx-2 text-white" icon={muteButton} 
                            onclick={handleMute} initialMuted />
                    </button>
                    <Link href="/fin_llamada">
                        <button className="bg-red-700 rounded-3xl">
                            <FontAwesomeIcon className="h-12 p-3 mx-2 text-white" icon={faPhone} />
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}