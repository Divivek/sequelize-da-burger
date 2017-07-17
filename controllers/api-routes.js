// Dependencies
// =============================================================
// Requiring our burger model
var db = require("../models");

// Routes 
// =============================================================
module.exports = function(app){
    app.get("/api/burgers", function(req,res){
    //  retrieve all of the burgers from the database and res.json them
     // back to the user
      db.Burger.findAll({}).then(function(dbburgers){
            res.json(dbburgers);
      });
    });
};

   
    // POST route for saving a new burger.Createing todo with the data in req.body
app.post("/api/burgers",function(req,res){
   // createing a new burger and save it to the database
    // and then res.json back the new todo to the user 
    db.Burger.create({
        burger_name: req.body.burger_name
    }).then(function(createdBurgers){
        res.json(createdBurgers)

    });
});

  
    
    // DELETE route for deleting burgers
app.delete("/api/burgers/:id",function(req,res) {
    db.burgers.destroy({
        where:{
            id: req.params.id
        }
    }).then(function(updatedBurgers){
        res.jason(updatedBurgers);
    })
});
    
   
// PUT route for updating burgers. We can get the updated burgers data from req.body
app.put("/api/burgers", function(req, res) {
    db.Burger.update(
        {burger_name: req.body.burger_name},
        {where: {id: req.params.id}
    }).then(function(updatedburgers) {
        res,jason(updatedBurgers);
    })
});
};



