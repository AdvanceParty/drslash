module.exports = (req, res) => {
  // res.json({
  //     body: req.body,
  //     query: req.query,
  //     cookies: req.cookies
  // });
  const message = returnMessage();
  // const message = inputName ? `Hello ${formattedName}` : "I don't talk to strangers";
  res.json(
    message
  );
};

function returnMessage() {
  const slackMessage = {

    "blocks": [{
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "Hello! Ready to switch on your answering machine?"
        }
      },
      {
        "type": "actions",
        "callback_id":"switchOn",
        "elements": [{
          "type": "button",
          "name": "switchOnButton",
          "style": "danger",
          "text": {
            "type": "plain_text",
            "text": "Switch On",
            "emoji": true
          },
          "value": "switchOnMachine"
        }]
      }
    ]

  };
  return slackMessage;
};
