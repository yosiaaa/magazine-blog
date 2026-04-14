export default function Hero() {
  return (
    <div className="flex flex-col pt-5 pb-2 lg:pb-12 lg:gap-12 items-center justify-center">
      <h1 className="uppercase font-inter leading-none font-bold text-5xl lg:text-[250px]">
        Art & Life
      </h1>
      <div className="bg-black hidden lg:flex px-2 py-4 gap-5 items-center">
        <span className="text-white font-bold text-base">News Ticker+++</span>
        <span className="text-white font-medium text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
        </span>
        <span className="text-white font-medium text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
        </span>
        <span className="text-white font-medium text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
        </span>
      </div>
    </div>
  );
}
