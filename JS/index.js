var index = document.getElementById("index")
var profile = document.getElementById("profile")
var setting = document.getElementById("setting")

if (index!=null)
    {
       //loading start function
    $(document).ready(function(){
    $("#loading").fadeOut(2000);
    $("#ecg").fadeOut(2000 , function(){
        $("body").css("overflow" , "auto");
    })
    })
    //owl crasuol for parients section1
    $('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:15,
    nav:true,
    autoplay : true,
    navigation: true,
    center:true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.main-content .custom-nav',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    })

    }

else if (profile!=null)
    {
        // ----------------profile_epage
        $("#Message").click( function() {
            $(".Notifications").slideToggle(500)
            $(".Notifications p ").text("لا يوجد رسائل اليوم")
        })

        $("#Notification-ic").click( function() {
            $(".Notifications").slideToggle(500)
            $(".Notifications p ").text("لا يوجد أشعارات اليوم")
        })
    }

else if  (setting!=null)
    {
	// ----------------setting_epage
        $(".modal-body img").click(function (){

            let imgsrc = $(this).attr("src");
           let craent =  $("#selected-img").attr("src",imgsrc)
            
        })

    }
