# HackerNews Auto Fetching App

![Screenshot](./screenshot.png)
## Installation 
1.Clone git repository
2.run `npm init` in download directory to install dependencies
## Features
### Print Current Top 10 Articles

1.run `node ./server` to start the express server
2.run `npm run start` to start the react dev server 

#### Method 1: 
Open [http://localhost:3000](http://localhost:3000) react front end calls custom api and pretty-prints.

#### Method 2:
Open [http://localhost:5000/api/latest](http://localhost:5000/api/latest) to directly access custom api return.

### Print Top 10 Articles every 2 hours
In express server terminal, a node-cron scheduler is configured to prints the top 10 articles every 2 hours

## Some thoughts

1. I first decided that since I don't want to integrate a database, the 2 hour fetch implementation would have to be simple, I decided to use `node-cron` running on an express server. Alternatively, I could use a database updated every 2 hours using serverless functions. <-- this was done in my covid vaccine project

2. I wondered if a simple HTTP request would be able to get the site content. Tested the site with Postman and the result was positive. No need to use serverless browsers or infiltrating robot checkers.

3. During my process of locating relevant elements from the DOM and testing, I realized some edge cases need to be considered. For example, some posts lack certain attributes. I had to write a few try-catch loops to deal with the situation.

4. Sometimes, when the site is linking to content in its own domain, it drops the domain. Thus, I used regex to detect these urls and fix the format so that the JSON output includes working links.