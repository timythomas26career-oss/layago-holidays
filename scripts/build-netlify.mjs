import { cpSync, readdirSync, rmSync, existsSync, mkdirSync, writeFileSync } from "fs";
import { execSync } from "child_process";

const backup = ".client_backup";
if (existsSync(backup)) rmSync(backup, { recursive: true });
mkdirSync(backup);
cpSync("dist/client", backup, { recursive: true });

execSync("nitro build --preset=netlify", { stdio: "inherit" });

for (const f of readdirSync(backup)) {
  cpSync(`${backup}/${f}`, `dist/${f}`, { recursive: true });
}
rmSync(backup, { recursive: true });

mkdirSync("netlify/functions/server", { recursive: true });
cpSync(".netlify/functions-internal/server/main.mjs", "netlify/functions/server/main.mjs");
cpSync(".netlify/functions-internal/server/_libs", "netlify/functions/server/_libs", { recursive: true });

writeFileSync("dist/_redirects", "/assets/*  /assets/:splat  200\n/*  /.netlify/functions/server  200\n");
