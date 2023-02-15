import NewsList from "../components/NewsList"

// This is a trial page to test the API and other things
async function getData() {
    const res = await fetch('https://i3g7qv.deta.dev/api/v1/vader/live/england', { next: { revalidate: 600 } })
    return res.json().catch((error) => { console.error("getData", error) })
}

export default async function Page() {
    const data = await getData()

    const sortedNews = data.sort((a: NewsResponse, b: NewsResponse) => {
        if (a.vaderSummary.compound > b.vaderSummary.compound) {
            return -1
        }
    })

    const singleNews = sortedNews.splice(0, 1)



    // const news = props.newsFeed.map((article: NewsResponse) => {
    //     return <Article {...article} />
    // })
    // return (

    //     <div className="grid sm:grid-cols-2 gap-6 lg:grid-cols-3 mb-6">{news}</div>
    // )

    return <main>
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-700 sm:text-4xl">Top Positive News item</h2>
        <p className="italic text-gray-500 mt-0 mb-4">Here I'm returning the highest positive rated news article from the live stream. Thinking this maybe of use on the homepage</p>
        <NewsList newsFeed={singleNews} />
    </main>;
}
