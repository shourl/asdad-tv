document.addEventListener('DOMContentLoaded', function () {
  const player = new Plyr('#player', {});

  const channelList = document.getElementById('channelList');
  const searchInput = document.getElementById('searchInput');
  const channels = [
    { name: 'Channel 1', url: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8' },
    { name: 'Channel 2', url: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8' },
    // Dodaj więcej kanałów według potrzeb
  ];

  function displayChannels(channels) {
    channelList.innerHTML = '';
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
  }

  searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredChannels = channels.filter(channel => 
      channel.name.toLowerCase().includes(searchTerm)
    );
    displayChannels(filteredChannels);
  });

  displayChannels(channels);
});
