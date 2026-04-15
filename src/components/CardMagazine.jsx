import ButtonCustom from "./ButtonCustom";
import { useNavigate } from "react-router-dom";

export default function CardMagazine({
  date,
  category,
  image,
  titleMagazine,
  desc,
  writer,
  duration,
  id,
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/magazine/${id}`)}
      className="flex flex-col border max-h-lg p-5 lg:p-12 gap-8 hover:cursor-pointer hover:bg-[#f5f5f5] hover:delay-100 hover:transition-all"
    >
      <div className="flex justify-between items-center">
        <span className="text-slate-600 text-base">{date}</span>
        <ButtonCustom type="button" label={category} />
      </div>
      <img src={image} alt={titleMagazine} className="object-cover" />
      <div className="flex flex-col gap-6 lg:gap-12.25">
        <div className="flex flex-col gap-3">
          <span className="text-3xl leading-none text-center font-semibold text-slate-900">
            {titleMagazine}
          </span>
          <span className="text-slate-700 text-sm text-justify">{desc}</span>
        </div>
        <div className="flex justify-between gap-8">
          <div className="flex gap-2 items-center">
            <span className="font-semibold text-base text-slate-900">Job</span>
            <span className="text-base whitespace-nowrap text-slate-600">
              {writer}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-semibold text-base text-slate-900">
              Duration
            </span>
            <span className="text-base whitespace-nowrap text-slate-600">
              {duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
