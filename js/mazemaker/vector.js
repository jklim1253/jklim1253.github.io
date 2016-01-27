function D2R(degree) {
	return degree*Math.PI/180;
}
function R2D(radian) {
	return radian*180/Math.PI;
}

var Vector = function(x, y) {
	this.x = x;
	this.y = y;
};
Vector.prototype.length = function() {
	return Math.sqrt(this.x*this.x + this.y*this.y);
};
Vector.prototype.angle = function() {
	// 3시 방향 기준으로 시계 방향으로의 각도
	var norm = this.normalize();
	var ip = norm.x;			// inner product = x-axis(1,0) norm(x,y) => x
	if (norm.y < 0) {
		return 360 - R2D(Math.acos(ip));
	}
	else {
		return R2D(Math.acos(ip));
	}
};
Vector.prototype.normalize = function() {
	if (this.length() === 0) {
		return new Vector(0,0);
	}
	var l = this.length();
	return new Vector(this.x/l, this.y/l);
};
Vector.prototype.scale = function(s) {
	return new Vector(this.x*s, this.y*s);
};
Vector.prototype.rotate = function(degree, clockwise) {
	// clockwise default value is true.
	clockwise = typeof clockwise !== 'undefined'? clockwise : true;

	var l = this.length();
	var a = this.angle();
	var norm = this.normalize();
	if (clockwise === true) {
		a += degree;
	}
	else {
		a -= degree;
	}
	return new Vector(Math.cos(D2R(a)), Math.sin(D2R(a)));
};
Vector.prototype.plus = function(other) {
	return new Vector(this.x + other.x, this.y + other.y);
};
Vector.prototype.minus = function(other) {
	return new Vector(this.x - other.x, this.y - other.y);
};
Vector.prototype.innerProduct = function(other) {
	return (this.x*other.x + this.y*other.y);
};
