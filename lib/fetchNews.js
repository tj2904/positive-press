
async function fetchNews() {
  const res = fetch(
    "https://i3g7qv.deta.dev/api/v1/vader/summary/pos/top",
    { cache: "no-store" }
  )
  return res.data
}

export default fetchNews
