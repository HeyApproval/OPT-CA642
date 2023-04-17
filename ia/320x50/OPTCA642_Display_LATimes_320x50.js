(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.SUB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggglIBBAlIhBAmg");
	this.shape.setTransform(204.725,11.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcAtIAAhYIAJAAIAAAHQAIgIALAAQAMAAAIAJQAJAKAAANQAAANgJAJQgIAKgMAAQgLAAgIgIIAAAhgAgTgbIAAAeQAIAIAKAAQAJAAAGgGQAGgGAAgLQAAgKgGgHQgGgHgJAAQgKAAgIAJg");
	this.shape_1.setTransform(195.675,13.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTAZQgFgGAAgKIAAgoIAJAAIAAAmQAAAIADAEQAFAEAGAAQAKAAAHgIIAAguIAJAAIAAA9IgJAAIAAgGQgHAIgMAAQgKAAgGgHg");
	this.shape_2.setTransform(188.65,11.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVAXQgIgJAAgOQAAgNAIgJQAJgJAMAAQANAAAJAJQAIAJAAANQAAAOgIAJQgJAJgNAAQgMAAgJgJgAgOgRQgGAHAAAKQAAALAGAGQAGAHAIAAQAJAAAGgHQAGgGAAgLQAAgKgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_3.setTransform(181.925,11.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgQAgIAAg9IAJAAIAAAKQAIgNAPACIAAAIQgPgCgIAOIAAAqg");
	this.shape_4.setTransform(177,11.6871);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZAfQgMgMAAgTQAAgRAMgNQANgNAQAAQAWABAMAQIgIAFQgJgNgRAAQgMAAgJAKQgLAKABAOQAAAPAJAKQAKAKAMAAQAOAAAKgIIAAgTIgTAAIAAgIIAdAAIAAAqIgKAAIAAgGQgLAHgNABQgQAAgNgNg");
	this.shape_5.setTransform(170.05,10.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEAsIAAhXIAIAAIAABXg");
	this.shape_6.setTransform(162.55,10.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSAbQgGgEAAgHQAAgIAFgFQAFgDAMgCIASgEIAAgDQAAgGgEgEQgEgEgHAAQgMAAgDAMIgIgCQABgIAGgFQAHgFAJAAQALAAAGAGQAHAGAAAKIAAAoIgJAAIAAgIQgJAJgLAAQgJAAgFgFgAACADQgJACgEACQgEADAAAFQAAAEAEADQADACAFAAQAKAAAJgJIAAgOg");
	this.shape_7.setTransform(158.075,11.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgSAXQgJgJAAgOQAAgNAJgJQAIgJAMAAQASAAAIAQIgIADQgGgLgMAAQgIAAgGAHQgFAGAAAKQAAAKAFAHQAGAHAIAAQAHAAAEgDQAEgDADgGIAIAEQgIAQgSAAQgMAAgIgJg");
	this.shape_8.setTransform(152.325,11.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgDArIAAg9IAIAAIAAA9gAgDgfQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_9.setTransform(147.95,10.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgTAjQgJgJAAgOQAAgMAJgKQAIgJAMAAQALAAAIAHIAAgfIAJAAIAABWIgJAAIAAgHQgIAJgLAAQgMAAgIgKgAgNgEQgGAFAAALQAAAKAGAHQAGAHAJAAQAKAAAIgIIAAgfQgIgIgKAAQgJAAgGAHg");
	this.shape_10.setTransform(143.025,10.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgTAXQgJgJAAgOQAAgOAJgJQAIgIALAAQAOAAAIAJQAGAJAAANIAAACIgvAAQABAKAHAGQAFAGAHAAQAMAAAIgKIAGAEQgIAOgRAAQgMAAgJgJgAATgEQgBgJgEgFQgGgGgIAAQgGAAgGAGQgEAFgCAJIAlAAIAAAAg");
	this.shape_11.setTransform(136.6,11.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAfAqIABg5IAAgLIgGALIgWAzIgHAAIgXgzIgFgLIABALIAAA5IgJAAIAAhTIALAAIAZA2IADALIAFgLIAYg2IAMAAIAABTg");
	this.shape_12.setTransform(128.5,10.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgJAXIAAglIgLAAIAAgIIALAAIAAgRIAJAAIAAARIATAAIAAAIIgTAAIAAAkQAAAKAKAAQAFAAAEgCIADAHQgGADgIAAQgQAAgBgRg");
	this.shape_13.setTransform(119.4,10.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgXAWIAHgGQAJAJAJAAQAFAAAEgDQAEgDAAgEQAAgHgKgDIgKgDQgPgEAAgMQAAgIAGgFQAFgEAJAAQAMAAAKAKIgGAGQgHgJgJAAQgFAAgDACQgDADgBAEQAAAGAKADIAKAEQAIACAEAEQADADAAAHQABAIgHAFQgGAFgKAAQgNAAgLgKg");
	this.shape_14.setTransform(114.6,11.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTAXQgIgJgBgOQAAgOAJgJQAIgIAMAAQANAAAIAJQAHAJAAANIAAACIgwAAQACAKAFAGQAHAGAHAAQALAAAIgKIAHAEQgJAOgRAAQgMAAgJgJgAATgEQgBgJgFgFQgFgGgIAAQgGAAgGAGQgFAFgBAJIAlAAIAAAAg");
	this.shape_15.setTransform(109,11.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgcAqIAAhTIAbAAQALAAAIAHQAGAFAAAKQAAAMgMAGQAIABAFAFQAEAGAAAIQAAAKgHAGQgHAHgNAAgAgTAiIAVAAQAIAAAFgFQAFgFAAgGQAAgHgFgEQgFgEgIgBIgVAAgAgTgFIASAAQAHAAAEgEQAFgEAAgGQAAgGgFgEQgEgEgHAAIgSAAg");
	this.shape_16.setTransform(102.575,10.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgXAWIAHgGQAJAJAIAAQAHAAADgDQAEgDAAgEQAAgHgJgDIgLgDQgPgEAAgMQAAgIAGgFQAFgEAJAAQAMAAALAKIgHAGQgHgJgJAAQgGAAgCACQgDADAAAEQAAAGAJADIAKAEQAJACADAEQAEADAAAHQAAAIgHAFQgGAFgKAAQgMAAgMgKg");
	this.shape_17.setTransform(94.1,11.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSAbQgGgEAAgHQAAgIAFgFQAFgDAMgCIASgEIAAgDQAAgGgEgEQgEgEgHAAQgMAAgDAMIgIgCQABgIAGgFQAHgFAJAAQALAAAGAGQAHAGAAAKIAAAoIgJAAIAAgIQgJAJgLAAQgJAAgFgFgAACADQgJACgEACQgEADAAAFQAAAEAEADQADACAFAAQAKAAAJgJIAAgOg");
	this.shape_18.setTransform(88.475,11.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAlAfIAAglQAAgIgEgFQgEgDgHAAQgKAAgIAJIABAFIAAAnIgIAAIAAglQAAgIgEgFQgEgDgHAAQgKAAgIAIIAAAtIgJAAIAAg9IAJAAIAAAIQAIgIAMAAQANgBAFALQAIgLAOABQAKgBAGAHQAGAGAAAKIAAAng");
	this.shape_19.setTransform(78.175,11.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgTAZQgFgGgBgKIAAgoIAJAAIAAAmQAAAIAFAEQADAEAHAAQAJAAAIgIIAAguIAJAAIAAA9IgJAAIAAgGQgIAIgKAAQgLAAgGgHg");
	this.shape_20.setTransform(69.45,11.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgIAXIAAglIgNAAIAAgIIANAAIAAgRIAIAAIAAARIAUAAIAAAIIgUAAIAAAkQAAAKAKAAQAFAAAEgCIADAHQgGADgHAAQgSAAABgRg");
	this.shape_21.setTransform(64,10.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgcAtIAAhYIAJAAIAAAHQAIgIALAAQAMAAAIAJQAJAKAAANQAAANgJAJQgIAKgMAAQgLAAgIgIIAAAhgAgTgbIAAAeQAIAIAKAAQAJAAAGgGQAGgGAAgLQAAgKgGgHQgGgHgJAAQgKAAgIAJg");
	this.shape_22.setTransform(58.525,13.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgcAfQgMgMAAgTQAAgRAMgNQAMgNAQAAQARAAAMANQAMANAAARQAAATgMAMQgMANgRAAQgQAAgMgNgAgWgYQgIAKgBAOQABAPAIAKQAJAKANAAQAOAAAIgKQAJgKAAgPQAAgOgJgKQgIgKgOAAQgNAAgJAKg");
	this.shape_23.setTransform(50.35,10.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgQAgIAAg9IAJAAIAAAKQAIgNAQACIAAAIQgQgCgIAOIAAAqg");
	this.shape_24.setTransform(42.25,11.6871);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgVAXQgIgJAAgOQAAgNAIgJQAJgJAMAAQANAAAJAJQAIAJAAANQAAAOgIAJQgJAJgNAAQgMAAgJgJgAgOgRQgGAHAAAKQAAALAGAGQAGAHAIAAQAJAAAGgHQAGgGAAgLQAAgKgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_25.setTransform(36.425,11.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJAtIAAg1IgMAAIAAgIIAMAAIAAgJQAAgJAFgFQAEgFAJAAQAHAAAGAEIgEAHQgFgDgEAAQgJAAAAAKIAAAKIATAAIAAAIIgTAAIAAA1g");
	this.shape_26.setTransform(31.15,10.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgTAXQgJgJAAgOQAAgOAJgJQAIgIALAAQAOAAAIAJQAGAJAAANIAAACIgvAAQABAKAHAGQAFAGAHAAQAMAAAIgKIAGAEQgIAOgRAAQgMAAgJgJgAATgEQgBgJgEgFQgGgGgIAAQgGAAgGAGQgEAFgCAJIAlAAIAAAAg");
	this.shape_27.setTransform(23.65,11.775);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgJAXIAAglIgMAAIAAgIIAMAAIAAgRIAJAAIAAARIAUAAIAAAIIgUAAIAAAkQAAAKAKAAQAFAAAEgCIADAHQgGADgIAAQgRAAAAgRg");
	this.shape_28.setTransform(18.35,10.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgVAXQgIgJAAgOQAAgNAIgJQAJgJAMAAQANAAAJAJQAIAJAAANQAAAOgIAJQgJAJgNAAQgMAAgJgJgAgOgRQgGAHAAAKQAAALAGAGQAGAHAIAAQAJAAAGgHQAGgGAAgLQAAgKgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_29.setTransform(12.775,11.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgEAqIghhTIAKAAIAbBJIAchJIAKAAIghBTg");
	this.shape_30.setTransform(5.825,10.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SUB, new cjs.Rectangle(0,0,239.8,20.4), null);


(lib.Optum_2022_RGBai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Optum_2022_RGB.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF512E").s().p("AixBmIAAilIAlAAIABAOQAQgQAWAAQAYAAARASQARASAAAaQAAAZgRASQgRASgYAAQgWAAgPgPIAAA7gAiCgYQgIAJAAAMQAAAMAIAJQAIAIAMAAQALAAAJgIQAIgJAAgMQAAgMgIgJQgJgJgLAAQgMAAgIAJgAA/AuQgQgNAAgXIAAhJIAnAAIAABIQAAAIAFAFQAEAEAIAAQAHAAAFgEQAFgFAAgIIAAhIIAnAAIAABJQAAAXgQANQgQANgYAAQgYAAgQgNgAgVAvQgMgMAAgWIAAhqIAlAAIAAAeIAgAAIAAAfIggAAIAAAqQAAAQASAAQAFAAAJgDIAAAfQgKAEgOAAQgVAAgMgLgAlJAiQgXgXAAggQAAgiAXgXQAYgXAiAAQAjAAAYAXQAXAXAAAiQAAAggXAXQgYAYgjAAQgiAAgYgYgAkrg0QgMAMAAATQAAASAMALQALANARAAQARAAAMgNQAMgLAAgSQAAgSgMgNQgMgMgRAAQgRAAgLAMgAE6A4IAAhGQAAgJgEgFQgFgFgHAAQgHAAgEAFQgFAFAAAJIAABGIgnAAIAAhGQAAgJgFgFQgEgFgHAAQgHAAgFAFQgFAFAAAJIAABGIgmAAIAAh3IAmAAIAAAOQALgQAVAAQAYAAAKAUQAMgUAZAAQATAAALANQAKANAAATIAABMg");
	this.shape.setTransform(35.325,10.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.7,20.5);


(lib.HEAD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F2677").s().p("AgvA9IAIgSQAFADAFAAQALAAAFgPIABgCIgjhdIAaAAIAVBBIAXhBIAZAAIgkBgQgGARgJAIQgKAIgPAAQgLgBgIgDg");
	this.shape.setTransform(217.475,17.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F2677").s().p("AARA+IAAg1QAAgJgEgDQgEgEgIgBQgJABgIAHIAAA+IgZAAIAAh7IAZAAIAAArQALgLAPAAQAPAAAIAKQAJAIAAAOIAAA7g");
	this.shape_1.setTransform(207.575,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F2677").s().p("AgTAdIAAgqIgQAAIAAgTIAQAAIAAgZIAYAAIAAAZIAcAAIAAATIgcAAIAAAlQAAANAMAAQAHAAAHgDIAFATQgLAFgNAAQgeAAgBgdg");
	this.shape_2.setTransform(198.7,14.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F2677").s().p("AgLA+IAAh7IAXAAIAAB7g");
	this.shape_3.setTransform(192.675,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F2677").s().p("AggAoQgHgHAAgKQAAgMAHgFQAHgHASgDIAWgEIAAgDQAAgGgDgFQgFgEgHAAQgLAAgGAPIgVgGQADgMALgIQALgIAOAAQATAAAKAJQAKAJAAAQIAAA4IgYAAIAAgKQgNAMgPgBQgMAAgIgGgAABAJQgKACgEACQgDADAAAEQAAAKAMgBQAKABAJgLIAAgNg");
	this.shape_4.setTransform(185.5,15.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F2677").s().p("AgcAiQgPgNAAgVQAAgTAOgOQAMgNARABQAVAAAMANQALANgBATIAAAHIg+AAQACAJAHAGQAGAGAIAAQANAAAHgKIARAJQgNATgZAAQgSAAgNgMgAAUgIQgBgJgFgFQgFgFgJAAQgGAAgFAFQgGAFgCAJIAnAAIAAAAg");
	this.shape_5.setTransform(176.2,15.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F2677").s().p("AARA+IAAg1QAAgJgEgDQgEgEgIgBQgJABgIAHIAAA+IgZAAIAAh7IAZAAIAAArQALgLAPAAQAPAAAIAKQAJAIAAAOIAAA7g");
	this.shape_6.setTransform(166.125,14);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F2677").s().p("AgLA+IAAh7IAXAAIAAB7g");
	this.shape_7.setTransform(155.375,14);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F2677").s().p("AgfAoQgIgHAAgKQAAgMAGgFQAIgHARgDIAYgEIAAgDQAAgGgFgFQgEgEgHAAQgLAAgGAPIgVgGQAEgMAJgIQAMgIAOAAQATAAAKAJQAKAJAAAQIAAA4IgYAAIAAgKQgMAMgPgBQgNAAgHgGgAAAAJQgJACgDACQgFADAAAEQAAAKANgBQAKABAKgLIAAgNg");
	this.shape_8.setTransform(148.2,15.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F2677").s().p("AgmAtQgRgSAAgbQAAgaARgRQARgRAYgBQAmABAPAiIgXAJQgJgUgUAAQgOAAgJALQgKAKAAAQQAAARAKALQAJAKAOAAQAVAAAJgTIAWAIQgQAjglAAQgYAAgRgRg");
	this.shape_9.setTransform(137.925,14.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F2677").s().p("AggAiQgNgOAAgUQAAgTANgOQANgNATAAQAUAAANANQANAOAAATQAAAUgNAOQgNANgUAAQgTAAgNgNgAgPgSQgHAHAAALQAAAMAHAHQAGAHAJAAQAKAAAGgHQAHgHAAgMQAAgLgHgHQgGgHgKAAQgJAAgGAHg");
	this.shape_10.setTransform(126.525,15.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1F2677").s().p("AgvAsIAQgQQAPANARAAQAJABAGgFQAGgDAAgHQAAgKgQgFIgSgEQgfgIAAgZQAAgQAMgJQAMgKATAAQAcAAASARIgQARQgNgOgQAAQgIAAgFAEQgFADAAAGQAAAJAQAEIAQAGQASAFAIAHQAHAIAAAMQAAAQgNAKQgNALgVAAQgdAAgTgRg");
	this.shape_11.setTransform(116.075,14.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1F2677").s().p("AgsBAIAAh+IAYAAIAAAJQAJgKAQAAQARgBAMANQALAOAAAUQAAATgMANQgMANgSAAQgNAAgJgIIAAAsgAgTgjIAAAjQAHAIALAAQAKAAAGgIQAHgGAAgLQAAgLgHgHQgGgIgKAAQgLAAgHAIg");
	this.shape_12.setTransform(102.75,17.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1F2677").s().p("AgcAiQgPgNAAgVQAAgTAOgOQAMgNARABQAVAAAMANQALANgBATIAAAHIg+AAQACAJAHAGQAFAGAJAAQANAAAIgKIAQAJQgNATgZAAQgSAAgNgMgAAUgIQgBgJgFgFQgFgFgJAAQgGAAgFAFQgGAFgCAJIAnAAIAAAAg");
	this.shape_13.setTransform(92.4,15.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1F2677").s().p("AgcAiQgOgNgBgVQAAgTANgOQANgNASABQAUAAALANQAMANAAATIgBAHIg+AAQACAJAHAGQAFAGAJAAQANAAAIgKIAQAJQgNATgZAAQgTAAgMgMgAAUgIQgBgJgFgFQgGgFgHAAQgHAAgGAFQgFAFgBAJIAmAAIAAAAg");
	this.shape_14.setTransform(82.65,15.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1F2677").s().p("AAPA+IgXgkIgMANIAAAXIgYAAIAAh7IAYAAIAABIIAigmIAcAAIgjAkIAmA1g");
	this.shape_15.setTransform(73.325,14);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1F2677").s().p("AgrAuIAPgMQAJAMAPAAQALAAAHgGQAGgHAAgKIAAgGQgJAKgOAAQgRAAgMgNQgMgNAAgTQAAgUANgNQAMgNASAAQANAAAKAJIAAgIIAXAAIAABUQAAAUgMALQgNANgWAAQgbAAgOgTgAgOglQgGAHAAAMQAAALAGAHQAHAGAJAAQALAAAHgHIAAgjQgHgIgLAAQgJAAgHAHg");
	this.shape_16.setTransform(58.975,17.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1F2677").s().p("AARAuIAAg0QAAgJgEgEQgEgEgIgBQgJABgIAHIAAA+IgZAAIAAhZIAYAAIAAAJQALgLAQAAQAPAAAIAKQAJAIAAAPIAAA6g");
	this.shape_17.setTransform(48.775,15.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1F2677").s().p("AgLBBIAAhZIAXAAIAABZgAgJgpQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_18.setTransform(41.375,13.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1F2677").s().p("AgsBAIAAh+IAYAAIAAAJQAJgKAQAAQARgBALANQAMAOAAAUQAAATgMANQgMANgSAAQgNAAgKgIIAAAsgAgUgjIAAAjQAIAIALAAQAJAAAHgIQAGgGABgLQgBgLgGgHQgHgIgJAAQgLAAgIAIg");
	this.shape_19.setTransform(34.1,17.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1F2677").s().p("AgLA+IAAh7IAXAAIAAB7g");
	this.shape_20.setTransform(26.375,14);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1F2677").s().p("AgcAiQgOgNgBgVQABgTANgOQAMgNASABQATAAANANQAKANABATIgBAHIg+AAQACAJAHAGQAFAGAJAAQANAAAIgKIAQAJQgNATgZAAQgTAAgMgMgAAUgIQgBgJgFgFQgFgFgIAAQgHAAgFAFQgGAFgBAJIAmAAIAAAAg");
	this.shape_21.setTransform(19.3,15.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1F2677").s().p("AAYA7IAAgxIgvAAIAAAxIgbAAIAAh2IAbAAIAAAvIAvAAIAAgvIAaAAIAAB2g");
	this.shape_22.setTransform(8.2,14.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD, new cjs.Rectangle(0,0,241.7,27.2), null);


(lib.OPT_2022_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Optum_2022_RGBai("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,35.3,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.OPT_2022_logo, new cjs.Rectangle(-35.3,-10.2,70.69999999999999,20.5), null);


(lib.LOGO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.OPT_2022_logo();
	this.instance.setTransform(0.15,0.15,2,2,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOGO, new cjs.Rectangle(-70.6,-20.4,141.3,40.9), null);


// stage content:
(lib.OPTCA642_Display_LATimes_320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,358];
	// timeline functions:
	this.frame_0 = function() {
		//if(!this.alreadyyExecuted){
		//this.alreadyyExecuted=true;
		//	this.clickthru_btn.on("click", function(evt){
		//  window.open(clickTag, "_blank");
		//});
		//} else {
		//gotoAndPlay(2);
		//}
	}
	this.frame_358 = function() {
		//if(!this.alreadyExecuted){
		//this.alreadyExecuted=true;
		//this.loopNum=1;
		//} else {
		//this.loopNum++;
		//if(this.loopNum==2){
		this.stop();
		//}
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(358).call(this.frame_358).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A46j0MAx1AAAIAAHpMgx1AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(359));

	// logo
	this.instance = new lib.LOGO();
	this.instance.setTransform(279.05,19.45,0.5,0.5,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(359));

	// HEAD
	this.instance_1 = new lib.HEAD();
	this.instance_1.setTransform(3,95.7,1,1,0,0,0,0,38);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:41.4,alpha:1},10,cjs.Ease.quadOut).wait(349));

	// SUB
	this.instance_2 = new lib.SUB();
	this.instance_2.setTransform(148.5,69.1,1,1,0,0,0,144.5,13.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(51).to({_off:false},0).to({y:38.8,alpha:1},10,cjs.Ease.quadOut).wait(298));

	// bkgd blue
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9F6FA").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_1.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(359));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(159.5,24.5,161,60.400000000000006);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 320,
	height: 50,
	fps: 24,
	color: "#333333",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

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
an.compositions['0957C5EC3B874C629166840920B09671'] = {
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;