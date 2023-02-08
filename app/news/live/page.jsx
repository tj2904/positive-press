import NewsList from "../../components/NewsList"
import mockData from "../../../lib/mockData"

function News() {
  console.log("Live News page Page  Hit")
  const sortedNews = mockData.sort((a, b) => {
    if (a.vaderSummary.compound > b.vaderSummary.compound) {
      return -1
    }
  })

  return (
    <>
      <h3>Live News</h3>
      <NewsList newsFeed={sortedNews} />
    </>
  )
}

export default News
