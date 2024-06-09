document.addEventListener('DOMContentLoaded', function () {
  const player = new Plyr('#player', {});

  const channelList = document.getElementById('channelList');
  const channels = [
[
    {
        "name": "9Go! (720p) [Geo-blocked]",
        "url": "https://9now-livestreams.akamaized.net/hls/live/2008312/go-syd/master.m3u8"
    },
    {
        "name": "13 Kids (1080p)",
        "url": "https://origin.dpsgo.com/ssai/event/LhHrVtyeQkKZ-Ye_xEU75g/master.m3u8"
    },
    {
        "name": "ABC Me (720p)",
        "url": "https://c.mjh.nz/abc-me.m3u8"
    },
    {
        "name": "Afarin TV (720p) [Not 24/7]",
        "url": "https://5ab29cc78f681.streamlock.net/afarinTV/livestream/playlist.m3u8"
    },
    {
        "name": "Aghapy Kids (1080p)",
        "url": "https://5b622f07944df.streamlock.net/aghapykids.tv/aghapykids2/playlist.m3u8"
    },
    {
        "name": "Akaram Kidz (460p) [Not 24/7]",
        "url": "http://akaram.zecast.net/akaram-live/akaramkidz/index.m3u8"
    },
    {
        "name": "Amou Yazid TV (1080p)",
        "url": "http://numide.servemp3.com:8089/hls/ay1.m3u8"
    },
    {
        "name": "Angela Anaconda",
        "url": "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/611e73687fcd580007d1f052/master.m3u8?appName=web&amp;appVersion=unknown&amp;clientTime=0&amp;deviceDNT=0&amp;deviceId=8e063bd1-1f2c-11ef-86d8-5d587df108c6&amp;deviceMake=Chrome&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=unknown&amp;includeExtendedEvents=false&amp;sid=28121508-e373-4b45-8f21-c48bbc48ecda&amp;serverSideAds=false"
    },
    {
        "name": "Ani",
        "url": "http://streaming.tv-teleport.ru/Ani/index.m3u8"
    },
    {
        "name": "Aqlvoy (480p)",
        "url": "http://gohoski.fvds.ru:3000/mediabay/645/playlist.m3u8"
    },
    {
        "name": "ARB Günəş [Geo-blocked]",
        "url": "http://149.255.152.199/arbgunes.m3u8"
    },
    {
        "name": "Atfal &amp; Mawaheb TV (1080p)",
        "url": "https://5aafcc5de91f1.streamlock.net/atfal1.com/atfal2/playlist.m3u8"
    },
    {
        "name": "Avatar",
        "url": "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/60b4c17a81e29300071d3a39/master.m3u8?appName=web&amp;appVersion=unknown&amp;clientTime=0&amp;deviceDNT=0&amp;deviceId=8e05edb7-1f2c-11ef-86d8-5d587df108c6&amp;deviceMake=Chrome&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=unknown&amp;includeExtendedEvents=false&amp;sid=640a4092-5016-4d01-bcbf-d66e4f7aa21d&amp;serverSideAds=false"
    },
    {
        "name": "Baby Shark TV (1080p)",
        "url": "https://newidco-babysharktv-1-us.roku.wurl.tv/playlist.m3u8"
    },
    {
        "name": "Baby Time (576p) [Geo-blocked]",
        "url": "https://strm.yandex.ru/kal/baby_time/baby_time0.m3u8"
    },
    {
        "name": "Balapan TV",
        "url": "https://balapantv-stream.qazcdn.com/balapantv/balapantv/playlist.m3u8"
    },
    {
        "name": "Battery Pop (XUMO) (720p)",
        "url": "https://dai2.xumo.com/amagi_hls_data_xumo1212A-redboxbatterypop/CDN/playlist.m3u8"
    },
    {
        "name": "Biznet Kids (480p)",
        "url": "http://livestream.biznetvideo.net/biznet_kids/smil:kids.smil/chunklist_w417362857_b2256000_slen_tkYml6a2V5bGl2ZXN0YXJ0dGltZT0wJmJpemtleWxpdmVlbmR0aW1lPTAmYml6a2V5bGl2ZUN1c3RvbVBhcmFtZXRlcj1teVBhcmFtZXRlciZiaXprZXlsaXZlaGFzaD1xQXJpMU0yeHVfTUFsbkh3VlJ0T3MyNGxSOFlfSFNEaWpOMkNSTmdoaWZVbGxoWXFRU0Rsa2QwcUU4Q2tad3hD.m3u8"
    },
    {
        "name": "Bob l'éponge",
        "url": "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5ffc8c345822750007e167de/master.m3u8?appName=web&amp;appVersion=unknown&amp;clientTime=0&amp;deviceDNT=0&amp;deviceId=8e059f93-1f2c-11ef-86d8-5d587df108c6&amp;deviceMake=Chrome&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=unknown&amp;includeExtendedEvents=false&amp;sid=eb72cd85-f8e2-414a-99d0-c0cd8a98518d&amp;serverSideAds=false"
    },
    {
        "name": "Boing (432p)",
        "url": "https://spa-ha-p002.cdn.masmediatv.es/SVoriginOperatorEdge/smil:17_HD.smil/index.m3u8"
    },
    {
        "name": "Boing Italy [Geo-blocked]",
        "url": "https://live2.msf.cdn.mediaset.net/content/hls_h0_clr_vos/live/channel(kb)/index.m3u8"
    },
    {
        "name": "Bolajon (486p)",
        "url": "https://st1-allplay-uz.b-cdn.net/3/iptv-58/index.m3u8"
    },
    {
        "name": "Boomerang France (720p)",
        "url": "http://51.81.185.2/BOOMERANG/index.m3u8"
    },
    {
        "name": " like Gecko) Chrome/81.0.4044.138 Safari/537.36\"",
        "url": "https://cdn6.goprimetime.info/feed/eI5rczhSQpWBcgOtqRLNWw/chboomberang/index.m3u8"
    },
    {
        "name": "Brat TV (1080p)",
        "url": "https://brat-rakuten.amagi.tv/playlist.m3u8"
    },
    {
        "name": "BRTV Kaku Childrens Channel",
        "url": "http://223.111.191.105/downflv.brtvcloud.com/kkkkasd/winfr.m3u8"
    },
    {
        "name": "Bubble Guppies",
        "url": "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/618e3c1106d23b0007366723/master.m3u8?appName=web&amp;appVersion=unknown&amp;clientTime=0&amp;deviceDNT=0&amp;deviceId=8e0662e5-1f2c-11ef-86d8-5d587df108c6&amp;deviceMake=Chrome&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=unknown&amp;includeExtendedEvents=false&amp;sid=7d78b066-1897-473b-a861-c3b256c623ae&amp;serverSideAds=false"
    },
    {
        "name": "Camp Spoopy (576p)",
        "url": "https://stream.ads.ottera.tv/playlist.m3u8?network_id=269"
    },
    {
        "name": "Cartoon Network (576p)",
        "url": "http://89.254.128.5:22280/cartoon_network/index.m3u8"
    },
    {
        "name": "Cartoon Network (1080p)",
        "url": "https://amg01448-samsungin-cartoonnw-samsungin-1y8kz.amagi.tv/playlist/amg01448-samsungin-cartoonnw-samsungin/playlist.m3u8"
    },
    {
        "name": "Cartoon Network FreeLive Brazil 2 (720p)",
        "url": "https://playout.cdn.cartoonnetwork.com.br/playout_05/playlist.m3u8"
    },
    {
        "name": "Cartoon Network FreeLive Brazil (720p)",
        "url": "https://playout.cdn.cartoonnetwork.com.br/playout_01/playlist.m3u8"
    },
    {
        "name": "Cartoon Network FreeLive Latam 2 (720p)",
        "url": "https://playout.cdn.cartoonnetwork.com.br/playout_06/playlist.m3u8"
    },
    {
        "name": "Cartoon Network FreeLive Latam (720p)",
        "url": "https://playout.cdn.cartoonnetwork.com.br/playout_02/playlist.m3u8"
    },
    {
        "name": "Cartoon Network Japan (400p)",
        "url": "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs25"
    },
    {
        "name": "Cartoon Network México (720p)",
        "url": "https://playout.cdn.cartoonnetwork.com.br/playout_02/playlist-720p.m3u8"
    },
    {
        "name": "Cartoon Network Russia (576p)",
        "url": "http://bkm.beetv.kz/btv/live/hls/000000015.m3u8"
    },
    {
        "name": "Cartoon Network Southeast Asia (1080p)",
        "url": "https://cdn1.skygo.mn/live/disk1/Cartoon_Network/HLS-FTA/Cartoon_Network.m3u8"
    },
    {
        "name": "Cartoonito FreeLive Brazil (720p)",
        "url": "https://playout.cdn.cartoonnetwork.com.br/playout_03/playlist.m3u8"
    },
    {
        "name": "Cartoonito FreeLive Latam (720p)",
        "url": "https://playout.cdn.cartoonnetwork.com.br/playout_04/playlist.m3u8"
    },
    {
        "name": "Cartoonito Italy [Geo-blocked]",
        "url": "https://live2.msf.cdn.mediaset.net/content/hls_h0_clr_vos/live/channel(la)/index.m3u8"
    },
    {
        "name": "Cartoonito México (720p)",
        "url": "https://playout.cdn.cartoonnetwork.com.br/playout_04/playlist-720p.m3u8"
    },
    {
        "name": "CBBC HD (720p) [Geo-blocked]",
        "url": "https://vs-cmaf-pushb-uk-live.akamaized.net/x=4/i=urn:bbc:pips:service:cbbc_hd/iptv_hd_abr_v1.mpd"
    },
    {
        "name": "CBeebies Asia (720p)",
        "url": "http://198.16.100.90:8278/Cbeebies/playlist.m3u8?tid=ME5E7901951779019517&amp;ct=19225&amp;tsum=03bb5bab7f669081444ce37cda408b8d"
    },
    {
        "name": "CBeebies HD (720p) [Geo-blocked]",
        "url": "https://vs-cmaf-pushb-uk-live.akamaized.net/x=4/i=urn:bbc:pips:service:cbeebies_hd/iptv_hd_abr_v1.mpd"
    },
    {
        "name": "Chinola TV (480p)",
        "url": "https://streaming.ath.cx:1936/chinolatv/chinolatv/playlist.m3u8"
    },
    {
        "name": "Clan TVE (1080p) [Geo-blocked]",
        "url": "https://rtvelivestream.akamaized.net/rtvesec/clan/clan_main_dvr.m3u8"
    },
    {
        "name": "Clan TVE Internacional (1080p)",
        "url": "https://rtvelivestream.akamaized.net/rtvesec/int/clan_int_main.m3u8"
    },
    {
        "name": "Cocoro (1080p)",
        "url": "https://4ea7abcc97144832b81dc50c6e8d6330.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Roku_Cocoro/playlist.m3u8"
    },
    {
        "name": "Cúla4 (1080p)",
        "url": "https://d3eq0jseza7fm5.cloudfront.net/tg4_vod_3.m3u8"
    },
    {
        "name": "Degrassi",
        "url": "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/611e71322f5f180007001dde/master.m3u8?appName=web&amp;appVersion=unknown&amp;clientTime=0&amp;deviceDNT=0&amp;deviceId=8e063bd0-1f2c-11ef-86d8-5d587df108c6&amp;deviceMake=Chrome&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=unknown&amp;includeExtendedEvents=false&amp;sid=b13bbde4-6ce3-474b-9630-e27748ff481f&amp;serverSideAds=false"
    },
    {
        "name": "Dios Te Ve Kids (720p)",
        "url": "https://s.emisoras.tv:8081/diostevekids/index.m3u8"
    },
    {
        "name": "Discovery Kids FreeLive Brazil (720p)",
        "url": "https://playout.cdn.cartoonnetwork.com.br/playout_07/playlist.m3u8"
    },
    {
        "name": "Discovery Kids FreeLive Latam (720p)",
        "url": "https://playout.cdn.cartoonnetwork.com.br/playout_08/playlist.m3u8"
    },
    {
        "name": "Disney Channel (432p)",
        "url": "https://spa-ha-p004.cdn.masmediatv.es/SVoriginOperatorEdge2/smil:21_HD.smil/manifest.m3u8"
    },
    {
        "name": "Disney Channel Japan (544p)",
        "url": "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=bs24"
    },
    {
        "name": "Disney Junior (544p)",
        "url": "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs23"
    },
    {
        "name": "Dora TV",
        "url": "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5f8ecb9524419b0007365a1c/master.m3u8?appName=web&amp;appVersion=unknown&amp;clientTime=0&amp;deviceDNT=0&amp;deviceId=8e050350-1f2c-11ef-86d8-5d587df108c6&amp;deviceMake=Chrome&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=unknown&amp;includeExtendedEvents=false&amp;sid=c938e920-2111-4877-9e36-97d7a0a0d005&amp;serverSideAds=false"
    },
    {
        "name": "Duck TV (720p)",
        "url": "https://tvup-fast-ottera-mmm-ducktv.secure2.footprint.net/DexaYJdJXkLqFxTK_DuckTVHDSAMS/DuckTVHDSAMS.stream/DuckTVHDSAMS/DuckTVHDSAMS_720p_AAC.stream/playlist.m3u8"
    },
    {
        "name": "EBC YOYO (720p)",
        "url": "https://ythls.armelin.one/channel/UCiWRSesvSYmY7YOyz0tv_zQ.m3u8"
    },
    {
        "name": "EBS kids (400p) [Not 24/7]",
        "url": "https://ebsonair.ebs.co.kr/ebsufamilypc/familypc1m/playlist.m3u8"
    },
    {
        "name": "Eureka (1080p)",
        "url": "https://play.cdn.enetres.net/C99D9A0676F3401589C768D47D31605C022/022/playlist.m3u8"
    },
    {
        "name": "Gulli",
        "url": "https://origin2-6play.live.6cloud.fr/pool_rnpls9by/gulli/sixplaysd/hls_short_q2hyb21h_gulli/index.m3u8"
    },
    {
        "name": "Gulli Bil Arabi (1080p)",
        "url": "https://shls-gulli-bil-arabi-prod-dub.shahid.net/out/v1/5454d215afba410c90b233f400730958/index.m3u8"
    },
    {
        "name": "Hala London TV Cartoon (720p)",
        "url": "https://playlist.fasttvcdn.com/pl/aipomvl0iozr0ha530i0xw/Cartoon/playlist.m3u8"
    },
    {
        "name": "HappyKids (720p)",
        "url": "https://happykids-vizio.amagi.tv/playlist.m3u8"
    },
    {
        "name": "HappyKids Junior (720p)",
        "url": "https://happykidsjunior-vizio.amagi.tv/playlist.m3u8"
    },
    {
        "name": "Horee! (720p) [Geo-blocked]",
        "url": "http://vod.linknetott.swiftcontent.com/Content/HLS/Live/Channel(ch375)/index.m3u8"
    },
    {
        "name": "Inazuma Eleven",
        "url": "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/611e75226b7f420007c3f319/master.m3u8?appName=web&amp;appVersion=unknown&amp;clientTime=0&amp;deviceDNT=0&amp;deviceId=8e063bd2-1f2c-11ef-86d8-5d587df108c6&amp;deviceMake=Chrome&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=unknown&amp;includeExtendedEvents=false&amp;sid=80879397-91d6-4d71-9c36-ad9f3ac25c0e&amp;serverSideAds=false"
    },
    {
        "name": "Jojko (1080p)",
        "url": "https://st01-2.iptv.joj.sk/104-tv-pc.m3u8"
    },
    {
        "name": "kabillion (720p)",
        "url": "https://dai2.xumo.com/amagi_hls_data_xumo1212A-redboxkabillion/CDN/playlist.m3u8"
    },
    {
        "name": "Kartoon Channel",
        "url": "https://cdn-apse1-prod.tsv2.amagi.tv/linear/amg01076-lightningintern-kartoonchannel-samsungnz/playlist.m3u8"
    },
    {
        "name": "KBS Kids (480p)",
        "url": "http://mytv.dothome.co.kr/ch/catv/6.php"
    },
    {
        "name": "Ketnet Junior (720p)",
        "url": "https://content.uplynk.com/channel/e11a05356cc44198977436418ad71832.m3u8"
    },
    {
        "name": "Kidoodle TV",
        "url": "https://kidoodletv-kdtv-1-ca.samsung.wurl.tv/playlist.m3u8"
    },
    {
        "name": "Kids Station (544p)",
        "url": "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs07"
    },
    {
        "name": "KidsClick (720p) [Geo-blocked]",
        "url": "https://usgeowall.sinclairstoryline.com/channel/1698bf57810a48c486b83d542bca298d.m3u8"
    },
    {
        "name": "KidsFlix (1080p) [Not 24/7]",
        "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=50"
    },
    {
        "name": "Kidz Atresmedia (720p) [Geo-blocked]",
        "url": "https://fast-channels.atresmedia.com/648c271d2bfab0e4177a0d61/648c271d2bfab0e4177a0d61.m3u8"
    },
    {
        "name": "KiKA (1080p) [Geo-blocked]",
        "url": "https://kikageohls.akamaized.net/hls/live/2022693/livetvkika_de/master.m3u8"
    },
    {
        "name": "Knowledge (720p) [Geo-blocked]",
        "url": "http://knstream1.azureedge.net/knlive/knlive_high.m3u8"
    },
    {
        "name": "Koogi TV (1080p)",
        "url": "https://5d658d7e9f562.streamlock.net/koogi.tv/koogi.smil/playlist.m3u8"
    },
    {
        "name": "Kuriakos Kids (1080p)",
        "url": "https://w2.manasat.com/kkids/smil:kkids.smil/playlist.m3u8"
    },
    {
        "name": "LEGO Channel (720p)",
        "url": "https://legochannel-vizio.amagi.tv/playlist.m3u8"
    },
    {
        "name": "Les Razmoket",
        "url": "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/619cee9d5dc3ed0007d845c8/master.m3u8?appName=web&amp;appVersion=unknown&amp;clientTime=0&amp;deviceDNT=0&amp;deviceId=8e0662e8-1f2c-11ef-86d8-5d587df108c6&amp;deviceMake=Chrome&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=unknown&amp;includeExtendedEvents=false&amp;sid=5e83b1e5-d8f7-4a55-9c3f-251caf9360f8&amp;serverSideAds=false"
    },
    {
        "name": "Logos TV Kids (720p) [Not 24/7]",
        "url": "https://streamer1.streamhost.org/salive/logoskidsH/playlist.m3u8"
    },
    {
        "name": "Lolly Kids (480p)",
        "url": "http://45.225.95.170:8000/play/a0ei/index.m3u8"
    },
    {
        "name": "M-Net Kids (720p)",
        "url": "http://ares.mnet.mk/hls/mnet-kids.m3u8"
    },
    {
        "name": "Majid TV (1080p)",
        "url": "https://vo-live.cdb.cdn.orange.com/Content/Channel/MajidChildrenChannel/HLS/index.m3u8"
    },
    {
        "name": "MBC 3 EUR (1080p)",
        "url": "https://shls-mbc3-eur-prod-dub.shahid.net/out/v1/fce09dd6a967431a871efb3b8dec9f82/index.m3u8"
    },
    {
        "name": "MBC 5",
        "url": "https://mbc-3-usa-ak.akamaized.net/out/v1/8bbfec9446d84c9ea0dfa34edede6db9/index.m3u8"
    },
    {
        "name": "MCN6 Music Channel (1080p) [Not 24/7]",
        "url": "https://d18fcxaqfnwjhj.cloudfront.net/CDN_Ingest/MCN6_MUSIC.smil/Playlist.m3u8"
    },
    {
        "name": "Mondo TV Kids",
        "url": "https://mondotv-mondotvkids-1-it.samsung.wurl.tv/playlist.m3u8"
    },
    {
        "name": "Moonbug Kids (1080p)",
        "url": "https://moonbug-rokuus.amagi.tv/playlist.m3u8"
    },
    {
        "name": "Multimania (Latvia) (576p)",
        "url": "https://void.greenhosting.ru/Multimania_Mpeg4/index.m3u8"
    },
    {
        "name": "My Kidz (1080p) [Geo-blocked]",
        "url": "http://210.210.155.37/uq2663/h/h191/index.m3u8"
    },
    {
        "name": "NCM Educational &amp; Kids Channel",
        "url": "https://cdn3.wowza.com/5/cHYzekYzM2kvTVFH/nevco/G0644_005/playlist.m3u8"
    },
    {
        "name": "New Kid TV (1080p)",
        "url": "https://b9860b21629b415987978bdbbfbc3095.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Roku_NewKID/playlist.m3u8"
    },
    {
        "name": "Nick Germany (1080p) [Geo-blocked]",
        "url": "https://0d26a00dfbb1.airspace-cdn.cbsivideo.com/nick1999/master/nick1999.m3u8"
    },
    {
        "name": "Nick HD+ (1080p)",
        "url": "https://prod-sports-north-gm.jiocinema.com/bpk-tv/Nick_HD_Plus_voot_MOB/Fallback/index.m3u8"
    },
    {
        "name": "Nick Jr India (1080p)",
        "url": "https://prod-sports-north-gm.jiocinema.com/bpk-tv/Nick_Junior_voot_MOB/Fallback/index.m3u8"
    },
    {
        "name": "Nickelodeon",
        "url": "http://streaming.tv-teleport.ru/Nickelodeon/index.m3u8"
    },
    {
        "name": "Nickelodeon East (720p)",
        "url": "http://143.244.60.30/NICKELODEON/index.m3u8"
    },
    {
        "name": "Nickelodeon Sonic Hindi (1080p)",
        "url": "https://prod-sports-north-gm.jiocinema.com/bpk-tv/Sonic_Nickelodeon_voot_MOB/Fallback/index.m3u8"
    },
    {
        "name": "Nicktoons",
        "url": "https://stream01.vnet.am/Boomerang/mono.m3u8"
    },
    {
        "name": "NickToons (720p)",
        "url": "http://143.244.60.30/NICKTOONS/index.m3u8"
    },
    {
        "name": "Nicktoons Scandinavia",
        "url": "http://89.254.128.5:22280/nicktoons/video.m3u8"
    },
    {
        "name": "Pakapaka (720p)",
        "url": "https://5fb24b460df87.streamlock.net/live-cont.ar/pakapaka/playlist.m3u8"
    },
    {
        "name": "PBS Kids Alaska (1080p)",
        "url": "https://livestream.pbskids.org/out/v1/2963202df0c142c69b5254a546473308/akst.m3u8"
    },
    {
        "name": "PBS Kids Eastern/Central (720p)",
        "url": "https://2-fss-2.streamhoster.com/pl_140/amlst:200914-1298290/playlist.m3u8"
    },
    {
        "name": "PBS Kids Hawaii (1080p)",
        "url": "https://livestream.pbskids.org/out/v1/19d1d62bf61b4aea9ec20f83b6450a4e/hast.m3u8"
    },
    {
        "name": "PBS Kids Mountain (1080p)",
        "url": "https://livestream.pbskids.org/out/v1/00a3b9014fa54c40bee6ca68a104a8a4/mst.m3u8"
    },
    {
        "name": "PBS Kids Pacific (1080p)",
        "url": "https://livestream.pbskids.org/out/v1/c707b9310f2848de849b336f9914adbc/pst.m3u8"
    },
    {
        "name": "Pingviin (576p)",
        "url": "https://void.greenhosting.ru/PingviinEE_Mpeg4/index.m3u8"
    },
    {
        "name": "Planeta Junior TV",
        "url": "https://deaplaneta-planetakidz-1-es.samsung.wurl.tv/playlist.m3u8"
    },
    {
        "name": "PlanetaTV Kids (1080p)",
        "url": "https://mediacpstreamchile.com:1936/8152/8152/playlist.m3u8"
    },
    {
        "name": "Pluto TV Animakids (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5f1aabee6f4a2c00076a322c/master.m3u8?advertisingId=channel&amp;appName=rokuchannel&amp;appVersion=1.0&amp;bmodel=bm1&amp;content=channel&amp;content_rating=ROKU_ADS_CONTENT_RATING&amp;content_type=livefeed&amp;coppa=false&amp;deviceDNT=1&amp;deviceId=channel&amp;deviceMake=rokuChannel&amp;deviceModel=web&amp;deviceType=rokuChannel&amp;deviceVersion=1.0&amp;embedPartner=rokuChannel&amp;is_lat=1&amp;platform=web&amp;rdid=channel&amp;tags=ROKU_CONTENT_TAGS"
    },
    {
        "name": "Pluto TV BabyFirst (720p) [Not 24/7]",
        "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ebac49ce4dc8b00078b23bc/master.m3u8?advertisingId=&amp;appName=web&amp;appVersion=5.14.0-0f5ca04c21649b8c8aad4e56266a23b96d73b83a&amp;app_name=web&amp;clientDeviceType=0&amp;clientID=6fbead95-26b1-415d-998f-1bdef62d10be&amp;clientModelNumber=na&amp;deviceDNT=false&amp;deviceId=6fbead95-26b1-415d-998f-1bdef62d10be&amp;deviceLat=19.4358&amp;deviceLon=-99.1441&amp;deviceMake=Chrome&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=88.0.4324.150&amp;marketingRegion=VE&amp;serverSideAds=false&amp;sessionID=b8e5a857-714a-11eb-b532-0242ac110002&amp;sid=b8e5a857-714a-11eb-b532-0242ac110002&amp;userId="
    },
    {
        "name": "Pluto TV Beyblade Burst Nick (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5e8b551ddcd25500072c4dad/master.m3u8?advertisingId=&amp;appName=web&amp;appStoreUrl=&amp;appVersion=DNT&amp;app_name=&amp;architecture=&amp;buildVersion=&amp;deviceDNT=1&amp;deviceId=5e8b551ddcd25500072c4dad&amp;deviceLat=&amp;deviceLon=&amp;deviceMake=web&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=DNT&amp;includeExtendedEvents=false&amp;marketingRegion=DE&amp;serverSideAds=false&amp;sid=a38b88ed-0712-11eb-8b9f-0242ac110002&amp;terminate=false&amp;userId="
    },
    {
        "name": "Pluto TV Blaze Nick (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5e8b60419becf60008c841fd/master.m3u8?advertisingId=&amp;appName=web&amp;appStoreUrl=&amp;appVersion=DNT&amp;app_name=&amp;architecture=&amp;buildVersion=&amp;deviceDNT=1&amp;deviceId=5e8b60419becf60008c841fd&amp;deviceLat=&amp;deviceLon=&amp;deviceMake=web&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=DNT&amp;includeExtendedEvents=false&amp;marketingRegion=DE&amp;serverSideAds=false&amp;sid=ebc579c0-0712-11eb-97af-0242ac110002&amp;terminate=false&amp;userId="
    },
    {
        "name": "Pluto TV Blue's Clues Nick (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5e8b564ff59d130007363823/master.m3u8?advertisingId=&amp;appName=web&amp;appStoreUrl=&amp;appVersion=DNT&amp;app_name=&amp;architecture=&amp;buildVersion=&amp;deviceDNT=1&amp;deviceId=5e8b564ff59d130007363823&amp;deviceLat=&amp;deviceLon=&amp;deviceMake=web&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=DNT&amp;includeExtendedEvents=false&amp;marketingRegion=DE&amp;serverSideAds=false&amp;sid=29e99f3f-0713-11eb-a59f-0242ac110002&amp;terminate=false&amp;userId="
    },
    {
        "name": "Pluto TV Bob Esponja (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5f1aca0b4e448e00075e7c5e/master.m3u8?advertisingId=channel&amp;appName=rokuchannel&amp;appVersion=1.0&amp;bmodel=bm1&amp;content=channel&amp;content_rating=ROKU_ADS_CONTENT_RATING&amp;content_type=livefeed&amp;coppa=false&amp;deviceDNT=1&amp;deviceId=channel&amp;deviceMake=rokuChannel&amp;deviceModel=web&amp;deviceType=rokuChannel&amp;deviceVersion=1.0&amp;embedPartner=rokuChannel&amp;is_lat=1&amp;platform=web&amp;rdid=channel&amp;tags=ROKU_CONTENT_TAGS"
    },
    {
        "name": "Pluto TV Bubble Guppies (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5e8b5a4bb7da5c0007e5c9e9/master.m3u8?advertisingId=&amp;appName=web&amp;appStoreUrl=&amp;appVersion=DNT&amp;app_name=&amp;architecture=&amp;buildVersion=&amp;deviceDNT=1&amp;deviceId=5e8b5a4bb7da5c0007e5c9e9&amp;deviceLat=&amp;deviceLon=&amp;deviceMake=web&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=DNT&amp;includeExtendedEvents=false&amp;marketingRegion=DE&amp;serverSideAds=false&amp;sid=5c631817-0713-11eb-9df2-0242ac110002&amp;terminate=false&amp;userId="
    },
    {
        "name": "Pluto TV Classic Nick (Brazil) (240p)",
        "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5f12151794c1800007a8ae63/master.m3u8?advertisingId=&amp;appName=web&amp;appStoreUrl=&amp;appVersion=DNT&amp;app_name=&amp;architecture=&amp;buildVersion=&amp;deviceDNT=0&amp;deviceId=5f12151794c1800007a8ae63&amp;deviceLat=-23.5475&amp;deviceLon=-46.6361&amp;deviceMake=web&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=DNT&amp;includeExtendedEvents=false&amp;marketingRegion=BR&amp;serverSideAds=false&amp;sid=730&amp;terminate=false&amp;userId="
    },
    {
        "name": "Pluto TV Dora TV (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5e43c344b54fe800093552f4/master.m3u8?advertisingId=&amp;appName=web&amp;appStoreUrl=&amp;appVersion=DNT&amp;app_name=&amp;architecture=&amp;buildVersion=&amp;deviceDNT=1&amp;deviceId=5e43c344b54fe800093552f4&amp;deviceLat=&amp;deviceLon=&amp;deviceMake=web&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=DNT&amp;includeExtendedEvents=false&amp;marketingRegion=DE&amp;serverSideAds=false&amp;sid=c28ebf75-0713-11eb-97af-0242ac110002&amp;terminate=false&amp;userId="
    },
    {
        "name": "Pluto TV iCarly (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5e8b580a233dc90007f0cb9d/master.m3u8?advertisingId=&amp;appName=web&amp;appStoreUrl=&amp;appVersion=DNT&amp;app_name=&amp;architecture=&amp;buildVersion=&amp;deviceDNT=1&amp;deviceId=5e8b580a233dc90007f0cb9d&amp;deviceLat=&amp;deviceLon=&amp;deviceMake=web&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=DNT&amp;includeExtendedEvents=false&amp;marketingRegion=DE&amp;serverSideAds=false&amp;sid=4c53d6ac-a6d2-4c2c-9403-6101f770b205&amp;terminate=false&amp;userId="
    },
    {
        "name": "Pluto TV iCarly+ (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5f3d2cb9f5b291000773807a/master.m3u8?advertisingId=&amp;appName=web&amp;appStoreUrl=&amp;appVersion=DNT&amp;app_name=&amp;architecture=&amp;buildVersion=&amp;deviceDNT=1&amp;deviceId=5f3d2cb9f5b291000773807a&amp;deviceLat=&amp;deviceLon=&amp;deviceMake=web&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=DNT&amp;includeExtendedEvents=false&amp;marketingRegion=DE&amp;serverSideAds=false&amp;sid=4c128fa6-7ec2-4a50-a81b-37f9e8c1e48f&amp;terminate=false&amp;userId="
    },
    {
        "name": "Pluto TV Junior",
        "url": "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5f8ecb336537e8000764a17f/master.m3u8?appName=web&amp;appVersion=unknown&amp;clientTime=0&amp;deviceDNT=0&amp;deviceId=8e04dc43-1f2c-11ef-86d8-5d587df108c6&amp;deviceMake=Chrome&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=unknown&amp;includeExtendedEvents=false&amp;sid=39cb1f02-1907-4cc7-8224-1bd6adfb09bc&amp;serverSideAds=false"
    },
    {
        "name": "Pluto TV Kids (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ad9b648e738977e2c312131/master.m3u8?advertisingId=&amp;appName=web&amp;appStoreUrl=&amp;appVersion=DNT&amp;app_name=&amp;architecture=&amp;buildVersion=&amp;deviceDNT=1&amp;deviceId=5ad9b648e738977e2c312131&amp;deviceLat=&amp;deviceLon=&amp;deviceMake=web&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=DNT&amp;includeExtendedEvents=false&amp;marketingRegion=DE&amp;serverSideAds=false&amp;sid=30292edb-0714-11eb-97af-0242ac110002&amp;terminate=false&amp;userId="
    },
    {
        "name": "Pluto TV Kids Animation",
        "url": "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5f8eba14a4ffb8000764e950/master.m3u8?appName=web&amp;appVersion=unknown&amp;clientTime=0&amp;deviceDNT=0&amp;deviceId=8e04dc42-1f2c-11ef-86d8-5d587df108c6&amp;deviceMake=Chrome&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=unknown&amp;includeExtendedEvents=false&amp;sid=1894d5d0-76ab-4321-9f74-30abda806f6e&amp;serverSideAds=false"
    },
    {
        "name": "Pluto TV Kids Animation (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5db0ad56edc89300090d2ebb/master.m3u8?advertisingId=channel&amp;appName=rokuchannel&amp;appVersion=1.0&amp;bmodel=bm1&amp;channel_id=channel&amp;content=channel&amp;content_rating=ROKU_ADS_CONTENT_RATING&amp;content_type=livefeed&amp;coppa=false&amp;deviceDNT=1&amp;deviceId=channel&amp;deviceMake=rokuChannel&amp;deviceModel=web&amp;deviceType=rokuChannel&amp;deviceVersion=1.0&amp;embedPartner=rokuChannel&amp;genre=ROKU_ADS_CONTENT_GENRE&amp;is_lat=1&amp;platform=web&amp;rdid=channel&amp;studio_id=viacom&amp;tags=ROKU_CONTENT_TAGS"
    },
    {
        "name": "Pluto TV Kids Collection (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5f92b625c1ffbc0007e60c37/master.m3u8?advertisingId=&amp;appName=web&amp;appVersion=5.14.0-0f5ca04c21649b8c8aad4e56266a23b96d73b83a&amp;app_name=web&amp;clientDeviceType=0&amp;clientID=6fbead95-26b1-415d-998f-1bdef62d10be&amp;clientModelNumber=na&amp;deviceDNT=false&amp;deviceId=6fbead95-26b1-415d-998f-1bdef62d10be&amp;deviceLat=48.8582&amp;deviceLon=2.3387&amp;deviceMake=Chrome&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=88.0.4324.150&amp;marketingRegion=FR&amp;serverSideAds=false&amp;sessionID=cc7dc550-6be3-11eb-9c02-0242ac110002&amp;sid=cc7dc550-6be3-11eb-9c02-0242ac110002&amp;userId="
    },
    {
        "name": "Pluto TV Kids Gaming",
        "url": "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/611e6ddc7fcd580007d1eb5f/master.m3u8?appName=web&amp;appVersion=unknown&amp;clientTime=0&amp;deviceDNT=0&amp;deviceId=8e0614c9-1f2c-11ef-86d8-5d587df108c6&amp;deviceMake=Chrome&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=unknown&amp;includeExtendedEvents=false&amp;sid=e5e05ce9-206e-4e18-bc1a-aeaae6cc75d3&amp;serverSideAds=false"
    },
    {
        "name": "Pluto TV Kids Séries",
        "url": "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5f8eb99ff17815000784a3b0/master.m3u8?appName=web&amp;appVersion=unknown&amp;clientTime=0&amp;deviceDNT=0&amp;deviceId=8e04dc41-1f2c-11ef-86d8-5d587df108c6&amp;deviceMake=Chrome&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=unknown&amp;includeExtendedEvents=false&amp;sid=1b78d402-2a11-47c6-a674-a4b8f5098e41&amp;serverSideAds=false"
    },
    {
        "name": "Pluto TV Nick (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ede448d3d50590007a4419e/master.m3u8?advertisingId=&amp;appName=web&amp;appStoreUrl=&amp;appVersion=DNT&amp;app_name=&amp;architecture=&amp;buildVersion=&amp;deviceDNT=1&amp;deviceId=5ede448d3d50590007a4419e&amp;deviceLat=&amp;deviceLon=&amp;deviceMake=web&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=DNT&amp;includeExtendedEvents=false&amp;marketingRegion=DE&amp;serverSideAds=false&amp;sid=fbbb3638-0714-11eb-aeab-0242ac110002&amp;terminate=false&amp;userId="
    },
    {
        "name": "Pluto TV Nick Clásico (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ddd7c348520b40009c347e2/master.m3u8?advertisingId=&amp;appName=web&amp;appVersion=5.14.0-0f5ca04c21649b8c8aad4e56266a23b96d73b83a&amp;app_name=web&amp;clientDeviceType=0&amp;clientID=6fbead95-26b1-415d-998f-1bdef62d10be&amp;clientModelNumber=na&amp;deviceDNT=false&amp;deviceId=6fbead95-26b1-415d-998f-1bdef62d10be&amp;deviceLat=19.4358&amp;deviceLon=-99.1441&amp;deviceMake=Chrome&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=88.0.4324.150&amp;marketingRegion=VE&amp;serverSideAds=false&amp;sessionID=b8e5a857-714a-11eb-b532-0242ac110002&amp;sid=b8e5a857-714a-11eb-b532-0242ac110002&amp;userId="
    },
    {
        "name": "Pluto TV Nick Emma einfach magisch! (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5f4796368174910007756454/master.m3u8?advertisingId=&amp;appName=web&amp;appStoreUrl=&amp;appVersion=DNT&amp;app_name=&amp;architecture=&amp;buildVersion=&amp;deviceDNT=1&amp;deviceId=5f4796368174910007756454&amp;deviceLat=&amp;deviceLon=&amp;deviceMake=web&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=DNT&amp;includeExtendedEvents=false&amp;marketingRegion=DE&amp;serverSideAds=false&amp;sid=db62fa8b-15bd-11eb-bde1-0242ac110002&amp;terminate=false&amp;userId="
    },
    {
        "name": "Pluto TV Nick Jr. (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ede45451dce190007ef9ff2/master.m3u8?advertisingId=&amp;appName=web&amp;appStoreUrl=&amp;appVersion=DNT&amp;app_name=&amp;architecture=&amp;buildVersion=&amp;deviceDNT=1&amp;deviceId=5ede45451dce190007ef9ff2&amp;deviceLat=&amp;deviceLon=&amp;deviceMake=web&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=DNT&amp;includeExtendedEvents=false&amp;marketingRegion=DE&amp;serverSideAds=false&amp;sid=d1d4cf70-0714-11eb-a59f-0242ac110002&amp;terminate=false&amp;userId="
    },
    {
        "name": "Pluto TV Nick Jr. Club (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ddd7cb2cbb9010009b4fe32/master.m3u8?advertisingId=&amp;appName=web&amp;appVersion=5.14.0-0f5ca04c21649b8c8aad4e56266a23b96d73b83a&amp;app_name=web&amp;clientDeviceType=0&amp;clientID=6fbead95-26b1-415d-998f-1bdef62d10be&amp;clientModelNumber=na&amp;deviceDNT=false&amp;deviceId=6fbead95-26b1-415d-998f-1bdef62d10be&amp;deviceLat=19.4358&amp;deviceLon=-99.1441&amp;deviceMake=Chrome&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=88.0.4324.150&amp;marketingRegion=VE&amp;serverSideAds=false&amp;sessionID=b8e5a857-714a-11eb-b532-0242ac110002&amp;sid=b8e5a857-714a-11eb-b532-0242ac110002&amp;userId="
    },
    {
        "name": "Pluto TV Nick Latino (720p) [Not 24/7]",
        "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5d8d08395f39465da6fb3ec4/master.m3u8?advertisingId=&amp;appName=web&amp;appStoreUrl=&amp;appVersion=DNT&amp;app_name=&amp;architecture=&amp;buildVersion=&amp;deviceDNT=0&amp;deviceId=5d8d08395f39465da6fb3ec4&amp;deviceLat=&amp;deviceLon=&amp;deviceMake=web&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=DNT&amp;includeExtendedEvents=false&amp;marketingRegion=US&amp;serverSideAds=false&amp;sid=997&amp;terminate=false&amp;userId="
    },
    {
        "name": "Pluto TV Retro Toons",
        "url": "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/611e6a9b4bb5790007a6f0f8/master.m3u8?appName=web&amp;appVersion=unknown&amp;clientTime=0&amp;deviceDNT=0&amp;deviceId=8e0614c8-1f2c-11ef-86d8-5d587df108c6&amp;deviceMake=Chrome&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=unknown&amp;includeExtendedEvents=false&amp;sid=e3784c13-5aeb-4c18-bd31-9334376945c6&amp;serverSideAds=false"
    },
    {
        "name": "Pluto TV Retro Toons (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5e1c669094e0e80009b22ab8/master.m3u8?advertisingId=&amp;appName=web&amp;appStoreUrl=&amp;appVersion=DNT&amp;app_name=&amp;architecture=&amp;buildVersion=&amp;deviceDNT=1&amp;deviceId=5e1c669094e0e80009b22ab8&amp;deviceLat=&amp;deviceLon=&amp;deviceMake=web&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=DNT&amp;includeExtendedEvents=false&amp;marketingRegion=DE&amp;serverSideAds=false&amp;sid=886c7aee-0585-11eb-8b9f-0242ac110002&amp;terminate=false&amp;userId="
    },
    {
        "name": "Pluto TV Rugrats (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/610c09219fc0430007a3fce6/master.m3u8?advertisingId=channel&amp;appName=rokuchannel&amp;appVersion=1.0&amp;bmodel=bm1&amp;channel_id=channel&amp;content=channel&amp;content_rating=ROKU_ADS_CONTENT_RATING&amp;content_type=livefeed&amp;coppa=false&amp;deviceDNT=1&amp;deviceId=channel&amp;deviceMake=rokuChannel&amp;deviceModel=web&amp;deviceType=rokuChannel&amp;deviceVersion=1.0&amp;embedPartner=rokuChannel&amp;genre=ROKU_ADS_CONTENT_GENRE&amp;is_lat=1&amp;platform=web&amp;rdid=channel&amp;serverSideAds=false&amp;studio_id=viacom&amp;tags=ROKU_CONTENT_TAGS"
    },
    {
        "name": "Pluto TV Rugrats Crecidos (240p)",
        "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5ea7215005d66d0007e8128a/master.m3u8?advertisingId=&amp;appName=web&amp;appVersion=5.14.0-0f5ca04c21649b8c8aad4e56266a23b96d73b83a&amp;app_name=web&amp;clientDeviceType=0&amp;clientID=6fbead95-26b1-415d-998f-1bdef62d10be&amp;clientModelNumber=na&amp;deviceDNT=false&amp;deviceId=6fbead95-26b1-415d-998f-1bdef62d10be&amp;deviceLat=19.4358&amp;deviceLon=-99.1441&amp;deviceMake=Chrome&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=88.0.4324.150&amp;marketingRegion=VE&amp;serverSideAds=false&amp;sessionID=b8e5a857-714a-11eb-b532-0242ac110002&amp;sid=b8e5a857-714a-11eb-b532-0242ac110002&amp;userId="
    },
    {
        "name": "Pluto TV Sam &amp; Cat (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5e8b5ba20af628000707cee3/master.m3u8?advertisingId=channel&amp;appName=rokuchannel&amp;appVersion=1.0&amp;bmodel=bm1&amp;channel_id=channel&amp;content=channel&amp;content_rating=ROKU_ADS_CONTENT_RATING&amp;content_type=livefeed&amp;coppa=false&amp;deviceDNT=1&amp;deviceId=channel&amp;deviceMake=rokuChannel&amp;deviceModel=web&amp;deviceType=rokuChannel&amp;deviceVersion=1.0&amp;embedPartner=rokuChannel&amp;genre=ROKU_ADS_CONTENT_GENRE&amp;is_lat=1&amp;platform=web&amp;rdid=channel&amp;studio_id=viacom&amp;tags=ROKU_CONTENT_TAGS"
    },
    {
        "name": "Pluto TV SpongeBob Schwammkopf (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5d00e8adaab96b5635b2a005/master.m3u8?advertisingId=channel&amp;appName=rokuchannel&amp;appVersion=1.0&amp;bmodel=bm1&amp;channel_id=channel&amp;content=channel&amp;content_rating=ROKU_ADS_CONTENT_RATING&amp;content_type=livefeed&amp;coppa=false&amp;deviceDNT=1&amp;deviceId=channel&amp;deviceMake=rokuChannel&amp;deviceModel=web&amp;deviceType=rokuChannel&amp;deviceVersion=1.0&amp;embedPartner=rokuChannel&amp;genre=ROKU_ADS_CONTENT_GENRE&amp;is_lat=1&amp;platform=web&amp;rdid=channel&amp;studio_id=viacom&amp;tags=ROKU_CONTENT_TAGS"
    },
    {
        "name": "Pluto TV Teen (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5dd6de52b9914200091f047a/master.m3u8?advertisingId=&amp;appName=web&amp;appVersion=5.14.0-0f5ca04c21649b8c8aad4e56266a23b96d73b83a&amp;app_name=web&amp;clientDeviceType=0&amp;clientID=6fbead95-26b1-415d-998f-1bdef62d10be&amp;clientModelNumber=na&amp;deviceDNT=false&amp;deviceId=6fbead95-26b1-415d-998f-1bdef62d10be&amp;deviceLat=19.4358&amp;deviceLon=-99.1441&amp;deviceMake=Chrome&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=88.0.4324.150&amp;marketingRegion=VE&amp;serverSideAds=false&amp;sessionID=b8e5a857-714a-11eb-b532-0242ac110002&amp;sid=b8e5a857-714a-11eb-b532-0242ac110002&amp;userId="
    },
    {
        "name": "Pluto TV Teen Stars (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/60016a60a8e3520008e0d331/master.m3u8?advertisingId=channel&amp;appName=rokuchannel&amp;appVersion=1.0&amp;bmodel=bm1&amp;content=channel&amp;content_rating=ROKU_ADS_CONTENT_RATING&amp;content_type=livefeed&amp;coppa=false&amp;deviceDNT=1&amp;deviceId=channel&amp;deviceMake=rokuChannel&amp;deviceModel=web&amp;deviceType=rokuChannel&amp;deviceVersion=1.0&amp;embedPartner=rokuChannel&amp;is_lat=1&amp;platform=web&amp;rdid=channel&amp;tags=ROKU_CONTENT_TAGS"
    },
    {
        "name": "Pluto TV TeenNick (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5f0d668b872e4400073acc68/master.m3u8?advertisingId=channel&amp;appName=rokuchannel&amp;appVersion=1.0&amp;bmodel=bm1&amp;channel_id=channel&amp;content=channel&amp;content_rating=ROKU_ADS_CONTENT_RATING&amp;content_type=livefeed&amp;coppa=false&amp;deviceDNT=1&amp;deviceId=channel&amp;deviceMake=rokuChannel&amp;deviceModel=web&amp;deviceType=rokuChannel&amp;deviceVersion=1.0&amp;embedPartner=rokuChannel&amp;genre=ROKU_ADS_CONTENT_GENRE&amp;is_lat=1&amp;platform=web&amp;rdid=channel&amp;serverSideAds=false&amp;studio_id=viacom&amp;tags=ROKU_CONTENT_TAGS"
    },
    {
        "name": "Pluto TV Toons Clásico (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/609e7e423e9173000706a681/master.m3u8?advertisingId=channel&amp;appName=rokuchannel&amp;appVersion=1.0&amp;bmodel=bm1&amp;channel_id=channel&amp;content=channel&amp;content_rating=ROKU_ADS_CONTENT_RATING&amp;content_type=livefeed&amp;coppa=false&amp;deviceDNT=1&amp;deviceId=channel&amp;deviceMake=rokuChannel&amp;deviceModel=web&amp;deviceType=rokuChannel&amp;deviceVersion=1.0&amp;embedPartner=rokuChannel&amp;genre=ROKU_ADS_CONTENT_GENRE&amp;is_lat=1&amp;platform=web&amp;rdid=channel&amp;studio_id=viacom&amp;tags=ROKU_CONTENT_TAGS"
    },
    {
        "name": "Pluto TV Totally Turtles (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5d6792bd6be2998ad0ccce30/master.m3u8?advertisingId=&amp;appName=web&amp;appStoreUrl=&amp;appVersion=DNT&amp;app_name=&amp;architecture=&amp;buildVersion=&amp;deviceDNT=1&amp;deviceId=5d6792bd6be2998ad0ccce30&amp;deviceLat=&amp;deviceLon=&amp;deviceMake=web&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=DNT&amp;includeExtendedEvents=false&amp;marketingRegion=DE&amp;serverSideAds=false&amp;sid=ca4dc680-0715-11eb-aeab-0242ac110002&amp;terminate=false&amp;userId="
    },
    {
        "name": "Pluto TV Tween (720p)",
        "url": "https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5db0ae5af8797b00095c0794/master.m3u8?advertisingId=&amp;appName=web&amp;appStoreUrl=&amp;appVersion=DNT&amp;app_name=&amp;architecture=&amp;buildVersion=&amp;deviceDNT=0&amp;deviceId=5db0ae5af8797b00095c0794&amp;deviceLat=&amp;deviceLon=&amp;deviceMake=web&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=DNT&amp;includeExtendedEvents=false&amp;marketingRegion=US&amp;serverSideAds=false&amp;sid=991&amp;terminate=false&amp;userId="
    },
    {
        "name": "pocket.watch (1080p)",
        "url": "https://dai2.xumo.com/amagi_hls_data_xumo1212A-redboxpocketwatch/CDN/playlist.m3u8"
    },
    {
        "name": "Pokémon Kids TV English (1080p) [Not 24/7]",
        "url": "https://ythls.armelin.one/channel/UCgbfG5HoczHIkpzxLYH-8Ww.m3u8"
    },
    {
        "name": "Pokémon Kids TV Japanese (1080p) [Not 24/7]",
        "url": "https://ythls.armelin.one/channel/UCH0JJtRn2syic5xxavMKQ4Q.m3u8"
    },
    {
        "name": "Rai YoYo (576p) [Geo-blocked]",
        "url": "https://mediapolis.rai.it/relinker/relinkerServlet.htm?cont=746899"
    },
    {
        "name": "Ryan and Friends",
        "url": "https://cdn-apse1-prod.tsv2.amagi.tv/linear/amg00286-pocketwatch-ryanandfriends-samsungnz/playlist.m3u8"
    },
    {
        "name": "Sabrina la série animée",
        "url": "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/611e78c4954f250007ef7b84/master.m3u8?appName=web&amp;appVersion=unknown&amp;clientTime=0&amp;deviceDNT=0&amp;deviceId=8e063bd5-1f2c-11ef-86d8-5d587df108c6&amp;deviceMake=Chrome&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=unknown&amp;includeExtendedEvents=false&amp;sid=d91f8235-755b-4e9c-8062-05d444de314d&amp;serverSideAds=false"
    },
    {
        "name": "Sat 7 Kids (1080p)",
        "url": "https://svs.itworkscdn.net/sat7kidslive/sat7kids.smil/playlist_dvr.m3u8"
    },
    {
        "name": "SEO TV 2 Kids (1080p)",
        "url": "https://seo.tv.bo/tv/ATV2.m3u8"
    },
    {
        "name": "SKWAD (1080p)",
        "url": "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=71"
    },
    {
        "name": "Smile TV (360p) [Geo-blocked]",
        "url": "https://s1.cystream.net/live/smile/playlist.m3u8"
    },
    {
        "name": "Spacetoon (1080p)",
        "url": "https://shls-spacetoon-prod-dub.shahid.net/out/v1/6240b773a3f34cca95d119f9e76aec02/index.m3u8"
    },
    {
        "name": "Super Kaos TV (360p)",
        "url": "https://stmv1.cnarlatam.com/novakidstv/novakidstv/playlist.m3u8"
    },
    {
        "name": "Super Simple Songs (1080p)",
        "url": "https://app.viloud.tv/hls/channel/fb6891b829df2ea6dd6968b506a8c393.m3u8"
    },
    {
        "name": "Super! Brothers and Sisters Italy (720p)",
        "url": "https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/61925ea79541940007d20881/master.m3u8?advertisingId={PSID}&amp;appVersion=unknown&amp;deviceDNT={TARGETOPT}&amp;deviceId={PSID}&amp;deviceLat=0&amp;deviceLon=0&amp;deviceMake=samsung&amp;deviceModel=samsung&amp;deviceType=samsung-tvplus&amp;deviceVersion=unknown&amp;embedPartner=samsung-tvplus&amp;profileFloor=&amp;profileLimit=&amp;samsung_app_domain={APP_DOMAIN}&amp;samsung_app_name={APP_NAME}&amp;us_privacy=1YNY"
    },
    {
        "name": "Super! Eroi Italy (720p)",
        "url": "https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/6093f5ab128c2b00070ebd51/master.m3u8?advertisingId={PSID}&amp;appVersion=unknown&amp;deviceDNT={TARGETOPT}&amp;deviceId={PSID}&amp;deviceLat=0&amp;deviceLon=0&amp;deviceMake=samsung&amp;deviceModel=samsung&amp;deviceType=samsung-tvplus&amp;deviceVersion=unknown&amp;embedPartner=samsung-tvplus&amp;profileFloor=&amp;profileLimit=&amp;samsung_app_domain={APP_DOMAIN}&amp;samsung_app_name={APP_NAME}&amp;us_privacy=1YNY"
    },
    {
        "name": "Super! iCarly Italy (720p)",
        "url": "https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/609401db8cf51c00084b592e/master.m3u8?advertisingId={PSID}&amp;appVersion=unknown&amp;deviceDNT={TARGETOPT}&amp;deviceId={PSID}&amp;deviceLat=0&amp;deviceLon=0&amp;deviceMake=samsung&amp;deviceModel=samsung&amp;deviceType=samsung-tvplus&amp;deviceVersion=unknown&amp;embedPartner=samsung-tvplus&amp;profileFloor=&amp;profileLimit=&amp;samsung_app_domain={APP_DOMAIN}&amp;samsung_app_name={APP_NAME}&amp;us_privacy=1YNY"
    },
    {
        "name": "Super! Pop Italy (720p)",
        "url": "https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/6093f7b5bb49b90007cecaad/master.m3u8?advertisingId={PSID}&amp;appVersion=unknown&amp;deviceDNT={TARGETOPT}&amp;deviceId={PSID}&amp;deviceLat=0&amp;deviceLon=0&amp;deviceMake=samsung&amp;deviceModel=samsung&amp;deviceType=samsung-tvplus&amp;deviceVersion=unknown&amp;embedPartner=samsung-tvplus&amp;profileFloor=&amp;profileLimit=&amp;samsung_app_domain={APP_DOMAIN}&amp;samsung_app_name={APP_NAME}&amp;us_privacy=1YNY"
    },
    {
        "name": "Super! SpongeBob Italy (720p)",
        "url": "https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/61fbd4c9e5b49e00079bfed9/master.m3u8?advertisingId={PSID}&amp;appVersion=unknown&amp;deviceDNT={TARGETOPT}&amp;deviceId={PSID}&amp;deviceLat=0&amp;deviceLon=0&amp;deviceMake=samsung&amp;deviceModel=samsung&amp;deviceType=samsung-tvplus&amp;deviceVersion=unknown&amp;embedPartner=samsung-tvplus&amp;profileFloor=&amp;profileLimit=&amp;samsung_app_domain={APP_DOMAIN}&amp;samsung_app_name={APP_NAME}&amp;us_privacy=1YNY"
    },
    {
        "name": "Super! Star Italy (720p)",
        "url": "https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/6093f6f8351eb0000754afb8/master.m3u8?advertisingId={PSID}&amp;appVersion=unknown&amp;deviceDNT={TARGETOPT}&amp;deviceId={PSID}&amp;deviceLat=0&amp;deviceLon=0&amp;deviceMake=samsung&amp;deviceModel=samsung&amp;deviceType=samsung-tvplus&amp;deviceVersion=unknown&amp;embedPartner=samsung-tvplus&amp;profileFloor=&amp;profileLimit=&amp;samsung_app_domain={APP_DOMAIN}&amp;samsung_app_name={APP_NAME}&amp;us_privacy=1YNY"
    },
    {
        "name": "Supertoons TV",
        "url": "https://kedoo-supertoonstv-2-es.samsung.wurl.tv/playlist.m3u8"
    },
    {
        "name": "Taha TV (360p) [Not 24/7]",
        "url": "https://media2.livaat.com/TAHA-TV/index.m3u8"
    },
    {
        "name": "Teletubbies",
        "url": "https://dhx-teletubbies-2-it.samsung.wurl.tv/playlist.m3u8"
    },
    {
        "name": "Three Angels Broadcasting Network Kids Network (3ABN) (720p)",
        "url": "https://3abn-live.akamaized.net/hls/live/2010550/Kids/master.m3u8"
    },
    {
        "name": "like Gecko) Mobile/15E148\"",
        "url": "http://ott-cdn.ucom.am/s59/index.m3u8"
    },
    {
        "name": "Tiji (1080p)",
        "url": "https://shls-tiji-tv-prod-dub.shahid.net/out/v1/98f46736bd8c4404b67e4b7a38cc8976/index.m3u8"
    },
    {
        "name": "TNT Kids (288p)",
        "url": "https://restreamer1.tnt.ba/hls/tntkids.m3u8"
    },
    {
        "name": "Toon Goggles en Espanol",
        "url": "https://stream.ads.ottera.tv/playlist.m3u8?network_id=771"
    },
    {
        "name": "Toonmax TV (576p)",
        "url": "http://210.210.155.37/qwr9ew/s/s50/index.m3u8"
    },
    {
        "name": "Tortues Ninja TV",
        "url": "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5f8ecc1b37867f00071469e9/master.m3u8?appName=web&amp;appVersion=unknown&amp;clientTime=0&amp;deviceDNT=0&amp;deviceId=8e050351-1f2c-11ef-86d8-5d587df108c6&amp;deviceMake=Chrome&amp;deviceModel=web&amp;deviceType=web&amp;deviceVersion=unknown&amp;includeExtendedEvents=false&amp;sid=8626ec32-5f10-4aef-bfdb-f5495f6d4ff1&amp;serverSideAds=false"
    },
    {
        "name": "TRT Çocuk (720p)",
        "url": "https://tv-trtcocuk.live.trt.com.tr/master.m3u8"
    },
    {
        "name": "TRT Diyanet Çocuk (720p)",
        "url": "https://tv-trtdiyanetcocuk.medya.trt.com.tr/master.m3u8"
    },
    {
        "name": "TV2 Kids (576p)",
        "url": "http://146.59.85.40:89/tv2kids/index.m3u8"
    },
    {
        "name": "TV Arbëria 3 Fëmijë (720p)",
        "url": "https://ssh101.bozztv.com/ssh101/rtvarberia3/playlist.m3u8"
    },
    {
        "name": "TV Bahoriston (1080p)",
        "url": "https://live.teleradiocom.tj/3/3m.m3u8"
    },
    {
        "name": "TVG Cativ@s (720p)",
        "url": "https://xabarintv-r2-crtvg.flumotion.com/playlist.m3u8"
    },
    {
        "name": "TVG Infantil (720p)",
        "url": "https://infantil-crtvg.flumotion.com/playlist.m3u8"
    },
    {
        "name": "TVG Mociñ@s (720p)",
        "url": "https://xabarintv-r3-crtvg.flumotion.com/playlist.m3u8"
    },
    {
        "name": "TVG Pequerrech@s (720p)",
        "url": "https://xabarintv-r1-crtvg.flumotion.com/playlist.m3u8"
    },
    {
        "name": "TVS Hi Tops (720p)",
        "url": "https://bozztv.com/gusa/gusa-hitops/index.m3u8"
    },
    {
        "name": "TVS Pinball Network (480p)",
        "url": "https://bozztv.com/gusa/gusa-TVSCartoonNetwork/index.m3u8"
    },
    {
        "name": "Xtrema Cartoons (360p)",
        "url": "https://stmv1.cnarlatam.com/cineinfantil/cineinfantil/playlist.m3u8"
    },
    {
        "name": "Zarok TV Sorani (720p)",
        "url": "https://zindisorani.zaroktv.com.tr/hls/stream.m3u8"
    },
    {
        "name": "Zoo Moo (Australia) (1080p)",
        "url": "https://zoomoo-samsungau.amagi.tv/playlist.m3u8"
    },
    {
        "name": "В Гостях у сказки (1080p) [Geo-blocked]",
        "url": "https://strm.yandex.ru/kal/v_gostyah_u_skazki/v_gostyah_u_skazki0.m3u8"
    },
    {
        "name": "Детский мир",
        "url": "http://stream01.vnet.am/CartoonNetwork/mono.m3u8"
    },
    {
        "name": "Карусель",
        "url": "http://s18209.cdn.ngenix.net/hls/CH_R01_KARUSEL/playlist.m3u8"
    },
    {
        "name": "Лёва (1080p) [Geo-blocked]",
        "url": "https://strm.yandex.ru/kal/leva/leva0.m3u8"
    },
    {
        "name": "Мама",
        "url": "https://edge02.odtv.az/o2/mamatv/playlist.m3u8"
    },
    {
        "name": "Мульт",
        "url": "http://stream01.vnet.am/Mult/mono.m3u8"
    },
    {
        "name": "Мульт HD",
        "url": "https://woobl.ru/hls987/Mult_hd.m3u8"
    },
    {
        "name": "Мультиландия (1080p) [Geo-blocked]",
        "url": "https://strm.yandex.ru/kal/multilandia/multilandia0.m3u8"
    },
    {
        "name": "Мультимания ТВ",
        "url": "http://sirius.greenhosting.ru/MultimaniaRu/video.m3u8"
    },
    {
        "name": "Мультимузыка",
        "url": "https://woobl.ru/hls987/Multimuzyka.m3u8"
    },
    {
        "name": "Пингвин",
        "url": "https://sirius.greenhosting.ru/PingvinRu/video.m3u8"
    },
    {
        "name": "Радость моя",
        "url": "https://radm.mediacdn.ru/cdn/radost/playlist.m3u8"
    },
    {
        "name": "like Gecko) Mobile/15E148\"",
        "url": "http://ott-cdn.ucom.am/s57/index.m3u8"
    },
    {
        "name": "Солнце",
        "url": "http://tv.mediacdn.ru/live/disney/playlist.m3u8"
    },
    {
        "name": "СТС Kids",
        "url": "http://stream02.vnet.am/DisneyChannel/mono.m3u8"
    },
    {
        "name": "Тамыр (Уфа) (576p)",
        "url": "https://bsttv.bonus-tv.ru/cdn/tamyr/playlist.m3u8"
    },
    {
        "name": "УТРК Баластан (480p) [Not 24/7]",
        "url": "https://st2.mediabay.tv/KG_KTRK-Balastan/index.m3u8"
    },
    {
        "name": "Хочу всё знать (576p)",
        "url": "https://void.greenhosting.ru/HochuVjeZnat_Mpeg4/index.m3u8"
    },
    {
        "name": "ЭлТР Билим Илим (480p) [Not 24/7]",
        "url": "http://gohoski.fvds.ru:3000/mediabay/611/index.m3u8"
    },
    {
        "name": "like Gecko) Mobile/15E148\"",
        "url": "http://ott-cdn.ucom.am/s74/index.m3u8"
    },
    {
        "name": "like Gecko) Mobile/15E148\"",
        "url": "http://ott-cdn.ucom.am/s46/index.m3u8"
    },
    {
        "name": "优漫卡通 (576p)",
        "url": "http://183.207.249.15/PLTV/4/224/3221225933/index.m3u8"
    },
    {
        "name": "山东少儿 (406p) [Geo-blocked]",
        "url": "http://livealone302.iqilu.com/iqilu/sepd.m3u8"
    },
    {
        "name": "浙江少儿 (1080p)",
        "url": "https://hw-m-l.cztv.com/channels/lantian/channel008/1080p.m3u8"
    },
    {
        "name": "金鹰卡通 (576p)",
        "url": "http://223.110.245.145/ott.js.chinamobile.com/PLTV/3/224/3221226303/index.m3u8"
    }
]
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
