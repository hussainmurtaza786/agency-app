import { Button } from "@/app/home/page";

const galleryImg = [
    "assest/gal1.jpg",
    "assest/gal2.jpg",
    "assest/gal3.jpg",
    "assest/gal4.jpg",
    "assest/gal5.webp",
    "assest/gal6.jpg",
    "assest/gal7.jpg",
    "assest/gal8.jpg",
];

export default function Business() {
    return (
        <div className="flex flex-col justify-center items-center px-4 py-10 space-y-6">
            {/* Heading Section */}
            <div className="flex flex-wrap justify-center text-center text-2xl md:text-4xl font-medium space-x-2">
                <p>We drive</p>
                <h1 className="font-bold">Business</h1>
                <p>Performance</p>
            </div>

            {/* Gallery Section */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 px-2 md:px-10">
                {galleryImg.map((data, index) => (
                    <div key={index} className="overflow-hidden">
                        <img
                            src={data}
                            alt={`Gallery Image ${index + 1}`}
                            className="w-full h-48 sm:h-56 lg:h-64 object-cover transform hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                ))}

                {/* Circular Background Element */}
                <div className="flex flex-col justify-center items-center absolute inset-0 flex-wrap">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-white flex flex-col justify-center items-center mx-auto">
                        <h1 className="font-extrabold text-lg sm:text-2xl text-center">
                            Passionate Specialists
                        </h1>
                        <Button className="mt-4">Meet Our Team</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
