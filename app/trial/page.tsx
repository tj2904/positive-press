import FrontPageLargeArticle from "../components/FrontPageLargeArticle"
import TopNewsHeadlineList from "../components/TopNewsHeadlineList"

// This is a trial page to test the API and other things
async function getData() {
    const res = await fetch('https://i3g7qv.deta.dev/api/v1/vader/live/england', { next: { revalidate: 600 } })
    return res.json().catch((error) => { console.error("getData Error: ", error) })
}

async function getTopNewsData() {
    const res = await fetch('https://i3g7qv.deta.dev/api/v1/vader/summary/pos/top', { next: { revalidate: 600 } })
    return res.json().catch((error) => { console.error("getData Error: ", error) })
}

export default async function Page() {
    const data = await getData()
    const topNewsData = await getTopNewsData()

    const sortedNews = data.sort((a: NewsResponse, b: NewsResponse) => {
        if (a.vaderSummary.compound > b.vaderSummary.compound) {
            return -1
        }
    })

    const news = sortedNews.slice(0, 1)

    const singleNews = news.map((article: NewsResponse) => {
        return <FrontPageLargeArticle {...article} />
    })

    const sortedTopNews = topNewsData.data[0].sort((a: NewsResponse, b: NewsResponse) => {
        if (a.vaderSummary.compound > b.vaderSummary.compound) {
            return -1
        }
    })

    const top5News = sortedTopNews.slice(0, 5)

    return (
        <main>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-700 sm:text-4xl">Top Positive News Item</h2>
            <p className="italic text-gray-500 mt-0 mb-4">Here I'm returning the highest positive rated news article from the live stream. Thinking this maybe of use on the homepage</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 ">{singleNews}</div>
                <div className=" md:col-span-1 bg-neutral-100 rounded-md p-4">
                    <h3 className="text-xl pb-2">Top 5 All-time Positive Headlines</h3>
                    <TopNewsHeadlineList data={top5News} />
                </div>
            </div>
        </main>
    )
}
