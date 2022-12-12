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
  res.status(200).json({ text: `\n>>>*${setup}*\n\n_${punchline}_\n\n` })
}