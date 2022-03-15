#!/bin/bash
PORT=8080 deno --unstable run --allow-read --allow-net ./src/server/server.ts
