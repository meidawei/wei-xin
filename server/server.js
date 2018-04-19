const https = require('https')
const http = require('http')
const url = require('url')
const querystring  = require('querystring')
const DEFAULT = encodeURI('javascript')


const options = {
  hostname: 'api.douban.com',
  path: '/v2/book/search?q=' + DEFAULT + '&start=' + 0, 
  method: 'GET',
  headers: {
    'Accept-Language': 'zh-CN,zh;q=0.8',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Encoding': 'application/json; charset=utf-8',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': 1,
    'Cache-Control': 'max-age=0'
  },
}

http.createServer((req, res) => {
  let targetData = encodeURI(querystring.parse(req.url.slice(2)).search)
  let start = querystring.parse(req.url.slice(2)).start
  options.path = '/v2/book/search?q=' + targetData + '&start=' + start
  let DATA_DOUBAN = Buffer.from('')
  if (req.url === '/favicon.ico') {
    res.end()
  }
  https.request(options, (data) => {
    console.log('STATUS:' + data.statusCode);
    data.on('data', (chunk) => {
      console.log("loading......" + chunk.length)
      DATA_DOUBAN = Buffer.concat([DATA_DOUBAN, chunk])
    })

    data.on('end', () => {
      console.log("数据加载完成！")
      res.write(DATA_DOUBAN.toString('utf8'))
      res.end()
    })
  }).on('error', (e) => {
    console.log(e)
  }).end()
}).listen(8001)
