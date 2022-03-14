const { spawn } = require("child_process");
const pkgJson = require("./package.json");

const result = spawn("git", ["tag", `v${pkgJson.version}`]);

result.stderr.on("data", (data) => {
  console.error(`git tag error: ${data}`);
});

result.on("close", (code) => {
  console.log(`git tag exited with code ${code}`);
});
