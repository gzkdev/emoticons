export default {
  "src/**/*.ts": ["eslint --fix", "prettier --write"],
  "test/**/*.ts": ["eslint --fix", "prettier --write"],
  "*.{js,json,md}": (filenames) => {
    const files = filenames.filter(
      (f) => !f.replaceAll("\\", "/").includes("/docs/"),
    )
    return files.length > 0 ? [`prettier --write ${files.join(" ")}`] : []
  },
}
