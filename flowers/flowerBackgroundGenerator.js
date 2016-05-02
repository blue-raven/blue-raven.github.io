var flowerGenerator = {
	
	targetId: 'flowers',
	
	flowers : [
	
		new Flower( 6, 12, 8, 8, 5, '#E32591', '#fff' )
	],
	
	count: 42,
	
	create: function( ) {	
			
			var canvas = document.createElement('canvas');
				
			var target = document.getElementById( this.targetId );
			target.appendChild( canvas );			
			
			var w = target.offsetWidth;
			var h = target.offsetHeight;
			
			canvas.width = w;
			canvas.height = h;
			
			//console.log("Width: " + w);
			//console.log("Heigh: " + h);
			
			var ctx = canvas.getContext( '2d' );
					
			for( var idx = 0; idx < this.flowers.length; idx ++ ) {
				
				var  flower = this.flowers[idx];
				
				for( var kdx = 0; kdx < this.count; kdx ++ ) {
				
					//  Origin
					var ox = this.randNum( 0, w );
					var oy = this.randNum( 0, h );
					
					//console.log( 'Origin: (' + ox + ', ' + oy + ')' );
					
					var theta = ( Math.PI * 2 ) / flower.petals;
					var radius = flower.centerRadius + flower.offset;
									
					ctx.beginPath();
					
					for( var jdx = 0; jdx < flower.petals; jdx ++ ) {
											
						var x = ox + ( radius * Math.cos( theta * jdx ) );
						var y = oy + ( radius * Math.sin( theta * jdx ) );
					  
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
			}
	},
	
	
	create2: function( ) {	
			
			var canvas = document.createElement('canvas');
						
			var w = screen.availWidth;
			var h = screen.availHeight;
			
			canvas.width = w;
			canvas.height = h;
			
			console.log("Width: " + w);
			console.log("Heigh: " + h);
			
			var ctx = canvas.getContext( '2d' );
			
			
			//  Draw Radial - Gradient in Lower Left Corner
			var gradient = ctx.createRadialGradient(0, h, h, .1 * w, .9 * h, 0);
			
			gradient.addColorStop(0, '#333');
			gradient.addColorStop(1, '#26AACA');
			
			ctx.fillStyle = gradient;
			ctx.fillRect( 0, 0, w, h );
			
			
			for( var idx = 0; idx < this.flowers.length; idx ++ ) {
				
				var  flower = this.flowers[idx];
				
				for( var kdx = 0; kdx < this.count; kdx ++ ) {
				
					//  Origin
					var ox = this.randNum( 0, w );
					var oy = this.randNum( 0, h );
					
					//console.log( 'Origin: (' + ox + ', ' + oy + ')' );
					
					var theta = ( Math.PI * 2 ) / flower.petals;
					var radius = flower.centerRadius + flower.offset;
									
					ctx.beginPath();
					
					for( var jdx = 0; jdx < flower.petals; jdx ++ ) {
											
						var x = ox + ( radius * Math.cos( theta * jdx ) );
						var y = oy + ( radius * Math.sin( theta * jdx ) );
					  
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
			}
		
			var url = canvas.toDataURL();
			
			//  #28A4C9
			document.body.style.background = 'url(' + url + ') no-repeat';
			
			document.body.style.backgroundSize = 'cover';	
	},
	
	
	
	randNum: function( min, max ) {
		
		return Math.floor(Math.random() * ( max - min ) + min);
	},
	
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
		
		
		flowerGenerator.create2();
	});

	//  Use JQuery
	console.log('Using jQuery');
}
else {
	
	console.log( 'Somethings not right');
	//  Falback Content
}
