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
	this.shape.graphics.f("#000000").s().p("AgcAtIAAhYIAJAAIAAAHQAIgIALAAQAMAAAIAJQAJAKAAANQAAANgJAJQgIAKgMAAQgLAAgIgIIAAAhgAgTgbIAAAeQAIAIAKAAQAJAAAGgGQAGgGAAgLQAAgKgGgHQgGgHgJAAQgKAAgIAJg");
	this.shape.setTransform(80.375,37.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSAZQgHgGAAgKIAAgoIAJAAIAAAmQAAAIAFAEQADAEAIAAQAJAAAIgIIAAguIAJAAIAAA9IgJAAIAAgGQgJAIgKAAQgLAAgFgHg");
	this.shape_1.setTransform(72.85,36.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAXQgIgJAAgOQAAgNAIgJQAJgJAMAAQANAAAJAJQAIAJAAANQAAAOgIAJQgJAJgNAAQgMAAgJgJgAgOgRQgGAHAAAKQAAALAGAGQAGAHAIAAQAJAAAGgHQAGgGAAgLQAAgKgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_2.setTransform(65.625,36.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPAgIAAg9IAJAAIAAAKQAHgNAPACIAAAIQgQgCgGAOIAAAqg");
	this.shape_3.setTransform(60.2,36.3871);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAfQgNgNAAgSQAAgSANgMQAMgNAQAAQAWAAAMAQIgIAGQgJgNgRAAQgMAAgJAKQgLAKAAAOQAAAPAKAKQAKAKAMAAQAPAAAKgJIAAgSIgUAAIAAgIIAdAAIAAAqIgJAAIAAgHQgLAJgOgBQgQAAgMgMg");
	this.shape_4.setTransform(52.75,35.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgDAsIAAhXIAIAAIAABXg");
	this.shape_5.setTransform(44.25,35.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgSAbQgGgEAAgHQAAgIAFgFQAFgDAMgCIASgEIAAgDQAAgGgEgEQgEgEgHAAQgMAAgDAMIgIgCQABgIAGgFQAHgFAJAAQALAAAGAGQAHAGAAAKIAAAoIgJAAIAAgIQgJAJgLAAQgJAAgFgFgAACADQgJACgEACQgEADAAAFQAAAEAEADQADACAFAAQAKAAAJgJIAAgOg");
	this.shape_6.setTransform(39.275,36.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSAXQgJgJAAgOQAAgNAJgJQAIgJAMAAQASAAAIAQIgIADQgGgLgMAAQgIAAgGAHQgFAGAAAKQAAAKAFAHQAGAHAIAAQAHAAAEgDQAEgDADgGIAIAEQgIAQgSAAQgMAAgIgJg");
	this.shape_7.setTransform(33.025,36.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgDArIAAg9IAIAAIAAA9gAgDgfQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_8.setTransform(28.15,35.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTAjQgJgJAAgOQAAgNAJgJQAIgJAMAAQALAAAIAHIAAggIAJAAIAABXIgJAAIAAgHQgIAIgLAAQgMAAgIgJgAgNgEQgGAGAAAKQAAAKAGAHQAGAHAJAAQAKAAAIgJIAAgdQgIgJgKAAQgJAAgGAHg");
	this.shape_9.setTransform(22.725,35.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSAXQgKgJABgOQAAgOAIgJQAIgIALAAQAOAAAHAJQAIAJgBANIAAACIguAAQAAAKAHAGQAGAGAGAAQANAAAGgKIAHAEQgIAOgRAAQgMAAgIgJgAATgEQAAgJgFgFQgGgGgIAAQgGAAgGAGQgEAFgCAJIAlAAIAAAAg");
	this.shape_10.setTransform(15.8,36.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAfAqIAAg4IAAgMIgFAMIgWAyIgHAAIgXgyIgFgMIAAAMIAAA4IgJAAIAAhTIAMAAIAYA2IAEALIAFgLIAYg2IAMAAIAABTg");
	this.shape_11.setTransform(7.2,35.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgJAXIAAglIgLAAIAAgIIALAAIAAgRIAJAAIAAARIAUAAIAAAIIgUAAIAAAkQAAAKAKAAQAFAAAEgCIADAHQgGADgIAAQgRAAAAgRg");
	this.shape_12.setTransform(81.8,23.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgWAWIAGgGQAJAJAJAAQAFAAAFgDQADgDAAgEQAAgHgKgDIgKgDQgPgEAAgMQAAgIAGgFQAGgEAIAAQAMAAALAKIgHAGQgHgJgJAAQgGAAgDACQgDADAAAEQAAAGAKADIAKAEQAJACADAEQADADAAAHQAAAIgGAFQgGAFgKAAQgMAAgLgKg");
	this.shape_13.setTransform(76.5,24.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgSAXQgJgJAAgOQgBgOAJgJQAIgIAMAAQANAAAHAJQAIAJAAANIAAACIgvAAQABAKAFAGQAGAGAIAAQALAAAHgKIAIAEQgJAOgRAAQgMAAgIgJgAATgEQAAgJgGgFQgFgGgIAAQgGAAgGAGQgFAFgBAJIAlAAIAAAAg");
	this.shape_14.setTransform(70.4,24.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgcAqIAAhTIAbAAQALAAAIAGQAGAHAAAJQAAAMgMAGQAIABAFAFQAEAGAAAHQAAALgHAGQgHAHgNAAgAgTAiIAVAAQAIAAAFgFQAFgFAAgGQAAgGgFgFQgFgFgIAAIgVAAgAgTgFIASAAQAHAAAEgEQAFgEAAgGQAAgGgFgEQgEgEgHAAIgSAAg");
	this.shape_15.setTransform(63.475,23);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgWAWIAGgGQAJAJAJAAQAFAAAFgDQADgDAAgEQAAgHgKgDIgKgDQgPgEAAgMQAAgIAGgFQAGgEAIAAQAMAAALAKIgHAGQgHgJgJAAQgGAAgDACQgDADAAAEQAAAGAKADIAKAEQAJACADAEQADADAAAHQAAAIgGAFQgGAFgKAAQgMAAgLgKg");
	this.shape_16.setTransform(54,24.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgSAbQgGgEAAgHQAAgIAFgFQAFgDAMgCIASgEIAAgDQAAgGgEgEQgEgEgHAAQgMAAgDAMIgIgCQABgIAGgFQAHgFAJAAQALAAAGAGQAHAGAAAKIAAAoIgJAAIAAgIQgJAJgLAAQgJAAgFgFgAACADQgJACgEACQgEADAAAFQAAAEAEADQADACAFAAQAKAAAJgJIAAgOg");
	this.shape_17.setTransform(47.875,24.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAlAfIAAglQAAgIgEgEQgEgFgHAAQgKAAgIAKIABAFIAAAnIgIAAIAAglQAAgIgEgEQgEgFgHAAQgKAAgIAJIAAAtIgJAAIAAg9IAJAAIAAAIQAIgJAMAAQANAAAFALQAIgLAOAAQAKAAAGAHQAGAGAAAKIAAAng");
	this.shape_18.setTransform(36.575,24.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgTAZQgFgGAAgKIAAgoIAJAAIAAAmQAAAIAEAEQAEAEAGAAQAKAAAHgIIAAguIAJAAIAAA9IgJAAIAAgGQgHAIgMAAQgJAAgHgHg");
	this.shape_19.setTransform(27.35,24.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgJAXIAAglIgLAAIAAgIIALAAIAAgRIAJAAIAAARIATAAIAAAIIgTAAIAAAkQAAAKAKAAQAFAAAEgCIADAHQgGADgIAAQgQAAgBgRg");
	this.shape_20.setTransform(21.4,23.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgcAtIAAhYIAJAAIAAAHQAIgIALAAQAMAAAIAJQAJAKAAANQAAANgJAJQgIAKgMAAQgLAAgIgIIAAAhgAgTgbIAAAeQAIAIAKAAQAJAAAGgGQAGgGAAgLQAAgKgGgHQgGgHgJAAQgKAAgIAJg");
	this.shape_21.setTransform(15.425,25.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgcAfQgMgNAAgSQAAgSAMgMQAMgNAQAAQARAAAMANQAMAMAAASQAAASgMANQgMANgRAAQgQAAgMgNgAgWgYQgJAKAAAOQAAAPAJAKQAKAKAMAAQANAAAKgKQAJgKgBgPQABgOgJgKQgKgKgNAAQgMAAgKAKg");
	this.shape_22.setTransform(6.75,23);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgQAgIAAg9IAJAAIAAAKQAIgNAQACIAAAIQgRgCgHAOIAAAqg");
	this.shape_23.setTransform(45.75,11.6871);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgVAXQgIgJAAgOQAAgNAIgJQAJgJAMAAQANAAAJAJQAIAJAAANQAAAOgIAJQgJAJgNAAQgMAAgJgJgAgOgRQgGAHAAAKQAAALAGAGQAGAHAIAAQAJAAAGgHQAGgGAAgLQAAgKgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_24.setTransform(39.425,11.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgJAtIAAg1IgMAAIAAgIIAMAAIAAgJQAAgJAFgFQAEgFAIAAQAJAAAFAEIgFAHQgEgDgFAAQgIAAAAAKIAAAKIATAAIAAAIIgTAAIAAA1g");
	this.shape_25.setTransform(33.65,10.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgSAXQgKgJABgOQAAgOAIgJQAIgIALAAQAOAAAHAJQAIAJgBANIAAACIguAAQAAAKAHAGQAGAGAGAAQANAAAGgKIAHAEQgIAOgRAAQgMAAgIgJgAATgEQAAgJgGgFQgFgGgIAAQgHAAgFAGQgFAFgBAJIAlAAIAAAAg");
	this.shape_26.setTransform(25.15,11.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgJAXIAAglIgMAAIAAgIIAMAAIAAgRIAJAAIAAARIAUAAIAAAIIgUAAIAAAkQAAAKAKAAQAFAAAEgCIADAHQgGADgIAAQgRAAAAgRg");
	this.shape_27.setTransform(19.35,10.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgVAXQgIgJAAgOQAAgNAIgJQAJgJAMAAQANAAAJAJQAIAJAAANQAAAOgIAJQgJAJgNAAQgMAAgJgJgAgOgRQgGAHAAAKQAAALAGAGQAGAHAIAAQAJAAAGgHQAGgGAAgLQAAgKgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_28.setTransform(13.275,11.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgEAqIghhTIAKAAIAbBJIAchJIAKAAIghBTg");
	this.shape_29.setTransform(5.825,10.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SUB, new cjs.Rectangle(0,0,90,45.1), null);


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
	this.shape.graphics.f("#1F2677").s().p("Ag4BHIAKgUQAGACAGAAQANAAAGgQIABgDIgphtIAeAAIAZBMIAbhMIAeAAIgrBxQgHAVgLAJQgLAIgSAAQgNAAgKgFg");
	this.shape.setTransform(127.025,41.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F2677").s().p("AAUBJIAAg/QAAgKgFgEQgFgFgIAAQgMAAgKAJIAABJIgcAAIAAiRIAcAAIAAAzQAOgNARAAQASAAAKALQAKAKAAAQIAABGg");
	this.shape_1.setTransform(115.4,37.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F2677").s().p("AgWAiIAAgxIgTAAIAAgXIATAAIAAgdIAcAAIAAAdIAgAAIAAAXIggAAIAAAsQAAAPAPAAQAIAAAHgDIAGAVQgNAHgPAAQgkAAAAgjg");
	this.shape_2.setTransform(104.975,37.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F2677").s().p("AgNBJIAAiRIAbAAIAACRg");
	this.shape_3.setTransform(97.925,37.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F2677").s().p("AglAvQgJgIAAgMQAAgOAIgHQAIgHAVgEIAcgFIAAgDQAAgIgFgFQgGgFgIAAQgNAAgHARIgZgFQAEgQAMgJQANgKASAAQAWAAAMALQALALAAASIAABDIgcAAIAAgNQgPAPgSAAQgOAAgJgIgAABAKQgLADgFADQgEADAAAFQAAAKAOAAQAMAAAMgLIAAgQg");
	this.shape_4.setTransform(89.475,39.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F2677").s().p("AghAoQgRgQAAgYQAAgXAPgQQAPgPAVAAQAYAAANAQQANAPAAAXIgBAIIhIAAQACALAHAHQAIAHAJAAQAQAAAJgNIATAMQgPAXgeAAQgVAAgPgPgAAXgJQAAgKgGgHQgGgGgKAAQgIAAgHAGQgGAGgCALIAtAAIAAAAg");
	this.shape_5.setTransform(78.5,39.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F2677").s().p("AAVBJIAAg/QgBgKgFgEQgFgFgIAAQgLAAgLAJIAABJIgcAAIAAiRIAcAAIAAAzQANgNATAAQARAAALALQAJAKAAAQIAABGg");
	this.shape_6.setTransform(66.7,37.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F2677").s().p("AgNBJIAAiRIAbAAIAACRg");
	this.shape_7.setTransform(54.075,37.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F2677").s().p("AglAvQgJgIAAgMQAAgOAIgHQAIgHAVgEIAcgFIAAgDQAAgIgFgFQgGgFgIAAQgNAAgHARIgZgFQAEgQAMgJQANgKASAAQAWAAAMALQALALAAASIAABDIgcAAIAAgNQgPAPgSAAQgOAAgJgIgAABAKQgLADgFADQgEADAAAFQAAAKAOAAQAMAAAMgLIAAgQg");
	this.shape_8.setTransform(45.625,39.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F2677").s().p("AgtA1QgUgVAAggQAAgfAUgVQAUgTAdAAQAtAAARAoIgbALQgKgYgZABQgPgBgMAMQgLANAAATQAAAUALAMQALANARAAQAYAAALgYIAaALQgSAogsAAQgdAAgUgTg");
	this.shape_9.setTransform(33.525,37.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F2677").s().p("AglAoQgQgQAAgYQAAgXAQgQQAPgPAWAAQAXAAAQAPQAPAQAAAXQAAAYgPAQQgQAPgXAAQgWAAgPgPgAgSgVQgHAIAAANQAAAOAHAIQAHAJALAAQAMAAAHgJQAIgIAAgOQAAgNgIgIQgHgJgMAAQgLAAgHAJg");
	this.shape_10.setTransform(20.075,39.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1F2677").s().p("Ag3A0IASgUQATAQATAAQALAAAHgEQAGgFAAgIQABgLgTgFIgWgGQgjgJgBgeQAAgRAOgMQAPgMAWAAQAiAAAUAVIgTATQgQgQgSAAQgKAAgFAEQgGAEAAAGQAAAMASAFIAUAGQAVAHAKAIQAHAJAAAOQAAATgPAMQgPANgZAAQgiAAgWgUg");
	this.shape_11.setTransform(7.8,37.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1F2677").s().p("Ag0BMIAAiVIAbAAIABALQAMgNARAAQAVAAANAPQAOAQAAAYQAAAWgPAQQgOAPgVABQgPAAgMgLIAAA1gAgYgpIAAApQAJAJAOAAQALAAAIgIQAHgIAAgNQAAgOgHgIQgIgJgLAAQgOAAgJAKg");
	this.shape_12.setTransform(120.65,20.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1F2677").s().p("AgiAoQgQgQAAgYQAAgXAPgQQAPgPAUAAQAZAAANAQQANAPAAAXIAAAIIhJAAQACALAHAHQAIAHAJAAQAQAAAJgNIATAMQgPAXgeAAQgVAAgQgPgAAYgJQgBgKgGgHQgHgGgKAAQgIAAgGAGQgGAGgCALIAuAAIAAAAg");
	this.shape_13.setTransform(108.4,18.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1F2677").s().p("AgiAoQgQgQAAgYQAAgXAPgQQAPgPAUAAQAYAAAOAQQANAPAAAXIAAAIIhJAAQACALAIAHQAHAHAKAAQAPAAAJgNIAUAMQgQAXgdAAQgWAAgQgPgAAYgJQgBgKgHgHQgFgGgLAAQgHAAgGAGQgHAGgCALIAuAAIAAAAg");
	this.shape_14.setTransform(96.9,18.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1F2677").s().p("AASBJIgcgqIgNAPIAAAbIgdAAIAAiRIAdAAIAABVIAngtIAhAAIgoAqIAsA/g");
	this.shape_15.setTransform(85.875,16.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1F2677").s().p("AgzA2IASgOQALAOASAAQAMAAAIgHQAIgIAAgMIAAgHQgLAMgQAAQgVAAgOgPQgOgQAAgWQAAgYAPgPQAOgPAVAAQAQgBAMALIAAgJIAbAAIAABjQAAAXgPAOQgPAPgaAAQgfgBgRgWgAgQgrQgIAIAAAOQAAANAIAIQAHAIAMAAQAMAAAJgJIAAgpQgJgKgMAAQgMAAgHAJg");
	this.shape_16.setTransform(69.025,20.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1F2677").s().p("AAVA2IAAg9QAAgKgGgFQgFgGgIAAQgLAAgLAJIAABJIgcAAIAAhpIAcAAIAAALQANgNATAAQARAAALALQAJALAAARIAABEg");
	this.shape_17.setTransform(57.05,18);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1F2677").s().p("AgNBMIAAhpIAbAAIAABpgAgLgwQgEgFAAgGQAAgHAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAHQAAAGgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape_18.setTransform(48.325,15.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1F2677").s().p("Ag0BMIAAiVIAcAAIAAALQALgNASAAQAUAAAOAPQAOAQAAAYQAAAWgPAQQgOAPgVABQgPAAgMgLIAAA1gAgYgpIAAApQAKAJANAAQALAAAIgIQAHgIAAgNQAAgOgHgIQgIgJgLAAQgNAAgKAKg");
	this.shape_19.setTransform(39.8,20.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1F2677").s().p("AgNBJIAAiRIAbAAIAACRg");
	this.shape_20.setTransform(30.725,16.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1F2677").s().p("AgiAoQgQgQAAgYQAAgXAPgQQAPgPAVAAQAYAAANAQQANAPAAAXIgBAIIhIAAQACALAHAHQAIAHAJAAQAQAAAJgNIATAMQgPAXgeAAQgVAAgQgPgAAXgJQAAgKgGgHQgGgGgKAAQgIAAgHAGQgGAGgCALIAtAAIAAAAg");
	this.shape_21.setTransform(22.35,18.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1F2677").s().p("AAdBGIAAg6Ig5AAIAAA6IgeAAIAAiLIAeAAIAAA3IA5AAIAAg3IAeAAIAACLg");
	this.shape_22.setTransform(9.325,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD, new cjs.Rectangle(0,0,196,52.5), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// type
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#142677").s().p("AgXASIAXgSIgXgRIAAgUIAvAlIgvAmg");
	this.shape.setTransform(32.6,0.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#142677").s().p("AgXASIAXgSIgXgRIAAgUIAvAlIgvAmg");
	this.shape_1.setTransform(27.35,0.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#142677").s().p("AAMAhIgMgnIgLAnIgTAAIgQhBIARAAIAKAtIANgoIANAAIAOAoIAJgtIARAAIgQBBg");
	this.shape_2.setTransform(16.725,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#142677").s().p("AgXAZQgKgKAAgPQAAgOAKgKQAKgJANAAQAOAAAKAJQAKAKAAAOQAAAPgKAKQgKAJgOAAQgNAAgKgJgAgLgNQgEAGAAAHQAAAJAEAFQAFAFAGAAQAHAAAFgFQAFgFAAgJQAAgHgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_3.setTransform(8.125,1.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#142677").s().p("AANAiIAAgmQgBgGgDgEQgDgDgFAAQgGAAgHAGIAAAtIgRAAIAAhBIARAAIAAAGQAIgHALgBQALAAAHAHQAFAHABAKIAAArg");
	this.shape_4.setTransform(0.6,1.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#142677").s().p("AgVAZQgKgKAAgPQAAgNAKgLQAJgJAMAAQAPAAAJAKQAIAJAAAOIgBAFIgsAAQABAHAEAFQAFADAGAAQAJAAAGgHIAMAHQgJAOgTAAQgNAAgKgJgAAPgFQgBgHgEgDQgEgEgGgBQgEAAgEAEQgEAEgBAHIAcAAIAAAAg");
	this.shape_5.setTransform(-9.175,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#142677").s().p("AgNAWIAAgfIgMAAIAAgOIAMAAIAAgSIARAAIAAASIAUAAIAAAOIgUAAIAAAbQAAAJAJAAQAFAAAEgCIAEAOQgIADgJABQgWgBAAgUg");
	this.shape_6.setTransform(-15.425,0.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#142677").s().p("AgXAZQgKgKAAgPQAAgOAKgKQAKgJANAAQAOAAAKAJQAKAKAAAOQAAAPgKAKQgKAJgOAAQgNAAgKgJgAgLgNQgEAGAAAHQAAAJAEAFQAFAFAGAAQAHAAAFgFQAFgFAAgJQAAgHgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_7.setTransform(-21.925,1.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#142677").s().p("AgLAsIgghXIAUAAIAXBEIAYhEIAUAAIghBXg");
	this.shape_8.setTransform(-30.05,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-50.7,-11,101.4,21.2), null);


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
	this.instance.setTransform(257.65,26.45,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(359));

	// HEAD
	this.instance_1 = new lib.HEAD();
	this.instance_1.setTransform(33,120.8,1,1,0,0,0,0,38);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:35,alpha:1},10,cjs.Ease.quadOut).wait(41).to({y:-12},10,cjs.Ease.quadOut).to({_off:true},1).wait(297));

	// SUB
	this.instance_2 = new lib.SUB();
	this.instance_2.setTransform(154.8,72.2,1,1,0,0,0,144.5,13.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(51).to({_off:false},0).to({y:16.4,alpha:1},10,cjs.Ease.quadOut).wait(298));

	// CTA
	this.instance_3 = new lib.CTA();
	this.instance_3.setTransform(150.1,118.65,1.13,1.13,0,0,0,0.1,10.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(68).to({_off:false},0).to({y:38.65,alpha:1},10,cjs.Ease.quadOut).wait(1).to({scaleX:1.2999,scaleY:1.2999,y:38.55},3,cjs.Ease.quadIn).wait(1).to({regX:0.3,regY:0.1,scaleX:1.2248,scaleY:1.2248,x:150.3,y:26.15},0).wait(1).to({scaleX:1.1751,scaleY:1.1751,y:26.65},0).wait(1).to({scaleX:1.1451,scaleY:1.1451,y:26.95},0).wait(1).to({regX:0.1,regY:10.2,scaleX:1.13,scaleY:1.13,x:150.1,y:38.65},0).wait(63).to({scaleX:1.2999,scaleY:1.2999,y:38.55},3,cjs.Ease.quadIn).wait(1).to({regX:0.3,regY:0.1,scaleX:1.2248,scaleY:1.2248,x:150.3,y:26.15},0).wait(1).to({scaleX:1.1751,scaleY:1.1751,y:26.65},0).wait(1).to({scaleX:1.1451,scaleY:1.1451,y:26.95},0).wait(1).to({regX:0.1,regY:10.2,scaleX:1.13,scaleY:1.13,x:150.1,y:38.65},0).wait(65).to({scaleX:1.2999,scaleY:1.2999,y:38.55},3,cjs.Ease.quadIn).wait(1).to({regX:0.3,regY:0.1,scaleX:1.2248,scaleY:1.2248,x:150.3,y:26.15},0).wait(1).to({scaleX:1.1751,scaleY:1.1751,y:26.65},0).wait(1).to({scaleX:1.1451,scaleY:1.1451,y:26.95},0).wait(1).to({regX:0.1,regY:10.2,scaleX:1.13,scaleY:1.13,x:150.1,y:38.65},0).wait(66).to({scaleX:1.2999,scaleY:1.2999,y:38.55},3,cjs.Ease.quadIn).wait(1).to({regX:0.3,regY:0.1,scaleX:1.2248,scaleY:1.2248,x:150.3,y:26.15},0).wait(1).to({scaleX:1.1751,scaleY:1.1751,y:26.65},0).wait(1).to({scaleX:1.1451,scaleY:1.1451,y:26.95},0).wait(1).to({regX:0.1,regY:10.2,scaleX:1.13,scaleY:1.13,x:150.1,y:38.65},0).wait(49).to({scaleX:1.2999,scaleY:1.2999,y:38.55},3,cjs.Ease.quadIn).to({scaleX:1.13,scaleY:1.13,y:38.65},4).wait(2));

	// bkgd blue
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9F6FA").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_1.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(359));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(159.5,-25,161,160.3);
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