import FrontPageLargeArticle from "../components/FrontPageLargeArticle"

// This is a trial page to test the API and other things
async function getData() {
    const res = await fetch('https://i3g7qv.deta.dev/api/v1/vader/live/england', { next: { revalidate: 600 } })
    return res.json().catch((error) => { console.error("getData Error: ", error) })
}

export default async function Page() {
    const data = await getData()

    const sortedNews = data.sort((a: NewsResponse, b: NewsResponse) => {
        if (a.vaderSummary.compound > b.vaderSummary.compound) {
            return -1
        }
    })

    const news = sortedNews.splice(0, 1)

    const singleNews = news.map((article: NewsResponse) => {
        return <FrontPageLargeArticle {...article} />
    })
    return (
        <main>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-700 sm:text-4xl">Top Positive News Item</h2>
            <p className="italic text-gray-500 mt-0 mb-4">Here I'm returning the highest positive rated news article from the live stream. Thinking this maybe of use on the homepage</p>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="col-span-2 ">{singleNews}</div>
                <div className=" col bg-teal-700 rounded-md p-4">
                    <h3 className="text-xl">Second Column</h3>
                    <p>This could be a list of the top 5 of all time for example...</p>
                </div>
            </div>
        </main>
    )
}
