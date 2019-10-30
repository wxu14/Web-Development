# YelpCamp

* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

Each Campground has:
* Name
* Image
array
[
{name: , image:}
{name: , image:}
{name: , image:}
]

## Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

## Creating New Campgrounds
* Setup new campgroun POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

## Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

## Style the Navbar and form
* Add a navbar to all templates
* Style the new campground form

## Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!

## Show Page
* Review the RESTful routes we've view so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

RESTFUL ROUTES

name       url                verb       desc.
======================================================================
INDEX      /campgrounds        GET       Display a list of campgrounds
NEW        /campgrounds/new    GET       Display forms to make a new campground
CREATE     /campgrounds        POST      Add new campground to DB
SHOW       /campgrounds/:id    GET       Shows info about one campground

## Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly

## Add Seeds Files
* Add a seeds.js file
* Run the seeds file every time the server starts

## Add the Comment model!
* Make our errors go away!
* Display comments on campground show page

## Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

name       url                verb       desc.
======================================================================
INDEX      /campgrounds        GET       Display a list of campgrounds
NEW        /campgrounds/new    GET       Display forms to make a new campground
CREATE     /campgrounds        POST      Add new campground to DB
SHOW       /campgrounds/:id    GET       Shows info about one campground

NEW        /campgrounds/:id/comments/new    GET
CREATE     /campgrounds/:id/comments        POST

## Style Show Page
* Add sidebar to show page
* Display comments nicely

## Finish Styling Show Page
* Add public directory
* Add custom stylesheet

## Auth Pt. 1 - Add User Model
* Install all packages needed for auth
* Define user model

## Auth Pt. 2 - Register
* Configure Passport
* Add register routes
* Add register template

## Auth Pt. 3 - Login
* Add login routes
* Add login template

## Auth Pt. 4 - Logout/Navbar
* Add logout routes
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly

## Auth Pt. 5 - Show/hide links
* Show/hide auth links in navbar correctly

## Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

## Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground

## Editing Campgrounds
* Add method-override
* Add Edit Route for campground
* Add link to edit page
* Add update route
* Fix $set problem

## Deleting Campground
* Add Destroy Route
* Add Delete button

## Authorization Part 1: Campground
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/show edit and delete buttons

## Editing Comments
* Add Edit route for comments
* Add Edit buttons
* Add Update route

nested routes:
/campgrounds/:id/edit
/campgrounds/:id/comments/:comment_id/edit

## Deleting Comments
* Add Destroy Route
* Add Delete button

/campgrounds/:id/
/campgrounds/:id/comments/:comment_id

## Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/show edit and delete buttons
* Refactor Middleware

## Adding in Flash
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header

lalala
