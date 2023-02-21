import React from 'react'

export default function PositivityRankingBar(props: any) {

  let percentage = (decimal: number) => {
    return `${(decimal * 100).toFixed(1)}%`;
  };

  return (
    <>
      {props.vaderSummaryCompound > 0 && (<div className="text-slate-600 text-sm bg-gray-100 rounded-r-md">
        <div className=" bg-gradient-to-l from-green-600 rounded-md" style={{ width: props.rating }}>
          {percentage(props.vaderSummaryCompound)}
        </div>
      </div>)}

      {props.vaderSummaryCompound == 0 && (<div className="text-slate-600 text-sm bg-gray-100 rounded-r-md">  &nbsp; </div>)}

      {props.vaderSummaryCompound < 0 && (<div className="text-slate-600 text-sm bg-gray-100 rounded-r-md">
        <div className="bg-gradient-to-l from-red-600 rounded-md" style={{ width: props.negRating }}>
          {percentage(props.vaderSummaryCompound)}
        </div>
      </div>)}
    </>
  )
}
