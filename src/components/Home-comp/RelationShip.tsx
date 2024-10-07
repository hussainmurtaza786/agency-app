import { Button } from "@/app/home/page";

export default function RelationShip() {
  return (
    <div className="flex flex-col md:flex-row justify-around bg-gradient-to-r from-indigo-500 to-purple-600 p-8 md:p-16 lg:p-32 rounded-lg shadow-lg">
      <div className="w-full md:w-1/2">
        <p className="font-light text-gray-300 mb-2">BUILDING RELATIONSHIPS</p>
        <h1 className="mb-5 font-bold text-3xl md:text-5xl text-white">
          How You Can Save Time & Money in Your Business
        </h1>
        <p className="text-base text-gray-200 mb-4">
          You don't have to reinvent the wheels, right? When you entrust the task of launching a strategy for your latest marketing campaign, you get many time-tested modules that have delivered consistently across different industries.
        </p>
        <Button>Consult Now</Button>
      </div>

      <div className="relative md:w-[25rem] w-full h-96 border-8 border-customPurple ">
        <img
          className="absolute w-[50rem] shadow-lg h-[20rem] right-7 top-6 transition-transform duration-300 ease-in-out  transform md:-translate-x-1"
          src={"/assest/about-agency.jpg"}
          alt="Agency"
        />
      </div>
    </div>
  );
}
