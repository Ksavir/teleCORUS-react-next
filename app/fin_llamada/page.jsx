import Image from "next/image"

export default function FinLlamada() {
    return (
        <>
            <div className="bg-sky-200 min-h-screen min-w-full text-center">
                <div className="grid h-screen place-items-center gap-5">
                    <div>
                        <h1 className="font-bold font-sans text-4xl p-3" >Gracias por usar TeleCORUS</h1>
                        <h2 className="font-bold font-sans text-2xl p-3">Telemedicina para todos</h2>
                        <p className="font-bold font-sans text-xl p-2"> Desarrollado por:
                            <a className="" target="_blank" href="https://www.telectronic.com/">
                                <Image
                                    width={300}
                                    height={100}
                                    src="/telectronic-logo-removebg-preview.png"
                                    alt="logo de telectronic"
                                    className="m-auto"
                                />
                            </a>
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}