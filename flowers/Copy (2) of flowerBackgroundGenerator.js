var flowerGenerator = {
	
	targetId: 'flowers',
	
	flowers : [
	
		new Flower( 6, 12, 8, 8, 5, '#E32591', '#fff' )
	],
	
	create: function( ) {	
				
			/*	
			var target = $('#' + this.targetId);
								
			var canvas = $('<canvas />', {
				
				id: 'flower-background',
				
				//  Note to Self:  DO NOT Use Css to Set Width / Height
				//  On Canvas!!!  Causes distortion / weird scaling issues!!!
				//width: '100%',
				//heigh: '100%',
			}).appendTo( target );
			
			// Note to Self:  jQuery uses indices for HTML DOM Elements
			var ctx = canvas[0].getContext( '2d' );
			*/
			
			var canvas = document.createElement('canvas');
				
			var target = document.getElementById( this.targetId );
			target.appendChild( canvas );			
			
			var w = target.offsetWidth;
			var h = target.offsetHeight;
			
			canvas.width = w;
			canvas.height = h;
			
			console.log("Width: " + w);
			console.log("Heigh: " + h);
			
			var ctx = canvas.getContext( '2d' );
					
			for( var idx = 0; idx < this.flowers.length; idx ++ ) {
				
				var  flower = this.flowers[idx];
				
				//  Origin
				var ox = this.randNum( 0, w );
				var oy = this.randNum( 0, h );
				
				console.log( 'Origin: (' + ox + ', ' + oy + ')' );
				
				var theta = ( Math.PI * 2 ) / flower.petals;
				var radius = flower.centerRadius + flower.offset;
								
				ctx.beginPath();
				
				for( var jdx = 0; jdx < flower.petals; jdx ++ ) {
										
					var x = ox + ( radius * Math.cos( theta * jdx ) );
					var y = oy + ( radius * Math.sin( theta * jdx ) );
				  //console.log(flower);
					ctx.moveTo( x, y );
					ctx.ellipse( x, y, flower.petalLength, flower.petalWidth,
				  				theta * jdx, 0, Math.PI * 2, false );
				}
				
				ctx.stroke();
				ctx.fillStyle = '#E32591';
				ctx.fill();
				ctx.closePath();
				
				ctx.beginPath();
				ctx.lineWidth = 1;
				ctx.arc( ox, oy, flower.centerRadius, 0, Math.PI * 2 );
				
				ctx.fillStyle = '#fff';
				ctx.fill();
				
				ctx.stroke();
			}	
	},
	
	
	randNum: function( min, max ) {
		
		return Math.floor(Math.random() * ( max - min ) + min);
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
		console.log("Height: " + h);
		
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

/**
 *	Container Object for Flower Details
 * @param {Object} petals -> Number of Petals
 * @param {Object} centerRadius -> Radius of Center of Flower
 * @param {Object} petalWidth -> Width of Petals
 * @param {Object} petalLength -> Length Of Petals
 * @param {Object} offset -> Amt. to adj petals in or out of Flower Center
 * @param {Object} centerColor ->  Color of Flower Center
 * @param {Object} petalColor ->  Color of Flower Petals
 */
function Flower(petals, centerRadius, petalWidth, petalLength,
				offset, centerColor, petalColor) {
					
	this.petals = petals;
	this.centerRadius = centerRadius;
	
	this.petalWidth = petalWidth;
	this.petalLength = petalLength;
	this.offset = offset;
	
	this.centerColor = centerColor;
	this.petalColor = petalColor;					 	
}

if( window.jQuery ) {

	$(window).load( function() {
		
		
		flowerGenerator.create();
	});

	//  Use JQuery
	console.log('Using jQuery');
}
else {
	
	console.log( 'Somethings not right');
	//  Falback Content
}
