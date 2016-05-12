(function(){



    checkReply = function(data) {
        if (typeof(data.status) != "undefined") {
           
            alert(data.message);
            return false;
        } else {
            return true;
        }
    };
    server = {
         url:"http://sbta.in/websites/oroms/service/",
            request: function(options) {
                return $.post(server.url+"index.php", options).promise();
            },
            debug: function(options) {
                return $.post(server.url+"debug.php", options).promise();
            }

       
       };
       
function loadScript(){
	
	  var top = $("#scripts");
            top.html(" <script src='./js/jQuery.2.1.js'></script> "+"<script src='./js/webflow.js'></script> "
            +"<script>$(window).load(function(){$('.loaddiv').fadeOut(5000);});</script>");
}  
  function notificationcorrect(strblue){
	
		    var top = $("#notificationblue");
		    var top1=$("#successCode");
		    top1.html("<h3 class='notification-text'>"+strblue+"</h3>");
            top.click();

}
      function notificationincorrect(strred){
	
		    var top = $("#notificationred");
		    var top1=$("#errorCode");
		    top1.html("<h3 class='notification-text'>"+strred+"</h3>");
            top.click();

}


  
				var isemployee  = localStorage.getItem("isemployee");
				var login  = localStorage.getItem("login");
				console.log(isemployee)


$usersession = {


	
	
	
};

  
             

	function loadorders(){
        	
  
            server.request({route:{app:'getcheforders'}}).done(function(data){   
            $("#allorder").html("");
            for(i=0;i<data.vip.length;i++){
            //	alert(data.vip[i].OrderID)
            	
            	
   			server.request({route:{app:'chefr',id:data.vip[i].OrderID}}).done(function(data){ 
   				
   				console.log(data);
   				
		  	var source   = $("#orderlist").html();
   			var template = Handlebars.compile(source);
   			var html    = template( data );
  			$("#allorder").append(html); 

  			loadScript();
        	});
            		 			

  			}
  			//loadScript();
            server.request({route:{app:'getcheforders'}}).done(function(data){   
            console.log(data);
           	var source   = $("#counts").html();
   			var template = Handlebars.compile(source);
   			var html    = template( data );
  			$("#q").html(html); 
           
           
  			});
                        give();

  			});}


        	if(login=="true" ){
if(isemployee==3){
        		        	loadorders();
        	
          $("body").delegate("#done","click",function(){
        	var id=$(this).data("id");
        	var d=3;
        	server.request({route:{app:'updateOrderChef',id:id,d:d}}).done(function(data){ 
      	 	      	 	 notificationcorrect("DONE :) ");

				loadorders();
        	});
			
        	});
        	$("body").delegate(".logout-div","click", function(){
	localStorage.setItem("login",false);
	localStorage.removeItem("loginID");

	localStorage.removeItem("isemployee");
	window.location="./index.html";
});

        	        	

        	}else{
$("._5body").html("");


}

}else{
	window.location="./index.html";


}
function give(){





  setTimeout(function(){


  loadorders()
}, 600000);  




}
 
  

      	
        	
        	
            
////////////////////////////////////////////////////////////////////


})();


