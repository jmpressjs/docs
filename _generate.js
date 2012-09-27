var fs = require("fs");
var path = require("path");
var https = require("https");

var files = fs.readdirSync(__dirname)
	.filter(function(file) {
		return /^.*\.md$/.test(file);
	})
	.map(function(file) {
		var name = file.replace(/\.md$/, "");
		return {
			name: name,
			mdFile: path.join(__dirname, file),
			htmlFile: path.join(__dirname, name + ".html")
		}
	});

// Render markdown
var count = files.length;
files.forEach(function(file) {
	fs.readFile(file.mdFile, "utf-8", function(err, mdContent) {
		if(err) throw err;
		
		var reqContent = JSON.stringify({
			text: mdContent,
			mode: "gfm",
			context: "jmpressjs/docs"
		});
		
		var opt = require("url").parse("https://api.github.com/markdown");
		opt.headers = {
			accept: "application/vnd.github.beta+json",
			host: "api.github.com",
			"user-agent": "NodeJS HTTP Client",
			"content-length": reqContent.length,
			"content-type": "application/json"
		};
		opt.method = "POST";
		var req = https.request(opt, function(res) {
			res.setEncoding("utf-8");
			if(res.statusCode != 200) {
				console.error("statusCode should be 200, but is " + res.statusCode);
				console.dir(res.headers);
				return;
			}
			var arr = [];
			res.on("data", arr.push.bind(arr));
			res.on("end", function() {
				onResponse(arr.join(""));
			});
		}).on("error", function(err) {
			console.error(err);
		});
	
		req.write(reqContent, "utf-8");
		req.end();
	});

	function onResponse(html) {
		file.html = html;
		done();
	}
});
function done() {
	if(--count == 0)
		writeOut();
}

function writeOut() {
	fs.readFile(path.join(__dirname, "_template.html"), "utf-8", function(err, template) {
		if(err) throw err;
		files.forEach(function(file) {
			fs.writeFile(file.htmlFile, template.replace("######", file.html), "utf-8", function(err) {
				if(err) throw err;
			});
		});
	});
}