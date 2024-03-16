//Globale variabler


var urls = {
    'spotify': {
      'url': 'https://open.spotify.com/track/0CJDroZzR6PNalEaAsJJm0?si=4f2ab6208ac74103', //'https://spoti.fi/3ZdtBHQ?r=lp'
      'gad_id': 'AW-11140570940/qrN6CKDV65kYELy-nsAp',
      'gad_val': 0.01,
      'm_content_type': 'streaming'
    },
    'youtube': {
      'url': 'https://youtu.be/LM23SRzMcMw?si=1tJKzy97fFIR0uOo', //'https://www.youtube.com/@theasmusikk',
      'gad_id': 'AW-11140570940/rnw4CKPV65kYELy-nsAp',
      'gad_val': 0.001,
      'm_content_type': 'some'
    },
    'applemusic': {
      'url': 'https://music.apple.com/no/album/hjulene-p%C3%A5-bussen/1676160459?i=1676160460', //'https://apple.co/3K1bXS1?r=lp',
      'gad_id': 'AW-11140570940/UB6LCKbV65kYELy-nsAp',
      'gad_val': 0.01,
      'm_content_type': 'streaming'
    },
    'youtubemusic': {
      'url': 'https://music.youtube.com/watch?v=AflZLAKpTbw&si=CCE5EUGJCx_s_TFR', //'https://music.youtube.com/channel/UCF7ZKFhkEaEkeow-Tmd9frA?feature=share',
      'gad_id': 'AW-11140570940/juhECKnV65kYELy-nsAp',
      'gad_val': 0.005,
      'm_content_type': 'streaming'
    },
    'andre': {
      'url': 'https://bit.ly/blinke-blinke-stjernelill?r=lp',
      'gad_id': 'AW-11140570940/wKh5CMar-5kYELy-nsAp',
      'gad_val': 0.0001,
      'm_content_type': 'some'
    },
    'instagram': {
      'url': 'https://www.instagram.com/theasmusikk/',
      'gad_id': 'AW-11140570940/vE_aCKzV65kYELy-nsAp',
      'gad_val': 0.0001,
      'm_content_type': 'some'
    },
    'facebook': {
      'url': 'https://www.facebook.com/theasmusikk',
      'gad_id': 'AW-11140570940/uEosCK_V65kYELy-nsAp',
      'gad_val': 0.0001,
      'm_content_type': 'some'  
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
} else if (url_s=="m"){
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '755859442928237');
    fbq('track', 'PageView');
}

