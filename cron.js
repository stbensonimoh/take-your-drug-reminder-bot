const mainscript = require('./index.js')
const CronJob = require('cron').CronJob

console.log('Before job instantiation')
const job = new CronJob('0/5 * * * * *', function () {
  mainscript.sendSMS()
  mainscript.sendEmail().catch(console.error)
  console.log('SMS Sent')
})
console.log('After job instantiation')
job.start()
