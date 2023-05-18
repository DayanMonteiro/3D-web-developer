import React from "react";
// import Tilt from "react-tilt";
import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, hardSkills, scrum } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <ParallaxTilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </ParallaxTilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Visão Geral.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-full leading-[30px] text-justify"
      >
        <>
          <div>
            <p className={styles.sectionSubText}>Responsabilidades</p>
            <div>
              Desenvolver e manter aplicações web usando React.js e mobile com
              React Native e outras tecnologias relacionadas. Colaborar com
              equipes multifuncionais, incluindo designers, gerentes de produto
              e outros desenvolvedores para criar produtos de alta qualidade.
              Implementando design responsivo e garantindo compatibilidade entre
              navegadores. Participar de revisões de código e fornecer feedback
              construtivo a outros desenvolvedores.
            </div>
          </div>
          <br />
          <p className={styles.sectionSubText}>
            Formações e habilidades técnicas
          </p>
          <br />
          <p className="text-[16px]">
            Suporte Técnico em Análise e Desenvolvimento de Sistemas - UNIP
            (Agosto 2020 - Agosto 2022).
          </p>
          <br />
          Metodologias ágeis:
          <ul className="mt-5 list-disc ml-5 space-y-2">
            {scrum.map((scrumMaster) => (
              <li
                key={scrumMaster.id}
                className="text-secondary text-[16px] pl-1 tracking-wider"
              >
                {scrumMaster.course}
              </li>
            ))}
          </ul>
          {/* <br />
          Hard skills:
          <ul className="mt-5 list-disc ml-5 space-y-2">
            {hardSkills.map((hard) => (
              <li
                key={hard.id}
                className="text-white-100 text-[14px] pl-1 tracking-wider"
              >
                {hard.description}
              </li>
            ))}
          </ul> */}
        </>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
