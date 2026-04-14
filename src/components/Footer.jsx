import featurefirst from "../lib/featurefirstsection.json";
import featuresecond from "../lib/featuresecondsection.json";
import featurethird from "../lib/featurethirdsection.json";
import social from "../lib/sociamedia.json";
import { RiInstagramLine } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";

const data = [
  {
    id: 1,
    desc: "Newsletter+++",
  },
  {
    id: 2,
    desc: "Newsletter+++",
  },
  {
    id: 3,
    desc: "Newsletter+++",
  },
  {
    id: 4,
    desc: "Newsletter+++",
  },
  {
    id: 5,
    desc: "Newsletter+++",
  },
  {
    id: 6,
    desc: "Newsletter+++",
  },
];

const socmedMap = {
  instagram: RiInstagramLine,
  x: RiTwitterXLine,
  facebook: RiFacebookFill,
  youtube: RiYoutubeFill,
};

export default function Footer() {
  return (
    <footer className="bg-black flex flex-col py-12 w-full px-6 lg:px-20">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="flex flex-col w-full  gap-7 lg:gap-12 lg:pb-16.25">
        <div className="hidden lg:flex justify-between py-5">
          {data.map((item) => (
            <p
              key={item.id}
              className="text-white uppercase text-xl font-medium"
            >
              {item.desc}
            </p>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-5 items-center justify-between">
          <div className="flex gap-y-5 lg:w-1/2 lg:mr-40">
            <p className="text-3xl text-center lg:text-left lg:text-7xl font-inter text-[#FCFCFC] font-medium uppercase">
              Design News to Your Inbox
            </p>
          </div>
          {/* <div className="grid grid-cols-2 gap-[10px] mt-16 xl:col-span-2 xl:mt-0"> */}
          <div className="flex flex-col lg:flex-row gap-2.5">
            {/* <div className="md:grid md:grid-cols-2 md:gap-[10px]"> */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Email"
                className="focus:outline-none p-2 text-black font-medium bg-[#FCFCFC]"
              />
              <button
                type="submit"
                className="bg-[#FCFCFC] uppercase font-medium px-6 py-2 whitespace-nowrap text-slate-900 hover:cursor-pointer"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col pb-7 lg:pb-0 lg:flex-row gap-7 lg:gap-0 items-center justify-between">
          <span className="text-white text-xl font-medium uppercase">
            Aisoy Magazine
          </span>

          <div className="flex w-full xl:flex-row justify-between xl:items-center xl:justify-center gap-1 lg:gap-20 lg:w-1/2 ">
            {/* <div className="md:grid md:grid-cols-2 md:gap-[10px]"> */}
            <div className="md:flex md:flex-row md:gap-2.5 md:w-full">
              {/* <div className="mt-10 md:mt-0"> */}
              <div className="lg:w-9/12 sm:w-full w-auto">
                <ul className="mt-4 space-y-4">
                  {featurefirst.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-white"
                      >
                        {item.feature}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:flex md:flex-row md:gap-2.5 md:w-full">
              {/* <div className="md:grid md:grid-cols-2 md:gap-[10px]"> */}
              <div className="xl:w-9/12 sm:w-full w-auto">
                <ul className="mt-4 space-y-4">
                  {featuresecond.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-white"
                      >
                        {item.feature}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:flex md:flex-row md:gap-2.5 md:w-full">
              {/* <div className="md:grid md:grid-cols-2 md:gap-[10px]"> */}
              <div className="xl:w-9/12 sm:w-full w-auto">
                <ul className="mt-4 space-y-4">
                  {featurethird.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-white"
                      >
                        {item.feature}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 pb-10 border-t border-gray-200 flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-between">
        <p className="text-base font-normal leading-6 text-center text-white">
          &copy; Made by Pawel Gola - Powered by Webflow
        </p>

        <div className="flex gap-3 items-center">
          {social.map((item) => {
            const Icon = socmedMap[item.icon];
            return (
              <a key={item.id} href={item.href}>
                <Icon size={20} color="white" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
