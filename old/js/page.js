function onlyAlphabet(text) {
	return text.replace(/[^a-zA-Z0-9]/g,"").toUpperCase();
}
function findDescription(name, item) {
	if (typeof(item.description) === "string") {
		if (onlyAlphabet(name) == onlyAlphabet(item.text)) {
			return item.description;
		}
	}
	else {
		var target = 0;
		for (var index in item.description) {
			if (onlyAlphabet(item.description[index].text) == onlyAlphabet(name.substring(0, (name.indexOf(".") == -1? name.length : name.indexOf("."))))) {
				target = index;
				break;
			}
		}
		return findDescription(name.substr(name.indexOf(".")+1),item.description[target]);
	}

return "There is no description for here";
}

function updateTitle(name) {
	var title = name.substr(name.lastIndexOf(".")+1);
	title = title.replace(/_/g, " ").toUpperCase();
	document.title = title;

	var pwd = document.getElementById("pwd");
	var pwdText = "/" + name.replace(/\./g, "/").toUpperCase();
	pwd.innerHTML = pwdText;
	pwd.href = "index.html";

	pwd.addEventListener("mouseenter", onMouseEnter, false);
	pwd.addEventListener("mouseleave", onMouseLeave, false);
	function onMouseEnter(e) {
		pwd.innerHTML = "cd /";
	}
	function onMouseLeave(e) {
		pwd.innerHTML = pwdText;
	}

	var output_title = document.getElementById("title");
	output_title.innerHTML = title;
}
function updateDescription(name) {
	var description = document.getElementById("description");
	description.innerHTML = findDescription(name, main);
}
function beautifulPage(name) {
	updateTitle(name);
	updateDescription(name);
}

