import Link from "next/link";
import Message from "./Header-info";

export default function Navbar() {
    return (
        <div>
            <Message />
            <div className="p-4 sticky top-0 z-50 bg-white w-full opacity-90 flex justify-between items-center">
                <div className="ml-4">
                    <img className="w-32 md:w-48" src={'/assest/logo.png'} alt="Logo" />
                </div>
                <ul className="hidden md:flex mt-3 mr-10 text-lg font-semibold">
                    <li className="mr-8"><Link href=''>Home</Link></li>
                    <li className="mr-8"><Link href=''>About us</Link></li>
                    <li className="mr-8"><Link href=''>Team</Link></li>
                    <li className="mr-8"><Link href=''>Services</Link></li>
                    <li className="mr-8"><Link href=''>Process</Link></li>
                    <li className="mr-8"><Link href=''>Clients</Link></li>
                    <li className="mr-8"><Link href=''>Works</Link></li>
                </ul>
                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button className="text-gray-800 focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
