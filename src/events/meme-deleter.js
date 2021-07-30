module.exports = client => {
    const shittyMemes = [
        'https://tenor.com/view/genshin-gif-19434226',
        'https://tenor.com/view/abyss-mage-abyssmage-genshin-gif-19896809'
    ]

    client.on('message', message => {
        console.log(message.content)

        if (shittyMemes.includes(message.content)) {
            message.delete()
            message.channel.send('Go fuck yourself. Not a chance.');
        }
    });
}
