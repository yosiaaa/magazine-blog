import ButtonWithArrow from "./ButtonWithArrow";

export default function AuthorsList({ queu, avatar, id, writer, job, city }) {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-5 lg:gap-0 justify-between">
      <div className="flex justify-between w-full lg:justify-normal lg:gap-14 items-center">
        <span className="text-slate-900 font-bold text-lg">{queu}</span>
        <div className="flex lg:w-60 lg:h-60 items-center">
          <img src={avatar} alt={writer} className=" rounded-full" />
        </div>
        <span className="font-bold text-xl text-wrap w-1/2 text-slate-900 leading-none">
          {writer}
        </span>
      </div>
      <div className="flex w-full gap-14 lg:items-center lg:justify-end">
        <div className="hidden lg:flex gap-5">
          <span className="text-slate-900 font-bold text-sm">Job</span>
          <span className="text-slate-700 text-sm">{job}</span>
        </div>
        <div className="hidden lg:flex gap-5">
          <span className="text-slate-900 font-bold text-sm">City</span>
          <span className="text-slate-900 text-sm">{city}</span>
        </div>
        <ButtonWithArrow title="About" href={`/authors/${id}`} />
      </div>
    </div>
  );
}
