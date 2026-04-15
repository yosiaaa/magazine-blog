import hero from "../../assets/hero-banner.png";
import article from "../../lib/article.json";
import magazine_cover from "../../assets/magazine-cover.png";
import popularData from "../../lib/mostpopular.json";
import CardArticle from "../../components/CardArticle";
import dies from "../../assets/hope-dies-last.png";
import musuems from "../../assets/the-best-art-museums.png";
import devils from "../../assets/the-devils-is-the-details.png";
import hope from "../../assets/An-indestructible-hope.png";
import festival from "../../assets/street-art-festival.png";
import eyes from "../../assets/through-the-eyes-of-street-artist.png";
import Divider from "../../components/Divider";
import MostPopular from "../../components/MostPopular";
import ButtonWithArrow from "../../components/ButtonWithArrow";
import { useNavigate } from "react-router-dom";

const imageMap = {
  "article-1": dies,
  "article-2": musuems,
  "article-3": devils,
  "article-4": hope,
  "article-5": festival,
  "article-6": eyes,
};

export default function LeadArticle() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col px-6 lg:px-20 w-full pb-12 gap-12 items-center justify-center">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-12 lg:items-center">
          <p className="uppercase font-inter text-xl text-center lg:text-start text-wrap lg:text-9xl text-slate-900 font-bold">
            Don&apos;t close your eyes
          </p>
          <div className="flex flex-col gap-6 lg:gap-">
            <span className="text-sm lg:text-base text-justify lg:text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui
              vivamus arcu felis bibendum ut. Porttitor leo a diam.
            </span>
            <div className="flex flex-col lg:flex-row gap-5 justify-between order-3 lg:order-second">
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
                <div className="flex gap-2">
                  <span className="font-bold text-black font-inter">
                    Writer
                  </span>
                  <span className="text-slate-600 font-inter">
                    Jakob Gronberg
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-black font-inter">Date</span>
                  <span className="text-slate-600 font-inter">
                    16 March 2026
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-black font-inter">
                    Duration
                  </span>
                  <span className="text-slate-600 font-inter">1 Hour</span>
                </div>
              </div>
              <button className="rounded-xl border text-slate-600 border-slate-600 items-center px-2 font-inter">
                Label
              </button>
            </div>
            <img
              className="aspect-2/1 order-1 lg:order-last object-cover"
              src={hero}
              alt="Hero banner"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-7 px-6 lg:px-20 lg:gap-24 w-full">
        <div className="flex flex-col md:flex-row md:justify-between gap-24">
          <div className="flex flex-col lg:flex gap-12 lg:justify-between items-center">
            {/* left section */}
            {article.map((item, i) => {
              return (
                <div
                  key={item.id}
                  onClick={() => navigate(`/magazine/${item.id}`)}
                  className="cursor-pointer flex flex-col"
                >
                  <CardArticle
                    date={item.date}
                    title={item.title}
                    desc={item.desc}
                    visit={item.visit}
                    image={imageMap[item.image]}
                    writer={item.writer}
                    category={item.category}
                  />
                  {i !== 5 && (
                    <div className="border-b lg:flex hidden max-w-full pt-5 lg:pt-12 border-slate-900"></div>
                  )}
                </div>
              );
            })}
          </div>
          {/* end left section */}
          {/* right section */}
          <div className="hidden lg:flex lg:flex-col gap-16">
            <div className="flex flex-col gap-5">
              <span className="text-base uppercase font-medium text-slate-900">
                Printmagazine
              </span>
              <img
                src={magazine_cover}
                alt="Magazine Cover"
                className="object-contain max-w-92.25 max-h-[461.25px]"
              />
              <button
                type="button"
                className="bg-slate-900 hover:cursor-pointer text-white text-base font-medium py-2 items-center max-w-1/3"
              >
                BUTTON
              </button>
            </div>
            {/* Most Popular */}
            <div className="flex flex-col gap-8">
              <span className="text-base uppercase font-medium text-slate-900">
                Most Popular
              </span>
              {popularData.map((item, i) => (
                <>
                  <MostPopular
                    key={item.id}
                    queu={item.queu}
                    writer={item.writer}
                    title={item.title}
                  />
                  {i !== 3 && <Divider />}
                </>
              ))}
            </div>

            {/* End Most Popular */}
            {/* Start Newsletter */}
            <div className="flex flex-col p-7.5 gap-4 bg-[#F8F8F8]">
              <div className="flex flex-col gap-2">
                <span className="uppercase text-slate-900 font-bold text-xl tracking-wider">
                  Newsletter
                </span>
                <span className="uppercase text-slate-900 font-bold text-3xl tracking-wider">
                  Design News to your Inbox
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Email"
                  className="focus:outline-none bg-white px-3.75 py-[11.5px] text-slate-500 items-center"
                />
                <div className="flex justify-end-safe">
                  <button
                    type="button"
                    className="bg-slate-900 uppercase hover:cursor-pointer text-white text-sm py-2 items-center w-1/3"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

            {/* End Newsletter */}
          </div>
          {/* end right section */}
        </div>
        <div className="flex justify-start gap-2 items-center">
          <ButtonWithArrow title="All Articles" href="/magazine" />
        </div>
      </div>
    </>
  );
}
