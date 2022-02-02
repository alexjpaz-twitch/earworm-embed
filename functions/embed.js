exports.handler = async function (event, context) {
  const body = `
  <html>
    <head>
      <title>Earworm</title>
      <meta content="${event.queryStringParameters.alert}" property="og:title" />
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
