module.exports = client => {
    const shittyMemes = [
        'https://tenor.com/view/genshin-gif-19434226',
        'https://tenor.com/view/abyss-mage-abyssmage-genshin-gif-19896809'
    ]

    client.on('message', message => {
        console.log(message.content)

        const urlParts = message.content.replace(/['"]+/g, '').match(/(https?:\/\/[^/]+(\/[\w-]+)+)/);

        if(urlParts !== null && urlParts.length > 0) {
            if (shittyMemes.includes(urlParts[0])) {
                message.delete()
                message.channel.send('Go fuck yourself. Not a chance.');
            }
        }
    });
}
