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

        var player1;

MyGame = ig.Game.extend({

    gravity: 400,
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

        // Getting the player's entity stored into a var so we can operate on it
        player1 = this.getEntityByName('player');

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
			y = 20;
		
		this.font.draw( 'A Monster\'s Story', x, y, ig.Font.ALIGN.CENTER );
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 800, 576);

});
