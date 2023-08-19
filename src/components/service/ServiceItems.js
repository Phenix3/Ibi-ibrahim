import { TokyoContext } from "@/src/Context";
import { useContext } from "react";

const services = [
  {
    id: 1,
    name: "Conception et développement de site web",
    text: [
      "Je suis passionné par la conception et le développement de sites web personnalisés. Chaque projet est une occasion excitante de fusionner ma créativité avec mes compétences techniques. En collaborant étroitement avec mes clients, je transforme leurs idées en lignes de code, créant des sites web uniques qui captivent leur public cible. Mon approche artistique garantit que chaque élément du site reflète l'identité de l'entreprise, tout en offrant une expérience utilisateur exceptionnelle. Je m'engage à rester à la pointe de l'innovation technologique, en m'assurant que chaque site que je développe répond aux normes de développement et de sécurité les plus récentes.",
    ],
    image: "assets/img/services/web-development-1.jpg",
  },
  {
    id: 2,
    name: "Développement de site de e-commerce",
    text: [
      "Je suis spécialisé dans le développement de sites de commerce électronique qui ouvrent de nouvelles portes à votre entreprise en ligne. Avec une expérience approfondie dans la création de plateformes de vente en ligne, je mets en place des boutiques virtuelles robustes et conviviales. Chaque étape du processus, de la conception des pages produits à l'intégration de systèmes de paiement sécurisés, est réalisée avec soin pour offrir aux clients une expérience d'achat fluide et agréable. Mon objectif est de transformer votre vision commerciale en une réalité virtuelle, en maximisant la visibilité de vos produits et en optimisant les conversions. Ensemble, nous créerons une destination en ligne qui se démarque dans le monde du commerce électronique."
    ],
    image: "assets/img/services/ecommerce-1.png",
  },
  {
    id: 3,
    name: "Refonte complete de site web",
    text: [
      "Votre site web a besoin d'un nouveau départ, mais vous ne savez pas par où commencer ? Ne vous inquiétez pas, c'est là que je brille. En tant qu'expert en refonte de sites web, je comprends les défis auxquels vous pourriez faire face : peut-être que votre site actuel ne reflète plus votre style, ou peut-être que la navigation est devenue un vrai casse-tête pour vos visiteurs.\n C'est là que je mets mon expertise à contribution. En travaillant main dans la main avec vous, je vais écouter vos besoins et vos préférences pour créer un plan sur mesure. Ensuite, avec un mélange de créativité et de compétences techniques, je vais transformer votre site en une expérience en ligne qui correspond parfaitement à vos intérêts et à ceux de vos visiteurs. Vous aurez un site qui vous ressemble, tout en étant convivial et engageant pour tous ceux qui le visitent. Oubliez les soucis, je suis là pour que vous puissiez briller en ligne tout en offrant une expérience fluide à vos visiteurs."
    ],
    image: "assets/img/services/refonte-site-internet.png",
  },
  {
    id: 4,
    name: "Site web Wordpress",
    text: [
      "Si vous voulez créer un site web qui a du punch, vous êtes au bon endroit. Avec WordPress dans ma boîte à outils, je vais transformer vos idées en pixels palpitants. Que vous rêviez d'un blog funky, d'un site professionnel ultra-lisse, ou même d'une boutique en ligne qui fait vibrer, je suis là pour injecter ce facteur \"wow\". Je vais jongler avec les thèmes, les plugins et le code pour que votre site brille comme les feux d'artifice un soir d'été. Attachez vos ceintures, car nous sommes sur le point de créer un site qui fera tourner les têtes et danser les clics. C'est comme offrir une bouffée d'air frais à votre présence en ligne, et je suis super emballé d'en faire partie !"
      
    ],
    image: "assets/img/services/wordpress.webp",
  },
  {
    id: 6,
    name: "Développement d'applis mobiles",
    text: [
      "Tokyo is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Tokyo, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
    image: "assets/img/services/mobile-1.jpg",
  },
];
const ServiceItems = () => {
  const { setServiceModal, modalToggle, modal } = useContext(TokyoContext);
  return (
    <div className="list w-full h-auto clear-both float-left">
      <ul className="ml-[-40px] list-none flex flex-wrap">
        {services.map((service) => (
          <li className="mb-[40px] w-1/3 pl-[40px]" key={service.id}>
            <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
              <span className="number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300">
                {service.id <= 9 ? `0${service.id}` : service.id}
              </span>
              <h3 className="title font-bold text-black text-[18px] mb-[15px]">
                {service.name}
              </h3>
              <p className="text">{service.text[0].slice(0, 70)}...</p>
              <div className="tokyo_tm_read_more">
                <a
                  href="#"
                  onClick={() => {
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                >
                  <span>Lire la suite</span>
                </a>
              </div>
              <a
                className="tokyo_tm_full_link"
                href="#"
                onClick={() => {
                  modalToggle(true);
                  setServiceModal(service);
                }}
              />
              {/* Service Popup Start */}
              <img
                className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                src={service.image}
                alt="image"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceItems;
