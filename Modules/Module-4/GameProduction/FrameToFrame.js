(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"FrameToFrame_atlas_", frames: [[0,679,425,797],[1012,0,716,852],[427,679,396,772],[0,1681,1183,120],[0,0,1010,677],[201,1478,189,120],[825,854,750,351],[427,1453,249,120],[825,1207,750,235],[0,1478,199,120],[825,679,185,120],[825,1444,750,235]]}
];


// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["FrameToFrame_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(img.CachedBmp_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2167,1095);


(lib.CachedBmp_2 = function() {
	this.initialize(ss["FrameToFrame_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["FrameToFrame_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["FrameToFrame_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["FrameToFrame_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["FrameToFrame_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["FrameToFrame_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["FrameToFrame_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["FrameToFrame_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["FrameToFrame_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["FrameToFrame_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["FrameToFrame_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.answer_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-101.8,-194.65,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(-190.85,-194.65,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(-429.8,-194.65,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(-116.25,-194.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-429.8,-194.6,1083.5,547.5);


// stage content:
(lib.FrameToFrame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:0,sabby:9,kevin:19,done:29});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		// winner_btn
		// loser_btn
		
		// Add event listener to buttons first
		// (event, functionToRun.bind(this));
		this.winner_btn.addEventListener("click", moveSabby.bind(this));
		
		// function declaration
		function moveSabby() {
			this.gotoAndStop("sabby");
		}
		
		this.loser_btn.addEventListener("click", moveKevin.bind(this));
		function moveKevin() {
			this.gotoAndStop("kevin");
		}
	}
	this.frame_9 = function() {
		this.explore_btn.addEventListener("click", moveDone.bind(this));
		function moveDone() {
			this.gotoAndStop("done");
		}
	}
	this.frame_19 = function() {
		this.retry_btn.addEventListener("click", moveIntro.bind(this));
		function moveIntro() {
			this.gotoAndStop("intro");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(22));

	// Layer_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(84,19.15,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_6();
	this.instance_1.setTransform(289.1,122.15,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_5();
	this.instance_2.setTransform(205.65,-6.65,0.5,0.5);

	this.loser_btn = new lib.answer_btn();
	this.loser_btn.name = "loser_btn";
	this.loser_btn.setTransform(321.55,260,0.5655,0.439);
	new cjs.ButtonHelper(this.loser_btn, 0, 1, 2, false, new lib.answer_btn(), 3);

	this.winner_btn = new lib.answer_btn();
	this.winner_btn.name = "winner_btn";
	this.winner_btn.setTransform(121.6,151.9,0.5837,0.4149,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.winner_btn, 0, 1, 2, false, new lib.answer_btn(), 3);

	this.instance_3 = new lib.CachedBmp_9();
	this.instance_3.setTransform(195.65,188.95,0.5,0.5);

	this.explore_btn = new lib.answer_btn();
	this.explore_btn.name = "explore_btn";
	this.explore_btn.setTransform(246.65,218.8,0.5008,0.4038);
	new cjs.ButtonHelper(this.explore_btn, 0, 1, 2, false, new lib.answer_btn(), 3);

	this.instance_4 = new lib.CachedBmp_8();
	this.instance_4.setTransform(205.65,-6.65,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_11();
	this.instance_5.setTransform(253,214.15,0.5,0.5);

	this.retry_btn = new lib.answer_btn();
	this.retry_btn.name = "retry_btn";
	this.retry_btn.setTransform(300.4,256.35,0.5757,0.4506,0,0,180);
	new cjs.ButtonHelper(this.retry_btn, 0, 1, 2, false, new lib.answer_btn(), 3);

	this.instance_6 = new lib.CachedBmp_10();
	this.instance_6.setTransform(175,-6.65,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_13();
	this.instance_7.setTransform(12.65,170.35,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_12();
	this.instance_8.setTransform(6.05,29.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.winner_btn},{t:this.loser_btn},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_4},{t:this.explore_btn},{t:this.instance_3}]},9).to({state:[{t:this.instance_6},{t:this.retry_btn},{t:this.instance_5}]},10).to({state:[{t:this.instance_8},{t:this.instance_7}]},10).to({state:[]},10).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,691.2,415.4);
// library properties:
lib.properties = {
	id: '231D25CD119F744ABF734FE22AD91771',
	width: 550,
	height: 400,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_3.png?1644259213332", id:"CachedBmp_3"},
		{src:"images/FrameToFrame_atlas_.png?1644259213315", id:"FrameToFrame_atlas_"}
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
an.compositions['231D25CD119F744ABF734FE22AD91771'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;