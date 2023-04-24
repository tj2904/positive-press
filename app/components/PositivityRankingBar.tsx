import React from 'react'
import { percentage } from '../utils/formatting';

export default function PositivityRankingBar(props: any) {



  return (
    <div data-testid="article-rating">
      {props.vaderSummaryCompound > 0 && (<div className="text-slate-600 text-sm bg-gray-100 rounded-r-md">
        <div className=" bg-gradient-to-l from-green-600 rounded-md" style={{ width: props.rating }}>
          {percentage(props.vaderSummaryCompound, 1)}
        </div>
      </div>)}

      {props.vaderSummaryCompound == 0 && (<div className="text-slate-600 text-sm bg-gray-100 rounded-r-md">  &nbsp; </div>)}

      {props.vaderSummaryCompound < 0 && (<div className="text-slate-600 text-sm bg-gray-100 rounded-r-md">
        <div className="bg-gradient-to-l from-red-600 rounded-md" style={{ width: props.negRating }}>
          {percentage(props.vaderSummaryCompound, 1)}
        </div>
      </div>)}
    </div>
  )
}
