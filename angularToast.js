
 	app.directive("angularToast",function(){
 	return {
 		restrict: 'AE',
 		 scope:{
        	 texttoast:"@"  		
		},
		transclude: true, 
 		template:'<div class="angulat-toast">'+
 		'<div class="text">{{texttoast}}</div>'+	
 		'</div>'
 	}

 })

 