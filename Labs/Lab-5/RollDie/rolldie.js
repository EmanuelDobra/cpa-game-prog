(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"rolldie_atlas_", frames: [[676,0,215,215],[0,123,215,215],[217,123,215,215],[434,123,155,73],[0,0,674,121]]}
];


// symbols:



(lib.CachedBmp_6 = function() {
	this.initialize(ss["rolldie_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["rolldie_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["rolldie_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["rolldie_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["rolldie_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.circleBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-54.75,-54.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_4();
	this.instance_1.setTransform(-54.75,-54.6,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_6();
	this.instance_2.setTransform(-54.75,-54.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.7,-54.6,107.5,107.5);


// stage content:
(lib.rolldie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var die;
		this.rollDie.addEventListener("click", roll.bind(this));
		
		function roll() {
			die = Math.ceil(Math.random()*6);
			this.dieOutput.text=die;
			var result = die % 2;
			switch (result) {
				case 0:
					this.evenOdd.text="even";
					break;
				default:
					this.evenOdd.text="odd";
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.evenOdd = new cjs.Text("", "35px 'MV Boli'", "#66FF00");
	this.evenOdd.name = "evenOdd";
	this.evenOdd.textAlign = "center";
	this.evenOdd.lineHeight = 58;
	this.evenOdd.lineWidth = 112;
	this.evenOdd.parent = this;
	this.evenOdd.setTransform(278.8,312.15);

	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(236.35,146.85,0.5,0.5);

	this.rollDie = new lib.circleBtn();
	this.rollDie.name = "rollDie";
	this.rollDie.setTransform(275.05,164.95);
	new cjs.ButtonHelper(this.rollDie, 0, 1, 2, false, new lib.circleBtn(), 3);

	this.dieOutput = new cjs.Text("", "35px 'MV Boli'", "#990000");
	this.dieOutput.name = "dieOutput";
	this.dieOutput.textAlign = "center";
	this.dieOutput.lineHeight = 58;
	this.dieOutput.lineWidth = 85;
	this.dieOutput.parent = this;
	this.dieOutput.setTransform(274.5,247.1);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(114.65,45.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.dieOutput},{t:this.rollDie},{t:this.instance},{t:this.evenOdd}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(389.7,245.3,62,125.30000000000001);
// library properties:
lib.properties = {
	id: 'B1DE782535332B4AB2E8EEF735993C15',
	width: 550,
	height: 400,
	fps: 24,
	color: "#000099",
	opacity: 1.00,
	manifest: [
		{src:"images/rolldie_atlas_.png", id:"rolldie_atlas_"}
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
an.compositions['B1DE782535332B4AB2E8EEF735993C15'] = {
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