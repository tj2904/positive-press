import NewsList from "../../components/NewsList"
import topNews from "../../../lib/topNews"

function highestRatedNews() {
  console.log("Live News page Page  Hit")
  const sortedTopNews = topNews.sort((a, b) => {
    if (a.vaderSummary.compound > b.vaderSummary.compound) {
      return -1
    }
  })

  return (
    <>
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-700 sm:text-4xl">
        Top Scored Recent News
      </h2>
      <p className="italic text-gray-500 mt-0 mb-4">Ranked for positivity.</p>
      <NewsList newsFeed={sortedTopNews} />
    </>
  )
}

export default highestRatedNews
