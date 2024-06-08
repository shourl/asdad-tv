document.addEventListener('DOMContentLoaded', function () {
  const player = new Plyr('#player', {});

  const channelList = document.getElementById('channelList');
  const channels = [
    { name: 'Channel 1', url: 'http://hz1.teleport.cc/HLS/SD.m3u8' },
    { name: 'Channel 2', url: 'URL_DO_M3U8_2' },
    // Dodaj więcej kanałów według potrzeb
  ];

  channels.forEach(channel => {
    const listItem = document.createElement('li');
    listItem.textContent = channel.name;
    listItem.addEventListener('click', function () {
      player.source = {
        type: 'video',
        sources: [
          {
            src: channel.url,
            type: 'application/x-mpegURL'
          }
        ]
      };
    });
    channelList.appendChild(listItem);
  });
});
