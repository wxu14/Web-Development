var express    		 = require("express"),
	app        		 = express(),
	bodyParser 		 = require("body-parser"),
	mongoose   		 = require("mongoose"),
	Campground 		 = require("./models/campground"),
	seedDB     		 = require("./seeds"),
	Comment    		 = require("./models/comment"),
	passport         = require("passport"),
	LocalStrategy    = require("passport-local"),
	User             = require("./models/user"),
	methodOverride   = require("method-override"),
	flash            = require("connect-flash");

//requiring routes
var commentRoutes       = require("./routes/comments"),
    campgroundRoutes    = require("./routes/campgrounds"),
    indexRoutes         = require("./routes/index");
// seedDB();

require('dotenv').config()

var url = process.env.DATABASEURL || "mongodb://localhost:27017/yelp_camp"
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
//mongoose.connect("mongodb+srv://penny:19960607xwjXWJ@cluster0-awssg.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

//PASSPORT CONFIG
app.use(require("express-session")({
	secret: "Pretty Penny",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});

app.use("/", indexRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundRoutes);

app.listen(process.env.PORT|| 3000, process.env.IP, function(){
	console.log('server listening to port 3000');
});