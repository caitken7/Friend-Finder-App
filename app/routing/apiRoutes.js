var path = require("path");
var friends = require("../data/friends.js")

module.exports = function(app) {
	// View friends JSON
	app.get("/api/friends", function(req, res) {
	  res.json(friends);
	});

	// Add a new friend
	app.post("/api/friends", function(req, res) {
		
		var userResponses = req.body.scores;

		// Find best match
		var matchName = '';
		var matchImage = '';
		var bestMatch = 50;
		for (var i=0; i < friends.length -1; i++) {
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);

			}
			console.log("diff " + i + ": " + diff)
			// If lowest difference, record the friend match
			if (diff < bestMatch) {
				// console.log('Closest match found = ' + diff);
				// console.log('Friend name = ' + friends[i].name);
				// console.log('Friend image = ' + friends[i].photo);
				bestMatch = diff;	
				matchName = friends[i].name;
				matchImage = friends[i].photo;
				console.log("NEW BEST MATCH NUMBER " + bestMatch)	
				console.log("NAME " + matchName)	
				console.log("IMAGE " + matchImage)
			}
		}

		// Send Response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});

}
