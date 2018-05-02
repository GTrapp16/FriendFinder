// link routes to data source holding array of information about friends
var express= require("express");
var path=require("path");
var app=express();
var friendArray = require("../data/friends.js");


module.exports = function(app) {

    app.get("/api/friends", function(request, response) {
        var friends= require(path.join(__dirname, "../data/friends.js"));
        response.json(friends);
    });

    app.post("/api/friends", function(request, response) {
        var friends = require(path.join(__dirname, "../data/friends.js"));
        var newFriend = request.body;

        var differences = [];
        var totalDifference=0;
        var score=0;

        for (var x=0;x<friends.length;x++){
            for (var i = 0; i<newUser.scores.length; i++){
                var difference = Math.abs(friends[x].scores[i] - newUser.scores[i]);
                totalDifference += difference; 
                score++;
                if(score === 10){ 
                    var match = {
                        friendIndex: x, 
                        scoreDifference: totalDifference
                    }
                    differences.push(match);
                    totalDifference=0;
                    score=0;
                }
            }
        }


console.log(JSON.stringify(differences));
differences.sort(function(a,b) {
    return parseFloat(a.scoreDifference)- parseFloat(b.scoreDifference);
});
console.log("Best Match " +JSON.stringify(differences[0]));
var bestMatchUserId= differences[0].userIndex;
var bestMatch = friends[bestMatchuserId];

friends.push(newFriend);
response.json(bestMatch);
    })
}
           