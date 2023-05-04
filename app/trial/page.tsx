import FrontPageLargeArticle from "../components/FrontPageLargeArticle"
import TopNewsHeadlineList from "../components/TopNewsHeadlineList"

// This is a trial page to test the API and other things
async function getNewsData() {
  const res = await fetch(
    "https://positive-press-api-staging.herokuapp.com/api/v1/vader/live/uk",
    {
      cache: "no-store",
    },
  )
  return res.json().catch((error) => {
    console.error("getData UK Error: ", error)
  })
}

async function getTopNewsData() {
  const res = await fetch(
    "https://positive-press-api-staging.herokuapp.com/api/v1/vader/summary/pos/top",
    { next: { revalidate: 600 } },
  )
  return res.json().catch((error) => {
    console.error("getData db Top Error: ", error)
  })
}

export default async function Page() {
  const liveNews: any = await getNewsData()
  const sortedNews = liveNews.sort((a: NewsResponse, b: NewsResponse) => {
    if (a.vaderSummary.compound > b.vaderSummary.compound) {
      return -1
    }
  })
  const news = sortedNews.slice(0, 1)
  const singleNews = news.map((article: NewsResponse) => {
    return <FrontPageLargeArticle {...article} />
  })

  const topNewsData: any = await getTopNewsData()
  const sortedTopNews = topNewsData.data[0].sort(
    (a: NewsResponse, b: NewsResponse) => {
      if (a.vaderSummary.compound > b.vaderSummary.compound) {
        return -1
      }
    },
  )

  const top5News = sortedTopNews.slice(0, 5)

  return (
    <main className="mb-14">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-700 sm:text-4xl">
        Top Positive News
      </h1>
      <p className="italic text-gray-500 mt-0 mb-4">
        The most recent article from the UK, and the top 5 most positive BBC England news
        stories since the site started.
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 ">{singleNews}</div>
        <div className=" md:col-span-1 bg-neutral-100 rounded-md p-4">
          <h3 className="text-xl font-extrabold tracking-tight text-gray-700 text-center pb-2">
            Top 5 All-Time Positive Headlines
          </h3>
          <TopNewsHeadlineList data={top5News} />
        </div>
      </div>
    </main>
  )
}
