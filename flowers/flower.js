var flower = {
	
	numPetals: 6,
		
	petalRadius: 12,
	
	centerRadius: 24,
		
	petalColor: '#A4F500',
	
	petalBorder: '#333',
	
	centerColor: '#FF7F00',
	
	centerBorder: '#333',
	
	
	create: function(petals,  centerRadius, petalRadius,	
		petalColor, petalBorder, centerColor, centerBorder) {
		
		this.numPetals = (petals) ? petals : this.numPetals;
		
		this.centerRadius = (centerRadius) ? centerRadius : this.centerRadius;
		
		this.centerColor = (centerColor) ? centerColor : this.centerColor;
		
		this.centerBorder = (centerBorder) ? centerBorder : this.centerBorder;
		
		this.petalRadius = (petalRadius) ? petalRadius : this.petalRadius;
			
		this.petalColor = (petalColor) ? petalColor : this.petalColor ;
		
		this.petalBorder = (petalBorder) ? petalBorder : this.petalBorder;
				
		return this;
	}	
	
	
};
