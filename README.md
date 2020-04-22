# StockTracker
This is a stocktracker for monitering any product's stock status on Bestbuy Canada. I used it specifically for Nintendo Switch.

The [original branch](https://github.com/xavierliwei/ProjectAnimalCrossing) has AWS email notification which I've removed and replaced with the node notifier. 

## Dependency
- Node 
- Node-notifier

## Instruction
0. clone this repo, run "npm install" to install dependencies
1. Change url, cookie
2. Run "node index.js" in the home directory in your local environment. Keep your machine and internet connection on.

## Notes
- You don't need Cookie IF your shipping method is not local store pick up.
- In the Cookie, the "customerZipCode=xxxxx" section is needed to help the website know where are you located, so that the availability for local store pick up can be checked.
