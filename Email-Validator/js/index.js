let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "rahul",
    "email": "rahul@emailvalidation.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "emailvalidation.com",
    "reason": "invalid_mx",
    "mx_found": false,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}
submitbutton.addEventListener("click", async(e) => {
    e.preventDefault();
    console.log("clicked!");
    resultcontainer.innerHTML = `<img width="125" src="img/loading.svg" alt="">`
    let key = "ema_live_h8K4GE1CEBaNb5CMSigC20m2Pe1BPYYWOAHcqBok"
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await  res.json()
    let str = ''
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key] !== ""){
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }
    console.log(str)
    resultcontainer.innerHTML = str
})



