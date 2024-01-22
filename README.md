# JBTravelBlog

## Contents

- [User Story](#user-story)
- [Description](#description)
- [Future Plans](#future-plans)
- [Installation](#installation)
- [Usage](#usage)

## User Story

* As a traveler, I want to see a list of recommended local attractions and places to visit in the city I'm traveling to, so that I can plan my itinerary and not miss top things to see and do.

* As a traveler, I want to create an account so I can save and organise travel plans.

* As a traveler, I want to post detailed reviews of hotels and attractions I have visited, so I can share up-to-date first-hand recommendations with other travelers planning trips.

## Description

The JSON Bourne Travel site was conceived as a way for users to upload personal recommendations from their trips.  

Before accessing the entire site, users must log in with their details, while new users are able to sign-up. The database stores information about the user (username and encrypted password) and their recommendations (country, city, place, description, date created and link to the user who submitted). This information is retrieved by HTTP methods for each country's page, and the user who submitted is able to update and delete their posts.  

Having set up a solid structure following the MVC model we were able to link the front and back end, dynamically creating content through JavaScript and Handlebars.  

## Future Plans

We hope to improve the site by implementing additional features:
- Expand the scope to include all countries!
- Have more data attached to each recommendation through external API requests, allowing users to plan in more detail

## Usage

<!-- Link to heroku -->

https://github.com/MustafeMohamoud1/JBTravelBlog  

If running on a local device first ensure you have your credentials in the .env file. Then in your terminal:
1. Run `npm i` to install the dependencies needed
2. `mysql -u root -p` then your mysql password and hit enter
3. `source db/schema.sql;` to initialise the database, then exit with `\q`
4. `npm run seed` to populate the database
5. `npm start` to run the site on localhost port 3001

For details on the dependencies please click on these: [bcrypt](https://www.npmjs.com/package/bcrypt), [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize), [dotenv](https://www.npmjs.com/package/dotenv), [express](https://www.npmjs.com/package/express), [express-handlebars](https://www.npmjs.com/package/express-handlebars), [express-session](https://www.npmjs.com/package/express-session), [generate](https://www.npmjs.com/package/generate), [generate-dad-jokes](https://www.npmjs.com/package/generate-dad-jokes), [mysql2](https://www.npmjs.com/package/mysql2) and [sequelize](https://www.npmjs.com/package/sequelize).

## Credits

- [Lalita Kapadia](https://github.com/lalitakapadia)
- [Ben Lealan](https://github.com/BLealan)
- [Mustafe Mohamoud](https://github.com/MustafeMohamoud1)
- [Luis Moor](https://github.com/LuisM1874)
- [Mustafa Sigad](https://github.com/mustafasigad)


## Acceptance Criteria

* It's done when the `/` homepage route includes responsive navigation menu with links to:
Login page ,Travel planner and section Browse destinations by country.
  TO DO: Link to travel planner and countries

* It is done when the `/login` route renders a login form, allowing the user to log in, and then redirects to the login view. (where is the log in view requirements) ✔️

* It's done when the `/spain ` route renders travel recommendations from the database and displays recommended (Destinations/CITY  , attractions , Restaurants and hotels)

* It is done when the `/save` route renders the logged-in travelers's selected recommendation is saved to their travel plans after they click the 'Save' button.

* It is done when the `/recommendation` route renders the logged-in travels's a form to create a new recommendation.

* It's done when the `/travel_plan` route renders the logged-in user's to see saved and created recommendations

* It's done when a user on the travel_plan page can select a "Delete" button to remove their recommendations from the database.


<!-- * It's done when the `/project/:id` route renders an individual project's details based on the route parameter id. -->

* It's done when an existing user can enter their credentials on the login page to create a session on the server.✔️

* It's done when a new user can create an account on the login page and then be immediately logged in with a session.✔️

* It's done when only a logged in user can visit the `/travel_plan` route.

* It's done when a logged in user is redirected to `/travel_plan` when they try to visit `/login` again.

* It's done when a logged-in user can select a "Logout" button to remove their session.✔️

* It's done when the session for a logged-in user expires after a set time.

<!-- * It's done when the API routes to create and delete posts are protected from non logged-in users.

* It's done when the code is organized using MVC architecture.✔️

* It's done when the views are rendered with Handlebars.js templates. --> ✔️

## Specifications 

* The database models have the following fields and associations:

  * `User`

    * `id`: primary key

    * `name`

    * `email`

    * `password`

  * `Project`

    * `id`: primary key

    * `name`

    * `description`

    * `date_created`

     * `user_id`: foreign key that references `User.id`

  * Users have many projects, and projects belong to a user.

    * If a user is deleted, all associated projects are also deleted.