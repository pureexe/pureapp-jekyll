(function(e,t,n,i,s,a,c){e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)}
;a=t.createElement(i);c=t.getElementsByTagName(i)[0];a.async=true;a.src=s
;c.parentNode.insertBefore(a,c)
})(window,document,"galite","script","https://cdnjs.cloudflare.com/ajax/libs/ga-lite/2.0.1/ga-lite.min.js");

galite('create', 'UA-54361036-1', 'auto');
galite('send', 'pageview');

window.addEventListener(
  'unload',
  function () { galite('send', 'timing', 'JS Dependencies', 'unload') }
)
