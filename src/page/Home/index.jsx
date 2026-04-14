import Author from "./Author";
import Hero from "./Hero";
import LeadArticle from "./LeadArticle";
import Podcast from "./Podcast";

export default function Home() {
  return (
    <div>
      <Hero />
      <LeadArticle />
      <Podcast />
      <Author />
    </div>
  );
}
