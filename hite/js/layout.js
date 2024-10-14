

$(document).ready(function(){
   
    // 반응형 네비게이션
    var web_nav = function(){
        $(".hitejinro_gnb li a").unbind('click');
        $(".hitejinro_gnb_inner").css({"display":"none","height":"55px","width":"100%"});
        $(".hitejinro_background").hide();
        $(".hitejinro_header_wrap").css({"backgroundColor":"#fff"});
        $(".hitejinro_gnb li a").bind('mouseover focusin',function(){
            $(".hitejinro_gnb_inner").removeClass("tests");
            $(this).next(".hitejinro_gnb_inner").stop().slideDown(200);
        }).bind('mouseout focusout',function(){
            $(this).next(".hitejinro_gnb_inner").stop().slideUp(200);
        });
        $(".hitejinro_gnb_inner").bind('mouseenter focusin',function(){
            $(this).stop().show();
        }).bind('mouseleave focusout',function(){
            $(this).stop().hide();
        });
    };
   //모바일 네비게이션
    var inner_stop = function(){
        $(".hitejinro_gnb_inner").mouseover(function(){
            $(this).stop().show();
        }).mouseleave(function(){
              $(this).stop().show();
          });
       };
    inner_stop();
    
    var mo_nav1 = function(){
        var showing = 0;
        $(".hitejinro_gnb_mo1").click(function(){
            if(showing === 0){
                $(this).next(".hitejinro_gnb_inner").addClass("tests");
                $(this).next(".hitejinro_gnb_inner").css({"display":"block","height":"auto"});
                return showing = 1;
            }else if(showing === 1){
                $(this).next(".hitejinro_gnb_inner").removeClass("tests");
                $(this).next(".hitejinro_gnb_inner").css({"display":"none","height":"55px"});
                return showing = 0;
            }
        });
        inner_stop();
    };
    mo_nav1();
    
    var mo_nav2 = function(){
        var showing = 0;
        $(".hitejinro_gnb_mo2").click(function(){
            if(showing === 0){
                $(this).next(".hitejinro_gnb_inner").addClass("tests");
                $(this).next(".hitejinro_gnb_inner").css({"display":"block","height":"auto"});
                return showing = 1;
            }else if(showing === 1){
                $(this).next(".hitejinro_gnb_inner").removeClass("tests");
                $(this).next(".hitejinro_gnb_inner").css({"display":"none","height":"55px"});
                return showing = 0;
            }
        });
        inner_stop();
    };
    mo_nav2();
    
    var mo_nav3 = function(){
        var showing = 0;
        $(".hitejinro_gnb_mo3").click(function(){
            if(showing === 0){
                $(this).next(".hitejinro_gnb_inner").addClass("tests");
                $(this).next(".hitejinro_gnb_inner").css({"display":"block","height":"auto"});
                return showing = 1;
            }else if(showing === 1){
                $(this).next(".hitejinro_gnb_inner").removeClass("tests");
                $(this).next(".hitejinro_gnb_inner").css({"display":"none","height":"55px"});
                return showing = 0;
            }
        });
        inner_stop();
    };
    mo_nav3();
    
    var mo_nav4 = function(){
        var showing = 0;
        $(".hitejinro_gnb_mo4").click(function(){
            if(showing === 0){
                $(this).next(".hitejinro_gnb_inner").addClass("tests");
                $(this).next(".hitejinro_gnb_inner").css({"display":"block","height":"auto"});
                return showing = 1;
            }else if(showing === 1){
                $(this).next(".hitejinro_gnb_inner").removeClass("tests");
                $(this).next(".hitejinro_gnb_inner").css({"display":"none","height":"55px"});
                return showing = 0;
            }
        });
        inner_stop();
    };
    mo_nav4();
    
    // 모바일 네비게이션 아이콘 부분
    var mo_nav = function (){
        var showing = 0;
        $(".hitejinro_gnb_btn, .hitejinro_background").click(function(){
            if( showing === 0){
                    $(".hitejinro_gnb_inner").removeClass("tests");
                    $(".hitejinro_gnb").css({"left":"0px"});
                    $(".hitejinro_background").show();
                    $(".hitejinro_header_wrap").css({"backgroundColor":"#ccc"});
                    $(".hitejinro_gnb_inner").css({"display":"none"});

                    // 모바일 네비게이션 아이콘 위치 변화
                    $(".hitejinro_gnb_btn span:eq(0)").css({"transform":"rotate(45deg)","top":"10px"});
                    $(".hitejinro_gnb_btn span:eq(1)").css({"opacity":"0"});
                    $(".hitejinro_gnb_btn span:eq(2)").css({"transform":"rotate(-45deg)","top":"10px"});
                    $("html").css({"overflow-y":"hidden"});
                    mo_nav1();
                    mo_nav2();    
                    mo_nav3();
                    mo_nav4();
                    return showing = 1;
            }else{
                    $(".hitejinro_gnb").css({"left":"-240px"});
                    $(".hitejinro_background").hide();
                    $(".hitejinro_header_wrap").css({"backgroundColor":"#fff"});

                    // 모바일 네비게이션 아이콘 위치 변화
                    $(".hitejinro_gnb_btn span:eq(0)").css({"transform":"rotate(0deg)","top":"0px"});
                    $(".hitejinro_gnb_btn span:eq(1)").css({"opacity":"1"});
                    $(".hitejinro_gnb_btn span:eq(2)").css({"transform":"rotate(0deg)","top":"20px"});
                    $("html").css({"overflow-y":"auto"});
                    return showing = 0;
            }
        });
        mo_nav1();
        mo_nav2();    
        mo_nav3();
        mo_nav4();
    };
    
    var whole_nav = function(){
        var h_width = $(window).width();
        if(h_width > 940){
            web_nav();
        }else{
            mo_nav();
        }
    };
    whole_nav();

    
    

    $(window).resize(function(){
        var h_width = $(window).width();
        if(h_width > 941){
            //웹 네비게이션
            web_nav();
        }else{
            //모바일 네비게이션
            $(".hitejinro_gnb li a").unbind('mouseover mouseenter mouseout mouseleave focusin focusout');
            mo_nav();
        }
    });

    // 반응형 네비게이션 끝

    //로그인 모달 화면
    $(".hitejinro_login_btn").click(function(){
            $(".hitejinro_login_modal").show();
            $(".hitejinro_background_login").show();
            $(".hitejinro_header_wrap").css({"backgroundColor":"rgba(0,0,0,0.1)","border":"none"});
            //$(".hitejinro_gnb li").hide();
            $(".hitejinro_gnb").css({"left":"-240px"});
    });
    $(".hitejinro_login_close_btn, .hitejinro_background_login").click(function(){
            $(".hitejinro_login_modal, .hitejinro_background_login, .hitejinro_background").hide();
            $(".hitejinro_header_wrap").css({"backgroundColor":"#fff"});
            $(".hitejinro_gnb li").show();
    });
    //로그인 모달 화면 끝

    // 하이트 진로 로그인
        function hitejinro_login(){
            var userid = document.getElementById("userid");
            userid.value.trim();
            var userpass = document.getElementById("userpassword");
            userpass.value.trim();
            if( userid.value.length < 6 || userpass.value.length < 6){
                alert("아이디나 비밀번호를 7자리 이상 입력해주세요.");
            }else{
                alert("로그인 서비스를 점검 중입니다. 이용에 불편을 드려서 죄송합니다. ");
            };
        }
    //하이트 진로 로그인 끝

    //사이트 업 앤 다운
        $(".goto_top").click(function(){
            $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
            return false;
        });
        $(".goto_bottom").click(function(){
            var w_height = $(".hitejinro_wrap").height();
            $( 'html, body' ).animate( { scrollTop :  w_height}, 400 );
            return false;
        });
    ////사이트 업 앤 다운 끝

    //검색창
    $(".hitejinro_searchbox label").click(function(){
            $(this).siblings().show();
    });
    $(".hitejinro_search_close").click(function(){
        $(".hitejinro_search_area").hide();
    });


    // 검색기능 최적화하기
    function hitejinro_searchs(){
        var word = document.getElementById("hitejinro_search");
        word.value.trim();
        alert( word.value+"를(을) 검색하셨습니다.");
    }
});
