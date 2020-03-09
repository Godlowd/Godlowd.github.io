const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    loop: 'all',
    order: 'random',
    volume: 0.7,
    audio: [
      {
        name: "Skylark",
        artist: 'Zachary Bruno',
        url: 'https://music.163.com/song/media/outer/url?id=32320830.mp3',
        cover: 'http://p1.music.126.net/YTxHBeMgFoZAeLeBOO0YHw==/2896113629435553.jpg',
      },
      {
               name: '輝きながら...',
               artist: '加藤敏樹',
               url: 'https://music.163.com/song/media/outer/url?id=1419057874.mp3',
               cover: 'http://p1.music.126.net/C_OS46bOqXk4S0VwCldtRA==/109951164655728779.jpg',
             },
      {
         name: '元気を出して',
         artist: '広橋真紀子',
         url: 'https://music.163.com/song/media/outer/url?id=1419067151.mp3',
         cover: 'http://p2.music.126.net/C_OS46bOqXk4S0VwCldtRA==/109951164655728779.jpg',
      },
      {
               name: '白色',
               artist: '灰澈',
               url: 'https://music.163.com/song/media/outer/url?id=494992638.mp3',
               cover: 'http://p2.music.126.net/_EuX4aT0AB0f4Gi5fdMP8w==/109951162991584436.jpg',
      },
    ]
});
