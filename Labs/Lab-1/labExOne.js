(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"labExOne_atlas_", frames: [[0,0,1040,499],[0,501,1040,499],[0,1002,1040,499],[0,1503,1040,493]]},
		{name:"labExOne_atlas_2", frames: [[0,982,1248,329],[1356,0,193,59],[1042,0,312,162],[1042,277,104,294],[1042,164,367,111],[0,0,1040,490],[0,492,1040,488]]}
];


// symbols:



(lib.CachedBmp_10 = function() {
	this.initialize(ss["labExOne_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["labExOne_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["labExOne_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["labExOne_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["labExOne_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["labExOne_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["labExOne_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["labExOne_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["labExOne_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["labExOne_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["labExOne_atlas_2"]);
	this.gotoAndStop(6);
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


(lib.sea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sea, new cjs.Rectangle(0,0,624,164.5), null);


(lib.name = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.name, new cjs.Rectangle(0,0,96.5,29.5), null);


(lib.fishy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-0.1,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fishy, new cjs.Rectangle(-0.1,0,156,81), null);


(lib.fishingrod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-3.25,-0.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fishingrod, new cjs.Rectangle(-3.2,-0.4,52,147), null);


(lib.boaty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.boaty, new cjs.Rectangle(0,0,183.5,55.5), null);


// stage content:
(lib.Untitled1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.fishingrod();
	this.instance.setTransform(358,217.8,0.9999,0.9999,0.8097,0,0,24.4,7.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({_off:true},10).wait(1));

	// Layer_2
	this.instance_1 = new lib.fishy();
	this.instance_1.setTransform(257.5,342.45,1,1,0,0,0,78,40.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).wait(1).to({regX:77.9,x:257.4},0).wait(8).to({_off:true},1).wait(1));

	// Layer_1
	this.instance_2 = new lib.fishingrod();
	this.instance_2.setTransform(411.3,215.35,1,1,0,0,0,24.2,6.9);

	this.instance_3 = new lib.fishy();
	this.instance_3.setTransform(101,322.5,1,1,0,0,0,78,40.5);

	this.instance_4 = new lib.name();
	this.instance_4.setTransform(501.8,385.35,1,1,0,0,0,48.1,14.7);

	this.instance_5 = new lib.sea();
	this.instance_5.setTransform(282.05,338.6,1,1,0,0,0,311.9,82.2);

	this.instance_6 = new lib.boaty();
	this.instance_6.setTransform(432.2,254.3,1,1,0,0,0,91.8,27.8);

	this.instance_7 = new lib.CachedBmp_1();
	this.instance_7.setTransform(18.35,6.75,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_11();
	this.instance_8.setTransform(18.35,6.75,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_12();
	this.instance_9.setTransform(18.35,6.75,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_13();
	this.instance_10.setTransform(18.35,6.75,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_14();
	this.instance_11.setTransform(18.35,6.75,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_15();
	this.instance_12.setTransform(18.35,6.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6,p:{rotation:0,x:432.2,y:254.3,regX:91.8,regY:27.8,scaleX:1,scaleY:1}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3,p:{x:101,y:322.5,regX:78,regY:40.5,rotation:0}},{t:this.instance_2,p:{rotation:0,x:411.3,y:215.35,regX:24.2,regY:6.9,scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance_8},{t:this.instance_6,p:{rotation:8.4648,x:409.2,y:254.55,regX:91.8,regY:27.8,scaleX:1,scaleY:1}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3,p:{x:124.2,y:336,regX:78,regY:40.5,rotation:0}},{t:this.instance_2,p:{rotation:8.4648,x:394.25,y:212.95,regX:24.2,regY:6.9,scaleX:1,scaleY:1}}]},9).to({state:[{t:this.instance_9},{t:this.instance_6,p:{rotation:-0.2125,x:406.15,y:255.7,regX:91.9,regY:27.9,scaleX:1,scaleY:1}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3,p:{x:159,y:322.5,regX:78,regY:40.5,rotation:0}},{t:this.instance_2,p:{rotation:-0.2125,x:385.15,y:216.8,regX:24.4,regY:7,scaleX:1,scaleY:1}}]},10).to({state:[{t:this.instance_10},{t:this.instance_6,p:{rotation:11.0409,x:395.75,y:256.6,regX:92,regY:27.9,scaleX:1,scaleY:1}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3,p:{x:183.75,y:351.85,regX:78,regY:40.5,rotation:0}},{t:this.instance_2,p:{rotation:11.0409,x:382.65,y:214.35,regX:24.4,regY:7.1,scaleX:1,scaleY:1}}]},10).to({state:[{t:this.instance_11},{t:this.instance_6,p:{rotation:0.8097,x:378.4,y:256.9,regX:92,regY:27.9,scaleX:0.9999,scaleY:0.9999}},{t:this.instance_5},{t:this.instance_4}]},10).to({state:[{t:this.instance_12},{t:this.instance_6,p:{rotation:0.8097,x:378.4,y:256.9,regX:92,regY:27.9,scaleX:0.9999,scaleY:0.9999}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_2,p:{rotation:0.8097,x:358,y:217.8,regX:24.4,regY:7.2,scaleX:0.9999,scaleY:0.9999}},{t:this.instance_3,p:{x:264.25,y:377.55,regX:78.1,regY:40.6,rotation:-26.743}}]},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(245.2,206.8,349.00000000000006,242.09999999999997);
// library properties:
lib.properties = {
	id: '48D99DC231F31F4D86E1106803BF4C52',
	width: 550,
	height: 400,
	fps: 24,
	color: "#3333CC",
	opacity: 1.00,
	manifest: [
		{src:"images/labExOne_atlas_.png", id:"labExOne_atlas_"},
		{src:"images/labExOne_atlas_2.png", id:"labExOne_atlas_2"}
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
an.compositions['48D99DC231F31F4D86E1106803BF4C52'] = {
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