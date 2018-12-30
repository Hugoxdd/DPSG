let wallets = document.getElementsByClassName('wallet');
let found = false;

for(let i = 0; i < wallets.length; i++) {
	if(!(wallets[i].classList.contains('empty') || wallets[i].classList.contains('used'))) {
		found = true;
	}
}

if(!found) {
	window.location = "https://keys.lol/bitcoin/random";
} else {
	alert('Found!');
}
