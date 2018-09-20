console.log('app is alive')

function switchChannel(channelName) {
    console.log('Tuning into channel ' + channelName)
    document.getElementById('current-channel').innerHTML = channelName;
}