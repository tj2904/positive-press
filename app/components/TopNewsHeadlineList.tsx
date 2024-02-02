export default function TopNewsHeadlineList(props: any) {
  return props.data.map((h: any, index: number) => {
    // https://www.geeksforgeeks.org/javascript-index-inside-map-function/
    const position: number = index + 1
    const rating = h.vaderSummary.compound * 100 + "%"
    let percentage = (decimal: number) => {
      return `${(decimal * 100).toFixed(1)}%`
    }

    return (
      <div
        className=""
        data-testid={`topNewsHeadlineList-div-${index}`}
        key={index}
      >
        {/* https://flowbite.com/docs/typography/hr/ */}
        <div className="inline-flex items-center w-full justify-between">
          <hr className="w-2/5 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="font-extrabold tracking-tight text-gray-700">
            {position}
          </span>
          <hr className="w-2/5 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
        <div className="text-slate-600 text-xs bg-gray-200 rounded-r-md">
          <div
            className=" bg-gradient-to-l from-green-600 rounded-md"
            style={{ width: rating }}
            data-testid={`topNewsHeadlineList-rating-${index}`}
          >
            {percentage(h.vaderSummary.compound)}
          </div>
        </div>
        <h3 key={h.key} className="text-m font-serif">
          {h.title}
        </h3>
        <a
          href={h.id}
          className="text-gray-600 text-sm"
          data-testid={`topNewsHeadlineList-link-${index}`}
        >
          Read more...
        </a>
      </div>
    )
  })
}
