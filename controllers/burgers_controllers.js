var express =require("express");
 var router = express.Router();

//import model berger.js to usee its database functions
var db = require("../models");

//All the routes and logic setup
router.get("/",function(req,res) {
	res.redirect("/burgers");
});

router.get("/burgers", function(req, res){

	db.Burger.findAll({
	}).then(function(allBurgers) {
		var rburger = {
				burger_data : allBurgers
			};
			//return res.json(rburger
			return res.render("index", rburger);
	   });
});

router.post("/burgers/create", function(req,res){
	// return db.customer.create({
		db.Burger.create({
		burger_name:req.body.burger_name
	},{
		devouvered:req.body.deVouvred
	}).then(function(){
		res.redirect("/burgers");
	})
});

router.put('/burger/update/:id',function(req,res){
	db.Burger.update({deVoured : true},{
		fields: ['deVoured'],
			where : {id: req.params.id}
	
}).then(function(data){
	res.redirect('/burgers')
 })
});

router.delete('/burger/delete/:id', function(req , res){
	db.Burger.destroy({
		where: {
			id:req.params.id
		}
	}).then(function() {
		res.redirect("/burgers");
	});
});

  module.exports = router;
