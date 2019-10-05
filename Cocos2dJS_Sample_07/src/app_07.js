// Sample for Cocos2d.js by T. Fujita on 2019/9/10

var Scale = 0.5;
var P_size = 48 * Scale;
var Speed = 1 * Scale;
var PS_x = 0;
var PS_y = 0;
var MS_x, MS_y, PC_x, PC_y;
var direction;
var player;
var PLAYER;
var flag = 0;
var counter = 0;
var BL_counter = 0;
var BL_temp = 0;
var px = 0;
var py = 0;
var p_x = 0;
var p_y = 0;
var b_x = 0;
var b_y = 0;
var Mx_size = 33;
var My_size = 25;
var date = new Date();
var s_time = 0;
var e_time = 0;
var pos = [];
var temp = [];
var BLOCK = [];
var ROOM;

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
		this.addChild(player, 10);
	}
	var act_right = cc.MoveTo.create(Speed, cc.p(player.x + P_size, player.y));
	player.runAction(cc.Sequence.create(act_right));
	player.runAction(cc.RepeatForever.create(action_right));
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
		this.addChild(player, 10);
	}
	var act_left = cc.MoveTo.create(Speed, cc.p(player.x - P_size, player.y));
	player.runAction(cc.Sequence.create(act_left));
	player.runAction(cc.RepeatForever.create(action_left));
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
		this.addChild(player, 10);
	}
	var act_up = cc.MoveTo.create(Speed, cc.p(player.x, player.y + P_size));
	player.runAction(cc.Sequence.create(act_up));
	player.runAction(cc.RepeatForever.create(action_up));
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
		this.addChild(player, 10);
	}
	var act_down = cc.MoveTo.create(Speed, cc.p(player.x, player.y - P_size));
	player.runAction(cc.Sequence.create(act_down));
	player.runAction(cc.RepeatForever.create(action_down));
	flag = 1;
	PC_x = player.x;
	PC_y = player.y - P_size;
    },
    walkStay_R: function() {
	var frames = [];
	for (i = 0; i < 3; i++) {
		var frame = new cc.SpriteFrame(res.PLAYER_png, cc.rect( i * 48, 96, 48, 48));
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
		this.addChild(player, 10);
	}
	var act_stay = cc.MoveTo.create(Speed, cc.p(player.x, player.y));
	player.runAction(cc.Sequence.create(act_stay));
	player.runAction(cc.RepeatForever.create(action_stay));
	flag = 1;
	PC_x = player.x;
	PC_y = player.y;
    },
    walkStay_L: function() {
	var frames = [];
	for (i = 0; i < 3; i++) {
		var frame = new cc.SpriteFrame(res.PLAYER_png, cc.rect( i * 48, 48, 48, 48));
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
		this.addChild(player, 10);
	}
	var act_stay = cc.MoveTo.create(Speed, cc.p(player.x, player.y));
	player.runAction(cc.Sequence.create(act_stay));
	player.runAction(cc.RepeatForever.create(action_stay));
	flag = 1;
	PC_x = player.x;
	PC_y = player.y;
    },
    walkStay_U: function() {
	var frames = [];
	for (i = 0; i < 3; i++) {
		var frame = new cc.SpriteFrame(res.PLAYER_png, cc.rect( i * 48, 144, 48, 48));
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
		this.addChild(player, 10);
	}
	var act_stay = cc.MoveTo.create(Speed, cc.p(player.x, player.y));
	player.runAction(cc.Sequence.create(act_stay));
	player.runAction(cc.RepeatForever.create(action_stay));
	flag = 1;
	PC_x = player.x;
	PC_y = player.y;
    },
    walkStay_D: function() {
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
		this.addChild(player, 10);
	}
	var act_stay = cc.MoveTo.create(Speed, cc.p(player.x, player.y));
	player.runAction(cc.Sequence.create(act_stay));
	player.runAction(cc.RepeatForever.create(action_stay));
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
	BL_temp = 0;
	pos = [];
	BLOCK = [];
	ROOM = Maze(Mx_size, My_size);

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
		    BLOCK.push(this.block);
		    BL_temp = BL_temp + 1;
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
	PLAYER1.walkStay_D();

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
// console.log(px + " / " + py + " : " + p_x + " / " + p_y);
		Check_Goal();
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
// console.log(px + " / " + py + " : " + p_x + " / " + p_y);
		Check_Goal();
	    },
	}, this);
        return true;

	function Move_set() {
	    if(s_time == 0) {
		date = new Date();
		s_time = date.getTime();
	    }
	    px = Math.round((PC_x - P_size/2) / P_size);
	    py = ROOM.length - 1 - Math.round((PC_y - P_size/2) / P_size);
	    b_x = 0;
	    b_y = 0;
		if(direction == "left") {
		    if(flag != 0) {
			PLAYER1.actionManager.removeAllActions();
		    }
		    if((pos[px - 1][py] =="w") ||(pos[px - 1][py] =="W")) {
			PLAYER1.walkStay_L();
			var act = cc.MoveTo.create(Speed, cc.p(px * P_size + P_size/2, PC_y));
			player.runAction(cc.Sequence.create(act));
		    } else if((pos[px - 1][py] =="B") && (pos[px - 2][py] =="F")) {
			pos[px][py] = "F";
			pos[px - 1][py] = "P";
			pos[px - 2][py] = "B";
			for(i=0; i<BLOCK.length; i++) {
			    if((Math.floor(BLOCK[i].x / P_size) == (px - 1)) && ((ROOM.length - 1 - Math.floor(BLOCK[i].y / P_size)) == py)) {
				BL_counter = i;
				b_x = -1;
				b_y = 0;
			    }
			}
			act_b = cc.MoveBy.create(Speed, cc.p(P_size * b_x, P_size * b_y));
			if(BL_temp != 0) {
			    BLOCK[BL_counter].runAction(new cc.Sequence.create(act_b));
			}
			PLAYER1.walkLeft();
		    } else if ((pos[px - 1][py] =="B") && (pos[px - 2][py] !="F")) {
			PLAYER1.walkStay_L();
		    } else {
			if(pos[px - 1][py] != "G") {
			    pos[px][py] = "F";
			    pos[px - 1][py] = "P";
			}
			PLAYER1.walkLeft();
		    }
		} else if(direction == "right") {
		    if(flag != 0) {
			PLAYER1.actionManager.removeAllActions();
			var act = cc.MoveTo.create(Speed, cc.p(px * P_size + P_size/2, PC_y));
			player.runAction(cc.Sequence.create(act));
		    }
		    if((pos[px + 1][py] =="w") ||(pos[px + 1][py] =="W")) {
			PLAYER1.walkStay_R();
		    } else if((pos[px + 1][py] =="B") && (pos[px + 2][py] =="F")) {
			pos[px][py] = "F";
			pos[px + 1][py] = "P";
			pos[px + 2][py] = "B";
			for(i=0; i<BLOCK.length; i++) {
			    if((Math.floor(BLOCK[i].x / P_size) == (px + 1)) && ((ROOM.length - 1 - Math.floor(BLOCK[i].y / P_size)) == py)) {
				BL_counter = i;
				b_x = 1;
				b_y = 0;
			    }
			}
			act_b = cc.MoveBy.create(Speed, cc.p(P_size * b_x, P_size * b_y));
			if(BL_temp != 0) {
			    BLOCK[BL_counter].runAction(new cc.Sequence.create(act_b));
			}
			PLAYER1.walkRight();
		    } else if ((pos[px + 1][py] =="B") && (pos[px + 2][py] !="F")) {
			PLAYER1.walkStay_R();
		    } else {
			if(pos[px + 1][py] != "G") {
			    pos[px][py] = "F";
			    pos[px + 1][py] = "P";
			}
			PLAYER1.walkRight();
		    }
		} else if(direction == "up") {
		    if(flag != 0) {
			PLAYER1.actionManager.removeAllActions();
		    }
		    if((pos[px][py - 1] =="w") ||(pos[px][py - 1] =="W")) {
			PLAYER1.walkStay_U();
			var act = cc.MoveTo.create(Speed, cc.p(PC_x, (ROOM.length - 1 - py) * P_size + P_size/2));
			player.runAction(cc.Sequence.create(act));
		    } else if((pos[px][py - 1] =="B") && (pos[px][py - 2] =="F")) {
			pos[px][py] = "F";
			pos[px][py - 1] = "P";
			pos[px][py - 2] = "B";
			for(i=0; i<BLOCK.length; i++) {
			    if((Math.floor(BLOCK[i].x / P_size) == px) && ((ROOM.length - 1 - Math.floor(BLOCK[i].y / P_size)) == (py - 1))) {
				BL_counter = i;
				b_x = 0;
				b_y = 1;
			    }
			}
			act_b = cc.MoveBy.create(Speed, cc.p(P_size * b_x, P_size * b_y));
			if(BL_temp != 0) {
			    BLOCK[BL_counter].runAction(new cc.Sequence.create(act_b));
			}
			PLAYER1.walkUp();
		    } else if ((pos[px][py - 1] =="B") && (pos[px][py - 2] !="F")) {
			PLAYER1.walkStay_U();
		    } else {
			if(pos[px][py - 1] != "G") {
			    pos[px][py] = "F";
			    pos[px][py - 1] = "P";
			}
			PLAYER1.walkUp();
		    }
		} else if(direction == "down") {
		    if(flag != 0) {
			PLAYER1.actionManager.removeAllActions();
		    }
		    if((pos[px][py + 1] =="w") ||(pos[px][py + 1] =="W")) {
			PLAYER1.walkStay_D();
			var act = cc.MoveTo.create(Speed, cc.p(PC_x, (ROOM.length - 1 - py) * P_size + P_size/2));
			player.runAction(cc.Sequence.create(act));
		    } else if((pos[px][py + 1] =="B") && (pos[px][py + 2] =="F")) {
			pos[px][py] = "F";
			pos[px][py + 1] = "P";
			pos[px][py + 2] = "B";
			for(i=0; i<BLOCK.length; i++) {
			    if((Math.floor(BLOCK[i].x / P_size) == px) && ((ROOM.length - 1 - Math.floor(BLOCK[i].y / P_size)) == (py + 1))) {
				BL_counter = i;
				b_x = 0;
				b_y = -1;
			    }
			}
			act_b = cc.MoveBy.create(Speed, cc.p(P_size * b_x, P_size * b_y));
			if(BL_temp != 0) {
			    BLOCK[BL_counter].runAction(new cc.Sequence.create(act_b));
			}
			PLAYER1.walkDown();
		    } else if ((pos[px][py + 1] =="B") && (pos[px][py + 2] !="F")) {
			PLAYER1.walkStay_D();
		    } else {
			if(pos[px][py + 1] != "G") {
			    pos[px][py] = "F";
			    pos[px][py + 1] = "P";
			}
			PLAYER1.walkDown();
		    }
		} else {
		    if(flag != 0) {
			PLAYER1.actionManager.removeAllActions();
		    }
                    PLAYER1.walkStay_D();
		}
		p_x = Math.round((PC_x - P_size/2) / P_size);
		p_y = ROOM.length - 1 - Math.round((PC_y - P_size/2) / P_size);
		return true;
	}

// Process for reaching the goal
	function Check_Goal() {
		if(pos[p_x][p_y] == "G") {
			date = new Date();
			e_time = date.getTime();
			counter = ((e_time * 1.0) - (s_time * 1.0))/1000;
			cc.audioEngine.playEffect(res.GOAL_mp3);
			alert("Goal!\n" + "Time is " + counter + " Sec. \n\n ここで使用しているキャラクターの一部に「どらぴか」様 \n URL: https://dorapika.wixsite.com/pikasgame 作成の素材を\nまた、サウンドは「soundeffect-lab　https://soundeffect-lab.info/ 」様作成の素材を使用しております。");
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

