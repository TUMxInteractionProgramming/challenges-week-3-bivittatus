function switchChannel(channelName) {
    console.log('Tuning into channel ' + channelName)
    document.getElementById('current-channel').innerHTML = channelName;
    document.getElementById('location-app-bar-right').innerHTML = '<strong>upgrading.never.helps</strong>';
    document.getElementById('location-app-bar-right').href = "https://map.what3words.com/upgrading.never.helps";
}
function emptyStar() {
    $("#app-bar-star").attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
    $("#app-bar-star").attr('alt', 'alt="not starred');
}

function fillStar() {
    $("#app-bar-star").attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
    $("#app-bar-star").attr('alt', 'alt="starred');
}