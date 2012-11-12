/**
 * Created with IntelliJ IDEA.
 * User: jean-philippeveilleux
 * Date: 2012-11-11
 * Time: 10:59 PM
 * To change this template use File | Settings | File Templates.
 */

ig.module(
    'game.entities.player'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityPlayer = ig.Entity.extend({

        animSheet: new ig.AnimationSheet("./media/player_idle.png", 128, 128),
        size: {x: 128, y: 128},
        offset: {x:0, y:0},
        flip: false,
        maxVel: {x: 300, y: 450},
        friction: {x: 900, y: 0},
        accelGround: 700,
        accelAir: 200,
        jump: 200,

        init: function(x, y, settings){

            this.parent(x, y, settings);
            this.addAnim('idle', 0.3, [0,1,2,3,4]);

        },

        update: function(){

            var accel = this.standing ? this.accelGround : this.accelAir;

            if(ig.input.state('left')){
                this.accel.x = -accel;
                this.flip = true;
            }else if(ig.input.state('right')){
                this.accel.x = accel;
                this.flip = false;
            }else{
                this.accel.x = 0;
            }

            // Jumping
            if(this.standing && ig.input.pressed('jump')){
                this.vel.y = -this.jump;
            }

            this.parent();

        }

    });

});