import ButtonWithArrow from "./ButtonWithArrow";

export default function PodcastList({
  queu,
  image,
  title,
  date,
  duration,
  id,
}) {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-5 lg:gap-0 justify-between items-center">
      <div className="flex flex-col lg:flex-row gap-5 w-full lg:gap-14 items-center">
        <span className="text-slate-900 font-bold text-lg">{queu}</span>
        <div className="flex w-full h-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-contain w-full h-full"
          />
        </div>
        <span className="font-bold text-xl self-start lg:text-wrap lg:w-full text-slate-900 leading-none">
          {title}
        </span>
      </div>
      <div className="flex w-full justify-between lg:justify-end lg:gap-14 items-center">
        <div className="flex gap-1 lg:gap-5">
          <span className="text-slate-900 font-bold text-sm">Date</span>
          <span className="text-slate-700 text-sm">{date}</span>
        </div>
        <div className="flex gap-1 lg:gap-5">
          <span className="text-slate-900 font-bold text-sm">Duration</span>
          <span className="text-slate-900 text-sm">{duration}</span>
        </div>
        <ButtonWithArrow title="Listen" href={`/podcast/${id}`} />
      </div>
    </div>
  );
}
