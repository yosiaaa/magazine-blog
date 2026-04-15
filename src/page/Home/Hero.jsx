import Divider from "../../components/Divider";

export default function Hero() {
  return (
    <div className="flex px-6 lg:px-20 flex-col pt-5 pb-2 lg:pb-12 lg:gap-12 items-center justify-center">
      <h1 className="uppercase font-inter leading-none whitespace-nowrap font-bold text-5xl lg:text-8xl xl:text-9xl 2xl:text-[250px]">
        Art & Life
      </h1>
      <Divider />
    </div>
  );
}
