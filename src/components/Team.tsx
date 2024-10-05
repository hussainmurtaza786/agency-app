const Data = [
    {
      image: "/assest/testimonial6.jpg",
      title: "Sonja Summers",
      heading: "DIGITAL ANALYST",
      description: "Mirum est notare quam littera gothica, quam putamus.",
    },
    {
      image: "/assest/testimonial8.jpg",
      title: "Anita Allen",
      heading: "MARKETING RESEARCH",
      description: "Mirum est notare quam littera gothica, quam putamus.",
    },
    {
      image: "/assest/testimonial4.jpg",
      title: "Jeff Norton",
      heading: "Business Analyst",
      description: "Mirum est notare quam littera gothica, quam putamus.",
    },
  ];
  
  export default function Team() {
    return (
      <div className="bg-gradient-to-r from-teal-400 to-coral-600 flex justify-center items-center flex-col p-14">
        <p className="font-light text-gray-200 text-lg">THE SHOWRUNNERS</p>
        <h1 className="font-semibold text-5xl sm:text-6xl m-4">Perfect Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {Data.map((data, index) => (
            <div
              key={index}
              className="flex justify-center mt-10 pr-7 pb-7 pl-7 items-center rounded-xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out transform hover:-translate-y-1"
            >
              <div className="flex flex-col group justify-center items-center w-full text-center">
                <div className="relative flex justify-center items-center">
                  {/* Color effect */}
                  <div className="bg-purple-800 absolute w-64 top-0 h-28 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                  {/* Border effect */}
                  <div className="z-40 flex justify-center items-center absolute left-4 top-4 inset-0 w-28 h-28 rounded-full border-4 border-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
  
                  <img
                    className="rounded-full m-6 w-24 h-24 object-cover transition-transform duration-500 ease-in-out z-10"
                    src={data.image}
                    alt={data.title}
                  />
                </div>
  
                <h1 className="font-extrabold text-2xl text-teal-600">{data.title}</h1>
                <p className="text-lg font-normal text-gray-600 mb-3">
                  {data.heading}
                </p>
                <div className="w-10 h-1 bg-teal-500 group-hover:w-14 mb-3 rounded-sm transition-all duration-300 ease-in-out"></div>
                <p className="text-lg font-light text-gray-500 mb-3" style={{ minHeight: '40px' }}>
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  