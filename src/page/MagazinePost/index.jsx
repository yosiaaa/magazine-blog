import HeadingPost from "../../components/HeadingPost";
import PostMagazine from "../../components/PostMagazine";
import articleData from "../../lib/article.json";
import jane_cooper from "../../assets/jane-cooper.png";
import jakob_gronberg from "../../assets/jakob-gronberg.png";
import anne_nielsen from "../../assets/anne-nielsen.png";
import louise_jensen from "../../assets/louise-jensen.png";
import anne_henry from "../../assets/anne-henry.png";
import cristofer_vaccaro from "../../assets/cristofer-vaccaro.png";
import dies from "../../assets/hope-dies-last.png";
import musuems from "../../assets/the-best-art-museums.png";
import devils from "../../assets/the-devils-is-the-details.png";
import hope from "../../assets/An-indestructible-hope.png";
import festival from "../../assets/street-art-festival.png";
import eyes from "../../assets/through-the-eyes-of-street-artist.png";
import { useParams } from "react-router-dom";

const avatarAuthorMap = {
  "jakob-gronberg": jakob_gronberg,
  "louise-jensen": louise_jensen,
  "anne-henry": anne_henry,
  "anne-nielsen": anne_nielsen,
  "jane-cooper": jane_cooper,
  "cristofer-vaccaro": cristofer_vaccaro,
};

const imageMap = {
  "article-1": dies,
  "article-2": musuems,
  "article-3": devils,
  "article-4": hope,
  "article-5": festival,
  "article-6": eyes,
};

export default function MagazinePost() {
  const { id } = useParams();

  const article = articleData.find((item) => item.id === Number(id));

  console.log(article, "article");

  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center text-2xl font-bold">
        <span className="text-4xl font-bold text-inter text-slate-900">
          404
        </span>
        <span className="text-4xl font-bold text-inter text-slate-900 uppercase">
          Not Found
        </span>
      </div>
    );
  }

  return (
    <>
      <HeadingPost page="Magazine" />

      <PostMagazine
        id={article.id}
        key={article.id}
        title={article.title}
        desc={article.desc}
        date={article.date}
        viewers={article.visit}
        avatar={avatarAuthorMap[article.avatar]}
        category={article.category}
        image={imageMap[article.image]}
        writer={article.writer}
        quotes={article.quotes}
        quotesBy={article.quotesBy}
        descAuthor={article.descAuthor}
      />
    </>
  );
}
