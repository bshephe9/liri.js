require("dotenv").config();

const keys = require ('./keys.js');
const fs = require ("fs");
var request = require("request");
//require Spotify API 
var Spotify = require('node-spotify-api');
//file for logging results
var filename = './log.text';
//argv [2] chooses users actions, argv [3] input parameter
const command = process.argv[2];
const secondCommand = process.argv[3];

