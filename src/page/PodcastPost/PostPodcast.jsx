import {
  RiInstagramLine,
  RiTwitterXLine,
  RiYoutubeFill,
  RiSpotifyFill,
  RiSoundcloudLine,
  RiAppleFill,
} from "react-icons/ri";
import socialmedia from "../../lib/sociamedia.json";
import musicMedia from "../../lib/musicMedia.json";
import Divider from "../../components/Divider";
import podcastData from "../../lib/podcastData.json";
import podcast_cover_1 from "../../assets/podcast-cover-1.png";
import podcast_cover_2 from "../../assets/podcast-cover-2.png";
import podcast_cover_3 from "../../assets/podcast-cover-3.png";
import CardPodcast from "../../components/CardPodcast";
import ButtonWithArrow from "../../components/ButtonWithArrow";

const podcastCoverMap = {
  "podcast-1": podcast_cover_1,
  "podcast-2": podcast_cover_3,
  "podcast-3": podcast_cover_2,
};

const socmedMap = {
  instagram: RiInstagramLine,
  x: RiTwitterXLine,
  youtube: RiYoutubeFill,
};

const music = {
  spotify: RiSpotifyFill,
  soundcloud: RiSoundcloudLine,
  applemusic: RiAppleFill,
};

export default function PostPodcast({
  title,
  image,
  episode,
  desc,
  paragraph,
  date,
  duration,
  quotes,
  quotesBy,
  icon,
}) {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 pt-12 px-6 lg:pt-24 lg:px-40 lg:pb-24 justify-between">
        <div className="flex gap-5 lg:gap-16">
          <div className="flex flex-col gap-8">
            <img
              src={image}
              alt={title}
              className="object-cover"
              loading="lazy"
            />

            <div className="flex flex-col gap-7 lg:gap-12">
              <div className="flex justify-between">
                <span className="text-slate-900 font-semibold text-3xl text-xl">
                  Listen On
                </span>
                <div className="flex gap-5 items-center">
                  {musicMedia.map((item) => {
                    const Icon = music[item.icon];
                    return (
                      <a key={item.id}>
                        <Icon data={icon} className="w-7 h-7 lg:w-5 lg:h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
              {/* Divider */}
              <div className="border-b bg-slate-900 w-full h-0.5"></div>
              <div className="flex flex-col gap-6">
                <div className="flex justify-between">
                  <span className="text-slate-900 font-semibold text-lg">
                    Date
                  </span>
                  <span className="text-slate-600 text-lg">{date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-900 font-semibold text-lg">
                    Duration
                  </span>
                  <span className="text-slate-600 text-lg">{duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-900 font-semibold text-lg">
                    Share
                  </span>
                  <div className="flex gap-5">
                    {socialmedia.map((item) => {
                      const Icon = socmedMap[item.icon];
                      if (!Icon) return null;
                      return (
                        <a key={item.id} href={item.href}>
                          <Icon data={icon} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <span className="text-slate-900 text-balance font-semibold uppercase text-xl">
            {episode}
          </span>
          <span className="text-slate-900 uppercase font-bold lg:font-semibold text-3xl lg:text-7xl lg:leading-none text-wrap">
            {title}
          </span>
          <span className="text-slate-600 text-base text-wrap text-justify">
            {desc}
          </span>
          <span className="text-slate-600 text-base text-wrap text-justify">
            {paragraph}
          </span>
          <div className="flex flex-col py-6 gap-5">
            <Divider />
            <span className="text-3xl lg:text-5xl font-bold text-slate-900">
              &ldquo; {quotes}
            </span>
            <span className="text-sm italic text-slate-700 text-right">
              {quotesBy}
            </span>
            <Divider />
          </div>
          <span className="text-slate-900 text-base text-wrap text-justify">
            {paragraph}
          </span>
        </div>
      </div>
      <div className="flex flex-col px-6 py-12 lg:px-20 lg:pb-24 gap-12 lg:gap-24">
        <div className="flex flex-col gap-12">
          <Divider />
          <div className="flex justify-between items-center">
            <h2 className="text-slate-900 font-bold text-4xl lg:text-8xl uppercase">
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
                id={item.id}
                title={item.title}
                duration={item.duration}
                date={item.date}
                image={podcastCoverMap[item.image]}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
