// Sample for Cocos2d.js by T. Fujita on 2019/9/10

var Scale = 1;
var P_size = 48 * Scale;
var Speed = 1;
var PS_x = 0;
var PS_y = 0;
var MS_x, MS_y, PC_x, PC_y;
var direction;
var player;
var PLAYER;
var flag = 0;
var max_rooms = room.length;
var counter = 0;
var BL_counter = 0;
var px = 0;
var py = 0;
var p_x = 0;
var p_y = 0;
var pos = [];
var temp = [];
var BLOCK = [];
var ROOM = room[0];

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
	if(flag == 0) {
	    PC_x = PS_x;
	    PC_y = PS_y;
	} else {
	    PC_x = player.x;
	    PC_y = player.y;
	}
	flag = 1;
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
	flag = 0;
	ROOM = room[counter];

	for (i=0; i<ROOM.length; i++) {
	    temp[i] = [];
	    for (j=0; j<ROOM[i].length; j++) {
		temp[i][j] = ROOM[i].substr(j,1);
		if(ROOM[i].substr(j,1) == "P") { 
		    this.PLAYER = new Player();
		    this.PLAYER.x = 0;
		    this.PLAYER.y = 0;
		    this.addChild(this.PLAYER, 10);
		    PS_x = j * P_size + P_size/2;
		    PS_y = (ROOM.length - i - 1) * P_size + P_size/2;
		}
		 if(ROOM[i].substr(j,1) == "A") { 
		    this.again = cc.Sprite.create(res.AGAIN_png);
		    this.again.setScale(Scale, Scale);
		    this.again.x = j * P_size + P_size/2;
		    this.again.y = (ROOM.length - i - 1) * P_size + P_size/2;
		    this.addChild(this.again, 1);
		}
		 if(ROOM[i].substr(j,1) == "G") { 
		    this.goal = cc.Sprite.create(res.GOAL_png);
		    this.goal.setScale(Scale, Scale);
		    this.goal.x = j * P_size + P_size/2;
		    this.goal.y = (ROOM.length - i - 1) * P_size + P_size/2;
		    this.addChild(this.goal, 1);
		}
		else if(ROOM[i].substr(j,1) == "B") { 
		    this.block = cc.Sprite.create(res.BLOCK_png);
		    this.block.setScale(Scale, Scale);
		    this.block.x = j * P_size + P_size/2;
		    this.block.y = (ROOM.length - i - 1) * P_size + P_size/2;
		    this.addChild(this.block, 2);
		    BLOCK[BL_counter] = this.block;
		}
		else if(ROOM[i].substr(j,1) == "w") { 
		    this.wall_0 = cc.Sprite.create(res.WALL_00_png);
		    this.wall_0.setScale(Scale, Scale);
		    this.wall_0.x = j * P_size + P_size/2;
		    this.wall_0.y = (ROOM.length - i - 1) * P_size + P_size/2;
		    this.addChild(this.wall_0, 3);
		}
		else if(ROOM[i].substr(j,1) == "W") { 
		    this.wall_1 = cc.Sprite.create(res.WALL_01_png);
		    this.wall_1.setScale(Scale, Scale);
		    this.wall_1.x = j * P_size + P_size/2;
		    this.wall_1.y = (ROOM.length - i - 1) * P_size + P_size/2;
		    this.addChild(this.wall_1, 4);
		}
	    }
	}

	for (i=0; i<temp[0].length; i++) {
		pos[i] = [];
		for (j=0; j<temp.length; j++) {
			pos[i][j] = temp[j][i];
		}
	}

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
		MS_x = Math.floor(e.getLocationX() / P_size);
		MS_y = Math.floor(e.getLocationY() / P_size);
		var Tmp_x = Math.floor(PC_x / P_size);
		var Tmp_y = Math.floor(PC_y / P_size);
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
		Move_set();
// console.log(MS_x + " / " + MS_y + " : " + Tmp_x + " / " + Tmp_y);
		Check_Goal();
		Check_Again();
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
// console.log(PC_x + " / " + PC_y + " : " + p_x + " / " + p_y);
		Check_Goal();
	    },
	}, this);
        return true;

	function Move_set() {
	    px = Math.round((PC_x - P_size/2) / P_size);
	    py = ROOM.length - 1 - Math.round((PC_y - P_size/2) / P_size);
	    if(px < 1) {px = 1;}
	    if(py < 1) {py = 1;}
		if(direction == "left") {
		    if(flag != 0) {
			PLAYER1.actionManager.removeAllActions();
		    }
		    if((pos[px - 1][py] =="w") ||(pos[px - 1][py] =="W")) {
			PLAYER1.walkStay();
			var act = cc.MoveTo.create(Speed, cc.p(px * P_size + P_size/2, PC_y));
			player.runAction(cc.Sequence.create(act));
		    } else {
			PLAYER1.walkLeft();
		    }
		} else if(direction == "right") {
		    if(flag != 0) {
			PLAYER1.actionManager.removeAllActions();
		    }
		    if((pos[px + 1][py] =="w") ||(pos[px + 1][py] =="W")) {
			PLAYER1.walkStay();
			var act = cc.MoveTo.create(Speed, cc.p(px * P_size + P_size/2, PC_y));
			player.runAction(cc.Sequence.create(act));
		    } else {
			PLAYER1.walkRight();
		    }
		} else if(direction == "up") {
		    if(flag != 0) {
			PLAYER1.actionManager.removeAllActions();
		    }
		    if((pos[px][py - 1] =="w") ||(pos[px][py - 1] =="W")) {
			PLAYER1.walkStay();
			var act = cc.MoveTo.create(Speed, cc.p(PC_x, (ROOM.length - 1 - py) * P_size + P_size/2));
			player.runAction(cc.Sequence.create(act));
		    } else {
			PLAYER1.walkUp();
		    }
		} else if(direction == "down") {
		    if(flag != 0) {
			PLAYER1.actionManager.removeAllActions();
			var act = cc.MoveTo.create(Speed, cc.p(PC_x, (ROOM.length - 1 - py) * P_size + P_size/2));
			player.runAction(cc.Sequence.create(act));
		    }
		    if((pos[px][py + 1] =="w") ||(pos[px][py + 1] =="W")) {
			PLAYER1.walkStay();
		    } else {
			PLAYER1.walkDown();
		    }
		} else {
		    if(flag != 0) {
			PLAYER1.actionManager.removeAllActions();
		    }
                    PLAYER1.walkStay();
		}
		p_x = Math.round((PC_x - P_size/2) / P_size);
		p_y = ROOM.length - 1 - Math.round((PC_y - P_size/2) / P_size);
		return true;
	}

// Process for reaching the goal
	function Check_Goal() {
		if(pos[p_x][p_y] == "G") {
			alert("Goal ! \n ここで使用しているキャラクターの一部に「どらぴか」様 \n URL: https://dorapika.wixsite.com/pikasgame \n作成の素材を使用しております。");
			counter = counter + 1;
		        var layer = new GameLayer();
			cc.director.runScene(layer);
		}
	}

// Process for again the same room
	function Check_Again() {
		if(pos[MS_x][ROOM.length - 1 - MS_y] == "A") {
			alert("Again ! \n ここで使用しているキャラクターの一部に「どらぴか」様 \n URL: https://dorapika.wixsite.com/pikasgame \n作成の素材を使用しております。");
		        var layer = new GameLayer();
			cc.director.runScene(layer);
		}
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

