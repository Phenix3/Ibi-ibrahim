import { Fragment } from "react";
const Intro = () => {
  return (
    <Fragment>
      <div className="top_author_image w-full h-auto clear-both float-left relative mb-[35px]">
        <img className="min-w-full" src="assets/img/1662823290696_31963268.jpg" alt="image" />
      </div>
      <div className="about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
        <h3 className="text-[22px] font-bold">Ibi Ibrahim</h3>
        <span>Développeur Web</span>
      </div>
      <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
        <p className="mb-[11px]">
          Salut, je m'appelle Ibi Ibrahim et j'ai commencé à utiliser les outils de developpement web tres tot dans ma vie.
           J'ai passé la plupart de mes heures éveillées au cours de ces dernières années à concevoir, 
           programmer et exploiter des applications web.
        </p>
        <p>
          L'une de mes spécialités est de prendre une idée depuis le début et de créer une plateforme complète. 
          Je vais au-delà pour produire des sites au look-and-feel unique, exceptionnel et contemporain.
           Avec une connaissance approfondie de la mécanique web, je suis capable d'optimiser des intégrations complexes nécessitant 
           peu ou pas de maintenance tout en fonctionnant de manière autonome pendant des années.
        </p>
      </div>
      <div className="tokyo_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]">
        <div className="left w-1/2 pr-[50px]">
          <div className="tokyo_tm_info w-full h-auto clear-both float-left">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Address:
                </span>
                <span>Ave 11, New York, USA</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Email:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="mailto:phenixibm@gmail.com"
                  >
                    phenixibm@gmail.com
                  </a>
                </span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Phone:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="tel:+237 698 897 114"
                  >
                    +237 698 897 114
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right w-1/2 pl-[50px]">
          <div className="tokyo_tm_info">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Natinalite:
                </span>
                <span>Camerounais</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Etude:
                </span>
                <span>Universite de Maroua</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Diplôme:
                </span>
                <span>Licence Informatique</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Intérêt:
                </span>
                <span>Jouer au football</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Freelance:
                </span>
                <span>Disponible</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tokyo_tm_button" data-position="left">
        <a href="assets/img/cv/1.jpg" download>
          <span>Download CV</span>
        </a>
      </div>
    </Fragment>
  );
};
export default Intro;
