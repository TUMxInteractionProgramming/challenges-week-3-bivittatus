console.log('app is alive')

function switchChannel(channelName) {
    console.log('Tuning into channel ' + channelName)
    document.getElementById('current-channel').innerHTML = channelName;
    document.getElementById('location-app-bar-right').innerHTML = '<strong>upgrading.never.helps</strong>';
    document.getElementById('location-app-bar-right').href = "https://map.what3words.com/upgrading.never.helps";
}