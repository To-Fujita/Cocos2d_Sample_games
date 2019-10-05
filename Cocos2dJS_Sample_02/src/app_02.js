// Sample for Cocos2d.js by T. Fujita on 2019/9/10

var Scale = 1;
var P_size = 48 * Scale;
var Speed = 1;

var GameLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

// Initialize
        this._super();

// Get the window size
        var size = cc.director.getWinSize();
	var temp_x = size.width / 2;
	var temp_y = size.height / 2;
	var MS_x = 0;
	var MS_y = 0;
	var act1, act2, acts;

// Create the background image
        this.back_img = cc.Sprite.create(res.Back_jpg);
        this.back_img.x = temp_x;
        this.back_img.y = temp_y;
        this.addChild(this.back_img, 0);

// Create the sprite for the player
	this.player = new cc.Sprite.create(res.PLAYER_png, cc.rect(48, 0, 48, 48));
	this.player.setScale(Scale, Scale);
	this.player.x = temp_x;
	this.player.y = temp_y;
	this.addChild(this.player, 1);
	var Player = this.player;

// Get the mouse's position at push down the bottun
	cc.eventManager.addListener({
	    event: cc.EventListener.MOUSE,
	    onMouseDown: function(e) {
		MS_x = Math.floor(e.getLocationX());
		MS_y = Math.floor(e.getLocationY());
		Move_set();
		acts = cc.Sequence.create(act1, act2);
		Player.runAction(cc.Sequence.create(acts));
	    }
	}, this);

// Get the pressed key on keyboard 
	cc.eventManager.addListener({
	    event: cc.EventListener.KEYBOARD,
	    onKeyPressed: function(keyCode, event) {
                if (keyCode == cc.KEY.left) {
                    MS_x = Player.x - P_size;
		    MS_y = Player.y;
                }
                if (keyCode == cc.KEY.right) {
                    MS_x = Player.x + P_size;
		    MS_y = Player.y;
                }
                if (keyCode == cc.KEY.up) {
		    MS_x = Player.x;
                    MS_y = Player.y + P_size;
                }
                if (keyCode == cc.KEY.down) {
		    MS_x = Player.x;
                    MS_y = Player.y - P_size;
                }
		Move_set();
		acts = cc.Sequence.create(act1, act2);
		Player.runAction(cc.Sequence.create(acts));
	    }
	}, this);
        return true;

// Set the action for the Player
	function Move_set() {
		Speed = Math.floor(Math.abs(Player.x - MS_x)) / 100;
		act1 = cc.MoveTo.create(Speed, cc.p(MS_x, Player.y));
		Speed = Math.floor(Math.abs(Player.y - MS_y)) / 100;
		act2 = cc.MoveTo.create(Speed, cc.p(MS_x, MS_y));
		return true;
	}
    }
});

var GameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});

