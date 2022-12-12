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
  const post = await fetch(
    "https://192.168.1.173:5001/webapi/entry.cgi?api=SYNO.Chat.External&method=chatbot&version=2&token=%22JtF6RRdRyedV6CN6YgWuUs2UQSBmx0Hos6oOX7palkQpSRxT9qmJCVtw4hX0QuIb%22",
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
  post()
}
