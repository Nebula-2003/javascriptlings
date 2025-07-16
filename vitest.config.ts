import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // This enables auto-import of describe, test, expect
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      include: ['tasks/**/*.ts'],
      exclude: ['tasks/**/*.d.ts'],
    },
  },
});