import './Mcblock.html'
import './chain3_init.js'

McBlocks.init();

Template['lastblock'].helpers({
  lastblk() {
  	console.log(McBlocks.latest);
  	return McBlocks.latest.number;
  }
});