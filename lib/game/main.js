ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
    'game.levels.testing_lvl',
	'impact.font',
    'impact.image'
)
.defines(function(){

MyGame = ig.Game.extend({

    gravity: 400,
    myCustomStr: 'Hello',
    myCustomInt: 0,
    timesJumped: 0,
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	
	init: function() {
		// Initialize your game here; bind keys etc.

        this.loadLevel(LevelTesting_lvl);

        // Bind Keys
        ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
        ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
        ig.input.bind(ig.KEY.SPACE, 'jump');

	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();

		// Add your own, additional update code here
        //this.myCustomInt++;
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
		
		this.font.draw( 'Sim Tower: Redux - '+this.myCustomStr+' for the '+this.myCustomInt+" time...", x, y, ig.Font.ALIGN.CENTER );
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 800, 576);

});
