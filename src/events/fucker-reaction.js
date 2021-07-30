module.exports = client => {
    client.on('message', message => {
        console.log(message.content)

        message.react('🇫').catch(error => {
            console.error('Failed to delete the message:', error);
        })
        message.react('🇺').catch(error => {
            console.error('Failed to delete the message:', error);
        })
        message.react('🇨').catch(error => {
            console.error('Failed to delete the message:', error);
        })
        message.react('🇰').catch(error => {
            console.error('Failed to delete the message:', error);
        })
        message.react('🇪').catch(error => {
            console.error('Failed to delete the message:', error);
        })
        message.react('🇷').catch(error => {
            console.error('Failed to delete the message:', error);
        })
    });
}
