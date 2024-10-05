const Data = [
    {
        title: "Track",
        heading: "Record",
        description: "Consistent track record of clients both big and SMEs",
        image: "/assest/icon-stats-counter.png"
    },
    {
        title: "Exponential",
        heading: "Growth",
        description: "Our recommendations ensures rapid expansion of business.",
        image: "/assest/icon-analyze.webp"
    },
    {
        title: "Brand",
        heading: "Equity",
        description: "The brands have exceptional premium value of equity",
        image: "/assest/icon-video-play.webp"
    },
    {
        title: "Trusted",
        heading: "by leaders",
        description: "The leaders' trust in us empowers our operations.",
        image: "/assest/icon-edit-cogs.webp"
    },
    {
        title: "Diverse",
        heading: "Portfolio",
        description: "Our range of clients encompasses the big & the small.",
        image: "/assest/icon-certified-batch.webp"
    },
    {
        title: "Pioneer",
        heading: "in Consultancy",
        description: "We pioneered the agency concept by launching our own unit.",
        image: "/assest/icon-zoom-eye.webp"
    },

]
export default function BestServices() {
    return (
        <div className="">
            <h1 className="text-7xl mb-14 font-semibold text-center ">The BEST SERVICES</h1>

            <div className="grid grid-cols-3 w-full ">

                {Data.map((data) => (
                    <div className="p-20 border-2 border-gray-100 text-center">
                        <div className="flex justify-center hover:bg-blue-100 items-center flex-col">
                            <img className="m-3" width={100} src={data.image} alt="" />
                            <p className="text-2xl font-thin">{data.title} </p>
                            <h1 className="text-2xl m-3">{data.heading}</h1>
                            <p className="font-thin">{data.description} </p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}