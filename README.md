# node-test
## Setup
Option 1 with Docker
1. `docker-machine start`
2. `docker-compose build`
3. `docker-compose up -d`
4. Access the app on the browser at `[docker-machine ip]:3000`

Option 2 local node
1. `cd [foldername]`
2. `npm install`
3. `npm start`
4. Access the app on the browser at `127.0.0.1:3000`

## Question 1
1. solution at `/`
   * Used express for routing and managing requests
   * Used bootstrap for styling
   * Used datatable for sorting
   * Used rss-parser
   * Used mustache for basic template rendering
   
## Question 2
 File is at `src/validate.js`
 
 if docker
 
`docker-compose exec web sh`

`node src/validate.js`  

 if local

`node src/validate.js`  

First function `validateRecurseve()` is a simple recursive function to compute the sum of digits

The second function `validatePromise` is a reimplementation of the recursive function with a promise component to wait until the function has completed computing.