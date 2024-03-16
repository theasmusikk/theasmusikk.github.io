  function openLink(event,linkName) {
    event.preventDefault();
    var url = urls[linkName]['url'];
    var gad_id = urls[linkName]['gad_id'];
    var gad_val = urls[linkName]['gad_val'];
    var m_type = urls[linkName]['m_content_type'];

    
      var callback = function () {
        if (typeof(url) != 'undefined') {
          
          var win = window.open(url, '_blank');
          if (win) {
            win.window.focus();
          }else{
            window.location = url;
          }
        }
      };
      
      if (url_s=="g" && gad_id.length>5){
        gtag('event', 'conversion', {
            'send_to': gad_id,
            'value': gad_val,
            'currency': 'NOK',
            'event_callback': callback
        });
        return false;
      }else if (url_s=="m" && m_type.length>1){
        fbq('track', 'AddToCart', {
          content_name: linkName, 
          content_type: m_type
        }); 
        callback();
      }else{
        callback();
      }
  }
