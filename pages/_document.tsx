import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <script
  src="https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js"
  data-app-id="B3257882-81AF-40B1-80F5-AAEB074F486F"
></script>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
