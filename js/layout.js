
$(document).ready(function(){
    // 반응형 네비게이션
    const web_nav = () => {
        $(".hitejinro_gnb li a").unbind('click');
        $('.hamburger-menu').removeClass('animate');
        $('.hitejinro_gnb').removeClass('show');
        $(".hitejinro_backdrop").removeClass('show');
        $(".hitejinro_gnb_inner").removeClass('show');
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
    const inner_stop = () => {
        $(".hitejinro_gnb_inner").mouseover(function(){
            $(this).stop().show();
        }).mouseleave(function(){
              $(this).stop().show();
          });
       };
    // inner_stop();
    
    // 모바일 네비게이션 아이콘 부분
    const onClickHamburderMenu = () => {
        $(".hamburger-menu").off('click').on('click' , function(e) {
            e.preventDefault();
            e.stopPropagation();
            $('.hamburger-menu').toggleClass('animate');
            $('.hitejinro_gnb').toggleClass('show');
            $(".hitejinro_backdrop").toggleClass('show');
        });
    
        $(".hitejinro_gnb_mo").off('click').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            const menuList = $(this).next(".hitejinro_gnb_inner");
            $(menuList).toggleClass('show');
        });

        $(".hitejinro_backdrop").off('click').on('click' , function(e) {
            e.preventDefault();
            e.stopPropagation();
            $('.hamburger-menu').removeClass('animate');
            $('.hitejinro_gnb').removeClass('show');
            $(".hitejinro_backdrop").removeClass('show');
            $(".hitejinro_gnb_inner").removeClass('show');
        });
    };
    
    const whole_nav = function(){
        const h_width = $(window).width();
        if(h_width > 940){
            web_nav();
        }else{
            onClickHamburderMenu();
        }
    };
    whole_nav();

    $(window).resize(function(){
        const h_width = $(window).width();
        if(h_width > 941){
            //웹 네비게이션
            web_nav();
        }else{
            //모바일 네비게이션
            $(".hitejinro_gnb li a").unbind('mouseover mouseenter mouseout mouseleave focusin focusout');
            onClickHamburderMenu();
        }
    });
    // 반응형 네비게이션 끝

    //로그인 모달 화면
    $(".hitejinro_login_btn").off('click').on('click',function(){
        $(".hitejinro_login_modal").show();
    });
    $(".hitejinro_login_close_btn, .hitejinro_login_modal > .inner").off('click').on('click', function(e){
        const userId = document.getElementById("userid");
        const userPassword = document.getElementById("userpassword");
        if( userId.value.length > 0 ) userId.value = '';
        if( userPassword.value.length > 0 ) userPassword.value = '';
        $(".hitejinro_login_modal").hide();
    });
    //로그인 모달 화면 끝

    //사이트 업 앤 다운
    $(".goto_top").click(function(){
        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
        return false;
    });
    $(".goto_bottom").click(function(){
        const w_height = $(".hitejinro_wrap").height();
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
});

// 이벤트 버블링 방지
const disabledEventPropagation = (e) => {
    e.stopPropagation();
};

// 하이트 진로 로그인
const hitejinro_login = () => {
    const userid = document.getElementById("userid");
    const userpass = document.getElementById("userpassword");
    userid.value.trim();
    userpass.value.trim();
    if( userid.value.length < 6 ){
        alert("아이디를 6자리 이상 입력해주세요.");
        return; 
    }
    if( userpass.value.length < 6){
        alert("비밀번호를 6자리 이상 입력해주세요.");
        return;
    }
}
//하이트 진로 로그인 끝

// 검색기능
const  hitejinro_searchs = (e) => {
    e.preventDefault();
    const search = document.getElementById("hitejinro_search");
    const isEmpty = search.value.trim().length === 0;
    if(isEmpty) return;
    const value = search.value.trim().split(' ').join('').toLowerCase();
    if( value.includes('카스') || value.includes('cass') ) {
        return location.href = `${location.origin}/hite/sub/hite.html`;
    }else if ( value.includes('맥스') || value.includes('max') ) {
        return location.href = `${location.origin}/hite/sub/max.html`;
    }else if ( value.includes('드라이') || value.includes('dry') ) {
        return location.href = `${location.origin}/hite/sub/dry.html`;
    }else if ( value.includes('스타우트') || value.includes('stout') ) {
        return location.href = `${location.origin}/hite/sub/stout.html`;
    }else if ( value.includes('퀸즈에일') || value.includes('queensale') ) {
        return location.href = `${location.origin}/hite/sub/queens_ale.html`;
    }else if ( value.includes('참이슬') || value.includes('참이슬프레시') || 
        value.includes('참이슬프레쉬') || value.includes('참이슬fresh') || 
        value.includes('chamisul') || value.includes('chamisulfresh') ) {
        return location.href = `${location.origin}/hite/sub/chamisul.html`;
    }else if ( value.includes('참이슬16.5') || value.includes('참이슬16') ||
        value.includes('chamisul16') || value.includes('chamisul16.5')) {
        return location.href = `${location.origin}/hite/sub/chamisul_16.html`;
    }else if ( value.includes('일품진로') || value.includes('ilpumjinro') ) {
        return location.href = `${location.origin}/hite/sub/chamisul_ilpum.html`;
    }else if ( value.includes('진로골드') || value.includes('jinrogold') ) {
        return location.href = `${location.origin}/hite/sub/jinro_gold.html`;
    }else if ( value.includes('참이슬담금주') || value.includes('담금주') || 
        value.includes('damgeumju') || value.includes('chamisuldamgeumju') ) {
        return location.href = `${location.origin}/hite/sub/damgeumju.html`;
    }else if ( value.includes('더클래스') || value.includes('클래스') ||
        value.includes('theclass') || value.includes('class') ) {
        return location.href = `${location.origin}/hite/sub/theclass.html`;
    }else if ( value.includes('킹덤') || value.includes('kingdom')) {
        return location.href = `${location.origin}/hite/sub/kingdom.html`;
    }else if ( value.includes('필라이트') || value.includes('filite')) {
        return location.href = `${location.origin}/hite/sub/filite.html`;
    }else if ( value.includes('망고링고') || value.includes('링고') || value.includes('mangolingo')) {
        return location.href = `${location.origin}/hite/sub/mangolingo.html`;
    }else if ( value.includes('이슬톡톡') || value.includes('이슬톡톡피치') || 
        value.includes('isultoktok') || value.includes('isultoktokpeach')) {
        return location.href = `${location.origin}/hite/sub/isultoktok_peach.html`;
    }else if ( value.includes('이슬톡톡파인애플') || value.includes('isultoktokpineapple')) {
        return location.href = `${location.origin}/hite/sub/isultoktok_pineapple.html`;
    }else if ( value.includes('자몽에이슬') || value.includes('chamisulgrapefruit') ||
        value.includes('grapefruit')) {
        return location.href = `${location.origin}/hite/sub/chamisul_grapefruit.html`;
    }else if ( value.includes('청포도에이슬') || value.includes('chamisulgreengrape') ||
        value.includes('greengrape')) {
        return location.href = `${location.origin}/hite/sub/chamisul_greengrape.html`;
    }else if ( value.includes('복분자') || value.includes('bokboonja')) {
        return location.href = `${location.origin}/hite/sub/bokboonja.html`;
    }else if ( value.includes('매화수') || value.includes('meawhasu')) {
        return location.href = `${location.origin}/hite/sub/meawhasu.html`;
    }else if ( value.includes('기린이치방시보리') || value.includes('이치방시보리') ||
        value.includes('기린시보리') || value.includes('기린') || value.includes('이치방') ||
        value.includes('시보리') || value.includes('kirinichiban') || value.includes('kirin') || 
        value.includes('ichiban') ) {
        return location.href = `${location.origin}/hite/sub/kirinichiban.html`;
    }else if ( value.includes('kronenbourg1664blanc') || value.includes('blanc') ||
        value.includes('1664') || value.includes('kronenbourgblanc') || value.includes('kronenbourgblanc') ||
        value.includes('블랑') || value.includes('크로넨버그1664블랑') || value.includes('크로넨버그블랑') || 
        value.includes('1664블랑') || value.includes('블랑1664') ) {
        return location.href = `${location.origin}/hite/sub/blanc.html`;
    }else if ( value.includes('싱하') || value.includes('singha')) {
        return location.href = `${location.origin}/hite/sub/singha.html`;
    }else if ( value.includes('인사말') || value.includes('ceo') || 
        value.includes('ceogreetings') || value.includes('ceogreeting')) {
        return location.href = `${location.origin}/hite/sub/ceo.html`;
    }else if ( value.includes('경영철학') || value.includes('철학') || value.includes('경영')||
        value.includes('managementphilosophy') || value.includes('management') || value.includes('philosophy')) {
        return location.href = `${location.origin}/hite/sub/philosophy.html`;
    }else if ( value.includes('연혁') || value.includes('history')) {
        return location.href = `${location.origin}/hite/sub/history.html`;
    }else if ( value.includes('품질경영') || value.includes('operation') || value.includes('qup')) {
        return location.href = `${location.origin}/hite/sub/operation.html`;
    }else if ( value.includes('소개') || value.includes('Introduction') || value.includes('Introduction')) {
        return location.href = `${location.origin}/hite/sub/Introduction.html`;
    }else if ( value.includes('위치') || value.includes('location')) {
        return location.href = `${location.origin}/hite/sub/location.html`;
    }else if ( value.includes('공장소개') || value.includes('소개') || value.includes('factory')) {
        return location.href = `${location.origin}/hite/sub/factory.html`;
    }else if ( value.includes('채용') || value.includes('모집') || value.includes('구인') || 
        value.includes('구직') || value .includes('구인구직') || value.includes('recruit')) {
        return location.href = `${location.origin}/hite/sub/recruit.html`;
    }else if ( value.includes('socialboard') || value.includes('social') || value.includes('sns') ) {
        return location.href = `${location.origin}/hite/sub/social_board.html`;
    }else if ( value.includes('미디어') || value.includes('보도자료') || value.includes('media')) {
        return location.href = `${location.origin}/hite/sub/media.html`;
    }else if ( value.includes('사회공헌') || value.includes('csr') || value.includes('csrjoy') || 
        value.includes('joy') ) {
        return location.href = `${location.origin}/hite/sub/csr_joy.html`;
    }else if ( value.includes('윤리') || value.includes('ethicalmanagement') || 
        value.includes('ethical')) {
        return location.href = `${location.origin}/hite/sub/Ethical_Management.html`;
    }else if ( value.includes('스포츠') || value.includes('sports')) {
        return location.href = `${location.origin}/hite/sub/sports.html`;
    }else if ( value.includes('faq') || value.includes('자주묻는질물')) {
        return location.href = `${location.origin}/hite/sub/FAQ.html`;
    }else if ( value.includes('q&a') || value.includes('질의응답')) {
        return location.href = `${location.origin}/hite/sub/question_answer.html`;
    }else if ( value.includes('guide') || value.includes('가이드') ||
        value.includes('주류상식 가이드') || value.includes('주류상식')) {
        return location.href = `${location.origin}/hite/sub/guide.html`;
    }else {
        return alert(`${search.value}와(과) 일치하는 검색결과가 없습니다.`);
    }
};
