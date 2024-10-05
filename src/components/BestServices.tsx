const Data = [
    {
        title: "Track",
        heading: "Record",
        description: "Consistent track record of clients both big and SMEs",
        image: "/assest/icon-stats-counter.png",
    },
    {
        title: "Exponential",
        heading: "Growth",
        description: "Our recommendations ensure rapid expansion of business.",
        image: "/assest/icon-analyze.webp",
    },
    {
        title: "Brand",
        heading: "Equity",
        description: "The brands have exceptional premium value of equity.",
        image: "/assest/icon-video-play.webp",
    },
    {
        title: "Trusted",
        heading: "by Leaders",
        description: "The leaders' trust in us empowers our operations.",
        image: "/assest/icon-edit-cogs.webp",
    },
    {
        title: "Diverse",
        heading: "Portfolio",
        description: "Our range of clients encompasses the big & the small.",
        image: "/assest/icon-certified-batch.webp",
    },
    {
        title: "Pioneer",
        heading: "in Consultancy",
        description: "We pioneered the agency concept by launching our own unit.",
        image: "/assest/icon-zoom-eye.webp",
    },
];

export default function BestServices() {
    return (
        <div className="py-16 bg-gradient-to-r from-blue-200 to-purple-200">
            <h1 className="text-7xl mb-14 font-semibold text-center text-gray-800">
                The BEST SERVICES
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-8">
                {Data.map((data, index) => (
                    <div
                        key={index}
                        className="p-6 border-2 border-gray-200 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    >
                        <div className="flex justify-center items-center flex-col">
                            <img
                                className="m-3 h-24 w-24 object-contain"
                                src={data.image}
                                alt={data.title}
                            />
                            <p className="text-xl font-semibold text-gray-700">{data.title}</p>
                            <h1 className="text-xl font-bold m-2 text-gray-800">{data.heading}</h1>
                            <p className="font-light text-gray-600">{data.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
