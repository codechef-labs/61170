#!/bin/bash
# cd /home/chef/workspace
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom

node node_modules/vitest/vitest.mjs run --config=.tests/config.js --reporter=json --outputFile=.tests/payload.json

node .tests/process.js
