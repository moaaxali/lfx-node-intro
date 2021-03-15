'use strict'
const { createServer } = require('http')

const hostname = '127.0.0.1'
const port = 3000

const data = JSON.stringify([
  {
    id: 'A1',
    name: 'Vacuum Cleaner',
    rrp: '99.99',
    info: 'The suckiest vacuum in the world.'
  },
  {
    id: 'A2',
    name: 'Leaf Blower',
    rrp: '303.33',
    info: 'This product will blow your socks off.'
  },
  {
    id: 'B1',
    name: 'Chocolate Bar',
    rrp: '22.40',
    info: 'Delicious overpriced chocolate.'
  }
])

const server = createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/json')
  res.end(data)
})

server.listen(port, hostname, () => {
  console.log(`Server running on http://${hostname}:${port}/`)
})
