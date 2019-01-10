let dataset = require('./email_log.json');
let addresses = dataset.emails.reduce(function (emails, currentAddress) {
  // console.log(emails)
  // console.log(currentAddress);

  if (!emails.hasOwnProperty(currentAddress.email)) {
    emails[currentAddress.email] = null;
  }
  emails[currentAddress.email]++;

  return emails;
}, {});

console.log(addresses);



