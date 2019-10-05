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

// Create the background image
        this.back_img = cc.Sprite.create(res.Back_jpg);
        this.back_img.x = temp_x;
        this.back_img.y = temp_y;
        this.addChild(this.back_img, 0);

// Create the sprite for player
	var frames = [];
	for (i = 0; i < 3; i++) {
		var frame = new cc.SpriteFrame(res.PLAYER_png, cc.rect( i * 48, 0, 48, 48));
		frames.push(frame);
	}
	var animation_walk = new cc.Animation.create(frames);
	animation_walk.setDelayPerUnit(15 / 60);
	animation_walk.setRestoreOriginalFrame(false);
	var action_walk = new cc.Animate(animation_walk, 1);
	this.player = new cc.Sprite.create();
	this.player.x = temp_x;
	this.player.y = temp_y;
	this.player.runAction(cc.RepeatForever.create(action_walk));
	this.addChild(this.player, 1);
    },
});

var GameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});

