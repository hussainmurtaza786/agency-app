import Link from "next/link";
import Message from "./Header-info";

export default function Navbar() {
    return (
        <div>
            <Message />
            <div className="p-4 sticky top-0 z-50 bg-white w-full opacity-90 flex justify-between">
                <div className="ml-4">
                    <img width={200} src={'/assest/logo.png'} alt="Logo" />
                </div>
                <ul className="mt-3 mr-10 text-lg font-semibold flex">
                    <li className="mr-8"><Link href=''>Home</Link></li>
                    <li className="mr-8"><Link href=''>About us</Link></li>
                    <li className="mr-8"><Link href=''>Team</Link></li>
                    <li className="mr-8"><Link href=''>Services</Link></li>
                    <li className="mr-8"><Link href=''>Process</Link></li>
                    <li className="mr-8"><Link href=''>Clients</Link></li>
                    <li className="mr-8"><Link href=''>Works</Link></li>
                </ul>
            </div>
        </div>
    );
}
