import { FcBbc } from "react-icons/fc"
import PositivityRankingBar from "./PositivityRankingBar"

function Article(props: NewsResponse) {
  const rating = props.vaderSummary.compound * 100 + "%"
  const negRating = -props.vaderSummary.compound * 100 + "%"
  const date =
    props.published[2] + "/" + props.published[1] + "/" + props.published[0]

  return (
    <div
      key={props.itemUrl}
      className="border border-slate-500 p-4 rounded-md shadow-md w-/5"
    >
      <PositivityRankingBar
        vaderSummaryCompound={props.vaderSummary.compound}
        rating={rating}
        negRating={negRating}
      />

      <h3
        className="font-serif font-semibold text-2xl mt-2 text-gray-700"
        data-testid="frontPageLargeArticle-title"
      >
        {props.title}
      </h3>

      <img
        className="rounded-md"
        src={props.imageUrl}
        width="1024"
        height="576"
        alt="bbc news image"
        crossOrigin="anonymous"
      />
      <p
        className="my-2 text-gray-700"
        data-testid="frontPageLargeArticle-summary"
      >
        {props.summary}
      </p>
      <p className="text-right text-blue-800 my-2">
        <a
          href={props.itemUrl}
          className=" bg-slate-300 rounded hover:bg-slate-400 p-1 px-3"
        >
          Read more...
        </a>
      </p>
      <div className="flex justify-between items-center text-slate-600 -mb-2">
        <div>
          <FcBbc size={40} />
        </div>
        <div data-testid="frontPageLargeArticle-date">{date}</div>
      </div>
    </div>
  )
}

export default Article
