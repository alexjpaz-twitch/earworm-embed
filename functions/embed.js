exports.handler = async function (event, context) {
  const body = `
  <html>
    <head>
      <title>Earworm</title>
      <meta content="Earworm: Playground" property="og:title" />
      <meta content="!${decodeURIComponent(event.queryStringParameters.alert)}" Description" property="og:description" />
      <meta property="og:footer" content="Click to play alert">


    </head>
    <body>
      <script>location.assign("https://dhttm9zkbfvzw.cloudfront.net/alexjpaz-twitch/alerts/playground.html?alert=${event.queryStringParameters.alert}")</script>
    </body>
  </html>
  `;

  return {
    statusCode: 200,
    body,
  };
}
