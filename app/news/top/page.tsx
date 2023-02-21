import TopStoredArticle from "../../components/TopStoredArticle"

async function getTopNewsData() {
  const res = await fetch(
    "https://i3g7qv.deta.dev/api/v1/vader/summary/pos/top",
    { next: { revalidate: 600 } },
  )
  return res.json().catch((error) => {
    console.error("getData Error: ", error)
  })
}

export default async function highestRatedNews() {
  const topNewsData = await getTopNewsData()
  const sortedTopNews = topNewsData.data[0].sort((a: NewsResponse, b: NewsResponse) => {
    if (a.vaderSummary.compound > b.vaderSummary.compound) {
      return -1
    }
  })

  const news = sortedTopNews.map((article: NewsResponse) => {
    return <TopStoredArticle {...article} />
  })
  return (
    <>
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-700 sm:text-4xl">
        Top Scored Recent News
      </h2>
      <p className="italic text-gray-500 mt-0 mb-4">Ranked for positivity.</p>
      <div className="grid sm:grid-cols-2 gap-6 lg:grid-cols-3 mb-6">{news}</div>
    </>
  )
}
