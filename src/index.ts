import express from 'express'
import router from './routes/diaries'

const app = express()

app.use(express.json()) // middleware to transform re.body to json

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('ping test')
  res.send('pong! ' + new Date().toLocaleDateString())
})

app.use('/api/diaries', router)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
