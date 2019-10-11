var mongoose   = require("mongoose"),
	Campground = require("./models/campground"),
	Comment    = require("./models/comment")

var data = [
	{
		name: "Camping in the mountains", 
		image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
		description: "Ironically, some of the coolest and most rewarding places to camp in the U.S. – namely in and around the Rocky Mountains – are also the hardest. Aside from being difficult to get to, campers who are physiologically used to living close to sea level can experience noticeable effects from high altitudes. Additionally weather conditions in the mountains are quite unpredictable, and have wreaked havoc on many a camping party in the past."
	},
	{
		name: "Oeschinen Lake, Kandersteg, Switzerland", 
		image: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1318&q=80"       ,
		description: "OESCHINEN LAKE in Switzerland’s Kander Valley is a big, beautiful alpine lake surrounded by the majestic Swiss Alps. At an elevation of 5,177 ft. and fed by glacial waters, it’s far from warm, but it’s beautiful to behold."
	},
	{
		name: "Archer River Roadhouse, Archer River, Australia", 
		image: "https://images.unsplash.com/photo-1515408320194-59643816c5b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"       ,
		description: "This inland locality takes its name from the Archer River which flows from east to west across the locality towards the Gulf of Carpentaria. The Oyala Thumotang National Park (formerly known as Mungkan Kandju National Park and Archer Bend National Park) is in the south-west of the locality."
	}
]


function seedDB(){
	//Remove all campgrounds
	Campground.deleteMany({}, function(err){
		if(err){
			console.log(err);
		}
		console.log("Removed Campgrounds!")
		//add a few campgrounds
		data.forEach(function(seed){
			Campground.create(seed, function(err, campground){
				if(err){
					console.log(err);
				} else {
					console.log("added a campground");
					//create a comment
					Comment.create(
						{
							text: "This place is great, but I wish there was internet!",
							author: "Penny"
						}, function(err, comment){
							if(err){
								console.log(err);
							} else {
								campground.comments.push(comment);
								campground.save();
								console.log("Created new comment");
							}
						});	
				}
			});
		});
	});	
}

module.exports = seedDB;
