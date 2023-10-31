"use client"

import { useState } from "react"
import Login from "@/components/Login"
import { ws } from "@/utils/websocket"

export default function Home() {
  const nickname = localStorage.getItem("nickname")
  const [loggedIn, setLoggedIn] = useState<null | boolean>(false)

  if (nickname) {
    ws.send(JSON.stringify({ type: "connect", nickname }))
    setLoggedIn(true)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    </main>
  )
}
