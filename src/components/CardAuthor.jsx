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
      onClick={() => navigate(`/authors/${id}`)}
      className="flex gap-7 lg:gap-12 p-5 lg:p-8 border items-center cursor-pointer hover:bg-[#f5f5f5] hover:transition-all hover:duration-500"
    >
      <div className="w-20 h-20 md:w-37.5 md:h-37.5 lg:w-30 lg:h-30 object-cover rounded-full">
        <img
          src={image || coverArticle}
          alt={author}
          className="w-full h-full object-cover rounded-full"
          loading="lazy"
        />
      </div>
      <div className="flex gap-4 flex-col justify-between">
        <span className="text-base text-wrap lg:text-xl font-bold">
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
