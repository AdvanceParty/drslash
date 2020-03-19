function formatSlackMessage (msg){
  return ({
	blocks: [
		{
			type: "section",
			text: {
				type: "plain_text",
				text: msg,
				emoji: true
			}
		}
	]
})

}

export default formatSlackMessage
