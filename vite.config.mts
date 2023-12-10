import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    include: ["src/**/*{problem,solution,explainer}*.ts"],
    passWithNoTests: true,
  },
  plugins: [tsconfigPaths()],
});
