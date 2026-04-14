import PostPodcast from "./PostPodcast";
import podcastData from "../../lib/podcastData.json";
import podcast_cover_1 from "../../assets/podcast-cover-1.png";
import podcast_cover_2 from "../../assets/podcast-cover-2.png";
import podcast_cover_3 from "../../assets/podcast-cover-3.png";
import HeadingPost from "../../components/HeadingPost";
import { useParams } from "react-router-dom";

const podcastCoverMap = {
  "podcast-1": podcast_cover_1,
  "podcast-2": podcast_cover_3,
  "podcast-3": podcast_cover_2,
};

export default function PodcastPost() {
  const { id } = useParams();

  const data = podcastData.find((item) => item.id === parseInt(id));

  return (
    <>
      <HeadingPost page="Podcast" />
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
        <PostPodcast
          key={data.id}
          title={data.title}
          desc={data.desc}
          episode={data.episode}
          duration={data.duration}
          date={data.date}
          image={podcastCoverMap[data.image]}
          quotes={data.quotes}
          paragraph={data.paragraph}
          quotesBy={data.quotesBy}
          icon={data.icon}
        />
      )}
    </>
  );
}
