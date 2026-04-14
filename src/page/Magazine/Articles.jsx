import { useState, useMemo } from "react";
import CardMagazine from "../../components/CardMagazine";
import articleData from "../../lib/article.json";
import dies from "../../assets/hope-dies-last.png";
import musuems from "../../assets/the-best-art-museums.png";
import devils from "../../assets/the-devils-is-the-details.png";
import hope from "../../assets/An-indestructible-hope.png";
import festival from "../../assets/street-art-festival.png";
import eyes from "../../assets/through-the-eyes-of-street-artist.png";
import ButtonWithArrow from "../../components/ButtonWithArrow";
import ButtonCustom from "../../components/ButtonCustom";

const imageMap = {
  "article-1": dies,
  "article-2": musuems,
  "article-3": devils,
  "article-4": hope,
  "article-5": festival,
  "article-6": eyes,
};

export default function Articles() {
  const [filter, setFilter] = useState("All");
  const filteredItems = useMemo(() => {
    return filter === "All"
      ? articleData
      : articleData.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <>
      <div className="flex px-6 lg:px-20 justify-center lg:justify-between items-center pb-7 lg:pb-16.75">
        <span className="text-base hidden lg:flex font-semibold uppercase leading-none">
          Categories
        </span>
        <div className="flex gap-3 items-center">
          <ButtonCustom
            label="All"
            onClick={() => setFilter("All")}
            type="button"
            isActive={filter === "All"}
          />
          <ButtonCustom
            label="Art"
            onClick={() => setFilter("Art")}
            type="button"
            isActive={filter === "Art"}
          />
          <ButtonCustom
            label="Street Art"
            onClick={() => setFilter("Street Art")}
            type="button"
            isActive={filter === "Street Art"}
          />
          <ButtonCustom
            label="Sculptures"
            onClick={() => setFilter("Sculptures")}
            type="button"
            isActive={filter === "Sculptures"}
          />
        </div>
      </div>
      <div className="flex flex-col px-6 pb-7 gap-7 lg:px-20 lg:pb-48 lg:gap-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => {
            return (
              <CardMagazine
                key={item.id}
                id={item.id}
                date={item.date}
                desc={item.desc}
                titleMagazine={item.title}
                category={item.category}
                writer={item.writer}
                duration={item.duration}
                image={imageMap[item.image]}
              />
            );
          })}
        </div>
        <div className="flex justify-end">
          <ButtonWithArrow title="Next" />
        </div>
      </div>
    </>
  );
}
