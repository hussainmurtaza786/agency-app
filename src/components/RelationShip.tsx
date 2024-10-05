import { ConsultBtn } from "@/app/home/page";

export default function RelationShip() {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-gradient-to-r from-indigo-500 to-purple-600 p-8 md:p-16 lg:p-32 rounded-lg shadow-lg">
      <div className="w-full md:w-1/2">
        <p className="font-light text-gray-300 mb-2">BUILDING RELATIONSHIPS</p>
        <h1 className="mb-5 font-bold text-3xl md:text-5xl text-white">
          How You Can Save Time & Money in Your Business
        </h1>
        <p className="text-base text-gray-200 mb-4">
          You don’t have to reinvent the wheels, right? When you entrust the task of launching a strategy for your latest marketing campaign, you get many time-tested modules that have delivered consistently across different industries.
        </p>
        <ConsultBtn />
      </div>

      <div className="relative w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <div className="border-8 border-white w-full max-w-md h-72 aspect-square relative rounded-lg overflow-hidden shadow-lg">
          <img
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out transform "
            src={"/assest/about-agency.jpg"}
            alt="Agency"
          />
        </div>
      </div>
    </div>
  );
}
