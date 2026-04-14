import PodcastList from "../../components/PodcastList";
import podcastData from "../../lib/podcastData.json";
import podcast_cover_1 from "../../assets/podcast-cover-1.png";
import podcast_cover_2 from "../../assets/podcast-cover-2.png";
import podcast_cover_3 from "../../assets/podcast-cover-3.png";

const podcastCoverMap = {
  "podcast-1": podcast_cover_1,
  "podcast-2": podcast_cover_3,
  "podcast-3": podcast_cover_2,
};

export default function Hero() {
  return (
    <div className="flex flex-col w-full px-6 pt-7 lg:pt-0 lg:px-20 pb-12 gap-12">
      <h1 className="uppercase font-inter leading-none text-balance font-bold text-4xl md:text-[280px]">
        Podcast
      </h1>
      {podcastData.map((item, i) => {
        return (
          <div className="flex flex-col">
            <PodcastList
              key={item.id}
              id={item.id}
              date={item.date}
              duration={item.duration}
              image={podcastCoverMap[item.image]}
              queu={item.queu}
              title={item.title}
            />
            {i !== 5 && (
              <div className="border-b w-full py-5 lg:py-12 border-slate-900"></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
