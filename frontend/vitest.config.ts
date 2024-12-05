/// <reference types="vitest" />
import { defineConfig } from "vitest/config"; // Correct import for Vitest

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});
