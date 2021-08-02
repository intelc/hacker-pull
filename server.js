
const express = require('express')
const server = express()
const UsRouter = require('./routes/api.js')
const fetchHacker =require('./scraper.js')
var cron = require('node-cron');
var cors = require('cors')


cron.schedule('* */2 * * *', async () => {
    console.log('running a task every two hours');
    const result = await fetchHacker()
    console.log(result)
  }); 
server.use(cors())  
server.use(express.json())
server.use(express.urlencoded({ extended: false }));

server.use('/api', UsRouter);
server.get('/', (req, res) => {
    res.send('hello world')
});

//server.use(express.static(path.join(__dirname, '/build')))


const PORT = process.env.PORT || 5000 ;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));