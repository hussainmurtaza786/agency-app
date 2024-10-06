export default function Services() {
    return (
      <div className="mt-20 flex flex-col bg-gradient-to-r from-blue-400 to-purple-500 p-8 rounded-lg shadow-lg">
        <div className="flex justify-center items-center flex-col">
          <p className="font-light text-center text-white">
            WE ARE THE BEST AGENCY FOR YOU
          </p>
          <div className="w-60 h-1 m-4 bg-white"></div>
          <h1 className="font-semibold text-5xl w-2/3 text-center m-3 text-white">
            Take your business soaring high... Reach for us
          </h1>
          <p className="text-center w-2/3 m-4 text-white">
            When you objectively analyze your business, you are likely to get a
            new perspective. These new perspectives propel your business up by
            infusing fresh strategy. We can support whenever new strategy is
            needed.
          </p>
          <div className="flex justify-center items-center group flex-col">
            <div className="bg-white w-16 h-16 p-2 transition duration-300 ease-in-out group-hover:bg-purple-700 rounded-full">
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                fill="white"
                className="opacity-0 group-hover:opacity-100 transition duration-300 ease-in"
                strokeWidth="0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"></path>
              </svg>
            </div>
            <div className="bg-white w-1 h-32 transition duration-300 ease-in-out group-hover:bg-purple-700"></div>
            <button className="transition duration-300 ease-in-out border-4 w-52 group-hover:border-purple-700 p-3 group-hover:bg-purple-700 text-white font-bold text-3xl">
              Hire us
            </button>
          </div>
          <div className="m-5 text-2xl text-gray-200">
            <p>ALL THESE SERVICES FOR YOU</p>
          </div>
        </div>
      </div>
    );
  }
  