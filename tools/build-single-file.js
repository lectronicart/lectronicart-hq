// Bundles the app into one self-contained HTML file for lead-magnet distribution.
// Usage: node tools/build-single-file.js   ->   dist/builder-calendar.html
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");
let html = read("index.html");
// swap a marker string for inlined content — and refuse to build if the
// marker isn't found (otherwise we'd silently ship a broken file)
const swap = (marker, replacement) => {
  if (!html.includes(marker)) {
    console.error("BUILD FAILED: index.html no longer contains:\n  " + marker);
    process.exit(1);
  }
  html = html.replace(marker, replacement);
};
swap('<link rel="stylesheet" href="css/styles.css">',
  "<style>\n" + read("css/styles.css") + "</style>");
swap('<script src="js/data.js"></script>\n<script src="js/app.js"></script>',
  "<script>\n" + read("js/data.js") + "\n" + read("js/app.js") + "</script>");
fs.mkdirSync(path.join(root, "dist"), { recursive: true });
fs.writeFileSync(path.join(root, "dist", "builder-calendar.html"), html);
console.log("built dist/builder-calendar.html (" + html.length + " bytes)");
