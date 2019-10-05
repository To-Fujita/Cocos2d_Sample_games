// Sample for Cocos2d.js by T. Fujita on 2019/9/10

var GameLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

// Initialize
        this._super();

// Get windows size
        var size = cc.director.getWinSize();
	var temp_x = size.width / 2;
	var temp_y = size.height / 2;
	var MS_x = 0;
	var MS_y = 0;
	var Speed = 1;
	var act1, act2, acts;

// Create the background image
        this.back_img = cc.Sprite.create(res.Back_jpg);
        this.back_img.x = temp_x;
        this.back_img.y = temp_y;
        this.addChild(this.back_img, 0);

// Create the sprite for player
	this.player = new cc.Sprite.create(res.PLAYER_png, cc.rect(48, 0, 48, 48));
	this.player.x = temp_x;
	this.player.y = temp_y;
	this.addChild(this.player, 1);
    }
});

var GameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});

