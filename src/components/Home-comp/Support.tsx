export default function Support() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="bg-customBlue grid grid-cols-3 m-10 p-6 rounded-lg shadow-lg">
        <div className="flex  m-6 p-4 rounded-lg transition duration-300">
          <img className="w-16 mt-10 h-16" src={"assest/icon-question.webp"} alt="" />
          <div className="flex flex-col ml-4">
            <p className="font-light text-sm">Get your</p>
            <h1 className="font-bold text-2xl">Clarifications</h1>
            <p className="font-light text-sm">Using our 24/7 knowledgebase, forum & comments get clarified.</p>
          </div>
        </div>

        <div className="flex  m-6 p-4 rounded-lg transition duration-300">
          <img className="w-16 mt-10 h-16" src={"assest/icon-support.webp"} alt="" />
          <div className="flex flex-col ml-4">
            <p className="font-light text-sm">Legendary</p>
            <h1 className="font-bold text-2xl">Support</h1>
            <p className="font-light text-sm">
              Get your doubts cleared using our email support, phone, or knowledgebase.
            </p>
          </div>
        </div>

        <div className="flex  m-6 p-4 rounded-lg transition duration-300">
          <img className="w-16 mt-10 h-16" src={"assest/icon-package.webp"} alt="" />
          <div className="flex flex-col ml-4">
            <p className="font-light text-sm">Maintenance</p>
            <h1 className="font-bold text-2xl">Package</h1>
            <p className="font-light text-sm">We offer annual maintenance packages for different needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
