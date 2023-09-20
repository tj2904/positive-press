import ArticleSkelton from "../components/ArticleSkelton"

function loading() {
  return (
    <>
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[275px] mb-4"></div>
      <div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-600 w-[150px] mb-4"></div>
      <div
        className="grid sm:grid-cols-2 gap-6 lg:grid-cols-3 mb-6"
        data-testid="loading-page"
      >
        <ArticleSkelton />
        <ArticleSkelton />
        <ArticleSkelton />
      </div>
    </>
  )
}

export default loading
