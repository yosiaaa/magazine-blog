import { useNavigate } from "react-router-dom";

export default function CardPodcast({ image, title, date, duration, id }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/podcast/${id}`)}
      className="flex flex-col p-5 lg:p-12 gap-8 border hover:cursor-pointer hover:bg-[#f5f5f5] hover:delay-100 hover:transition-all"
    >
      <img src={image} alt={title} className="object-cover" />
      <div className="flex flex-col gap-7 lg:gap-12">
        <p className="font-medium text-2xl lg:text-xl text-wrap">{title}</p>
        <div className="flex gap-4 justify-between lg:justify-normal">
          <div className="flex gap-1 items-center">
            <span className="font-semibold text-sm lg:text-lg text-slate-900">
              Date
            </span>
            <span className="text-sm lg:text-lg text-slate-600">{date}</span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="font-semibold text-sm lg:text-lg text-slate-900">
              Duration
            </span>
            <span className="text-sm lg:text-lg text-slate-600">
              {duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
