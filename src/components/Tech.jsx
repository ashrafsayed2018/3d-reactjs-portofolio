import { BallCanvas } from "./canvas";
import { SectionWraper } from "../hoc";
import { technologies } from "../constants";
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => {
        return (
          <div className="h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        );
      })}
    </div>
  );
};

export default SectionWraper(Tech, "");
