import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useRef } from "react";

const Hero = () => {
  return (
    <section
      // backgound com os riscos psicodélico
      className={`relative w-full  h-screen mx-auto`}
    >
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* bolinha no top do marcador */}
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          {/* linha da time line */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Olá, eu sou o <span className="text-[#915EFF]">Dayan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Eu sou desenvolvedor front end <br className="sm:block hidden" />
            atuando em aplicações web e mobile
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="w-full flex justify-center items-center px-3 text-justify">
        <p>
          Para uma experiecia 3D em 360° clique na imagem acima e arraste para
          os lados
        </p>
      </div>

      {/* marcador com a bolinha subindo e descendo */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          {/* essa div cria a capa lateral */}
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            {/* a bolinha subindo e descendo */}
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
