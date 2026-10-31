const fs = require("fs");
const path = require("path");
const root = "c:/Users/chinthan chinnappa/Desktop/chinthan-portfolio";
const j = JSON.parse(fs.readFileSync(path.join(root, "temple-night.json"), "utf8"));
for (const f of j.files) {
  const dest = path.join(root, f.path);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, f.code, "utf8");
  console.log("wrote", dest, fs.statSync(dest).size);
}
