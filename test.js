var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('L13enKqzBD0KpqRSOPiCDg');

mandrill_client = new mandrill.Mandrill('L13enKqzBD0KpqRSOPiCDg');
var message = {
  "html": "<h1>test test test  </h1>",
  "text": "This is a test test test test test ",
  "subject": "test",
  "from_email": "jamesrwilliams91@gmail.com",
  "from_name": "james ",
  "to": [{
    "email": "stolenbikesman@gmail.com",
    "name": "John",
    "type": "to"
  }],
  "headers": {
    "Reply-To": "message.reply@example.com"
  },
  "important": false,
  "track_opens": null,
  "track_clicks": null,
  "auto_text": null,
  "auto_html": null,
  "inline_css": null,
  "url_strip_qs": null,
  "preserve_recipients": null,
  "view_content_link": null,
  "bcc_address": "message.bcc_address@example.com",
  "tracking_domain": null,
  "signing_domain": null,
  "return_path_domain": null,
  "merge": true,
  "merge_language": "mailchimp",
  "global_merge_vars": [{
    "name": "merge1",
    "content": "merge1 content"
  }],
  "merge_vars": [{
    "rcpt": "recipient.email@example.com",
    "vars": [{
      "name": "merge2",
      "content": "merge2 content"
    }]
  }]
};
var async = false;
var ip_pool = "Main Pool";
mandrill_client.messages.send({"message": message, "async": async, "ip_pool": ip_pool}, function(result) {
  console.log(result);
  /*
  [{
  "email": "recipient.email@example.com",
  "status": "sent",
  "reject_reason": "hard-bounce",
  "_id": "abc123abc123abc123abc123abc123"
}]
*/
}, function(e) {
  // Mandrill returns the error as an object with name and message keys
  console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
  // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
});
