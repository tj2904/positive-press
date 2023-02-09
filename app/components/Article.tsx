"use client"
import { useEffect, useState } from "react";
import { SiBbc } from "react-icons/si";
import Image from 'next/image'

function Article(props: NewsResponse) {

  const rating = (props.vaderSummary.compound * 100) + "%"
  const negRating = (-(props.vaderSummary.compound) * 100) + "%"
  const date = props.published[2] + "/" + props.published[1] + "/" + props.published[0]
  const [ogImage, setOgImage] = useState<string>()
  // async function getOgImage(url: string) {
  //   const res = await fetch(`https://i3g7qv.deta.dev/api/v1/og/?url=${url}`)
  //     .then(res => res.json()
  //     )
  //     .then((data) => {
  //       setOgImage(data.image)
  //       console.log("data.image", data.image)
  //     }).catch((error) => { console.error(error) })
  // }

  useEffect(() => {
    // getOgImage(`https://www.bbc.co.uk/news/uk-england-manchester-64440273`)
    
      // getOgImage(`${props.id}`)
    
    const res = fetch(`https://i3g7qv.deta.dev/api/v1/og/?url=${props.id}`)
      .then(res => res.json()
      )
      .then((data) => {
        setOgImage(data.image)
      }).catch((error) => { console.error(error) })

  }, [props]);

  // Get OpenGraph Image
  // const ogs = require('open-graph-scraper');
  // const options = { url: 'https://www.bbc.co.uk/news/uk-england-norfolk-64377754',
  //                  onlyGetOpenGraphInfo: 'true',
  //                   };
  // ogs(options)
  //   .then((data: { error: any; result: any; response: any; }) => {
  //     const { error, result, response } = data;
  //     // console.log('error:', error);  // This returns true or false. True if there was an error. The error itself is inside the results object.
  //      console.log('result:', result); // This contains all of the Open Graph results
  //     // console.log('response:', response); // This contains the HTML of page
  //     // setOgImage(result.ogImage.url)
  //   })

  let percentage = (decimal: number) => {
    return `${(decimal * 100).toFixed(1)}%`;
  };



  return (
    <div key={props.id}
      className="border border-slate-500 p-4 rounded-md shadow-md bg-neutral-50">
      {props.vaderSummary.compound > 0 && (<div className="text-slate-600 text-sm
      bg-gradient-to-l from-green-600" style={{ width: rating }}>
        {percentage(props.vaderSummary.compound)}
      </div>)}

      {props.vaderSummary.compound == 0 && (<div className="text-slate-600 text-sm" >  &nbsp; </div>)}

      {props.vaderSummary.compound < 0 && (<div className=" text-slate-600 text-sm
     bg-gradient-to-l  from-red-600" style={{ width: negRating }}>
        {percentage(props.vaderSummary.compound)}
      </div>)}


      <h3 className="font-serif font-semibold text-2xl mt-2">{props.title}</h3>
      {/* {props.imageUrl ? <Image className="rounded-md" src={props.imageUrl} width="1024" height="576" alt="bbc news image" crossOrigin="anonymous" /> :
        <Image className="rounded-md" src={ogImage} width="1024" height="576" alt="bbc news image" crossOrigin="anonymous" />}
       */}
      {ogImage && (<Image className="rounded-md" src={ogImage} width="1024" height="576" alt="bbc news image" crossOrigin="anonymous" />
      )}

      <p className="my-2">{props.summary}</p>
      <p className="text-right text-blue-800 my-2"><a href={props.id} className=" bg-slate-300 rounded hover:bg-slate-400 p-1 px-3">Read more...</a></p>
      <div className="flex justify-between items-center text-slate-600 -mb-2">
        <div><SiBbc size={40} /></div>
        <div>{date}</div>
      </div>
    </div>
  )
}

export default Article
