// import article_image from "../lib/article.json";

export default function CardArticle({
  image,
  writer,
  category,
  date,
  desc,
  visit,
  title,
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-5 md:gap-1 lg:gap-12">
      {/* <div className="overflow-hidden max-w-lg max-h-lg lg:max-w-92.25 lg:max-h-[461.25px]"> */}
      <div className="w-full max-w-sm mx-auto lg:max-w-full">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={writer}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
      {/* </div> */}
      <div className="flex flex-col gap-5 w-full lg:gap-0 justify-between">
        <div className="flex flex-col">
          <span className="text-slate-900 font-bold text-center lg:text-left text-2xl lg:text-xl">
            {title}
          </span>
          <span className="text-slate-500 text-sm lg:text-lg text-justify lg:text-normal">
            {desc}
          </span>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 justify-between">
          <div className="flex md:flex-wrap lg:flex gap-5">
            <div className="flex gap-2">
              <span className="font-bold text-xs whitespace-nowrap lg:text-base text-black font-inter">
                Writer
              </span>
              <span className="text-slate-600 whitespace-nowrap text-xs lg:text-base font-inter">
                {writer}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-black text-xs lg:text-base font-inter">
                Date
              </span>
              <span className="text-slate-600 whitespace-nowrap text-xs lg:text-base font-inter">
                {date}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-xs lg:text-base text-black font-inter">
                Viewers
              </span>
              <span className="text-slate-600 text-xs lg:text-base whitespace-nowrap font-inter">
                {visit}
              </span>
            </div>
          </div>
          <button className="max-w-full rounded-3xl border text-slate-600 border-slate-600 items-center px-3 py-2 font-inter">
            {category}
          </button>
        </div>
      </div>
    </div>
  );
}
