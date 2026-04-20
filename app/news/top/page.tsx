import TopStoredArticle from "../../components/TopStoredArticle"

async function getTopNewsData() {
  try {
    const res = await fetch(
      "https://positive-press-api.herokuapp.com/api/v1/vader/summary/pos/top",
      { next: { revalidate: 600 } },
    )
    if (!res.ok) return []
    const data = await res.json()
    return data?.data?._items ?? []
  } catch {
    return []
  }
}

export default async function highestRatedNews() {
  const topNewsData: NewsResponse[] = await getTopNewsData()
  const sortedTopNews = topNewsData.sort((a: NewsResponse, b: NewsResponse) => {
    return b.vaderSummary.compound - a.vaderSummary.compound
  })

  const news = sortedTopNews.map((article: NewsResponse, index: number) => {
    const { key: _key, ...articleProps } = article as NewsResponse & {
      key?: string
    }
    return (
      <TopStoredArticle
        {...articleProps}
        key={articleProps.itemUrl || `${index}`}
      />
    )
  })
  return (
    <>
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-700 sm:text-4xl">
        Top Scored Recent News
      </h2>
      <p className="italic text-gray-500 mt-0 mb-4">Ranked for positivity.</p>
      <div className="grid sm:grid-cols-2 gap-6 lg:grid-cols-3 mb-6">
        {news}
      </div>
    </>
  )
}
