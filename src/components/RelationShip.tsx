import { ConsultBtn } from "@/app/home/page"
export default function RelationShip() {
    return (
        <div className="flex justify-between p-32 ">
            <div className="w-96">
                <p className="font-ligt text-gray-500">BUILDING RELATIONSHIPS</p>
                <h1 className="mb-5 font-bold text-4xl">How you can save time & money in your Business</h1>
                <p className="text-base text-gray-400">You don’t have to reinvent the wheels, right? When you entrust the task of launching a strategy for your latest marketing campaign, you would get many time tested modules that have delivered consistently across different industries.</p>
                <ConsultBtn />
            </div>

            <div>
                <div className="border-8 h-96 w-96  border-customPurple">
                    <img className="m-10 z-10 border-2 shadow-black border-gray-100 absolute right-32 " width={500} src={"/assest/about-agency.jpg"} alt="" />

                </div>

            </div>
        </div>
    )
}
