
const express = require('express')
const server = express()
const UsRouter = require('./routes/api.js')
const fetchHacker =require('./scraper.js')
var cron = require('node-cron');
var cors = require('cors')

//node cron scheduler that called fetch code every 2 hours
cron.schedule('* */2 * * *', async () => {
    console.log('running a task every two hours');
    const result = await fetchHacker()
    console.log(result)
  }); 

//boring setup stuff
server.use(cors())  
server.use(express.json())
server.use(express.urlencoded({ extended: false }));

//backend api route
server.use('/api', UsRouter);
//backend root route - not usede
server.get('/', (req, res) => {
    res.send('hello world')
});




const PORT = process.env.PORT || 5000 ;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));