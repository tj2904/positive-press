import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Positive Press - News ranked for positivity</title>
      <meta
        name="description"
        content="Ranking and sorting news to find the positive."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
