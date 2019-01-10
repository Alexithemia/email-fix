// let dataset = require('./email_log.json');
function emailFix() {
  fetch(savedLink).then(function (response) {
    // console.log(response.json());
    return (response.json());
  })
    .then(function (myJson) {
      // let dataset = require('./email_log.json');
      let addresses = myJson.emails.reduce(function (emails, currentAddress) {
        // console.log(emails)
        // console.log(currentAddress);

        if (!emails.hasOwnProperty(currentAddress.email)) {
          emails[currentAddress.email] = null;
        }
        emails[currentAddress.email]++;

        return emails;
      }, {});
      let results = document.getElementById('results');
      results.innerHTML = '';
      for (key in addresses) {
        if (addresses.hasOwnProperty(key)) {
          console.log(key)
          console.log(addresses[key]);

          results.innerHTML += key + ':' + addresses[key] + '<br>';
        }
      }
      console.log(addresses);
    });

}
// emailFix(dataset);

let input = document.getElementById('link');
input.addEventListener('input', function (event) {
  saveLink(event.target.value);
});
let savedLink = '';
function saveLink(link) {
  savedLink = link;
  console.log(savedLink)
}

let checkBtn = document.getElementById('check');
checkBtn.addEventListener('click', function () {
  emailFix();
});