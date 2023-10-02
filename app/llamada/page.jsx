
import Button from '../../components/Button'
import LocalVideo from '../../components/LocalVideo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDisplay, faPhone, faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Llamada() {


    return (
        <div className="bg-gray-100 min-h-screen min-w-full">
            <div className="" id="root">
                <div id="container" className="align-middle text-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-yellow-500">
                            <div id="local" className="participant flex flex-col flex-wrap">
                                <LocalVideo />

                                {/* <div className="bg-indigo-500 rounded-lg w-2/4 px-6 m-auto p-2">Kevin Savir Rivas Reverol</div> */}
                            </div>
                        </div>
                        <div className="bg-green-200">
                            <form className="my-16">
                                <h5 className="p-4 font-bold">¿Preparado para unirte?</h5>
                                <p className="p-2" id="count">Esperando a los participantes </p>
                                <label className="p-3" for="username">Nombre</label> <br />
                                <input className="m-2 p-1 rounded-3xl text-center" type="text" id="username" placeholder="Ej: Kevin Rivas" />
                                <div className="flex flex-wrap gap-6 justify-center my-3">
                                    {/* <button className=" border-black rounded-3xl" id="join_leave">Unirse ahora</button>
                                        <button className="rounded" id="share_screen" disabled>Share screen</button>*/}
                                    {/* <button className="rounded" id="toggle_chat" disabled>Toggle chat</button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}