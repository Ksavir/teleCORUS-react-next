import IconToogler from '@/components/IconButton'
import LocalVideo from '@/components/LocalVideo'
import Image from 'next/image'


export default function Divs() {
    return (
        <div className="flex flex-direction-column ">
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4  bg-green-400">
                <LocalVideo />
            </div>
            <div className="absolute bottom-0 right-0 border-2 border-black m-10 bg-green-300">
            <Image
                src="/Luna.jpg"
                alt="Video de prueba"
                width={100}
                height={100}
                className='w-60 h-36 rounded-3xl m-auto p-2'
            />
           </div>
        </div>
    )
}



{/* <div class="flex flex-direction-column">
  <div class="w-full">
    Primer div
  </div>
  <div class="absolute bottom-0 right-0 w-50 h-50 border-radius-50 border-2 border-black mx-10 my-10">
    Segundo div
  </div>
</div> */}