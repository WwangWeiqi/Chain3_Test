import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
//import {Mongo} from 'meteor/mongo'
import './main.html';
import './Mcblock.js'
import './McAccounts.js'
global.Buffer = global.Buffer || require("buffer").Buffer;
SubChainProtocolProp = new Meteor.Collection('SubChainProtocolProp');
SubChainProtocolSCS = new Meteor.Collection('SubChainProtocolSCS');

//const BLK = new Mongo.Collection('BLK');

//chain3 = new Chain3(new Chain3.providers.HttpProvider("http://localhost:8545"));
Template['test_table'].onCreated(function() {
    Meteor.subscribe('SubChainProtocolProp');
});
	
Template['SCSs'].onCreated(function() {
    Session.set('currPage',0);
});

Template['coinbase'].helpers({
  CBaddr() {
  	return chain3.mc.coinbase
  }
});

Template['blocknumber'].helpers({
	blkNumber() {
		setInterval(function(){
			Session.set('BLK',chain3.mc.blockNumber) 
		},1000)
		return Session.get('BLK');
  }
})

Template['test_table'].helpers({
	props() {
		//alert(SubChainProtocolProp.find().fetch());
		return SubChainProtocolProp.find().fetch();
  	}
});

Template['test_table'].events({

	'click button'(){
		Session.set('query',this.SubChainProtocolAddr);
  		Modal.show('SCSs');
  		//console.log(this.SubChainProtocolAddr);
	}

})

Template['SCSs'].helpers({
	SCSs(){
	var query = Session.get('query');
	Meteor.call('showSCS',query,(e,r)=>{
		Session.set('all_pages',r);
		Session.set('pageNum',r.length);
	})
	all_pages = Session.get('all_pages');
	pageNum = Session.get('pageNum');
	var pageIdx =[];
	for(var i = 1; i <=pageNum; i++){
		pageIdx.push(i);
	}
	var currPage = Session.get('currPage');
	return {singlePage: all_pages[currPage], pageIdx: pageIdx};
},
	checkActive(idx){
		var currPage = Session.get('currPage');
		//console.log(idx);
		return (currPage == (idx-1)) && 'active';
	}
})

Template['SCSs'].events({
	'click li.idx'(event){
		var currPage = event.target.text;
		Session.set('currPage',currPage-1);
	},
	'click li#prev'(event){
		var currPage = Session.get('currPage');
		if (currPage !=0)
		Session.set('currPage',currPage-1);
	},
	'click li#next'(event){
		var currPage = Session.get('currPage');
		pageNum = Session.get('pageNum');
		if (currPage < pageNum - 1)
		Session.set('currPage',currPage+1);
	},

})





