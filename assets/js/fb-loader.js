(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4&appId=351070565012663";
  fjs.parentNode.insertBefore(js, fjs);
  $(document).trigger('fbInit');
  var FBlogin_master = function(){
    FB.login(function(response) {
      if (response.status === 'connected') {
        $(document).trigger('fbLogin');
      }
    });
  }
}(document, 'script', 'facebook-jssdk'));
