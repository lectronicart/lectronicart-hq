// Bundles the app into one self-contained HTML file for lead-magnet distribution.
// Usage: node tools/build-single-file.js   ->   dist/builder-calendar.html
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");
let html = read("index.html");
html = html.replace('<link rel="stylesheet" href="css/styles.css">',
  "<style>\n" + read("css/styles.css") + "</style>");
html = html.replace('<script src="js/data.js"></script>\n<script src="js/app.js"></script>',
  "<script>\n" + read("js/data.js") + "\n" + read("js/app.js") + "</script>");
fs.mkdirSync(path.join(root, "dist"), { recursive: true });
fs.writeFileSync(path.join(root, "dist", "builder-calendar.html"), html);
console.log("built dist/builder-calendar.html (" + html.length + " bytes)");
