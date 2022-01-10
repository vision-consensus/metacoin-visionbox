#!/usr/bin/env bash

source .env && vision migrate --reset --network vpioneer
node ./scripts/setup.js

