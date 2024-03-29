# JBTravelBlog

## Contents

- [User Story](#user-story)
- [Description](#description)
- [Future Plans](#future-plans)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Credits](#credits)

## User Story

* As a traveler, I want to see a list of recommended local attractions and places to visit in the city I'm traveling to, so that I can plan my itinerary and not miss top things to see and do.

* As a traveler, I want to create an account so I can save and organise travel plans.

* As a traveler, I want to post detailed reviews of hotels and attractions I have visited, so I can share up-to-date first-hand recommendations with other travelers planning trips.

## Description

The JSON Bourne Travel site was conceived as a way for users to upload personal recommendations from their trips.  

Before accessing the entire site, users must log in with their details, while new users are able to sign-up. The database stores information about the user (username and encrypted password) and their recommendations (country, city, place, description, date created and the user who submitted). This information is retrieved by HTTP methods for each country's page, with the user able to add new posts to each country, and the ability to delete posts. The world page contains statistics related to the sites database (number of cities posted about, user who has recommended most etc.) and a link to the recommendation page when clicked on; at the moment these statistics are hard-coded, and is on the agenda for future developments (see below).

Having set up a solid structure following the MVC model we were able to link the front and back end, dynamically creating content through JavaScript and Handlebars, with styling from Tailwind. Utilising several NPM packages enabled us to make code efficient as well as use some third-party projects, like the SVG map.

## Future Plans

We hope to improve the site by implementing additional features:
- Expand the scope to include all countries!
- Functioning edit button for recommendation posts
- Conditional for delete/edit tied to logged-in user
- World map currently "hard coded", so needs to be dynamically linked to database
- Have more data attached to each recommendation through external API requests, allowing users to plan in more detail

## Usage

https://jbtravelblogfinal-84a20cc94acf.herokuapp.com

https://github.com/MustafeMohamoud1/JBTravelBlog  

If running on a local device first ensure you have your credentials in the .env file. Then in your terminal:
1. Run `npm i` to install the dependencies needed
2. `mysql -u root -p` then your mysql password and hit enter
3. `source db/schema.sql;` to initialise the database, then exit with `\q`
4. Ensure your mysql password is entered in the .env file
5. `npm run seed` to populate the database
6. `npm start` to run the site on localhost port 3001

## Screenshots

![homepage](public/images/homepage.png)
![log-in page](public/images/log-in.png)
![sign-up page](public/images/sign-up.png)
![homepage when logged in](public/images/homepage-logged-in.png)
![france recommendation page](public/images/recommendation-france.png)
![post recommendation page](public/images/post-recommendation.png)
![france recommendation page with new post](public/images/recommendation-new.png)
![world map](public/images/world-map.png)

## Technologies Used

For details on the dependencies please click on these: [bcrypt](https://www.npmjs.com/package/bcrypt), [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize), [dotenv](https://www.npmjs.com/package/dotenv), [express](https://www.npmjs.com/package/express), [express-handlebars](https://www.npmjs.com/package/express-handlebars), [express-session](https://www.npmjs.com/package/express-session), [generate](https://www.npmjs.com/package/generate), [generate-dad-jokes](https://www.npmjs.com/package/generate-dad-jokes), [mysql2](https://www.npmjs.com/package/mysql2), [sequelize](https://www.npmjs.com/package/sequelize) and [svgMap](https://github.com/StephanWagner/svgMap).

## Credits

- [Lalita Kapadia](https://github.com/lalitakapadia)
- [Ben Lealan](https://github.com/BLealan)
- [Mustafe Mohamoud](https://github.com/MustafeMohamoud1)
- [Luis Moor](https://github.com/LuisM1874)
- [Mustafa Sigad](https://github.com/mustafasigad)