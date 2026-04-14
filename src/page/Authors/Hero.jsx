import podcastData from "../../lib/podcastData.json";
import jane_cooper from "../../assets/jane-cooper.png";
import jakob_gronberg from "../../assets/jakob-gronberg.png";
import anne_nielsen from "../../assets/anne-nielsen.png";
import louise_jensen from "../../assets/louise-jensen.png";
import anne_henry from "../../assets/anne-henry.png";
import cristofer_vaccaro from "../../assets/cristofer-vaccaro.png";
import AuthorsList from "../../components/AuthorsList";

const authorMap = {
  "jakob-gronberg": jakob_gronberg,
  "louise-jensen": louise_jensen,
  "anne-henry": anne_henry,
  "anne-nielsen": anne_nielsen,
  "jane-cooper": jane_cooper,
  "cristofer-vaccaro": cristofer_vaccaro,
};

export default function Hero() {
  return (
    <div className="flex flex-col w-full gap-12 lg:gap-0 px-6 pt-10 lg:pt-0 lg:px-20 items-center">
      <h1 className="uppercase font-inter font-bold text-5xl lg:text-[250px]">
        Authors
      </h1>
      {podcastData.map((item, i) => {
        return (
          <div key={item.id} className="flex flex-col gap-5 lg:gap-0 w-full">
            <AuthorsList
              key={item.id}
              id={item.id}
              city={item.city}
              job={item.job}
              avatar={authorMap[item.avatar]}
              writer={item.writer}
            />
            {i !== 5 && (
              <div className="border-b w-full border-slate-900"></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
