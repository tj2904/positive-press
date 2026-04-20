import Article from "./Article"

export default function NewsList(props: any) {
  const news = props.newsFeed.map((article: NewsResponse, index: number) => {
    const { key: _key, ...articleProps } = article as NewsResponse & {
      key?: string
    }
    return <Article {...articleProps} key={articleProps.itemUrl || index} />
  })
  return (
    <div className="grid sm:grid-cols-2 gap-6 lg:grid-cols-3 mb-6">{news}</div>
  )
}
