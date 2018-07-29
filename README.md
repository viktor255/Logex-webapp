## Installation

You need to have installed Node.js (tested version 9.11.1)

### How to run:
 - for first time run 'npm install'
 - to start backend run 'npm start'
 - to start Angular front-end run 'npm run build'
 - visit [http://localhost:3000/](http://localhost:3000/) to use application.
 
### Task

Get "Out in Amsterdam" data from Amsterdam Open Data site - https://data.amsterdam.nl/dataset/uit-in-amsterdam. This set describes restaurants, cafes and bars in Amsterdam region. Load the set in JSON format, show the data in tabular format and allow for applying filters.
Updated set URL

List of filters:
 - By name. Should allow filtering by substring.
 - By city. It is possible to select several cities at once. 
 - By start year. 
 - By post code.
 
Table columns
 - Name
 - City
 - Post code
 - Address
 - Start  year
 
Click on a table row should reveal the restaurant's details: name, full address, URL and pictures. 

Bonus goals 1

Add the ability to switch between tabular and map view. Show all found restaurants on the map. Show map in the restaurant details. 

Bonus goal 2

Load also "Events in Amsterdam" data set (https://data.amsterdam.nl/dataset/evenementen-in-amsterdam) and implement:  (updated url)
 - Show nearby events in the location's details. Events should be ordered by the distance from the restaurant/cafe/bar (Only events closer than 1km should be shown)
 - Allow for searching establishments that are close to a certain event. To select event you can either select event from the list, of filter event list by name and then select. It should be also possible to filter event list by year and month of event.

Technical requirements
 - The application should work in a modern browser. 
 - You can use any JavaScript libraries and CSS frameworks that you like, though we recommend using AngularJS and Bootstrap. For our projects we use AngularJS 1.x, Lodash 3 and our own CSS framework.
 - For server-side you could use NodeJS with "http-server" or similar package.

Deliverables

Please pack your solution as a single ZIP archive and provide README.TXT with explanations on how to run it. README could also contain any kind of additional information you want to give us along with your code. 
Notes:
The set also specifies the categories of given establishment, please ignore those. When we say "restaurant" we mean any place from the list