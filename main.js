Moralis.initialize("INSERT_APP_ID"); // Application id from moralis.io
Moralis.serverURL = "INSERT_SERVER_URL"; //Server url from moralis.io

async function login() {
    try {
        currentUser = await Moralis.Web3.authenticate();
        console.log(currentUser);
        document.getElementById("login_button").style.display="none";
        document.getElementById("game").style.display="block";
    } catch (error) {
        console.log(error);
    }
}

async function flip(side){
    alert(side);
}

document.getElementById("login_button").onclick = login;
document.getElementById("heads_button").onclick = function(){flip("heads")};
document.getElementById("tails_button").onclick = function(){flip("tails")};
