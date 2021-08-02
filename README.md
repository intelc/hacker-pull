# HackerNews auto fetching app



## Installation 

<ol>
<li>Clone git repository</li>
<li>run `npm init` in download directory to install dependencies</li>
</ol>
##Features

###Print Current Top 10 Articles
<ol>
<li>run `node ./server` to start the express server</li>
<li>run `npm run start` to start the react dev server </li>
</ol>
####Method 1: 
Open [http://localhost:3000](http://localhost:3000) react front end calls custom api and pretty-prints.

####Method 2:
Open [http://localhost:5000/api/latest](http://localhost:5000/api/latest) to directly access custom api return.

###Print Top 10 Articles every 2 hours
In express server terminal, a node-cron scheduler is configured to prints the top 10 articles every 2 hours



