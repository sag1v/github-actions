/* eslint-disable no-template-curly-in-string */
/**
 * This file a a common js module (with a .cjs extension) because semantic-release (in fact cosmiconfig) can't handle esm modules.
 * See this discussion and workaround
 * https://github.com/semantic-release/semantic-release/discussions/2686#discussioncomment-4771995
 */
module.exports = {
  branches: [
    { name: "main", channel: "latest" },
    { name: "next", channel: "next", prerelease: true },
    { name: "alpha", channel: "alpha", prerelease: true },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: ["dist/**"],
      },
    ],
    [
      "@semantic-release/exec",
      {
        prepareCmd: "npm --no-git-tag-version version ${nextRelease.version}",
        publishCmd: "npm publish --tag ${branch.channel}",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "packages/*/package.json"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
