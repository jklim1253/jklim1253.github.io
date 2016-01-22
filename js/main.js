function getConcise(text, len) {
	var length = 50;
	if (len !== undefined) {
		length = len;
	}
	var notag = text.replace(/<\/?\b[a-zA-Z0-9]+\b\/?>/gi," ");
	if (notag.length < length) {
		return text;
	}

	var regex = new RegExp(".{"+length+"}");
	return notag.match(regex) + "...";
}
var Item = function(text, description, link, image) {
	this.text = text;
	if (description === undefined) {
		this.description = [];
	}
	else {
		this.description = description;
		this.link = link;
		this.image = image;
	}
};
Item.prototype.append = function(something) {
	this.description.push(something);
};
Item.prototype.draw = function() {
	if (typeof(this.description) === "string") {
		document.write("<div class='group'>");
		if (this.link !== undefined) {
			document.write("<a class='text-item' href='"+this.link+".html'>");
			document.write(this.text);
			document.write("</a>");
		}
		else {
			document.write("<div class='text-item'>");
			document.write(this.text);
			document.write("</div>");
		}
		document.write("<div class='description-item'>");
		if (this.image !== undefined) {
			document.write("<img src='"+this.image+"'/>");
		}
		document.write(getConcise(this.description));
		document.write("</div>");
		document.write("</div>");
	}
	else {
		document.write("<div class='text'>");
		document.write(this.text);
		document.write("</div>");
		document.write("<div class='description'>");
		for (var index in this.description) {
			this.description[index].draw();
		}
		document.write("</div>");
	}
};
