"use client"
import { useEffect, useState } from "react"
import { SiBbc } from "react-icons/si"
import Image from "next/image"
import PositivityRankingBar from "./PositivityRankingBar"

function Article(props: NewsResponse) {
  const rating = props.vaderSummary.compound * 100 + "%"
  const negRating = -props.vaderSummary.compound * 100 + "%"
  // https://nkhilv.medium.com/display-only-the-first-x-characters-of-a-string-using-javascript-b0dbe93efbd
  const date = props.published.split(" ").slice(0, 4).join(" ")
  const [ogImage, setOgImage] = useState<string>()
  async function getOgImage(url: string) {
    await fetch(`https://i3g7qv.deta.dev/api/v1/og/?url=${url}`)
      .then((res) => res.json())
      .then((data) => {
        setOgImage(data.image)
      })
      .catch((error) => {
        throw new Error("getOgImage Error: ", error)
      })
  }

  useEffect(() => {
    if (!props.imageUrl) {
      getOgImage(`${props.id}`)
    }
  }, [props])

  return (
    <div
      key={props.id}
      className="border border-slate-500 p-4 rounded-md shadow-md"
      data-testid="topStoredArticle-div"
    >
      <PositivityRankingBar
        vaderSummaryCompound={props.vaderSummary.compound}
        rating={rating}
        negRating={negRating}
      />
      <h3 className="font-serif font-semibold text-2xl mt-2 text-gray-700">
        {props.title}
      </h3>
      {ogImage &&
        (props.imageUrl ? (
          <Image
            className="rounded-md"
            src={props.imageUrl}
            width="1024"
            height="576"
            alt="bbc news image"
            crossOrigin="anonymous"
          />
        ) : (
          <Image
            className="rounded-md"
            src={ogImage}
            width="1024"
            height="576"
            alt="bbc news image"
            crossOrigin="anonymous"
          />
        ))}
      <p className="my-2 text-gray-700">{props.summary}</p>
      <p className="text-right text-blue-800 my-2">
        <a
          href={props.id}
          data-testid="topStoredArticle-link"
          className=" bg-slate-300 rounded hover:bg-slate-400 p-1 px-3"
        >
          Read more...
        </a>
      </p>
      <div className="flex justify-between items-center text-slate-600 -mb-2">
        <div>
          <SiBbc size={40} />
        </div>
        <div>{date}</div>
      </div>
    </div>
  )
}

export default Article
