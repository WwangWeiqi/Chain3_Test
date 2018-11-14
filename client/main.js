import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
global.Buffer = global.Buffer || require("buffer").Buffer;
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  
  setInterval(function(){
  		return this.counter + 1
  	},1000) 
});

Template.hello.helpers({
  counter() {
  	/*setInterval(function(){
  		return Template.instance().counter.get() + 1
  	},1000) 
  	*/
  	return Template.instance().counter.get() ;
  },
});

Template.hello.events({

  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
