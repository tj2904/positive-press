import Article from "./Article"

export default function NewsList(props: any) {

  const news = props.newsFeed.map((article: NewsResponse) => {
    return <Article {...article} />
  })
  return (

    <div className="grid sm:grid-cols-2 gap-6 lg:grid-cols-3 mb-6">{news}</div>
  )
}
