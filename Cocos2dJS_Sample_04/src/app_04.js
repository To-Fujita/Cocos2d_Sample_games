// Sample for Cocos2d.js by T. Fujita on 2019/9/10

var Scale = 1;
var P_size = 48 * Scale;
var Speed = 1;
var PS_x = 300;
var PS_y = 250;
var MS_x, MS_y, PC_x, PC_y;
var direction;
var player;
var PLAYER;
var flag = 0;

var Player = cc.Layer.extend({
    ctor: function() {
	this._super();
    },
    initializedParam: function() {
	direction = "stay";
    },
    walkRight: function() {
	var frames = [];
	for (i = 0; i < 3; i++) {
		var frame = new cc.SpriteFrame(res.PLAYER_png, cc.rect( i * 48, 96, 48, 48));
		frames.push(frame);
	}
	    var animation_right = new cc.Animation.create(frames);
	    animation_right.setDelayPerUnit(15 / 60);
	    animation_right.setRestoreOriginalFrame(false);
	    var action_right = new cc.Animate(animation_right, 1);
	    if(flag == 0) {
		player = new cc.Sprite.create();
		player.setScale(Scale, Scale);
		var act = cc.MoveTo.create(0.1, cc.p(PS_x, PS_y));
		player.runAction(cc.Sequence.create(act));
	    }
	    var act_right = cc.MoveTo.create(Speed, cc.p(player.x + P_size, player.y));
	    player.runAction(cc.Sequence.create(act_right));
	    player.runAction(cc.RepeatForever.create(action_right));
	    this.addChild(player, 1);
	flag = 1;
	PC_x = player.x + P_size;
	PC_y = player.y;
    },
    walkLeft: function() {
	var frames = [];
	for (i = 0; i < 3; i++) {
		var frame = new cc.SpriteFrame(res.PLAYER_png, cc.rect( i * 48, 48, 48, 48));
		frames.push(frame);
	}
	    var animation_left = new cc.Animation.create(frames);
	    animation_left.setDelayPerUnit(15 / 60);
	    animation_left.setRestoreOriginalFrame(false);
	    var action_left = new cc.Animate(animation_left, 1);
	    if(flag == 0) {
		player = new cc.Sprite.create();
		player.setScale(Scale, Scale);
		var act = cc.MoveTo.create(0.1, cc.p(PS_x, PS_y));
		player.runAction(cc.Sequence.create(act));
	    }
	    var act_left = cc.MoveTo.create(Speed, cc.p(player.x - P_size, player.y));
	    player.runAction(cc.Sequence.create(act_left));
	    player.runAction(cc.RepeatForever.create(action_left));
	    this.addChild(player, 1);
	flag = 1;
	PC_x = player.x - P_size;
	PC_y = player.y;
    },
    walkUp: function() {
	var frames = [];
	for (i = 0; i < 3; i++) {
		var frame = new cc.SpriteFrame(res.PLAYER_png, cc.rect( i * 48, 144, 48, 48));
		frames.push(frame);
	}
	    var animation_up = new cc.Animation.create(frames);
	    animation_up.setDelayPerUnit(15 / 60);
	    animation_up.setRestoreOriginalFrame(false);
	    var action_up = new cc.Animate(animation_up, 1);
	    if(flag == 0) {
		player = new cc.Sprite.create();
		player.setScale(Scale, Scale);
		var act = cc.MoveTo.create(0.1, cc.p(PS_x, PS_y));
		player.runAction(cc.Sequence.create(act));
	    }
	    var act_up = cc.MoveTo.create(Speed, cc.p(player.x, player.y + P_size));
	    player.runAction(cc.Sequence.create(act_up));
	    player.runAction(cc.RepeatForever.create(action_up));
	    this.addChild(player, 1);
	flag = 1;
	PC_x = player.x;
	PC_y = player.y + P_size;
    },
    walkDown: function() {
	var frames = [];
	for (i = 0; i < 3; i++) {
		var frame = new cc.SpriteFrame(res.PLAYER_png, cc.rect( i * 48, 0, 48, 48));
		frames.push(frame);
	}
	    var animation_down = new cc.Animation.create(frames);
	    animation_down.setDelayPerUnit(3 / 14);
	    animation_down.setRestoreOriginalFrame(false);
	    var action_down = new cc.Animate(animation_down, 0.3);
	    if(flag == 0) {
		player = new cc.Sprite.create();
		player.setScale(Scale, Scale);
		var act = cc.MoveTo.create(0.1, cc.p(PS_x, PS_y));
		player.runAction(cc.Sequence.create(act));
	    }
	    var act_down = cc.MoveTo.create(Speed, cc.p(player.x, player.y - P_size));
	    player.runAction(cc.Sequence.create(act_down));
	    player.runAction(cc.RepeatForever.create(action_down));
	    this.addChild(player, 1);
	flag = 1;
	PC_x = player.x;
	PC_y = player.y - P_size;
    },
    walkStay: function() {
	var frames = [];
	for (i = 0; i < 3; i++) {
		var frame = new cc.SpriteFrame(res.PLAYER_png, cc.rect( i * 48, 0, 48, 48));
		frames.push(frame);
	}
	    var animation_stay = new cc.Animation.create(frames);
	    animation_stay.setDelayPerUnit(3 / 14);
	    animation_stay.setRestoreOriginalFrame(false);
	    var action_stay = new cc.Animate(animation_stay, 0.3);
	    if(flag == 0) {
		player = new cc.Sprite.create();
		player.setScale(Scale, Scale);
		var act = cc.MoveTo.create(0.1, cc.p(PS_x, PS_y));
		player.runAction(cc.Sequence.create(act));
	    }
	    var act_stay = cc.MoveTo.create(Speed, cc.p(player.x, player.y));
	    player.runAction(cc.Sequence.create(act_stay));
	    player.runAction(cc.RepeatForever.create(action_stay));
	    this.addChild(player, 1);
	flag = 1;
	PC_x = player.x;
	PC_y = player.y;
    },
});


