import './McAccounts.html'
import './chain3_init.js'

McAccounts.init();


formatBalance = function(balance){
	return numeral(balance).format('0,0');
}

Template['McAccounts'].helpers({
    account(){
    	
    	/*_.each(McAccounts.find().fetch(),function(account){
            
            let fbalance = formatBalance(account.balance);
         
    	})

    	_.map(McAccounts.find().fetch(), function(account){
    		account.balance = formatBalance(account.balance);
    		console.log(account);
    		return account;
    	})
    	*/
    	//console.log(...McAccounts.find().fetch());
    	
    	return McAccounts.find().fetch();
    }

})