var MailDev = require('maildev');



  var maildev = new MailDev();

  maildev.port = 25;
  
  console.log(maildev.config);
  maildev.listen();

  // Handle new emails as they come in
  maildev.on('new', function(email){
    console.log('Received new email with subject: %s', email.subject);
  });
  
  console.log(maildev);

  // Get all emails
  maildev.getAllEmail(function(err, emails){
    if (err) return console.log(err);
    console.log('There are %s emails', emails.length);
  });