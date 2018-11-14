if (typeof chain3 !== 'undefined') {
  chain3 = new Chain3(chain3.currentProvider);
} else {
  // set the provider you want from Chain3.providers
  chain3 = new Chain3(new Chain3.providers.HttpProvider("http://localhost:8545"));
}
