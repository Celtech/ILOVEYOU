module.exports = client => {
    client.on('message', message => {
        console.log(message.content)

        if ('217085987447242752' === message.author.id) {
            message.delete()
        }
    });
}
