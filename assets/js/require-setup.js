requirejs.config({
    paths: {
        "jquery": "jquery-2.1.4.min",
        "materialize": "materialize.amd.min"
    },
    shim: {
        "materialize": {
            deps: ["jquery"]
        }
    }
});

require(["jquery", "materialize"], function ($) {
  var showStaggeredList = function(selector) {
      var time = 0;
      $(selector).children().velocity({
          translateX: "-100px"
      }, {
          duration: 0
      });

      $(selector).children().each(function() {
          var self = $(this);
          $(this).velocity({
              opacity: "1",
              translateX: "0"
          }, {
              duration: 800,
              delay: time,
              easing: [60, 10],
              complete: function() {
                  $(this).removeAttr("style");
              }
          });
          time += 120;
      });

  }
  $(function() {
      var isPlayingNavMenu = false;
      $(".toggle-navmenu").click(function() {
          if (!isPlayingNavMenu) {
              isPlayingNavMenu = true;
              $(".nav-menubar").hide();
              $("#nav-menu").show();
              $(".nav-menu-set").children().css("opacity", function(r) {
                  return 0;
              });
              showStaggeredList("#nav-menu-small");
              showStaggeredList("#nav-menu-medium");
              showStaggeredList("#nav-menu-large");
              var array = [$("#nav-menu-large").children().length, $("#nav-menu-medium").children().length, $("#nav-menu-small").children().length];
              var max_var = Math.max.apply(Math, array);
              setTimeout(function() {
                  isPlayingNavMenu = false
              }, (max_var * 123) + 800);
          }
      });
      $(".toggle-navapp").click(function() {
          if (!isPlayingNavMenu) {
              isPlayingNavMenu = true;
              $(".nav-menubar").hide();
              $("#nav-app").show();
              $(".nav-app-set").children().css("opacity", function(r) {
                  return 0;
              });
              showStaggeredList("#nav-app-small");
              showStaggeredList("#nav-app-medium");
              showStaggeredList("#nav-app-large");
              var array = [$("#nav-app-large").children().length, $("#nav-app-medium").children().length, $("#nav-app-small").children().length];
              var max_var = Math.max.apply(Math, array);
              setTimeout(function() {
                  isPlayingNavMenu = false
              }, (max_var * 123) + 800);
          }
      });
      $(".toggle-navfollow").click(function() {
          if (!isPlayingNavMenu) {
              isPlayingNavMenu = true;
              $(".nav-menubar").hide();
              $("#nav-follow").show();
              $(".nav-follow-set").children().css("opacity", function(r) {
                  return 0;
              });
              showStaggeredList("#nav-follow-small");
              showStaggeredList("#nav-follow-medium");
              showStaggeredList("#nav-follow-large");
              var array = [$("#nav-follow-large").children().length, $("#nav-follow-medium").children().length, $("#nav-follow-small").children().length];
              var max_var = Math.max.apply(Math, array);
              setTimeout(function() {
                  isPlayingNavMenu = false
              }, (max_var * 123) + 800);
          }
      });
      $(".toggle-navsearch").click(function() {
          $(".nav-menubar").hide();
          $("#nav-search").show();
          $("#search-on-input").focus();
      });
      $(".dropdown-navbutton").dropdown({
          inDuration: 300,
          outDuration: 225,
          constrain_width: false, // Does not change width of dropdown to that of the activator
          hover: true, // Activate on hover
          gutter: 0, // Spacing from edge
          belowOrigin: true // Displays dropdown below the button
      });
      $(".dropdown-button").dropdown({
          inDuration: 300,
          outDuration: 225,
          constrain_width: true, // Does not change width of dropdown to that of the activator
          hover: false, // Activate on hover
          gutter: 0, // Spacing from edge
          belowOrigin: false // Displays dropdown below the button
      });
      $("#site-moremenu").sideNav();
      $("#site-moreapp").sideNav();
      $("#site-morefollow").sideNav();
      $("#site-bottom-to-top-btn").click(function() {
          $("html, body").animate({
              scrollTop: 0
          }, "slow");
      });
      $(".collapsible").collapsible({
          accordion: false
      });
      $('.widget-postlist > .year > a,.widget-postlist > .year > .sublist > .month > a').click(function(event){
        event.preventDefault();
        $(this).parent().children('.sublist').toggle();
        if($(this).parent().children('.cursor').text()=='▼'){
          $(this).parent().children('.cursor').text('►');
        }else{
          $(this).parent().children('.cursor').text('▼');
        }
      });
  });
});
