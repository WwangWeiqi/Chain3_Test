import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
//import {Mongo} from 'meteor/mongo'
import './main.html';
import './Mcblock.js'
import './McAccounts.js'
global.Buffer = global.Buffer || require("buffer").Buffer;

//const BLK = new Mongo.Collection('BLK');


//chain3 = new Chain3(new Chain3.providers.HttpProvider("http://localhost:8545"));
/*Template['chain_test'].onCreated(function helloOnCreated() {
   

});*/
	
Template['coinbase'].helpers({
  CBaddr() {
  	return chain3.mc.coinbase
  },

});

Template['blocknumber'].helpers({
	blkNumber() {
		setInterval(function(){
			Session.set('BLK',chain3.mc.blockNumber) 
		},1000)

		return Session.get('BLK');
  	
  }
})


