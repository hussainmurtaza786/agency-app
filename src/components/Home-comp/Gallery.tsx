import React from "react";

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

export default function Gallery() {
  return (
    <div className="flex flex-col items-center m-5">
      {/* Gallery */}
      <div className="text-center mb-10">
        <p className="text-lg font-semibold text-gray-600">THE BEST PICK OF</p>
        <h1 className="text-4xl font-bold mb-5">OUR GALLERY</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImg.map((data, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={data}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Blogs */}
      <div className="text-center mb-10">
        <p className="text-lg font-semibold text-gray-600">
          OUR NEWS & STORIES
        </p>
        <h1 className="text-3xl font-bold">From The Blog</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-lg shadow-md transition-shadow hover:shadow-lg">
          <img
            src={"assest/blog1.jpg"}
            alt=""
            className="w-full h-32 object-cover rounded-t-lg"
          />
          <p className="font-semibold text-lg mt-2">
            Tête-à-tête over a coffee with clients
          </p>
          <p className="text-gray-700 mt-2">
            Engaging in a personal conversation over coffee with clients fosters
            a warm and collaborative atmosphere, allowing for open discussions
            and deeper connections.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md transition-shadow hover:shadow-lg">
          <img
            src={"assest/blog2.jpg"}
            alt=""
            className="w-full h-32 object-cover rounded-t-lg"
          />
          <p className="font-semibold text-lg mt-2">
            Brainstorming is our routine methodology
          </p>
          <p className="text-gray-700 mt-2">
            Brainstorming is our routine methodology, serving as a foundational
            approach to innovation and problem-solving. By encouraging diverse
            ideas and open dialogue among team members.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md transition-shadow hover:shadow-lg">
          <img
            src={"assest/blog3.jpg"}
            alt=""
            className="w-full h-32 object-cover rounded-t-lg"
          />
          <p className="font-semibold text-lg mt-2">
            Planning on the strategy from figures
          </p>
          <p className="text-gray-700 mt-2">
            Planning our strategy from figures involves analyzing data and
            metrics to inform decision-making. By leveraging insights derived
            from quantitative analysis.
          </p>
        </div>
      </div>
    </div>
  );
}
