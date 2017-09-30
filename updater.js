const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const _ = require('lodash')
const fetch = require('node-fetch')
const exportFile = require('./static/export.json')

const exportFilePath = path.resolve(__dirname, 'static', 'export.json')
const exportSlimPath = path.resolve(__dirname, 'static', 'export.slim.json')

const truncateFile = promisify(fs.truncate)
const writeFile = promisify(fs.writeFile)

async function fetchComics () {
  const offlineNewestNum = Math.max(1, ...exportFile.map(comic => comic.num))
  let onlineNewestNum = await fetch('https://xkcd.com/info.0.json')
    .then(res => res.json())
    .then(comic => comic.num)

  const comicsToFetch = _.range(offlineNewestNum + 1, onlineNewestNum)

  const results = await Promise.all(comicsToFetch.map(num => new Promise(resolve =>
      fetch(`https://xkcd.com/${num}/info.0.json`)
        .then(res => {
          if (!res.ok) return resolve(null)
          resolve(res.json())
        })
        .catch(() => {
          resolve(null)
        })
      )))

  const data = _.uniqBy(exportFile.concat(results).filter(c => c !== null), 'num')

  data.sort((a, b) => a.num - b.num)

  const json = JSON.stringify(data)
  const slimJson = JSON.stringify(data.map(({ num, img, title, year, day, month }) => ({
    id: num,
    img,
    title,
    date: `${year}-${month}-${day}`
  })))

  try {
    await truncateFile(exportFilePath, 0)
    await writeFile(exportFilePath, json)
    await truncateFile(exportSlimPath, 0)
    await writeFile(exportSlimPath, slimJson)
    console.log(`Success :) (${results.length} comics exported`)
  } catch (e) {
    console.log(e)
  }
}

fetchComics()
