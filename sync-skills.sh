#!/usr/bin/env bash
# sync-skills.sh
#
# Copies the canonical skill files into every agent directory.
# Use this if symlinks aren't working (Windows, some CI environments).
# On Mac/Linux the repo already uses symlinks — this script is a fallback.
#
# Usage: ./sync-skills.sh

set -e

REPO_ROOT="$(cd "$(dirname "$0")" && pwd)"

SKILLS=(
  human-resume-writer
  cover-letter-writer
  recruiter-cold-email
  hiring-manager-cold-email
  job-application-email
  interview-followup-email
  interview-prep
  referral-request-writer
  linkedin-connection-writer
  linkedin-inmail-writer
  salary-negotiation-writer
)

AGENT_DIRS=(
  .claude/skills
  .cursor/skills
  .windsurf/skills
  .gemini/skills
  .opencode/skills
  .codex/skills
  .agents/skills
  .agent/skills
)

for skill in "${SKILLS[@]}"; do
  src="$REPO_ROOT/$skill/SKILL.md"
  if [[ ! -f "$src" ]]; then
    echo "ERROR: canonical skill not found: $src"
    exit 1
  fi
  for agent_dir in "${AGENT_DIRS[@]}"; do
    dest="$REPO_ROOT/$agent_dir/$skill/SKILL.md"
    mkdir -p "$(dirname "$dest")"
    cp "$src" "$dest"
    echo "synced → $agent_dir/$skill/SKILL.md"
  done
done

echo ""
echo "Done. All agent directories are up to date."
