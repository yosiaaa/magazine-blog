import ButtonWithArrow from "../../components/ButtonWithArrow";
import Divider from "../../components/Divider";
import authorData from "../../lib/author.json";
import CardAuthor from "../../components/CardAuthor";
import jane_cooper from "../../assets/jane-cooper.png";
import jakob_gronberg from "../../assets/jakob-gronberg.png";
import anne_nielsen from "../../assets/anne-nielsen.png";
import louise_jensen from "../../assets/louise-jensen.png";
import anne_henry from "../../assets/anne-henry.png";
import cristofer_vaccaro from "../../assets/cristofer-vaccaro.png";

const authorMap = {
  "jakob-gronberg": jakob_gronberg,
  "louise-jensen": louise_jensen,
  "anne-henry": anne_henry,
  "anne-nielsen": anne_nielsen,
  "jane-cooper": jane_cooper,
  "cristofer-vaccaro": cristofer_vaccaro,
};

export default function Author() {
  return (
    <div className="flex flex-col px-6 lg:px-20 pt-12 lg:pt-24 gap-6 lg:gap-24 pb-12 lg:pb-48">
      <div className="flex flex-col gap-12">
        <Divider />
        <div className="flex justify-between items-center">
          <h2 className="text-slate-900 font-bold text-3xl lg:text-8xl uppercase">
            Authors
          </h2>
          <ButtonWithArrow title="All Authors" href="/authors" />
        </div>
      </div>
      <div className="grid lg:grid-cols-2">
        {authorData.map((item) => {
          return (
            <CardAuthor
              key={item.id}
              id={item.id}
              author={item.title}
              city={item.city}
              job={item.job}
              image={authorMap[item.image]}
            />
          );
        })}
      </div>
    </div>
  );
}
