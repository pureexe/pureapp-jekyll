$(function() {
  var getDateText = function(date){
    var date = new Date(date);
    var month ="";
    if(date.getMonth()==0){
      month = "มกราคม";
    }else if(date.getMonth()==1){
      month = "กุมภาพันธ์";
    }else if(date.getMonth()==2){
      month = "มีนาคม";
    }else if(date.getMonth()==3){
      month = "เมษายน";
    }else if(date.getMonth()==4){
      month = "พฤษภาคม";
    }else if(date.getMonth()==5){
      month = "มิถุนายน";
    }else if(date.getMonth()==6){
      month = "กรกฏาคม";
    }else if(date.getMonth()==7){
      month = "สิงหาคม";
    }else if(date.getMonth()==8){
      month = "กันยายน";
    }else if(date.getMonth()==9){
      month = "ตุลาคม";
    }else if(date.getMonth()==10){
      month = "พฤศจิกายน";
    }else{
      month = "ธันวาคม";
    }
    var date2 = ""+date.getDate();
    if(date2.length == 1){
      date2 = "0"+date2;
    }
    return date2+" "+month+" "+(date.getFullYear()+543);
  }
  $.QueryString = (function(a) {
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p=a[i].split('=');
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'))
  $.getJSON( "/assets/api/blog.json", function(blog) {
      var query = $.QueryString["q"];
      $("#search-text").text(query);
      var type = $.QueryString["type"]
      query = query.toLowerCase();
      blog.forEach(function(post){
        var render = false;
        if(type=="tag"||!type){
          post.tags.forEach(function(tag){
            if(tag == query){
              render = true;
            }
          });
        }
        if(type=="category"||!type){
          if(post.category == query){
            render = true;
          }
        }
        if(type=="title"||!type){
          var tTitle = post.title.toLowerCase();
          if(tTitle.search(query)>-1){
            render = true;
          }
        }
        if(render){
          var cardTag="";
          post.tags.forEach(function(tag){
            cardTag+="<div class='chip'><a href='/search?q="+tag+"&amp;type=tag' class='grey-text text-darken-1' rel='tag' style='margin-right:0px;'>"+tag+"</a></div> ";
          });
          cardTag = "<div style='display:inline-block'>"+cardTag+"</div>";
          var cardImage = "<div class='card-image'><a href="+post.url+"><img src="+post.thumbnail+" /></a></div>"
          if(!post.thumbnail){
            cardImage = "";
          }
          var cardTitle = "<a href='"+post.url+"'><h5 class='site-post-card-title' itemprop='headline'>"+post.title+"</h5></a>";
          var cardAction = "<div class='card-action'><span><i class='mdi-device-access-time'></i> <span class='date-display' style='margin-right:0.5em;'><span class='date'>"+getDateText(post.date)+"</span></span></span>"+cardTag+"</div>";
          $("#result").append("<div class='card'>"+cardImage+"<div class='card-content'>"+cardTitle+"<div class='site-post-card-description'>"+post.excerpt+"</div></div>"+cardAction+"</div>");
        }
      });
  });
});
