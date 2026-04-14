import { useLocation, Link } from "react-router-dom";
import { RiArrowRightLongLine, RiArrowLeftLongLine } from "react-icons/ri";

export default function ButtonWithArrow({ title, href }) {
  const location = useLocation();

  const isGoBack = title.toLowerCase().includes("go back");

  const goBack = location.pathname.startsWith("/magazine")
    ? "/magazine"
    : location.pathname.startsWith("/podcast")
      ? "/podcast"
      : "/";

  return (
    <div
      className={`flex gap-2 items-center ${
        isGoBack ? "flex-row-reverse" : ""
      }`}
    >
      <span className="text-slate-900 font-medium text-sm uppercase">
        {title}
      </span>

      <Link
        to={isGoBack ? goBack : href}
        className={`${
          isGoBack ? "hover:-translate-x-1" : "hover:translate-x-2"
        } duration-500`}
      >
        {isGoBack ? (
          <RiArrowLeftLongLine size={24} />
        ) : (
          <RiArrowRightLongLine size={24} />
        )}
      </Link>
    </div>
  );
}
