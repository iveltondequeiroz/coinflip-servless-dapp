Moralis.initialize("INSERT_APP_ID"); // Application id from moralis.io
Moralis.serverURL = "INSERT_SERVER_URL"; //Server url from moralis.io
async function login() {
    currentUser = await Moralis.User.current();
    if(!currentUser){
        try {
            currentUser = await Moralis.Web3.authenticate();
            console.log(currentUser);
        } catch (error) {
            console.log(error);
        }
    }
    document.getElementById("login_button").style.display="none";
    document.getElementById("game").style.display="block";
}

async function flip(side){
    let amount = document.getElementById("amount").value
    let sideOption = side == "heads" ? 0:1;
    window.web3 = await Moralis.Web3.enable();
    let  contractAddress = "0xC458777A42AD7b9277dFaB827C086672f2b9bD99";
    let flipContract = new web3.eth.Contract(window.abi, contractAddress);
    
    flipContract.methods.flip(sideOption)
    .send({from: ethereum.selectedAddress, value: amount})
    .on('receipt', function(receipt){
        console.log(receipt);
        if(receipt.events.bet.returnValues.win){
            alert("you won!!!");
        } else {
            alert("you lost...");

        }
    });
}

document.getElementById("login_button").onclick = login;
document.getElementById("heads_button").onclick = function(){flip("heads")};
document.getElementById("tails_button").onclick = function(){flip("tails")};
