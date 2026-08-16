
import { getPayload } from "payload"
import configPromise from "./src/payload.config.ts"

async function run() {
  try {
    const config = await configPromise
    const payload = await getPayload({ config })
    
    if (typeof payload.db.push === "function") {
      console.log("push is a function!")
    } else if (typeof payload.db.pushSchema === "function") {
      console.log("pushSchema is a function!")
    } else {
      console.log("Available db methods:", Object.keys(payload.db).filter(k => typeof payload.db[k] === "function"))
    }
  } catch(e) { console.error(e) }
  process.exit(0)
}
run()

