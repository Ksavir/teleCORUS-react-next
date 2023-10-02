"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Button from '../components/Button'
import Footer from '../components/Footer'
import LocalVideo from '../components/LocalVideo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDisplay } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Home() {
  return (
    <div className=" container px-4 relative pb-28 bg-sky-200 min-h-screen min-w-full">
      <header className="text-6xl p-6 text-center font-sans">
        <h1>TeleCORUS</h1>
      </header>
      <div className="" id="root">
        <div id="container" className=" align-middle text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-yellow-500">
              <div id="local" className="participant flex flex-col flex-wrap">
                <LocalVideo />
                {/* <div className="bg-indigo-500 rounded-lg w-2/4 px-6 m-auto p-2">Kevin Savir Rivas Reverol</div> */}
              </div>
            </div>
            <div className="bg-gray-400">
              <form className="my-16">
                <h5 className="p-4 font-bold">¿Preparado para unirte?</h5>
                <p className="p-2" id="count">Esperando a los participantes </p>
                <label className="p-3" for="username">Nombre</label> <br />
                <input className="m-2 p-1 rounded-3xl text-center" type="text" id="username" placeholder="Ej: Kevin Rivas" />
                <div className="flex flex-wrap gap-6 justify-center my-3">
                  <Link href="/llamada">
                    <Button>
                      Unirse ahora
                    </Button>
                  </Link>
                  <Button>
                    <FontAwesomeIcon icon={faDisplay} /> Presentar
                  </Button>
                  {/*<button className=" border-black rounded-3xl" id="join_leave">Unirse ahora</button>
                    <button className="rounded" id="share_screen" disabled>Share screen</button>*/}
                  {/* <button className="rounded" id="toggle_chat" disabled>Toggle chat</button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>app/page.js</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore the Next.js 13 playground.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }
