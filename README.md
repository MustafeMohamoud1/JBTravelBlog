# JBTravelBlog
## User Stories

* As a traveler, I want to see a list of recommended local attractions and places to visit in the city I'm traveling to, so that I can plan my itinerary and not miss top things to see and do.

* As a traveler, I want to create an account so I can save and organise travel plans.

*As a traveler, I want to post detailed reviews of hotels and attractions I have visited, so I can share up-to-date first-hand recommendations with other travelers planning trips.

### Acceptance Criteria

* It's done when the `/` homepage route includes responsive navigation menu with links to:
Login page ,Travel planner and section Browse destinations by country.

* It is done when the `/login` route renders a login form, allowing the user to log in, and then redirects to the login view. (where is the log in view requirements)

* It's done when the `/spain ` route renders travel recommendations from the database and displays recommended (Destinations/CITY  , attractions , Restaurants and hotels)

* It is done when the `/save` route renders the logged-in travelers's selected recommendation is saved to their travel plans after they click the 'Save' button.

* It is done when the `/recommendation` route renders the logged-in travels's a form to create a new recommendation.

* It's done when the `/travel_plan` route renders the logged-in user's to see saved and created recommendations

* It's done when a user on the travel_plan page can select a "Delete" button to remove their recommendations from the database.


<!-- * It's done when the `/project/:id` route renders an individual project's details based on the route parameter id. -->

* It's done when an existing user can enter their credentials on the login page to create a session on the server.

* It's done when a new user can create an account on the login page and then be immediately logged in with a session.

* It's done when only a logged in user can visit the `/travel_plan` route.

* It's done when a logged in user is redirected to `/travel_plan` when they try to visit `/login` again.

* It's done when a logged-in user can select a "Logout" button to remove their session.

* It's done when the session for a logged-in user expires after a set time.

<!-- * It's done when the API routes to create and delete posts are protected from non logged-in users.

* It's done when the code is organized using MVC architecture.

* It's done when the views are rendered with Handlebars.js templates. -->

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