#!/bin/bash
# cd /home/chef/workspace
npm install -D vitest@"^2.1.6" @testing-library/react@"^16.0.1" @testing-library/jest-dom@"^6.6.3" jsdom@"^25.0.1"

node node_modules/vitest/vitest.mjs run --config=.tests/config.js --reporter=json --outputFile=.tests/payload.json

node .tests/process.js

