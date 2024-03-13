import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="8dccdc33-eee5-4ae5-b817-cd4748064934" data-blockingmode="auto" type="text/javascript"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
