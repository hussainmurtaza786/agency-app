import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col bg-black w-full p-14 text-white">
      <div className="flex justify-between w-full">
        <div className="w-96 font-light text-gray-400">
          <img className="w-44" src={"assest/light-logo.png"} alt="Logo" />
          <p className="mt-2">
            Agency is a WordPress theme that is truly multi-purpose, catering to
            your needs.
            <br /> The barrage of shortcodes that work in the pages makes it the
            best choice for your business.
          </p>
          <h1 className="mt-6 text-lg font-semibold">STAY CONNECTED</h1>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Useful Links</h3>
          <div className="mt-4 grid grid-cols-2 text-sm  font-extralight text-gray-400 ">
            <ul className=" flex flex-col space-y-2">
              <li className="mr-8">
                <Link href="">Home</Link>
              </li>
              <li className="mr-8">
                <Link href="">Company News</Link>
              </li>
              <li className="mr-8">
                <Link href="">About us</Link>
              </li>
              <li className="mr-8">
                <Link href="">Projects</Link>
              </li>
              <li className="mr-8">
                <Link href="">Careers</Link>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="mr-8">
                <Link href="">CVontact us</Link>
              </li>
              <li className="mr-8">
                <Link href="">Legal Support</Link>
              </li>
              <li className="mr-8">
                <Link href="">Give us feedback </Link>
              </li>
              <li className="mr-8">
                <Link href="">Talk to us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-sm font-light flex flex-col ">
          <h1 className="text-lg font-semibold">Contact us</h1>
          <div className="flex">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                clip-rule="evenodd"
              />
            </svg>
            <p>71 Pilgrim Avenue, Chevy Chase, MD 20815</p>
          </div>
          <div className="flex">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
              />
            </svg>

            <p>(000) 000-0000 (000) 000-0000</p>
          </div>
          <div className="flex">
            <p>info@agency.com</p>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t w-full border-gray-600 pt-6 text-center text-gray-400">
        Copyright © 2017, DesignThemes Privacy Policy | Terms & Conditions
      </div>
    </div>
  );
}
