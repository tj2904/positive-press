import { captureMessage } from "@sentry/nextjs";
import NewsList from "../../../components/NewsList"

async function getData(category: string) {
  const res = await fetch(
    `https://positive-press-api.herokuapp.com/api/v1/vader/live/${category}`,
    { next: { revalidate: 300 } },
  )
  if (!res.ok) {
    captureMessage(res.statusText)
  }
  return res.json()
}

export default async function CategoryNewsPage({params}: 
  {params: {category: string};
}) {
  const data = await getData(params.category)

  const sortedNews = data.sort((a: NewsResponse, b: NewsResponse) => {
    if (a.vaderSummary.compound > b.vaderSummary.compound) {
      return -1
    }
  })

  return (
    <main>
      <h1 className="text-3xl font-extrabold tracking-tight capitalize text-gray-700 sm:text-4xl">
        Live {params.category} News
      </h1>
      <p className="italic text-gray-500 mt-0 mb-4">Ranked for positivity.</p>
      <NewsList newsFeed={sortedNews} />
    </main>
  )
}
