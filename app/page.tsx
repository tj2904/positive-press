import { HiChevronRight } from "react-icons/hi"
import { HiRocketLaunch } from "react-icons/hi2"
import { SiGithub } from "react-icons/si"
import screenshot from "../public/images/screenshot-trial-page-compressed.png"
import logo from "../public/images/logo-512x512.png"
import Image from "next/image"

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <Image className="h-18" src={logo} alt="Positive Press" width="82" />
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <div className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                Now Live
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                <span>Just shipped v1.0</span>
                <HiChevronRight
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
              </span>
            </div>
          </div>
          <h1 className="mt-10 text-4xl font-serif font-bold tracking-tight text-white sm:text-6xl">
            Sort live news to find the{" "}
            <span className="text-purple-500">positive</span>.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Read news via our site to make use of our sorting and ranking
            algorthims that find the most up-beat and heart-warming stories.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <button className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
              <a href="/news" data-testid="homepage-main-button">
                <HiRocketLaunch className="inline mr-2" /> Launch the App
              </a>
            </button>
            <a
              href="https://github.com/tj2904/positive-press"
              className="text-sm font-semibold leading-6 text-white flex items-center "
            >
              <SiGithub className="text-white text-xl mr-2 leading-6 inline" />
              View source code on GitHub{" "}
              <span aria-hidden="true" className=" ml-2">
                →
              </span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <Image
              src={screenshot}
              alt="App screenshot"
              width={2432}
              height={1442}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
