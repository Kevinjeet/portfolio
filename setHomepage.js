const homepage = process.env.NODE_ENV === 'production' ? 'https://Kevinjeet.github.io/portfolio' : '.';

const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = require(packageJsonPath);

packageJson.homepage = homepage;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
