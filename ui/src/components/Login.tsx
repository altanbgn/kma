"use client"

import { useEffect } from "react"
import { ws } from "@/utils/websocket"

export default function Login() {
  function setNickname(event: any) {
    event.preventDefault()

    const message = {
      type: "connect",
      nickname: event.target.nickname.value,
    }

    ws.send(JSON.stringify(message))
  }

  return (
    <div>
      <h1>Enter your nickname</h1>
      <form onSubmit={setNickname}>
        <input type="text" name="nickname" />
        <button>Submit</button>
      </form>
    </div>
  )
}