var GameLayer = cc.Layer.extend({
    ctor:function() {
        this._super();
	this.init();
    },
    init: function() {
	this._super();
	var size = cc.director.getWinSize();
        this.back_img = cc.Sprite.create(res.Back_jpg);
        this.back_img.x = size.width / 2;
        this.back_img.y = size.height / 2;
        this.addChild(this.back_img, 0);

	this.PLAYER = new Player();
	this.addChild(this.PLAYER, 1);
	this.PLAYER.x = 0;
	this.PLAYER.y = 0;
	this.update();
    },
    update: function() {
	this._super();
	var PLAYER1 = this.PLAYER;
	PLAYER1.walkStay();

// Get the mouse's position at push down the bottun
	cc.eventManager.addListener({
	    event: cc.EventListener.MOUSE,
	    onMouseDown: function(e) {
		MS_x = Math.round(e.getLocationX() / P_size);
		MS_y = Math.round(e.getLocationY() / P_size);
		var Tmp_x = Math.round(PC_x / P_size);
		var Tmp_y = Math.round(PC_y / P_size);
		if(MS_x < Tmp_x) {
			direction = "left";
		} else if(MS_x > Tmp_x) {
			direction = "right";
		} else if(MS_y > Tmp_y) {
			direction = "up";
		} else if(MS_y < Tmp_y) {
			direction = "down";
		} else {
			direction = "stay";
		}
// console.log(Tmp_x + " / " + Tmp_y + " : " + MS_x + " / " + MS_y);
		Move_set();
	    }
	}, this);

// Get the pressed key on keyboard 
	cc.eventManager.addListener({
	    event: cc.EventListener.KEYBOARD,
	    onKeyPressed: function(keyCode, event) {
			direction = "stay";
                if (keyCode == cc.KEY.left) {
			direction = "left";
                }
                if (keyCode == cc.KEY.right) {
			direction = "right";
                }
                if (keyCode == cc.KEY.up) {
			direction = "up";
                }
                if (keyCode == cc.KEY.down) {
			direction = "down";
                }
		Move_set();
	    },
	}, this);
        return true;

	function Move_set() {
		if(direction == "left") {
		    if(flag != 0) {
			PLAYER1.actionManager.removeAllActions();
		    }
		    PLAYER1.walkLeft();
		} else if(direction == "right") {
		    if(flag != 0) {
			PLAYER1.actionManager.removeAllActions();
		    }
                    PLAYER1.walkRight();
		} else if(direction == "up") {
		    if(flag != 0) {
			PLAYER1.actionManager.removeAllActions();
		    }
                    PLAYER1.walkUp();
		} else if(direction == "down") {
		    if(flag != 0) {
			PLAYER1.actionManager.removeAllActions();
		    }
                    PLAYER1.walkDown();
		} else {
		    if(flag != 0) {
			PLAYER1.actionManager.removeAllActions();
		    }
                    PLAYER1.walkStay();
		}
		return true;
	}
    },
});


var GameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});

