import ButtonCustom from "./ButtonCustom";
import Divider from "./Divider";
import socialmedia from "../lib/sociamedia.json";
import { RiInstagramLine } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import ButtonWithArrow from "./ButtonWithArrow";
import dies from "../assets/hope-dies-last.png";
import musuems from "../assets/the-best-art-museums.png";
import devils from "../assets/the-devils-is-the-details.png";
import hope from "../assets/An-indestructible-hope.png";
import festival from "../assets/street-art-festival.png";
import eyes from "../assets/through-the-eyes-of-street-artist.png";
import articleData from "../lib/article.json";
import CardMagazine from "./CardMagazine";

const socmedMap = {
  instagram: RiInstagramLine,
  x: RiTwitterXLine,
  youtube: RiYoutubeFill,
};

const imageMap = {
  "article-1": dies,
  "article-2": musuems,
  "article-3": devils,
  "article-4": hope,
  "article-5": festival,
  "article-6": eyes,
};

export default function PostMagazine({
  title,
  desc,
  writer,
  date,
  viewers,
  category,
  image,
  avatar,
  descAuthor,
  quotes,
  quotesBy,
  id,
}) {
  return (
    <>
      <div className="flex flex-col lg:flex-row px-6 py-12 lg:px-20 lg:py-24 gap-5 lg:gap-auto justify-between">
        <h1 className="text-4xl lg:text-7xl text-center lg:text-left text-wrap uppercase font-bold text-slate-900">
          {title}
        </h1>
        <p className="leading-5 text-slate-600 text-justify lg:leading-6 lg:w-1/2 lg:text-left">
          {desc}
        </p>
      </div>
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row px-6 lg:px-20 justify-between pb-8">
        <div className="flex gap-5">
          <div className="flex gap-1">
            <span className="text-slate-900 font-semibold text-sm lg:text-lg">
              Writer
            </span>
            <span className="text-slate-600 text-sm whitespace-nowrap lg:text-lg">
              {writer}
            </span>
          </div>
          <div className="flex gap-1">
            <span className="text-slate-900 font-semibold text-sm lg:text-lg">
              Date
            </span>
            <span className="text-slate-600 text-sm whitespace-nowrap lg:text-lg">
              {date}
            </span>
          </div>
          <div className="flex gap-1">
            <span className="text-slate-900 font-semibold text-sm lg:text-lg">
              Viewers
            </span>
            <span className="text-slate-600 text-sm lg:text-lg">{viewers}</span>
          </div>
        </div>
        <ButtonCustom label={category} />
      </div>
      <div className="flex px-6 lg:px-20 w-full lg:max-w-380 lg:h-200 overflow-hidden order-1 lg:order-3">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full justify-center"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-7 px-6 pb-7 py-12 lg:pt-24 lg:px-85 lg:pb-48 gap-auto justify-between">
        <div className="flex gap-5 w-full lg:w-1/2 lg:gap-16">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex gap-4 items-center">
              <img
                src={avatar}
                alt={writer}
                className="rounded-full items-center w-20 h-20"
              />
              <span className="text-3xl font-semibold text-slate-900 text-wrap">
                {writer}
              </span>
            </div>
            <Divider />
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <span className="text-slate-900 font-semibold text-lg">
                  Date
                </span>
                <span className="text-slate-600 text-lg">{date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-900 font-semibold text-lg">
                  Viewers
                </span>
                <span className="text-slate-600 text-lg">{viewers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-900 font-semibold text-lg">
                  Share
                </span>
                <div className="flex gap-2">
                  {socialmedia.map((item) => {
                    const Icon = socmedMap[item.icon];
                    console.log(item.icon, Icon);
                    if (!Icon) return null;
                    return (
                      <a key={item.id} href={item.href}>
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <span className="text-slate-900 text-justify font-semibold text-sm lg:text-xl">
            {desc}
          </span>
          <span className="text-slate-600 text-sm lg:text-lg text-justify">
            {descAuthor}
          </span>
          <div className="flex flex-col lg:py-6 gap-5">
            <Divider />
            <span className="text-4xl font-bold text-slate-900">
              &ldquo; {quotes}
            </span>
            <span className="text-sm text-slate-700">{quotesBy}</span>
            <Divider />
          </div>
          <span className="text-slate-900 font-semibold text-justify text-lg lg:text-xl">
            {desc}
          </span>
          <span className="text-slate-600 text-justify text-sm lg:text-lg">
            {descAuthor}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-7 pb-12 lg:gap-24 px-6 lg:px-20 w-full lg:pb-24 justify-between">
        <div className="flex flex-col gap-7 lg:gap-12">
          <Divider />
          <div className="flex justify-between items-center">
            <h2 className="text-slate-900 font-bold text-4xl lg:text-8xl uppercase">
              Latest Post
            </h2>
            <ButtonWithArrow title="See All" href="/magazine" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {articleData
            .filter((item) => item.id !== id) // filtering and hide card with same id on page details on view.
            .map((item) => {
              return (
                <div key={item.id} className="cursor-pointer">
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
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
