import socialMedia from "../../lib/sociamedia.json";
import { RiInstagramLine, RiTwitterXLine, RiYoutubeFill } from "react-icons/ri";
import dies from "../../assets/hope-dies-last.png";
import musuems from "../../assets/the-best-art-museums.png";
import devils from "../../assets/the-devils-is-the-details.png";
import hope from "../../assets/An-indestructible-hope.png";
import festival from "../../assets/street-art-festival.png";
import eyes from "../../assets/through-the-eyes-of-street-artist.png";
import CardAuthor from "../../components/CardAuthor";

const socmedMap = {
  instagram: RiInstagramLine,
  x: RiTwitterXLine,
  youtube: RiYoutubeFill,
};

const coverMap = {
  "article-1": dies,
  "article-2": musuems,
  "article-3": devils,
  "article-4": hope,
  "article-5": festival,
  "article-6": eyes,
};

export default function AuthorsPostDetails({
  avatar,
  icon,
  data,
  writer,
  desc,
  paragraph,
}) {
  return (
    <>
      <div className="flex flex-col lg:flex-row pt-12 lg:pt-24 px-6 pb-12 mx-auto gap-12 lg:gap-24 justify-center">
        <div className="flex lg:justify-normal mx-auto md:mx-0 flex-col gap-5">
          <div className="flex overflow-hidden w-40 h-40">
            <img
              src={avatar}
              alt={avatar}
              className="rounded-full w-full h-full items-center"
              loading="lazy"
            />
          </div>
          <div className="flex border lg:w-full lg:h-px lg:border-t"></div>
          <div className="flex flex-row gap-8 lg:gap-0 justify-between items-end lg:items-center">
            <span className="text-slate-900 font-semibold text-sm uppercase">
              Follow
            </span>
            <div className="flex flex-row gap-2 lg:gap-1">
              {socialMedia.map((item) => {
                const Icon = socmedMap[item.icon];
                if (!Icon) return null;
                return (
                  <a key={item.id} href={item.href}>
                    <Icon data={icon} size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:w-1/2 text-center lg:text-left">
          <div className="flex flex-col gap-5">
            <span className="text-4xl lg:text-7xl text-slate-900 text-wrap uppercase font-bold">
              {writer}
            </span>
            <span className="text-base text-slate-500 font-semibold text-justify text-wrap">
              {desc}
            </span>
          </div>
          <span className="text-slate-500 text-wrap text-base text-justify">
            {paragraph}
          </span>
        </div>
      </div>
      <div className="flex w-full h-px pb-10 border-t"></div>
      <div className="flex flex-col px-6 lg:px-20 gap-12 lg:gap-24 w-full pb-12 lg:pb-24">
        <span className="text-slate-900 font-bold text-4xl text-center lg:text-left lg:text-6xl leading-none">
          Articles by {writer}
        </span>
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-0">
          {data.articleCreated.map((article) => (
            <CardAuthor
              id={article.id}
              key={article.id}
              title={data.title}
              date={article.date}
              read={article.read}
              coverArticle={coverMap[article.image]}
            />
          ))}
        </div>
      </div>
    </>
  );
}
