import { useParams } from "react-router-dom";
import HeadingPost from "../../components/HeadingPost";
import podcastData from "../../lib/podcastData.json";
import jane_cooper from "../../assets/jane-cooper.png";
import jakob_gronberg from "../../assets/jakob-gronberg.png";
import anne_nielsen from "../../assets/anne-nielsen.png";
import louise_jensen from "../../assets/louise-jensen.png";
import anne_henry from "../../assets/anne-henry.png";
import cristofer_vaccaro from "../../assets/cristofer-vaccaro.png";
import AuthorsPostDetails from "./AuthorsPostDetails";

const authorMap = {
  "jakob-gronberg": jakob_gronberg,
  "louise-jensen": louise_jensen,
  "anne-henry": anne_henry,
  "anne-nielsen": anne_nielsen,
  "jane-cooper": jane_cooper,
  "cristofer-vaccaro": cristofer_vaccaro,
};

export default function AuthorsPost() {
  const { id } = useParams();

  const data = podcastData.find((item) => item.id === parseInt(id));

  return (
    <>
      <HeadingPost page="Author" />
      {!data ? (
        <div className="flex flex-col items-center justify-center text-2xl font-bold">
          <span className="text-4xl font-bold text-inter text-slate-900">
            404
          </span>
          <span className="text-4xl font-bold text-inter text-slate-900 uppercase">
            Not Found
          </span>
        </div>
      ) : (
        <AuthorsPostDetails
          data={data}
          key={data.id}
          icon={data.icon}
          writer={data.writer}
          desc={data.desc}
          date={data.date}
          coverArticle={data.articleCreated[0].image}
          avatar={authorMap[data.avatar]}
          paragraph={data.paragraph}
        />
      )}
    </>
  );
}
