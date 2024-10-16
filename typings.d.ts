type NewsResponse = {
  title: string
  summary: string
  vaderTitle: {
    compound: number
    neg: number
    neu: number
    pos: number
  }
  vaderSummary: {
    compound: number
    neg: number
    neu: number
    pos: number
  }
  itemUrl: string
  key: string
  published: Array
  region: string
  source: string
  imageUrl?: string
}
