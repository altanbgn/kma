export const ws = new WebSocket("ws://localhost:8000")

export type WsMessage = {
  type: string
  payload: any
}
