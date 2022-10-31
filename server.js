import React from "react"
import { Text, View } from "react-native"
import { createServer } from "miragejs"

if (window.server) {
  server.shutdown()
}

window.server = createServer({
  routes() {
    this.get("/api/data", () => {
      return {
        data: [
          { id: 1, name: "Ödeme", numberoftransactions: 1, type: 'uptrend', amount: "100,00" },
          { id: 2, name: "İptal/İade", numberoftransactions: 0, type: 'downgrade', amount: "0,00" },
          { id: 3, name: "Toplam", numberoftransactions: 1, type: 'process', amount: "100,00" },
        ],
      }
    })
  },
})