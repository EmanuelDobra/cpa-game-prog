(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"VCards_atlas_", frames: [[862,0,140,243],[0,489,308,60],[0,0,860,487]]}
];


// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["VCards_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["VCards_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["VCards_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.P1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.481,0.481);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.P1, new cjs.Rectangle(0,0,67.4,116.9), null);


(lib.Hart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-77,-16.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-198.45,-125.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hart, new cjs.Rectangle(-198.4,-125.1,430,243.5), null);


(lib.P2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.P1();
	this.instance.setTransform(36.9,58.5,1.0394,1,0,0,180,33.5,58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.P2, new cjs.Rectangle(1.7,0,70,116.9), null);


// stage content:
(lib.VCards = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Hart();
	this.instance.setTransform(52.15,223.95,0.1971,0.2233,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:16.5,regY:-3.4,scaleX:0.1983,scaleY:0.2291,x:64.5,y:222.45},0).wait(1).to({scaleX:0.1996,scaleY:0.2349,x:73.7,y:221.8},0).wait(1).to({scaleX:0.2008,scaleY:0.2406,x:82.85,y:221.15},0).wait(1).to({scaleX:0.202,scaleY:0.2464,x:92.05,y:220.45},0).wait(1).to({scaleX:0.2032,scaleY:0.2522,x:101.2,y:219.8},0).wait(1).to({scaleX:0.2044,scaleY:0.258,x:110.3,y:219.15},0).wait(1).to({scaleX:0.2056,scaleY:0.2638,x:119.5,y:218.5},0).wait(1).to({scaleX:0.2068,scaleY:0.2695,x:128.65,y:217.85},0).wait(1).to({scaleX:0.208,scaleY:0.2753,x:137.85,y:217.15},0).wait(1).to({scaleX:0.2092,scaleY:0.2811,x:147,y:216.5},0).wait(1).to({scaleX:0.2105,scaleY:0.2869,x:156.1,y:215.85},0).wait(1).to({scaleX:0.2117,scaleY:0.2926,x:165.3,y:215.2},0).wait(1).to({scaleX:0.2129,scaleY:0.2984,x:174.45,y:214.55},0).wait(1).to({scaleX:0.2141,scaleY:0.3042,x:183.65,y:213.85},0).wait(1).to({scaleX:0.2153,scaleY:0.31,x:192.8,y:213.2},0).wait(1).to({scaleX:0.2165,scaleY:0.3157,x:201.95,y:212.55},0).wait(1).to({scaleX:0.2177,scaleY:0.3215,x:211.1,y:211.9},0).wait(1).to({scaleX:0.2189,scaleY:0.3273,x:220.25,y:211.25},0).wait(1).to({scaleX:0.2201,scaleY:0.3331,x:229.45,y:210.55},0).wait(1).to({scaleX:0.2214,scaleY:0.3389,x:238.6,y:209.9},0).wait(1).to({scaleX:0.2226,scaleY:0.3446,x:247.75,y:209.25},0).wait(1).to({scaleX:0.2238,scaleY:0.3504,x:256.9,y:208.6},0).wait(1).to({scaleX:0.225,scaleY:0.3562,x:266.05,y:207.95},0).wait(1).to({scaleX:0.2262,scaleY:0.362,x:275.25,y:207.25},0).wait(1).to({scaleX:0.2274,scaleY:0.3677,x:284.4,y:206.6},0).wait(1).to({scaleX:0.2286,scaleY:0.3735,x:293.55,y:205.95},0).wait(1).to({scaleX:0.2298,scaleY:0.3793,x:302.7,y:205.3},0).wait(1).to({scaleX:0.2311,scaleY:0.3851,x:311.85,y:204.65},0).wait(1).to({scaleX:0.2323,scaleY:0.3909,x:321.05,y:203.95},0).wait(1).to({scaleX:0.2335,scaleY:0.3966,x:330.2,y:203.3},0).wait(1).to({scaleX:0.2347,scaleY:0.4024,x:339.35,y:202.65},0).wait(1).to({scaleX:0.2359,scaleY:0.4082,x:348.55,y:201.95},0).wait(1).to({scaleX:0.2371,scaleY:0.414,x:357.65,y:201.35},0).wait(1).to({scaleX:0.2383,scaleY:0.4197,x:366.85,y:200.65},0).wait(1).to({scaleX:0.2395,scaleY:0.4255,x:376,y:200},0).wait(1).to({scaleX:0.2407,scaleY:0.4313,x:385.15,y:199.35},0).wait(1).to({scaleX:0.242,scaleY:0.4371,x:394.35,y:198.65},0).wait(1).to({scaleX:0.2432,scaleY:0.4429,x:403.45,y:198.05},0).wait(1).to({scaleX:0.2444,scaleY:0.4486,x:412.65,y:197.35},0).wait(1).to({scaleX:0.2456,scaleY:0.4544,x:421.8,y:196.7},0).wait(1).to({scaleX:0.2468,scaleY:0.4602,x:430.95,y:196.05},0).wait(1).to({scaleX:0.248,scaleY:0.466,x:440.15,y:195.35},0).wait(1).to({scaleX:0.2492,scaleY:0.4717,x:449.25,y:194.7},0).wait(1).to({scaleX:0.2504,scaleY:0.4775,x:458.45,y:194.1},0).wait(1).to({scaleX:0.2516,scaleY:0.4833,x:467.6,y:193.4},0).wait(1).to({scaleX:0.2529,scaleY:0.4891,x:476.75,y:192.75},0).wait(1).to({scaleX:0.2541,scaleY:0.4948,x:485.95,y:192.05},0).wait(1).to({scaleX:0.2553,scaleY:0.5006,x:495.1,y:191.4},0).wait(2));

	// Layer_1
	this.instance_1 = new lib.P2();
	this.instance_1.setTransform(506.9,321.95,1,1,0,0,0,36.9,58.5);

	this.instance_2 = new lib.P1();
	this.instance_2.setTransform(51.15,321.95,1,1,0,0,0,33.5,58.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},49).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288.1,330.6,261.9,49.799999999999955);
// library properties:
lib.properties = {
	id: 'C568B1C7AE23BA4B84791794914C1E3D',
	width: 550,
	height: 400,
	fps: 30,
	color: "#6699CC",
	opacity: 1.00,
	manifest: [
		{src:"images/VCards_atlas_.png?1643047542455", id:"VCards_atlas_"}
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
an.compositions['C568B1C7AE23BA4B84791794914C1E3D'] = {
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