// Routes 
//==========================================================
//route to display all the possible firends in a json 
var friends = require("../data/friends");

module.exports= function(app){

    app.get("/api/friends", function(req, res){
        return res.json(friends);
    });

app.post("/api/friends", function(req, res){
    console.log(req.body.name);
    console.log(req.body.scores.lenght);

    var match= {};
    var differenceToBeat = 100;

    for (var i = 0; i < friends.length; i++) {
        var difference = [];
        var totalDifference = 0;

        for (var j = 0; j< friends[i].scores.lenght; j++){
            difference.push(Math.abs(req.body.scores[j] - friends[i].scores[j]));
        };
        console.log(difference);

        for (var n = 0; n< difference.length;n++){
            totalDifference += difference[n];
        }
        console.log(totalDifference);

        if (match =={}){
            match = friends[i];
            differenceToBeat=totalDifference;
        }
        console.log(differenceToBeat);
    }

  

});

};