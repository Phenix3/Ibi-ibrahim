import Isotope from "isotope-layout";
import { useContext, useEffect, useRef, useState } from "react";
import { TokyoContext } from "../Context";
import { tokyo } from "../utils";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
const detailData = [
  {
    id: 1,
    thumbnail: "assets/img/portfolio/sonajob/sonajobnapshot_1.png",
    title: "SonaJob",
    text: [
      "We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance between true-life representation of the end product and ease of modification.",
      "Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Making mockups a part of your creative and development process allows you to quickly and easily ideate.",
    ],
    // client: "Alvaro Morata",
    // date: "October 22, 2022",
    category: "Detail",
    share: [
      {
        id: 1,
        iconName: "icon-github-squared",
        link: "https://github.com/Phenix3/job-sympa",
      },
    ],
    bigImage: "assets/img/portfolio/sonajob/sonajobnapshot_2.png",
    images: ["assets/img/portfolio/sonajob/sonajobnapshot_4.png", "assets/img/portfolio/sonajob/sonajobnapshot_5.png"],
  },
  {
    id: 2,
    thumbnail: "assets/img/portfolio/symmobilier/symmobilier_1.png",
    title: "Ave Simone",
    text: [
      "We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance between true-life representation of the end product and ease of modification.",
      "Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Making mockups a part of your creative and development process allows you to quickly and easily ideate.",
    ],
    // client: "Alvaro Morata",
    // date: "October 22, 2022",
    category: "Detail",
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-twitter-squared",
        link: "https://twitter.com/",
      },
      {
        id: 3,
        iconName: "icon-behance-squared",
        link: "https://www.behance.net/",
      },
      {
        id: 4,
        iconName: "icon-linkedin-squared",
        link: "https://www.linkedin.com/",
      },
    ],
    bigImage: "assets/img/portfolio/symmobilier/symmobilier_1.png",
    images: ["assets/img/portfolio/symmobilier/symmobilier_2.png", "assets/img/portfolio/symmobilier/symmobilier_3.png"],
  },
  {
    id: 3,
    thumbnail: "assets/img/portfolio/symshop/symshop_2.png",
    title: "SymShop",
    text: [
      "We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance between true-life representation of the end product and ease of modification.",
      "Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Making mockups a part of your creative and development process allows you to quickly and easily ideate.",
    ],
    // client: "Alvaro Morata",
    // date: "October 22, 2022",
    category: "Detail",
    share: [
      {
        id: 1,
        iconName: "icon-github-squared",
        link: "https://github.com/Phenix3/symshop",
      },
    ],
    bigImage: "assets/img/portfolio/symshop/symshop_2.png",
    images: ["assets/img/portfolio/symshop/symshop_4.png", "assets/img/portfolio/symshop/symshop_5.png"],
  },
  {
    id: 4,
    thumbnail: "assets/img/portfolio/uma/uma_1.png",
    title: "UMA",
    text: [
      "We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance between true-life representation of the end product and ease of modification.",
      "Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Making mockups a part of your creative and development process allows you to quickly and easily ideate.",
    ],
    // client: "Alvaro Morata",
    // date: "October 22, 2022",
    category: "Detail",
    share: [
      {
        id: 1,
        iconName: "icon-github-squared",
        link: "https://github.com/Phenix3/uma",
      },
    ],
    bigImage: "assets/img/portfolio/uma/uma_1.png",
    images: ["assets/img/portfolio/uma/uma_2.png", "assets/img/portfolio/uma/uma_5.png"],
  },
  {
    id: 5,
    thumbnail: "assets/img/portfolio/lyclama/screenshot.png",
    title: "Lyclama",
    text: [
      "We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance between true-life representation of the end product and ease of modification.",
      "Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Making mockups a part of your creative and development process allows you to quickly and easily ideate.",
    ],
    // client: "Alvaro Morata",
    // date: "October 22, 2022",
    category: "Detail",
    share: [
      {
        id: 1,
        iconName: "icon-github-squared",
        link: "https://github.com/Phenix3/lyclama",
      },
    ],
    bigImage: "assets/img/portfolio/lyclama/screenshot.png",
    images: [],
  },
];
const Portfolio = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const data = document.querySelector(".item__");
    if (data.length !== 0) {
      setTimeout(() => {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
          masonry: true
        });
      }, 3000);
    }
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  useEffect(() => {
    tokyo.portfolioHover();
    tokyo.dataImage();
  });
  const { setPortfolioDetailsModal, modalToggle } = useContext(TokyoContext);
  return (
    <SectionContainer name={"portfolio"}>
      <div className="container">
        <div className="tokyo_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[100px] pb-[40px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle
                pageName={"Portfolio"}
                title={"Portfolio de création"}
              />
              <div className="portfolio_filter">
                {/*<ul className="list-none">
                  <li className="mr-[25px] inline-block">
                    <a
                      href="#"
                      className="current text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      onClick={handleFilterKeyChange("*")}
                    >
                      All
                    </a>
                  </li>
                  
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("image")}
                    >
                      Image
                    </a>
                  </li>
                  <li className="inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("detail")}
                    >
                      Detail
                    </a>
                  </li>
                </ul>*/}
              </div>
            </div>
          </div>
          <div className="list_wrapper w-full h-auto clear-both float-left">
            <ul className="portfolio_list gallery_zoom ml-[-40px] list-none">
              
              <li className="detail mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="SonaJob"
                    data-category="Detail"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[0]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/portfolio/sonajob/sonajobnapshot_1.png"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/sonajob/sonajobnapshot_1.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="detail mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Symmobilier"
                    data-category="Detail"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[1]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/portfolio/symmobilier/symmobilier_1.png"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/symmobilier/symmobilier_1.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="detail mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="SymShop"
                    data-category="Detail"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[2]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/portfolio/symshop/symshop_2.png"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/symshop/symshop_2.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="detail mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="UMA"
                    data-category="Detail"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[3]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/portfolio/uma/uma_1.png"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/uma/uma_1.png"
                      />
                    </a>
                  </div>
                </div>
              </li><li className="detail mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Lyclama"
                    data-category="Detail"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[4]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/portfolio/lyclama/screenshot.png"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/lyclama/screenshot.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
