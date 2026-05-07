# Human Job Seeker Skills

A complete job-search writing toolkit for AI coding assistants. Every document is written in a natural human voice — no AI patterns, no templates, no hollow phrases.

## Skills

| Skill | What it does |
|-------|-------------|
| `human-resume-writer` | Rewrite resume to pass ATS bots AND human hiring managers |
| `cover-letter-writer` | 4-paragraph cover letter with a specific hook — not a template |
| `recruiter-cold-email` | Cold email to recruiters, under 150 words, with subject line |
| `hiring-manager-cold-email` | Direct email to the decision-maker, under 80 words |
| `job-application-email` | Short email sending a resume directly to a contact |
| `interview-prep` | Personalized prep guide — likely questions, STAR answer frameworks, weak spots, questions to ask |
| `interview-followup-email` | Thank-you notes, status check-ins, withdrawal emails |
| `referral-request-writer` | Referral asks calibrated by relationship strength |
| `linkedin-connection-writer` | 300-char connection notes + first follow-up message |
| `linkedin-inmail-writer` | Cold LinkedIn InMail to recruiters, hiring managers, job posters |
| `salary-negotiation-writer` | Counter offers, equity asks, competing offers, graceful declines |

## Editing skills

All 11 skills live in their own top-level directories (e.g. `human-resume-writer/SKILL.md`). That's the single source of truth — **edit there, and the change is reflected everywhere automatically.**

Every agent-specific directory (`.claude/skills/`, `.cursor/skills/`, etc.) contains symlinks back to the canonical files, so there's nothing to keep in sync manually.

```
human-resume-writer/SKILL.md          ← edit here
    ↑
.claude/skills/human-resume-writer/SKILL.md  (symlink)
.cursor/skills/human-resume-writer/SKILL.md  (symlink)
.windsurf/skills/human-resume-writer/SKILL.md (symlink)
... and so on for all 8 agent dirs
```

If you're on Windows or an environment where symlinks don't work, run the fallback sync script after editing:

```bash
./sync-skills.sh
```

## Supported Platforms

| Platform | Install path |
|----------|-------------|
| Claude Code | `~/.claude/skills/<skill-name>/` |
| Cursor | `~/.cursor/skills/<skill-name>/` |
| Windsurf | `~/.windsurf/skills/<skill-name>/` |
| Gemini CLI | `~/.gemini/skills/<skill-name>/` |
| OpenCode | `~/.config/opencode/skills/<skill-name>/` |
| Codex | `~/.codex/skills/<skill-name>/` |
| Amp / Augment / Antigravity | `~/.agents/skills/<skill-name>/` |
| Generic agents | `~/.agent/skills/<skill-name>/` |

## Installation

### Install all 11 skills (pick your platform)

**Claude Code:**
```bash
mkdir -p ~/.claude/skills
for skill in human-resume-writer cover-letter-writer recruiter-cold-email hiring-manager-cold-email job-application-email interview-prep interview-followup-email referral-request-writer linkedin-connection-writer linkedin-inmail-writer salary-negotiation-writer; do
  mkdir -p ~/.claude/skills/$skill
  cp $skill/SKILL.md ~/.claude/skills/$skill/
done
```

**Cursor:**
```bash
mkdir -p ~/.cursor/skills
for skill in human-resume-writer cover-letter-writer recruiter-cold-email hiring-manager-cold-email job-application-email interview-prep interview-followup-email referral-request-writer linkedin-connection-writer linkedin-inmail-writer salary-negotiation-writer; do
  mkdir -p ~/.cursor/skills/$skill
  cp $skill/SKILL.md ~/.cursor/skills/$skill/
done
```

**Windsurf:**
```bash
mkdir -p ~/.windsurf/skills
for skill in human-resume-writer cover-letter-writer recruiter-cold-email hiring-manager-cold-email job-application-email interview-prep interview-followup-email referral-request-writer linkedin-connection-writer linkedin-inmail-writer salary-negotiation-writer; do
  mkdir -p ~/.windsurf/skills/$skill
  cp $skill/SKILL.md ~/.windsurf/skills/$skill/
done
```

**Gemini CLI:**
```bash
mkdir -p ~/.gemini/skills
for skill in human-resume-writer cover-letter-writer recruiter-cold-email hiring-manager-cold-email job-application-email interview-prep interview-followup-email referral-request-writer linkedin-connection-writer linkedin-inmail-writer salary-negotiation-writer; do
  mkdir -p ~/.gemini/skills/$skill
  cp $skill/SKILL.md ~/.gemini/skills/$skill/
done
```

### Install a single skill

```bash
mkdir -p ~/.claude/skills/human-resume-writer
cp human-resume-writer/SKILL.md ~/.claude/skills/human-resume-writer/
```

## Usage

Once installed, invoke by skill name:

```
/human-resume-writer
Paste your resume here...

/cover-letter-writer
Here's the job description: [paste JD]
Here's my background: [paste resume or summary]

/recruiter-cold-email
I want to email the recruiter at Acme Corp...

/interview-prep
Here's my resume: [paste] — I have an interview at Acme for Senior PM on Thursday

/salary-negotiation-writer
I received an offer for $120K, I want $140K...
```

## What These Skills Never Do

- Write "passionate about", "results-driven", "leveraged synergies"
- Open emails with "I hope this finds you well"
- Use "I am writing to express my interest in..."
- Close with "I would be deeply honored to be considered"
- Produce text that sounds like it came from a language model

## The Human Voice Principle

Every skill checks for AI-writing patterns — the hollow phrases, the inflated vocabulary, the template openers that signal "a machine wrote this." Each skill's anti-pattern list is tuned to its context: negotiation emails need different treatment than LinkedIn notes.

The resume skill also locks ATS-critical keywords before humanizing, so you never accidentally remove the terms that get you past the automated filter.

## License

MIT
