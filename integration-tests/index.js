const assert = require('assert')
const puppeteer = require('puppeteer')

let browser
let page

async function testFunc(){
  browser = await puppeteer.launch({
    args: [
      // Required for Docker version of Puppeteer
      '--no-sandbox',
      '--disable-setuid-sandbox',
      // This will write shared memory files into /tmp instead of /dev/shm,
      // because Docker’s default for /dev/shm is 64MB
      '--disable-dev-shm-usage'
    ]
  })

  const browserVersion = await browser.version()
  console.log(`Started ${browserVersion}`)
  page = await browser.newPage()

  const response = await page.goto('http://web/')
  assert(response.ok())
  await page.screenshot({ path: `/screenshots/app.png` })

  await page.close()
  await browser.close()
}
testFunc()