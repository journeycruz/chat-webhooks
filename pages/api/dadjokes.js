export default async function handler(req, res) {
  const response = await fetch(`https://dad-jokes.p.rapidapi.com/random/joke`, {
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_DADJOKES_KEY,
      'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
    },
  })
  const data = await response.json()

  let setup = data.body[0].setup
  let punchline = data.body[0].punchline
  res.status(200).json({ text: `<div id="openweathermap-widget-11"></div>
  <script src='//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js'></script><script>window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 11,cityid: '2643743',appid: 'f23deeaee2e7a06bdd5047b9be5b66ef',units: 'metric',containerid: 'openweathermap-widget-11',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();</script>` })
}