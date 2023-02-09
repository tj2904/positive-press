import NewsList from "../../components/NewsList"

async function getData() {
  const res = await fetch("https://i3g7qv.deta.dev/api/v1/vader/live")
  return res.json()
}

export default async function LiveNewsPage() {
  const data = await getData()

  const sortedNews = data.sort((a: NewsResponse, b: NewsResponse) => {
    if (a.vaderSummary.compound > b.vaderSummary.compound) {
      return -1
    }
  })

  return (
    <main>
      <h2>Live News</h2>
      <NewsList newsFeed={sortedNews} />
    </main>
  )
}
