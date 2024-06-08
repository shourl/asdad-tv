const channels = [
    { name: 'Kanał 1', url: 'https://path.to/stream1.m3u8' },
    { name: 'Kanał 2', url: 'https://path.to/stream2.m3u8' },
    { name: 'Kanał 3', url: 'https://path.to/stream3.m3u8' }
];

const player = videojs('player');

function loadChannels() {
    const channelList = document.getElementById('channel-list');
    channelList.innerHTML = '';
    channels.forEach(channel => {
        const channelElement = document.createElement('div');
        channelElement.className = 'channel';
        channelElement.innerText = channel.name;
        channelElement.onclick = () => playChannel(channel.url);
        channelList.appendChild(channelElement);
    });
}

function playChannel(url) {
    player.src({ src: url, type: 'application/x-mpegURL' });
    player.play();
}

document.getElementById('channel-search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredChannels = channels.filter(channel => channel.name.toLowerCase().includes(searchTerm));
    const channelList = document.getElementById('channel-list');
    channelList.innerHTML = '';
    filteredChannels.forEach(channel => {
        const channelElement = document.createElement('div');
        channelElement.className = 'channel';
        channelElement.innerText = channel.name;
        channelElement.onclick = () => playChannel(channel.url);
        channelList.appendChild(channelElement);
    });
});

loadChannels();
