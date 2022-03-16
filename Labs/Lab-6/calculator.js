(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"calculator_atlas_", frames: [[855,0,567,293],[1424,0,567,293],[855,295,567,293],[855,590,1096,131],[0,723,1096,131],[0,856,1096,131],[1532,892,167,73],[1098,723,432,257],[1532,801,208,89],[0,0,853,649],[0,989,1096,131],[1701,892,38,76],[2001,156,28,76],[2001,78,29,76],[2001,0,32,76],[1914,879,123,76],[1742,879,170,76],[1742,801,198,76],[1942,801,83,76],[1532,723,467,76],[1424,295,552,272]]}
];


// symbols:



(lib.CachedBmp_58 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_55 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["calculator_atlas_"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.myButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_55();
	this.instance.setTransform(-97.45,-50.4,0.3349,0.3349);

	this.instance_1 = new lib.CachedBmp_56();
	this.instance_1.setTransform(-97.45,-50.4,0.3349,0.3349);

	this.instance_2 = new lib.CachedBmp_58();
	this.instance_2.setTransform(-97.45,-50.4,0.3349,0.3349);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.4,-50.4,189.8,98.1);


// stage content:
(lib.calculator = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{choose:50,check:59});

	// timeline functions:
	this.frame_50 = function() {
		this.stop();
		
		this.operator;
		this.add_btn.addEventListener("click", add.bind(this));
		function add() {
			operator="+";
			this.gotoAndStop("check");
		}
		
		this.sub_btn.addEventListener("click", sub.bind(this));
		function sub() {
			operator="-";
			this.gotoAndStop("check");
		}
		
		this.mult_btn.addEventListener("click", mult.bind(this));
		function mult() {
			operator="x";
			this.gotoAndStop("check");
		}
		
		this.div_btn.addEventListener("click", div.bind(this));
		function div() {
			operator="/";
			this.gotoAndStop("check");
		}
		this.stop();
	}
	this.frame_59 = function() {
		var firstNumb, secondNumb;
		
		// fill in values
		this.operator_txt.text = operator;
		firstNumb = Math.ceil(Math.random() * 10);
		secondNumb = Math.ceil(Math.random() * 10);
		this.firstNumb_txt.text = firstNumb;
		this.secondNumb_txt.text = secondNumb;
		
		var guess, correctAnswer;
		// check answer
		this.check_btn.addEventListener("click", check.bind(this));
		function check() {
			guess = document.getElementById("guess_txt").value;
			// get correct answer based on current operator
			if (operator == "+") {
				correctAnswer = firstNumb + secondNumb;
			} else if (operator == "-") {
				correctAnswer = firstNumb - secondNumb;
			} else if (operator == "x") {
				correctAnswer = firstNumb * secondNumb;
			} else {
				correctAnswer = firstNumb / secondNumb;
			}
			if (guess == correctAnswer) {
				alert("Correct! Try a new excercise now.");
				// Randomize excercise
				firstNumb = Math.ceil(Math.random() * 10);
				secondNumb = Math.ceil(Math.random() * 10);
				this.firstNumb_txt.text = firstNumb;
				this.secondNumb_txt.text = secondNumb;
			} else {
				alert("Incorrect, try again!" + " Hint: The correct answer was " + correctAnswer);
			}
		}
		
		this.back_btn.addEventListener("click", back.bind(this));
		function back() {
			this.gotoAndStop("choose");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(50).call(this.frame_50).wait(9).call(this.frame_59).wait(1));

	// choices
	this.instance = new lib.CachedBmp_47();
	this.instance.setTransform(2,27.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_46();
	this.instance_1.setTransform(330.4,279.45,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_45();
	this.instance_2.setTransform(332.95,179.75,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_44();
	this.instance_3.setTransform(90.65,280.9,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_43();
	this.instance_4.setTransform(93.2,181.9,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_42();
	this.instance_5.setTransform(364.35,306.4,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_41();
	this.instance_6.setTransform(114.45,306.4,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_40();
	this.instance_7.setTransform(344.05,208.05,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_39();
	this.instance_8.setTransform(136.25,208.05,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_38();
	this.instance_9.setTransform(157.65,141.95,0.5,0.5);

	this.sub_btn = new lib.myButton();
	this.sub_btn.name = "sub_btn";
	this.sub_btn.setTransform(395.1,227.9,0.6516,0.6429);
	new cjs.ButtonHelper(this.sub_btn, 0, 1, 2, false, new lib.myButton(), 3);

	this.add_btn = new lib.myButton();
	this.add_btn.name = "add_btn";
	this.add_btn.setTransform(158.7,227.9,0.6516,0.6429);
	new cjs.ButtonHelper(this.add_btn, 0, 1, 2, false, new lib.myButton(), 3);

	this.div_btn = new lib.myButton();
	this.div_btn.name = "div_btn";
	this.div_btn.setTransform(395.1,326.25,0.6516,0.6429);
	new cjs.ButtonHelper(this.div_btn, 0, 1, 2, false, new lib.myButton(), 3);

	this.mult_btn = new lib.myButton();
	this.mult_btn.name = "mult_btn";
	this.mult_btn.setTransform(158.7,326.25,0.6516,0.6429);
	new cjs.ButtonHelper(this.mult_btn, 0, 1, 2, false, new lib.myButton(), 3);

	this.instance_10 = new lib.CachedBmp_37();
	this.instance_10.setTransform(84.2,186.4,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_51();
	this.instance_11.setTransform(19.1,340.55,0.5,0.5);

	this.back_btn = new lib.myButton();
	this.back_btn.name = "back_btn";
	this.back_btn.setTransform(61.75,359.5,0.3677,0.5883);
	new cjs.ButtonHelper(this.back_btn, 0, 1, 2, false, new lib.myButton(), 3);

	this.instance_12 = new lib.CachedBmp_50();
	this.instance_12.setTransform(158.95,197.45,0.5,0.5);

	this.guess_txt = new lib.an_TextInput({'id': 'guess_txt', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.guess_txt.name = "guess_txt";
	this.guess_txt.setTransform(421.9,89,1,1,0,0,0,50,11);

	this.operator_txt = new cjs.Text("=", "20px 'MV Boli'");
	this.operator_txt.name = "operator_txt";
	this.operator_txt.textAlign = "center";
	this.operator_txt.lineHeight = 34;
	this.operator_txt.lineWidth = 100;
	this.operator_txt.parent = this;
	this.operator_txt.setTransform(187.8,79.4);

	this.instance_13 = new lib.CachedBmp_49();
	this.instance_13.setTransform(271.05,68.55,0.5,0.5);

	this.secondNumb_txt = new cjs.Text("4", "30px 'MV Boli'");
	this.secondNumb_txt.name = "secondNumb_txt";
	this.secondNumb_txt.textAlign = "center";
	this.secondNumb_txt.lineHeight = 50;
	this.secondNumb_txt.lineWidth = 100;
	this.secondNumb_txt.parent = this;
	this.secondNumb_txt.setTransform(253.9,74.4);

	this.firstNumb_txt = new cjs.Text("4", "30px 'MV Boli'");
	this.firstNumb_txt.name = "firstNumb_txt";
	this.firstNumb_txt.textAlign = "center";
	this.firstNumb_txt.lineHeight = 50;
	this.firstNumb_txt.lineWidth = 100;
	this.firstNumb_txt.parent = this;
	this.firstNumb_txt.setTransform(120.5,72.9);

	this.check_btn = new lib.myButton();
	this.check_btn.name = "check_btn";
	this.check_btn.setTransform(270.4,265.5,1.1041,1.4931,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.check_btn, 0, 1, 2, false, new lib.myButton(), 3);

	this.instance_14 = new lib.CachedBmp_48();
	this.instance_14.setTransform(47.65,60.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10},{t:this.mult_btn},{t:this.div_btn},{t:this.add_btn},{t:this.sub_btn},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},50).to({state:[{t:this.instance_14},{t:this.check_btn},{t:this.firstNumb_txt},{t:this.secondNumb_txt},{t:this.instance_13},{t:this.operator_txt},{t:this.guess_txt},{t:this.instance_12},{t:this.back_btn},{t:this.instance_11}]},9).wait(1));

	// window (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhfhfg");
	var mask_graphics_1 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhehfg");
	var mask_graphics_2 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhfhfg");
	var mask_graphics_3 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhehfg");
	var mask_graphics_4 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhfhfg");
	var mask_graphics_5 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhehfg");
	var mask_graphics_6 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhfhfg");
	var mask_graphics_7 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhehfg");
	var mask_graphics_8 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhfhfg");
	var mask_graphics_9 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhehfg");
	var mask_graphics_10 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhfhfg");
	var mask_graphics_11 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhehfg");
	var mask_graphics_12 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABfBfQBeBeAACFQAACGheBeQhfBfiGAAQiFAAhehfg");
	var mask_graphics_13 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhehfg");
	var mask_graphics_14 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABfBfQBeBeAACFQAACGheBeQhfBfiGAAQiFAAhehfg");
	var mask_graphics_15 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhehfg");
	var mask_graphics_16 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABfBfQBeBeAACFQAACGheBeQhfBfiGAAQiFAAhehfg");
	var mask_graphics_17 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhehfg");
	var mask_graphics_18 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABfBfQBeBeAACFQAACGheBeQhfBfiGAAQiFAAhehfg");
	var mask_graphics_19 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhehfg");
	var mask_graphics_20 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABfBfQBeBeAACFQAACGheBeQhfBfiGAAQiFAAhehfg");
	var mask_graphics_21 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABfBfQBeBeAACFQAACGheBeQhfBfiGAAQiFAAhfhfg");
	var mask_graphics_22 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABfBfQBeBeAACFQAACGheBeQhfBfiGAAQiFAAhehfg");
	var mask_graphics_23 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABfBfQBeBeAACFQAACGheBeQhfBfiGAAQiFAAhfhfg");
	var mask_graphics_24 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABfBfQBeBeAACFQAACGheBeQhfBfiGAAQiFAAhehfg");
	var mask_graphics_25 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABfBfQBeBeAACFQAACGheBeQhfBfiGAAQiFAAhfhfg");
	var mask_graphics_26 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABfBfQBeBeAACFQAACGheBeQhfBfiGAAQiFAAhehfg");
	var mask_graphics_27 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABfBfQBeBeAACFQAACGheBeQhfBfiGAAQiFAAhfhfg");
	var mask_graphics_28 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABfBfQBeBeAACFQAACGheBeQhfBfiGAAQiFAAhehfg");
	var mask_graphics_29 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABfBfQBeBeAACFQAACGheBeQhfBfiGAAQiFAAhfhfg");
	var mask_graphics_30 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhfhfg");
	var mask_graphics_31 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABfBfQBeBeAACFQAACGheBeQhfBfiGAAQiFAAhfhfg");
	var mask_graphics_32 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhfhfg");
	var mask_graphics_33 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABfBfQBeBeAACFQAACGheBeQhfBfiGAAQiFAAhfhfg");
	var mask_graphics_34 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhfhfg");
	var mask_graphics_35 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABfBfQBeBeAACFQAACGheBeQhfBfiGAAQiFAAhfhfg");
	var mask_graphics_36 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhfhfg");
	var mask_graphics_37 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABfBfQBeBeAACFQAACGheBeQhfBfiGAAQiFAAhfhfg");
	var mask_graphics_38 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhfhfg");
	var mask_graphics_39 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhehfg");
	var mask_graphics_40 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhfhfg");
	var mask_graphics_41 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhehfg");
	var mask_graphics_42 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhfhfg");
	var mask_graphics_43 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhehfg");
	var mask_graphics_44 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhfhfg");
	var mask_graphics_45 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhehfg");
	var mask_graphics_46 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhfhfg");
	var mask_graphics_47 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhehfg");
	var mask_graphics_48 = new cjs.Graphics().p("AjkDkQheheAAiGQAAiFBeheQBfhfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhfhfg");
	var mask_graphics_49 = new cjs.Graphics().p("AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABeBfQBfBeAACFQAACGhfBeQheBfiGAAQiFAAhehfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-53.7,y:61.15}).wait(1).to({graphics:mask_graphics_1,x:-44.05,y:61.15}).wait(1).to({graphics:mask_graphics_2,x:-34.35,y:61.15}).wait(1).to({graphics:mask_graphics_3,x:-24.7,y:61.15}).wait(1).to({graphics:mask_graphics_4,x:-15,y:61.15}).wait(1).to({graphics:mask_graphics_5,x:-5.35,y:61.15}).wait(1).to({graphics:mask_graphics_6,x:4.35,y:61.15}).wait(1).to({graphics:mask_graphics_7,x:14,y:61.15}).wait(1).to({graphics:mask_graphics_8,x:23.7,y:61.15}).wait(1).to({graphics:mask_graphics_9,x:33.35,y:61.15}).wait(1).to({graphics:mask_graphics_10,x:43.05,y:61.15}).wait(1).to({graphics:mask_graphics_11,x:52.7,y:61.15}).wait(1).to({graphics:mask_graphics_12,x:62.35,y:61.15}).wait(1).to({graphics:mask_graphics_13,x:72.05,y:61.15}).wait(1).to({graphics:mask_graphics_14,x:81.7,y:61.15}).wait(1).to({graphics:mask_graphics_15,x:91.4,y:61.15}).wait(1).to({graphics:mask_graphics_16,x:101.05,y:61.15}).wait(1).to({graphics:mask_graphics_17,x:110.75,y:61.15}).wait(1).to({graphics:mask_graphics_18,x:120.4,y:61.15}).wait(1).to({graphics:mask_graphics_19,x:130.1,y:61.15}).wait(1).to({graphics:mask_graphics_20,x:139.75,y:61.15}).wait(1).to({graphics:mask_graphics_21,x:149.4,y:61.15}).wait(1).to({graphics:mask_graphics_22,x:159.1,y:61.15}).wait(1).to({graphics:mask_graphics_23,x:168.75,y:61.15}).wait(1).to({graphics:mask_graphics_24,x:178.45,y:61.15}).wait(1).to({graphics:mask_graphics_25,x:188.1,y:61.15}).wait(1).to({graphics:mask_graphics_26,x:197.8,y:61.15}).wait(1).to({graphics:mask_graphics_27,x:207.45,y:61.15}).wait(1).to({graphics:mask_graphics_28,x:217.15,y:61.15}).wait(1).to({graphics:mask_graphics_29,x:226.8,y:61.15}).wait(1).to({graphics:mask_graphics_30,x:236.45,y:61.15}).wait(1).to({graphics:mask_graphics_31,x:246.15,y:61.15}).wait(1).to({graphics:mask_graphics_32,x:255.8,y:61.15}).wait(1).to({graphics:mask_graphics_33,x:265.5,y:61.15}).wait(1).to({graphics:mask_graphics_34,x:275.15,y:61.15}).wait(1).to({graphics:mask_graphics_35,x:284.85,y:61.15}).wait(1).to({graphics:mask_graphics_36,x:294.5,y:61.15}).wait(1).to({graphics:mask_graphics_37,x:304.2,y:61.15}).wait(1).to({graphics:mask_graphics_38,x:313.85,y:61.15}).wait(1).to({graphics:mask_graphics_39,x:323.5,y:61.15}).wait(1).to({graphics:mask_graphics_40,x:333.2,y:61.15}).wait(1).to({graphics:mask_graphics_41,x:342.85,y:61.15}).wait(1).to({graphics:mask_graphics_42,x:352.55,y:61.15}).wait(1).to({graphics:mask_graphics_43,x:362.2,y:61.15}).wait(1).to({graphics:mask_graphics_44,x:371.9,y:61.15}).wait(1).to({graphics:mask_graphics_45,x:381.55,y:61.15}).wait(1).to({graphics:mask_graphics_46,x:391.25,y:61.15}).wait(1).to({graphics:mask_graphics_47,x:400.9,y:61.15}).wait(1).to({graphics:mask_graphics_48,x:410.6,y:61.15}).wait(1).to({graphics:mask_graphics_49,x:420.25,y:61.15}).wait(11));

	// title
	this.instance_15 = new lib.CachedBmp_52();
	this.instance_15.setTransform(2,28.2,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_53();
	this.instance_16.setTransform(2,28.2,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_54();
	this.instance_17.setTransform(2,28.2,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_15,this.instance_16,this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.instance_16}]},49).to({state:[{t:this.instance_17}]},1).to({state:[]},1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,550,387.6);
// library properties:
lib.properties = {
	id: '04692A32584A94419FC644B7BC19E3F4',
	width: 550,
	height: 400,
	fps: 24,
	color: "#0033CC",
	opacity: 1.00,
	manifest: [
		{src:"images/calculator_atlas_.png?1647302605561", id:"calculator_atlas_"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1647302605603", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1647302605603", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1647302605603", id:"an.TextInput"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['04692A32584A94419FC644B7BC19E3F4'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	if((this.stage == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element && this._element._attached) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	this._lastAddedFrame = this.parent.currentFrame;
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;