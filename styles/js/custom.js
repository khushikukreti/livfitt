$(document).ready(function(){
    $('.pre-header4b > ul > li').mouseover(function(){
        var height = $(this).find('ul').height();
        console.log('height', height)
        if(height > 356){
        $(this).find('ul').css({'column-count':'2'}) 
     }
    else{}
    })
   
  
 });
 function addtoCart(pro_id){
         $.ajax({
                 type:"post",
                 url:"ajax.php",
                 data:{product_id:pro_id, action:'addtoCart',qty:1},
                 success:function(data){ 
                     if(data == 5){
                     
                             $(".add-cart-popup").addClass("open-addcart-popup");
                                             window.setTimeout(function(){location.reload()},3000);
                     }
                 }
             });
             return false;
     
     
     }
     
     function addtowishList(pro_id){		
      
              $.ajax({
                 type:"post",
                 url:"ajax/ajax.php",
                 data:{pro_id:pro_id, action:'addtowishList'},
                 success:function(data){ 
                     if(data == 5){
                         alert('added in wishlist');
                     }else if(data==4){
                         $('.user-login-sec').toggleClass('toggle-pop');	
                     }else {
                         alert('Already added in wishlist');
                     }
                 }
             });
             return false;		
     }
 
 
 $(".subscribe_btn").on('click', function(){
     var emailsubscribe = $(".subscribe_email").val();
     
     if(emailsubscribe ==""){
         $('.subscribe_email').css('border-color', 'red');
         $(".subscribe_email_error").html("Please enter your email").css('color', 'red');
         return false;
         }else{
         $('.subscribe_email').css('border-color', '');
         $(".subscribe_email_error").html("");
     }
     if(!(/^\w+([\.-]?\w+)*\@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(emailsubscribe))){
         $('.subscribe_email').css('border-color', 'red');
         $(".subscribe_email_error").html("Please enter your valid email").css('color', 'red');;
         return false;
         }else{
         $('.subscribe_email').css('border-color', '');
         $(".subscribe_email_error").html("");
     }
     var xhr=$.post("ajax/ajax.php",{emailid:emailsubscribe,op:'subscribe'});
     xhr.done(function(data){
         if(data!="")
         {
             $('.subscribe_email').val("").css('border-color','none');
             $(".subscribe_email_error").html(data).css('color','white');
             
         }
     });
     xhr.fail(function(data){
         
         $("#preloader").css("display","none");
     });
     
     
     return false;	
 });
 
 
 
 /*-----open-searchbar------*/
 $('.open-searchbar').on('click', function(){
     $('.pre-header3a').slideToggle(100);
 });
 
 /*-----open-searchbar------*/
 /*----open-sidebar---- */
 $('.open-sidebar').on('click', function(){
   $('.pre-header4').css({'left':'0'});
  /* $('body').css({'overflow':'hidden'}); */
 });
 /*----open-sidebars---- */
 /*----close-sidebars---- */
 $('.close-sidebar').on('click', function(){
   $('.pre-header4').css({'left':'-100%'});
   /*$('body').css({'overflow':'visible'});*/
 })
 /*----close-sidebars---- */
 $('.pre-header1e').on('click', function(){
   $('.pre-header1').css({'display':'none'});
 })
 
 /*
 $('.pre-header4b > ul > li').on('click', function(){
   $(this).find('ul').slideToggle(400);
   $(this).find('i').toggleClass('fa-minus') 
   if( $('.pre-header4b > ul > li').not(this).find('ul').css({'display':'block'}) || $('.pre-header4b > ul > li').not(this).find('a > i').hasClass('fa-minus')){
     $('.pre-header4b > ul > li').not(this).find('ul').css({'display':'none'});
     $('.pre-header4b > ul > li').not(this).find('a > i').removeClass('fa-minus');
   }
   
   else return false;
   
 });
 */
 
 $('.pre-header4b > ul > li > a > i').on('click', function(e){
     e.preventDefault();
     $(this).parent('a').siblings('ul').slideToggle(400);
     $(this).toggleClass('fa-minus'); 
     
      $('.pre-header4b > ul > li > a > i').not(this).parent('a').siblings('ul').css({'display':'none'});
      $('.pre-header4b > ul > li > a > i').not(this).removeClass('fa-minus');
   }
   
  
   
 );
 
 
 
 /*confetti-animation */
 /*
 $(document).ready(function() {
   var count = -1;
 function AddRedClass(){
 var boxes = $('.confetti-button');
 var boxLength = boxes.length - 1;
 count < boxLength ? count++ : count=0;
 boxes.removeClass('animate').eq(count).addClass('animate');
 }
 setInterval(AddRedClass, 2000);
 });
 */
 /*confetti-animation */
 
 $('.slider1').owlCarousel({         
     dots: false,
    autoplayTimeout: 4000,
    margin: 0,
    autoplayHoverPause:true,
     nav: false,
     loop: true,
     autoplay: true,
     slideSpeed: 1000,
     paginationSpeed: 1000,
     center: false,
     responsive: {
       0: {
         items: 1,
         nav: false,
         loop: false,
         dots: true,
       },
       600: {
         items: 1,
         nav: false,
         loop: false,
         dots: true,
       },
       1000: {
         items: 1,
         nav: false,
         loop: true,
         margin: 0,
         dots: true,
       }
     }
   });
 
 
 
   $('.daily-essential1a').owlCarousel({         
     dots: false,
     rtl: true,
     autoplayTimeout: 4000,
     margin: 0,
     nav: false,
     loop: true,
     autoplay: true,
     slideSpeed: 1000,
     paginationSpeed: 1000,
     center: false,
     responsive: {
       0: {
         items: 2,
         nav: true,
         loop: true,
         dots: false,
         margin:0
       },
       600: {
         items: 3,
         nav: false,
         loop: true,
         margin: 20,
         dots: false,
       },
       1000: {
         items: 4,
         nav: true,
         loop: true,
         margin: 20,
         dots: false,
       }
     }
   });
 
 
 
 
 
   $('.brand-slider').owlCarousel({         
     dots: false,
    autoplayTimeout: 4000,
     margin: 0,
     nav: false,
     loop: true,
     autoplay: true,
     slideSpeed: 1000,
     paginationSpeed: 1000,
     center: true,
     responsive: {
       0: {
         items: 3,
         nav: false,
         loop: true,
         dots: false,
       },
       600: {
         items: 3,
         nav: true,
         loop: true,
         margin: 20,
         dots: false,
       },
       1000: {
         items: 6,
         nav: true,
         loop: true,
         margin: 50,
         dots: false,
       }
     }
   });
 
 
 $('.continue-your-search').owlCarousel({         
     dots: false,
     autoplayTimeout: 4000,
     margin: 0,
      loop:true,
     nav: true,
     autoplay: true,
     slideSpeed: 1000,
     paginationSpeed: 1000,
     center: false,
     responsive: {
       0: {
         items: 2,
         nav: true,
         loop: true,
         dots: false,
         margin:0,
       },
       600: {
         items: 2,
         nav: true,
         loop: true,
         margin: 10,
         dots: false,
       },
       1000: {
         items: 4,
         nav: true,
         loop: true,
         margin: 10,
         dots: false,
       }
     }
   });
 /* //=====================smooth scroll on anchor tag===================== */
 $(document).ready(function(){
   // Add smooth scrolling to all links
   $(".scrollToTop").on('click', function(event) {
       $('html, body').animate({
           scrollTop: 0
       }, 1200, function(){
         $('.scrollToTop').css({'display':'none'})
       });
     }) 
   });
 
 
   window.onscroll = function() {scrollFunction2()};
   function scrollFunction2(){
      if (document.documentElement.scrollTop > 700){
         $('.scrollToTop').css({'display':'block'});
      } else {
      $('.scrollToTop').css({'display':'none'});
      } 
   }
 
 
  /* //===========================================filter-page============================================================*/
 $('.listing-product-by-sort-heading').on('click', function(){
   $(this).siblings('.listing-product-by-sort-options').slideToggle(100);
 });
 
 
  $('.listing-product-filter-list-heading').on('click', function(){
    $(this).siblings('.listing-product-filter-list-options').slideToggle(100);
    $('.listing-product-filter-list-heading').not(this).siblings('.listing-product-filter-list-options').css({'display':'none'});
  });
 
 
  $('.fa.fa-heart-o').on('click', function(){
    $(this).removeClass('fa-heart-o');
    //$(this).toggleClass('fa-heart');
  });
 
 $(window).scroll(function () { 
     if ($(window).scrollTop() > 260) {
       $('.open-filter-box').css({'position':'fixed', 'top':'80px'});
     }
     else{
         $('.open-filter-box').css({'position':'absolute', 'top':'0'});
         }
     
     });
  
  
  
  /*--fixed-filter-icon-in-phone--*/
 /*open-filter-in-phone*/
 
 $('.open-filter-box').on('click', (e)=>{
     $('.ps-sticky').css({'left':'0'})
 });
 
 $('.close-listing-filter-box').on('click', (e)=>{
     $('.ps-sticky').css({'left':'-100%'});
 });
 /*open-filter-in-phone*/
  /*============================================================product-detail-page==================================================== */
  /*--set-quantity---*/
 $('.plus').on('click', function() {
         if ($(this).prev().val()) {
             $(this).prev().val(+$(this).prev().val() + 1);
         }
     });
     $('.minus').on('click', function() {
         if ($(this).next().val() > 1) {
             if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
         }
     });
 /**--------------check pincode---------- */
 $('.changepincode').on('click', function(){
    $('.product-detail-product-delivery-info1').hide();
    $('.product-detail-product-check-pincode').show();
 });
 $('.btn-sub').on('click', function(e){
    e.preventDefault();
    var val = $('.area-code').val();
    if(val.length < 6){
        alert('type proper pincode');}
        else{
             $('.del-pincode').text(val);
             $('.product-detail-product-delivery-info1').show();
             $('.product-detail-product-check-pincode').hide();
        }
  
 })
 
 /**--------------check pinocde---------- */
  /**--------------three-tabs---------- */
 $('.open-description-box').on('click', function(){
   $(this).addClass('active');
   $('.open-ingredient-box, .open-howuse-box').removeClass('active');
   $('.description-box').css({'display':'block'});
   $('.ingredient-box, .howuse-box').css({'display':'none'});
 });
 
 $('.open-ingredient-box').on('click', function(){
   $(this).addClass('active');
   $('.open-description-box, .open-howuse-box').removeClass('active');
   $('.ingredient-box').css({'display':'block'});
   $('.description-box, .howuse-box').css({'display':'none'});
 });
 
 $('.open-howuse-box').on('click', function(){
   $(this).addClass('active');
   $('.open-ingredient-box, .open-description-box').removeClass('active');
   $('.howuse-box').css({'display':'block'});
   $('.ingredient-box, .description-box').css({'display':'none'});
 });
 /**--------------three-tabs---------- */
 /**--------------show more---------- */
 $('.product-detail-product-description-container-box-show-more').on('click', function(){
    var heightt = $(this).siblings('.product-detail-product-description-container-box1').height();
 
   if(heightt == 200){
                   $(this).siblings('.product-detail-product-description-container-box1').css({'height':'100%'});
                   $(this).html('Read Less <i class="fa fa-angle-up"></i>')
   } else if(heightt = '100%'){
     $(this).siblings('.product-detail-product-description-container-box1').css({'height':'200px'});
     $(this).html('Read More <i class="fa fa-angle-down"></i>')
   } else{}
 });
 
 /**--------------show more---------- */
  $('.product-detail-similar-products').owlCarousel({         
   dots: false,
   autoplayTimeout: 4000,
   margin: 0,
   nav: true,
   loop: false,
   autoplay: true,
   slideSpeed: 1000,
   paginationSpeed: 1000,
   center: false,
   responsive: {
     0: {
       items: 2,
       nav: true,
       loop: true,
       dots: false,
       margin:0,
     },
     600: {
       items: 2,
       nav: false,
       loop: true,
       margin: 0,
       dots: false,
     },
     1000: {
       items: 3,
       nav: true,
       loop: true,
       margin: 20,
       dots: false,
     }
   }
 });
 
 
 /*-------------------------------------------------------------------cart-page------------------------------------------------*/
 $('.cart-checkout-coupon-code span').on('click', function(){
              $(this).slideToggle(50);
              $('.cart-checkout-coupon-code span').not(this).slideToggle(50);
              $('.cart-checkout-coupon-code-box').slideToggle(50);
          });
          
 /*--------------------------------------------------------------------cart-page------------------------------------------------*/
 /*-user-dashboard---*/
 $('.cart2bd a').on('click', function(e){
     e.preventDefault();
     
     $('.add-popupadress').css({'display':'block'});
 });
 
 $('.cart2bdchk a').on('click', function(e){
     e.preventDefault();
     if($(".is_login").val()==0){
     
         $("#lg_user_name").css('border-color', 'red');
         $("#fn").html("Please enter mobile number").css('color', 'red');
         $("#lg_user_name").focus();
     
         return false;
     }else{
         $("#lg_user_name").css('border-color', 'none');
         $("#fn").html("");
     }
     
     $('.add-popupadress').css({'display':'block'});
 });
 
 $('.close-add-popupadress').on('click', function(){
     $('.add-popupadress').css({'display':'none'});
 });
 
 
 
 /*add-adress*/
  $('.cart2ac a').on('click', function(e){
         e.preventDefault();
         $(this).addClass('active');
         $('.cart2ac a').not(this).removeClass('active');
         $('.cart2ad').css({'display':'none'});
     });
     $('.cart2ac a.work').on('click', function(e){
         e.preventDefault();
         $(this).addClass('active');
         $('.cart2ac a').not(this).removeClass('active');
         $('.cart2ad').css({'display':'block'});
     });
 /*add-address*/
 /*---user-dashboard---*/
 
 /*
 $(document).ready(function(){
   // Add smooth scrolling to all links
   $("a").on('click', function(event) {
 
     // Make sure this.hash has a value before overriding default behavior
     if (this.hash !== "") {
       // Prevent default anchor click behavior
       event.preventDefault();
 
       // Store hash
       var hash = this.hash;
 
       // Using jQuery's animate() method to add smooth page scroll
       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
       $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 1200, function(){
         //$(this).css("padding-top", "50px");
 
      
       });
     } // End if
   });
 });
 */
 
 $(document).ready(function(){
   // Add smooth scrolling to all links
   $(".scrollToTop").on('click', function(event) {
       $('html, body').animate({
           scrollTop: 0
       }, 1200, function(){
         $('.scrollToTop').css({'display':'none'})
       });
     }) 
   });
 
 
  window.onscroll = function() {scrollFunction2()};
   function scrollFunction2(){
      if (document.documentElement.scrollTop > 700){
         $('.scrollToTop').css({'display':'block'});
      } else {
      $('.scrollToTop').css({'display':'none'});
      } 
   }
 /*----------------------------------------------------------------dashboard-------------------------------------------------------------------------------*/
 
 $('.open-dashboard-menu').on('click', function(){
     $('.widget-block').slideToggle(200);
 });
 
 /*-----------------------------------------------------------------dashboard------------------------------------------------------------------------------*/
 /*** LOAD MORE STRAT************/
     $(".loadmore").click(function (){ 
     
         var category = $(this).data('category');
         var subcategory = $(this).data('subcategory');
         var brandcond = $(this).data('brandcond');
         var subcatcond = $(this).data('subcatcond');
         var sortcond = $(this).data('sortcond');
         var maxcond = $(this).data('maxcond');
         var mincond = $(this).data('mincond');
         var scate = $(this).data('scate');
         var kwrd = $(this).data('kwrd');
         var brnd = $(this).data('brnd');
         var total = $(this).data('total');		
         var loaded = $(this).data('loaded');
          $.ajax({
                 type:"post",
                 url:"ajax.php",
                 data:{action:'loadMore', total:total, loaded:loaded, subcategory:subcategory, category:category,brandcond:brandcond, subcatcond:subcatcond, sortcond:sortcond, maxcond:maxcond, mincond:mincond, brnd:brnd,scate:scate,kwrd:kwrd },
                 success:function(response){ 
                 var resp = response.split("$$$$$");
                 
         
                     $(".catalogProduct").append(resp[0]);
                     $(".loadmore").data("loaded",resp[1]); 
                     if((total-resp[1])>2){
                         $(".loadmore").css("display","block");
                     }else{
                         $(".loadmore").css("display","none");
                     }
                     var $input = $('input.rating');
                         if ($input.length) {
                             $input.removeClass('rating-loading').addClass('rating-loading').rating();
                         }
                     }
             });
             return false;	
         
     });
 /*** LOAD MORE END ************/
 
       $(".addtowish").click(function(){		
        var pro_id = $(this).data("pro_id");
              $.ajax({
                 type:"post",
                 url:"ajax/ajax.php",
                 data:{pro_id:pro_id, action:'addtowishList'},
                 success:function(data){ 
                     if(data == 5){
                         alert('added in wishlist');
                     }else if(data==4){
                         $('.user-login-sec').toggleClass('toggle-pop');	
                     }else {
                         alert('Already added in wishlist');
                     }
                 }
             });
             return false;		
     });
     
       $(".addtocart").click(function(){		
        var pro_id = $(this).data("pro_id");
              $.ajax({
                 type:"post",
                 url:"ajax.php",
                 data:{product_id:pro_id, action:'addtoCart',qty:1},
                 success:function(data){ 
                     if(data == 5){
                     
                             $(".add-cart-popup").addClass("open-addcart-popup");
                                             window.setTimeout(function(){location.reload()},3000);
                     }
                 }
             });
             return false;		
     });
 
 
 $(".removefrmwishList").click(function(){		
     var pro_id = $(this).data("pro_id");
     var user_id = $(this).data("user_id");
              $.ajax({
                 type:"post",
                 url:"ajax/ajax.php",
                 data:{pro_id:pro_id,user_id:user_id, action:'rempveFromwishList'},
                 success:function(data){ 
                     if(data == 5){
                         alert('Removed');
                         window.location='wishlist.php';
                     }else if(data==4){
                         $('.user-login-sec').toggleClass('toggle-pop');	
                     }
                     window.location='wishlist.php';
                 }
             });
             return false;		
     });
     
 $(document).ready(function(){
     
     $("#search-box").keyup(function(){
         if($(this).val()!=""){
             $.ajax({
             type: "POST",
             url: "ajaxsearch.php",
             data:'action=globalSearch&keyword='+$(this).val(),
             beforeSend: function(){
                 $("#search-box").css("background","#FFF url(LoaderIcon.gif) no-repeat 85%");
             },
             success: function(data){
                 $("#suggesstion-box").show();
                 $("#suggesstion-box").html(data);
                 $("#search-box").css("background","#FFF");
             }
             });
         }else{
                 $("#suggesstion-box").html('');
                 $("#search-box").css("background","#FFF");
         }
     });
 });
 
 
 
 