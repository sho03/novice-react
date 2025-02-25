#!/usr/bin/env node

import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname } from "path";

// ES モジュールの `__dirname` を取得
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 1. Create base React + TypeScript project with Vite
const projectName = process.argv[2] || "my-react-app";
console.log(`🚀 Creating a new React app in ${projectName}...`);
execSync(`npm create vite@latest ${projectName} -- --template react-ts`, { stdio: "inherit" });

// 2. Install dependencies
console.log("📦 Installing dependencies...");
execSync(`cd ${projectName} && npm install`, { stdio: "inherit" });

// 3. Add commonly used npm dependencies
console.log("✨ Installing additional libraries...");
execSync(`cd ${projectName} && npm install react-router-dom @mui/material @emotion/react @emotion/styled`, { stdio: "inherit" });

// 4. Complete
console.log("✅ Setup complete! You can now run:");
console.log(`   cd ${projectName}`);
console.log("   npm run dev");
