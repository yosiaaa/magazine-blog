import { useNavigate } from "react-router-dom";

export default function CardAuthor({
  image,
  coverArticle,
  author,
  job,
  city,
  date,
  read,
  title,
  id,
}) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/magazine/${id}`)}
      className="flex gap-7 lg:gap-12 p-5 lg:p-8 border items-center"
    >
      <div className="flex w-20 lg:w-20 lg:h-40 justify-center lg:justify-normal items-center">
        <img
          src={image || coverArticle}
          alt={author}
          className="object-cover rounded-full"
        />
      </div>
      <div className="flex gap-4 flex-col justify-between">
        <span className="text-base whitespace-nowrap lg:text-3xl font-bold">
          {author || title}
        </span>
        <div className="flex justify-between gap-8">
          <div className="flex gap-1  items-center">
            <span className="font-semibold text-sm lg:text-base text-slate-900">
              Job
            </span>
            <span className="text-sm lg:text-base text-slate-600 whitespace-nowrap lg:whitespace-normal">
              {job || date}
            </span>
          </div>
          <div className="flex gap-1 justify-between items-center">
            <span className="font-semibold text-sm lg:text-base text-slate-900">
              City
            </span>
            <span className="text-sm whitespace-nowrap lg:whitespace-normal lg:text-base text-slate-600">
              {city || read}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
