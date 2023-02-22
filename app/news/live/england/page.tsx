'use client'
import NewsList from "../../../components/NewsList"

async function getData() {
  const res = await fetch("https://i3g7qv.deta.dev/api/v1/vader/live/england", {next: {revalidate: 600}})
  if(!res.ok) {
    throw new Error('Failed to fetch live news');
  }
  return res.json()
}

export default async function LiveNewsPage() {
  const getNewsData: any = await getData()
  // Wait for the promises to resolve
  const data: any= await Promise.all([getNewsData])

  const sortedNews = data.sort((a: NewsResponse, b: NewsResponse) => {
    if (a.vaderSummary.compound > b.vaderSummary.compound) {
      return -1
    }
  })

  return (
    <main>
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-700 sm:text-4xl"
      >Live England News</h1>
      <p className="italic text-gray-500 mt-0 mb-4">Ranked for positivity.</p>
      <NewsList newsFeed={sortedNews} />
    </main>
  )
}
