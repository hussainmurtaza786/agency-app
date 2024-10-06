import BestServices from "@/components/Home-comp/BestServices";
import Gallery from "@/components/Home-comp/Gallery";
import RelationShip from "@/components/Home-comp/RelationShip";
import Services from "@/components/Home-comp/Services";
import Support from "@/components/Home-comp/Support";
import Team from "@/components/Home-comp/Team";
import { ReactNode } from "react";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col">
        {/* Background image section */}
        <div className="relative">
          <img
            className="w-full h-auto object-cover" // Make the image responsive
            src="/assest/home-bg-image.jpeg"
            alt="Background image showcasing our services"
          />
          <div className="bg-black opacity-55 text-xl absolute bottom-10 p-4 text-white text-center w-full">
            <p>First Slide</p>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>

        {/* Services highlight section */}
        <div className="bg-customBlue w-full p-6 md:p-10 flex flex-col md:flex-row font-extralight">
          <div className="flex-1 m-6 md:m-10">
            <h1 className="font-extrabold text-lg md:text-2xl mb-5">
              The Best Agency for your Business
            </h1>
            <p className="mb-5">
              Our strategy is dependent on your world and your goals. Moving
              towards your goal empowers us too!
            </p>
            <Button> Consult Now</Button>
          </div>

          {/* Highlighted Services */}
          <ServiceHighlight
            title="Engrossing content"
            description="The content delivery needs to be original & engrossing to hold the attention of the visitors."
          />
          <ServiceHighlight
            title="Engaging copy nails!"
            description="When the visitor is impressed with the content, the retention is likely to be longer in the site."
          />
          <ServiceHighlight
            title="Retaining the visitor"
            description="When the copy nails it, the call to action appears like a shadow intending to trigger a move."
          />
        </div>

        {/* Other sections */}
        <div>
          <Services />
        </div>
        <div>
          <BestServices />
        </div>
        <div>
          <RelationShip />
        </div>
        <div>
          <Team />
        </div>
        <div>
          <Gallery />
        </div>
        <div>
          <Support />
        </div>
      </div>
    </>
  );
}

type Highlight = {
  title: string;
  description: string;
};

function ServiceHighlight({ title, description }: Highlight) {
  return (
    <div className="flex justify-center items-center flex-col flex-1 m-6 md:m-10">
      {/* Add SVG Icon here if necessary */}
      <h1 className="font-bold text-lg md:text-xl">{title}</h1>
      <p className="mt-5 text-center">{description}</p>
    </div>
  );
}
type chil ={
  children:ReactNode
  className?: string;
}
export function Button({ children,className }:chil) {
  return (
    <div className={className}>
    <div className="relative w-40 md:w-44 h-12 md:h-14 group">
      <button className="bg-customPurple text-white p-2 w-full h-full m-1 relative z-10 rounded-full">
        {children}
      </button>
      <span className="absolute left-0 top-0 w-0 h-0.5 bg-customPurple rounded-full group-hover:w-full group-hover:h-full transition-all duration-700 ease-out"></span>
      <span className="absolute right-0 bottom-0 w-0 h-0.5 bg-customPurple rounded-full group-hover:w-full group-hover:h-full transition-all duration-700 ease-out"></span>
    </div>
    </div>
  );
}
