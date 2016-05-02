//var imported = document.createElement('script');
//imported.src = './flower.js';
//document.head.appendChild( imported );



var flowerGenerator = {
	
	targetId: 'flowers',
	
	create: function( ) {	
		
		
		if( window.jQuery && $('#' + this.targetId) ) {
			
			var target = $('#' + this.targetId);
			
			var w = target.width();
			var h = target.innerHeight();
			
		console.log("Width: " + w);
		console.log("Heigh: " + h);
		
		//console.log(target);
		
			var canvas = $('<canvas />', {
				
				id: 'flower-background',
				
				width: w,
				heigh: h,
			}).appendTo( target );
			
			
			
			//  Use JQuery
			console.log('Using jQuery');
		}
		else {
			
			console.log( 'Somethings not right');
			//  Falback Content
		}
		
	},
	
	
	
	draw: function() {
		

		
		var canvas = document.createElement('canvas');
				
		var target = document.getElementById( this.targetId );
		target.appendChild( canvas );
		
		var w = target.offsetWidth;
		var h = target.offsetHeight;
		
		canvas.width = w;
		canvas.height = h;
				
		var originX = w / 2;
		var originY = h / 2;
		
		console.log("Width: " + w);
		console.log("Heigh: " + h);
		
		var ctx = canvas.getContext( '2d' );
				
		var cr = 12;
		var pw = 8;
		var pl = 8;
		var petals = 6;
		var offset = 5;
		
		var theta = (Math.PI * 2) / petals;
		var radius = cr + offset;
		
		ctx.beginPath();
		ctx.lineWidth = 2;
		
		for (var idx=0; idx < petals; idx++) {
		  		  		  
		  var x = originX + (radius * Math.cos( theta * idx ) );
		  var y = originY + (radius * Math.sin( theta * idx ) );
		  
		  //console.log("Idx: " + idx + " ,  Coords: " + x + ", " + y);
		  
		  ctx.moveTo( x, y );
		  
		  ctx.ellipse( x, y, pl, pw, theta * idx, 0, Math.PI * 2, false );
		};
				
		ctx.stroke();
		//ctx.fillStyle = '#03A3C8';
		ctx.fillStyle = '#E32591';
		ctx.fill();
		ctx.closePath();
		
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.arc( originX, originY, cr, 0, Math.PI * 2 );
		
		ctx.fillStyle = '#fff';
		ctx.fill();
		
		ctx.stroke();
		
	}
	
	
};


function Flower(petals, centerRadius, petalWidth, petalLength,
				petalOffset, centerColor, petalColor) {
					
	this.petals = petals;
	this.centerRadius = centerRadius;
	
	 this.petalWidth = petalWidth;
	this.petalLength = petalLength;
	this.petalOffset = petalOffset;
	
	this.centerColor = centerColor;
	this.petalColor = petalColor;					 	
}

flowerGenerator.create();
