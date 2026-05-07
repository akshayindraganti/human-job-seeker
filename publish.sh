#!/usr/bin/env bash
# publish.sh — publish human-job-seeker to npm
#
# Usage:
#   ./publish.sh            # patch bump (1.0.0 → 1.0.1)
#   ./publish.sh minor      # minor bump (1.0.0 → 1.1.0)
#   ./publish.sh major      # major bump (1.0.0 → 2.0.0)
#
# Requires NPM_TOKEN env var or a valid ~/.npmrc
# To set token: export NPM_TOKEN=npm_xxxx

set -e

BUMP=${1:-patch}

# ── Auth check ────────────────────────────────────────────────────────────────
if [ -n "$NPM_TOKEN" ]; then
  echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc
fi

if ! npm whoami &>/dev/null; then
  echo "ERROR: Not logged in to npm."
  echo "Set NPM_TOKEN env var or run: npm login"
  exit 1
fi

echo "Logged in as: $(npm whoami)"

# ── Fix package.json warnings ─────────────────────────────────────────────────
npm pkg fix

# ── Bump version ──────────────────────────────────────────────────────────────
npm version "$BUMP" --no-git-tag-version
NEW_VERSION=$(node -p "require('./package.json').version")
echo "Version bumped to $NEW_VERSION"

# ── Publish ───────────────────────────────────────────────────────────────────
npm publish --access public

echo ""
echo "✓ Published human-job-seeker@$NEW_VERSION"
echo "  npx human-job-seeker"
