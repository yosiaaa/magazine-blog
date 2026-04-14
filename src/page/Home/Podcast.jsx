import Divider from "../../components/Divider";
import ButtonWithArrow from "../../components/ButtonWithArrow";
import podcast_cover_1 from "../../assets/podcast-cover-1.png";
import podcast_cover_2 from "../../assets/podcast-cover-2.png";
import podcast_cover_3 from "../../assets/podcast-cover-3.png";
import CardPodcast from "../../components/CardPodcast";
import podcastData from "../../lib/podcastData.json";

const podcastCoverMap = {
  "podcast-1": podcast_cover_1,
  "podcast-2": podcast_cover_3,
  "podcast-3": podcast_cover_2,
};

export default function Podcast() {
  return (
    <div className="flex flex-col px-6 lg:px-20 pt-12 lg:pt-24 gap-10 lg:gap-24 ">
      <div className="flex flex-col gap-12">
        <Divider />
        <div className="flex justify-between items-center">
          <h2 className="text-slate-900 font-bold text-3xl lg:text-8xl uppercase">
            Podcast
          </h2>
          <ButtonWithArrow title="All Episodes" href="/podcast" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {podcastData.map((item) => {
          return (
            <CardPodcast
              key={item.id}
              title={item.title}
              duration={item.duration}
              date={item.date}
              image={podcastCoverMap[item.image]}
            />
          );
        })}
      </div>
    </div>
  );
}
