# HackerNews Auto Fetching App
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