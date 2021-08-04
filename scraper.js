const axios = require('axios')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const fetchHacker = async()=>{

    const BASE_URL = 'https://news.ycombinator.com/';
    // Fetch data with Axios (luckily no need for puppeteer here)
    // and read into correct JSON format
    const getNews = async () => {
        try {
            const response = await axios.get(`${BASE_URL}`);

            const news = response.data;
            const dom = new JSDOM(news);

            var list = []
            for (let i = 0; i < 10; i++) {

                const num = i * 3 + 1

                //title
                const title = dom.window.document.querySelector
                    (`#hnmain > tbody > tr:nth-child(3) > td > table > tbody\
                            tr:nth-child(${num}) > td:nth-child(3)`).textContent

                //by
                var by = "author placeholder"
                try {
                    by = dom.window.document.querySelector
                        (`#hnmain > tbody > tr:nth-child(3) > td > table > tbody\
                tr:nth-child(${num + 1}) > td.subtext > a.hnuser`).textContent

                } catch (err) {
                    by = 'author not listed'
                }
                //points
                
                var points = "points placeholder"
                try {
                    points = dom.window.document.querySelector
                        (`#hnmain > tbody > tr:nth-child(3) > td > table > tbody\
                            tr:nth-child(${num + 1}) > td.subtext > span.score`).textContent
                    points = String(points).match(/(\d)+/g)[0]
                } catch (err) {
                    
                    points = "0"
                }
                //comments
                var comments = "comments placeholder"
                try {
                    comments = dom.window.document.querySelector
                        (`#hnmain > tbody > tr:nth-child(3) > td > table > tbody\
                            tr:nth-child(${num + 1}) > td.subtext > a:nth-child(6)`).textContent
                } catch (err) {
                    comments = 'comments not listed'
                }
                //url
                var url = dom.window.document.querySelector
                    (`#hnmain > tbody > tr:nth-child(3) > td > table > tbody\
                            tr:nth-child(${num}) > td:nth-child(3) > a`).href

                if (url.match(/(item\?id=)\w+/g) != null) {
                    url = 'https://news.ycombinator.com/'.concat(url)
                }

                list.push({ 'title': title, 'by': by, 'points': points, 'comments': comments, 'url': url })
            }
            // Sort list based on points, descending
            list.sort(function (a, b) {
                var keyA = Number(a['points']),
                    keyB = Number(b['points']);
        
                if (keyA < keyB) return 1;
                if (keyA > keyB) return -1;
                return 0;
            });
            
            return list;
            
        } catch (errors) {
            console.error(errors);
            return ('err')
        }
    };
    return ( await getNews())
}



module.exports = fetchHacker