import Link from "next/link"    


export default function Button({ children }) {
    return (
        <button className="bg-green-500 hover:bg-green-600 text-white font-light hover:font-bold py-2 px-4 rounded-3xl">
            {children}
        </button>
    )
}