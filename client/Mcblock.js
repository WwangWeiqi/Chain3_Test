import './Mcblock.html'
import './chain3_init.js'

McBlocks.init();

Template['lastblock'].helpers({
  lastblk() {
  	//console.log(McBlocks.latest);
  	return numeral(McBlocks.latest.number).format('0,0');
  }
});