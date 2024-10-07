import Business from "@/components/About-comp/Business";
import Career from "@/components/About-comp/Career";
import WorkPlace from "@/components/About-comp/WorkPlace";


export default function About() {
  return (
    <div className="flex flex-col text-sm font-light bg-gray-50">
      <WorkPlace />
      <Career />
      <Business/>
    </div>
  );
}
