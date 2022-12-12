export default async function handler(req, res) {
  const response = await fetch(`https://dad-jokes.p.rapidapi.com/random/joke`, {
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_DADJOKES_KEY,
      "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
    },
  });
  const data = await response.json();

  let setup = data.body[0].setup;
  let punchline = data.body[0].punchline;
  const post = fetch(
    "https://her.synology.me:5001/webapi/entry.cgi?api=SYNO.Chat.External&method=incoming&version=2&token=%22VBLsE9N9Z1Tmrhyb7RfJtdFWmiDhqPBfa7EwHLIQn8TJ7tJzX8vJx2WgyERH6odm%22",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: {
        payload: `\n>>>*${setup}*\n\n_${punchline}_\n\n`,
      },
    }
  );
  post();
}
