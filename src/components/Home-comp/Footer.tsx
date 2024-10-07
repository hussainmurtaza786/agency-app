import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col bg-black w-full p-6 sm:p-10 lg:p-14 text-white">
      <div className="flex flex-col lg:flex-row justify-between w-full space-y-8 lg:space-y-0">
        <div className="w-full lg:w-1/3 font-light text-gray-400">
          <img className="w-32 lg:w-44" src={"assest/light-logo.png"} alt="Logo" />
          <p className="mt-2 text-sm sm:text-base">
            Agency is a WordPress theme that is truly multi-purpose, catering to
            your needs.
            <br /> The barrage of shortcodes that work in the pages makes it the
            best choice for your business.
          </p>
          <h1 className="mt-6 text-base lg:text-lg font-semibold">STAY CONNECTED</h1>
        </div>
        <div className="w-full lg:w-1/3">
          <h3 className="text-base lg:text-lg font-semibold">Useful Links</h3>
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-extralight text-gray-400">
            <ul className="space-y-2">
              <li>
                <Link href="">Home</Link>
              </li>
              <li>
                <Link href="">Company News</Link>
              </li>
              <li>
                <Link href="">About us</Link>
              </li>
              <li>
                <Link href="">Projects</Link>
              </li>
              <li>
                <Link href="">Careers</Link>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <Link href="">Contact us</Link>
              </li>
              <li>
                <Link href="">Legal Support</Link>
              </li>
              <li>
                <Link href="">Give us feedback </Link>
              </li>
              <li>
                <Link href="">Talk to us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/3 text-sm font-light flex flex-col space-y-4">
          <h1 className="text-base lg:text-lg font-semibold">Contact us</h1>
          <div className="flex items-center space-x-2">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                clipRule="evenodd"
              />
            </svg>
            <p>71 Pilgrim Avenue, Chevy Chase, MD 20815</p>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
              />
            </svg>
            <p>(000) 000-0000</p>
          </div>
          <div className="flex items-center space-x-2">
            <p>info@agency.com</p>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t w-full border-gray-600 pt-6 text-center text-sm text-gray-400">
        Copyright © 2017, DesignThemes Privacy Policy | Terms & Conditions
      </div>
    </div>
  );
}
