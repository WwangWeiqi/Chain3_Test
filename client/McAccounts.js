import './McAccounts.html'
import './chain3_init.js'

McAccounts.init();

Template['McAccounts'].helpers({
    account(){
    	return McAccounts.find().fetch();
    }

})