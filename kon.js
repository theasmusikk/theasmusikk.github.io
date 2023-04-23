//Globale variabler

var urls = {
    'spotify': {
      'url': 'https://spoti.fi/3ZdtBHQ?r=lp',
      'gad_id': 'AW-11140570940/qrN6CKDV65kYELy-nsAp',
      'gad_val': 0.01
    },
    'youtube': {
      'url': 'https://www.youtube.com/@theasmusikk',
      'gad_id': 'AW-11140570940/rnw4CKPV65kYELy-nsAp',
      'gad_val': 0.001
    },
    'applemusic': {
      'url': 'https://apple.co/3K1bXS1?r=lp',
      'gad_id': 'AW-11140570940/UB6LCKbV65kYELy-nsAp',
      'gad_val': 0.01
    },
    'youtubemusic': {
      'url': 'https://music.youtube.com/channel/UCF7ZKFhkEaEkeow-Tmd9frA?feature=share',
      'gad_id': 'AW-11140570940/juhECKnV65kYELy-nsAp',
      'gad_val': 0.005
    },
    'andre': {
      'url': 'https://bit.ly/blinke-blinke-stjernelill?r=lp',
      'gad_id': '',
      'gad_val': 0
    },
    'instagram': {
      'url': 'https://www.instagram.com/theasmusikk/',
      'gad_id': 'AW-11140570940/vE_aCKzV65kYELy-nsAp',
      'gad_val': 0.0001
    },
    'facebook': {
      'url': 'https://www.facebook.com/theasmusikk',
      'gad_id': 'AW-11140570940/uEosCK_V65kYELy-nsAp',
      'gad_val': 0.0001
    }
  };
//URL variabler

const urlParams = new URLSearchParams(window.location.search);
var url_s = urlParams.get('s');

//default, url_s == null
//googleAd, url_s == "g"

if (url_s=="g"){
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', gad_ID);
}