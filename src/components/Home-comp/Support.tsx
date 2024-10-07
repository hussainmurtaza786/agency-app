export default function Support() {
  return (
    <div className="flex justify-center items-center flex-col px-4 sm:px-6 lg:px-10">
      <div className="bg-customBlue grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-6 sm:m-10 p-6 rounded-lg shadow-lg w-full max-w-screen-lg">
        <div className="flex m-6 p-4 rounded-lg transition duration-300 bg-white hover:bg-gray-100 shadow-md">
          <img className="w-16 h-16 mt-4 sm:mt-10" src={"assest/icon-question.webp"} alt="Clarifications" />
          <div className="flex flex-col ml-4">
            <p className="font-light text-sm">Get your</p>
            <h1 className="font-bold text-xl sm:text-2xl">Clarifications</h1>
            <p className="font-light text-sm">
              Using our 24/7 knowledgebase, forum & comments get clarified.
            </p>
          </div>
        </div>

        <div className="flex m-6 p-4 rounded-lg transition duration-300 bg-white hover:bg-gray-100 shadow-md">
          <img className="w-16 h-16 mt-4 sm:mt-10" src={"assest/icon-support.webp"} alt="Support" />
          <div className="flex flex-col ml-4">
            <p className="font-light text-sm">Legendary</p>
            <h1 className="font-bold text-xl sm:text-2xl">Support</h1>
            <p className="font-light text-sm">
              Get your doubts cleared using our email support, phone, or knowledgebase.
            </p>
          </div>
        </div>

        <div className="flex m-6 p-4 rounded-lg transition duration-300 bg-white hover:bg-gray-100 shadow-md">
          <img className="w-16 h-16 mt-4 sm:mt-10" src={"assest/icon-package.webp"} alt="Package" />
          <div className="flex flex-col ml-4">
            <p className="font-light text-sm">Maintenance</p>
            <h1 className="font-bold text-xl sm:text-2xl">Package</h1>
            <p className="font-light text-sm">
              We offer annual maintenance packages for different needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
