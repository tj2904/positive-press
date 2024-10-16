async function fetchNews() {
  const res = fetch(
    "https://positive-press-api.herokuapp.com/api/v1/vader/summary/pos/top",
    { cache: "no-store" },
  )
  return res.data
}

export default fetchNews
