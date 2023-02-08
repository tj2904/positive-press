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
      <h3>Top Scored News of All Time</h3>
      <NewsList newsFeed={sortedTopNews} />
    </>
  )
}

export default highestRatedNews
