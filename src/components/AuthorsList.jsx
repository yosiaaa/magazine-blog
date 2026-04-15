import ButtonWithArrow from "./ButtonWithArrow";

export default function AuthorsList({ queu, avatar, id, writer, job, city }) {
  return (
    <div className="flex w-full gap-2 lg:gap-0 items-center justify-between">
      <div className="flex md:justify-between w-full lg:justify-normal gap-2 lg:gap-14 items-center py-5 md:py-12">
        <span className="text-slate-900 font-bold text-lg">{queu}</span>
        <div className="flex lg:w-60 lg:h-60 items-center overflow-hidden">
          <img
            src={avatar}
            alt={writer}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <span className="hidden md:flex font-bold text-xl text-wrap w-1/2 text-slate-900 leading-none">
          {writer}
        </span>
      </div>
      <div className="flex w-full gap-14 justify-between lg:items-center md:justify-end">
        <span className="flex md:hidden font-bold text-xl text-wrap w-1/2 text-slate-900 leading-none">
          {writer}
        </span>
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
