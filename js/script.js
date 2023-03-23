function generateNumber() {
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;
    var range = end - start + 1;
    var randomNumber = Math.floor(Math.random() * range) + parseInt(start);
    document.getElementById("result").innerHTML = randomNumber;
}

document.getElementById("raffle-form").addEventListener("submit", function(event) {
    event.preventDefault();
    generateNumber();
});
