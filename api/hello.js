import formatSlackMessage from "./_formatSlackMessage"

module.exports = (req, res) => {
  // res.json({
  //     body: req.body,
  //     query: req.query,
  //     cookies: req.cookies
  // });
  const inputName = req.body.user_name;
  const formattedName = capitaliseFLetter(inputName);
  const message = inputName ? `Hello ${formattedName}, use /on to turn on your answering machine.` : "I don't talk to strangers";

  res.json(
    formatSlackMessage(message)
  );
};

function capitaliseFLetter(name) {
  const capitalisedName = name[0].toUpperCase() + name.slice(1);
  return capitalisedName;
};
