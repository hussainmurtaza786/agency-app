

const Data = [
    {
        image: "/assest/testimonial6.jpg",
        title: "Sonja Summers",
        heading: "DIGITAL ANALYST",
        description: "Mirum est notare quam littera gothica, quam putamus."
    },
    {
        image: "/assest/testimonial8.jpg",
        title: "Anita Allen",
        heading: "MARKETING RESEARCH",
        description: "Mirum est notare quam littera gothica, quam putamus."
    },
    {
        image: "/assest/testimonial4.jpg",
        title: "Jeff Norton",
        heading: "Business Analyst",
        description: "Mirum est notare quam littera gothica, quam putamus."
    },
]

export default function Team() {
    return (
        <div className="bg-cusomBlue flex justify-center items-center flex-col p-14">
            <p className="font-light text-gray-400 text-lg">THE SHOWRUNNERS </p>
            <h1 className="font-semibold text-6xl m-4">Perfect Team</h1>
            <div>
                <div className="grid grid-cols-3 text-center m-10 gap-8"> {/* Add the gap class here */}

                    {Data.map((data) => (
                        <div>
                            <div className="flex justify-center m-4 p-14 rounded-xl bg-white items-center w-full flex-col">
                                <img className="rounded-full mb-10" width={150} src={data.image} alt="" />
                                <h1 className="font-extrabold text-2xl">{data.title}</h1>
                                <p className="text-lg font-normal text-gray-500 mb-5">{data.heading}</p>
                                <div className="w-10 h-1 bg-customPurple mb-5 rounded-sm"></div>
                                <p className="text-lg font-light text-gray-500">{data.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
