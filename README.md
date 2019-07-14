# node-test
## Setup

1. `docker-machine start`
2. `docker-compose build`
3. `docker-compose up -d`

## Question 1
Access the app on the browser at `[docker-machine ip]:3000`

## Question 2
 File is at `src/validate.js`
 enter CLI
 
`docker-compose exec web sh`

`node src/validate.js`  

First function `validateRecurseve()` is a simple recursive function to compute the sum of digits

The second function `validatePromise` is a reimplementation of the recursive function with a promise component to wait until the function has completed computing.