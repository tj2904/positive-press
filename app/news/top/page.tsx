import NewsList from "../../components/NewsList"

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
