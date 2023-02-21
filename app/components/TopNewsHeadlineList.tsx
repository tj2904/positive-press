export default function TopNewsHeadlineList(props: any) {

  return (

    props.data.map((h: any) => {

      const rating = (h.vaderSummary.compound * 100) + "%"
      let percentage = (decimal: number) => {
        return `${(decimal * 100).toFixed(1)}%`;
      };

      return (
        <div className="my-4">
          <div className="text-slate-600 text-xs bg-gray-200 rounded-r-md">
            <div className=" bg-gradient-to-l from-green-600 rounded-md" style={{ width: rating }}>
              {percentage(h.vaderSummary.compound)}
            </div>
          </div>
          <h3 key={h.key} className="text-m font-serif">{h.title}</h3>
          <a href={h.id} className="text-gray-600 text-sm">Read more...</a>
        </div>
      )
    })
  )
}
