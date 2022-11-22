require("rootpath")();
const { application } = require("express");
const express = require('express');
const app = express();

const userDb = require("userDB.js");


app.get('/', getAll);

app.post('/', create);


function getAll(req, res) {
    userDb.getAll(function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
}

function create(req, res) {
    userDb.create(req.body, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
}


module.exports = app;
