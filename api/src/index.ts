import WebSocket from "ws"
import { createClient } from "redis"
import "dotenv/config"

const redisClient = createClient({
  url: process.env.REDIS_URL
})

await redisClient.connect()
  .then(() => console.log("! - Redis connected"))
  .catch((err) => { throw err })

const wss = new WebSocket.Server({ port: 8000 })

wss.on("connection", (ws: any) => {
  ws.on("message", (message: string) => {
    console.log(JSON.parse(message))
  })
})
