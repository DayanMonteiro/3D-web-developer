import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center mb-6 text-justify">
        <h2 className={styles.sectionHeadText}>Hard Skills</h2>
        <p>
          Para uma experiecia 3D em 360° clique na bolinhas com os ícones das
          tecnologias e arraste para os lados
        </p>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div
            className="w-40 h-40 flex justify-center items-center flex-col"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
            <p className="mt-5">{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
