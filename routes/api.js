const express = require('express');
const router = express.Router();
const Store = require('../models/store');

// gets a list of stores from database
router.get('/stores', function(req,res,next){
    Store.find({}).then(function(store){
        res.send(store);
    });
});


// add a store to thedatabase
router.post('/stores', function(req,res,next){
    Store.create(req.body).then(function(store){
        res.send(store);
    }).catch(next);

});

// update a store in the database
router.put('/stores/:id', function(req,res,next){
    Store.findByIdAndUpdate({ _id : req.params.id},req.body).then(function(){
        Store.findOne({ _id : req.params.id}).then(function(store){
            res.send(store);
        });

    });
});

// delete a store from database
router.delete('/stores/:id', function(req,res,next){
    Store.findByIdAndRemove({ _id : req.params.id}).then(function(store){
        res.send(store);
    });

});

module.exports = router;