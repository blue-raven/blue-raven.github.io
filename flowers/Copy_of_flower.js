var flower = {
	
	numPetals: 6,
	
	centerRadius: 25,
	
	petalWidth: 10,
	
	petalLength: 25,
	
	petalColor: '#A4F500',
	
	petalBorder: '#333',
	
	centerColor: '#FF7F00',
	
	centerBorder: '#333',
	
	
	create: function(petals,  centerRadius, petalWidth,	
		petalLength, petalColor, petalBorder,
		centerColor, centerBorder) {
		
		this.numPetals = petals;
		
		this.centerRadius = centerRadius;
		this.centerColor = centerColor;
		
		this.petalWidth = petalWidth;
		this.petalLength = petalLength;
		
		this.petalColor = petalColor;
		this.petalBorder = petalBorder;
				
		return this;
	}	
	
	
};
