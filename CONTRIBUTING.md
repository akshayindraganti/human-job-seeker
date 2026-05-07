# Contributing to Human Job Seeker Skills

Thanks for wanting to improve this toolkit. Contributions can be as small as fixing a before/after example or as large as adding a new skill for a scenario not covered yet.

---

## What's worth contributing

### High value
- New before/after examples based on real AI-generated text you've seen
- Additional patterns that commonly appear in job-search documents
- New skill for a scenario not covered (e.g., `networking-event-followup`, `informational-interview-request`)
- Corrections where a rule produces awkward output in a specific industry or seniority level
- Test cases with realistic inputs and verified good outputs

### Medium value
- Better structure for an existing skill's workflow
- Industry-specific additions (e.g., academic job market conventions, creative industry norms)
- Clarifications where the skill instructions are ambiguous

### Low value / avoid
- Adding more rules without adding corresponding before/after examples
- Changing the voice calibration rules without testing against real writing samples
- Making skills longer without making them better

---

## How skills work

Each skill is a single `SKILL.md` file. It contains:

1. **YAML frontmatter** — name, version, description, allowed tools
2. **Role definition** — one paragraph on what the AI is doing
3. **Input gathering** — what to ask the user before writing
4. **Writing rules** — structured, with before/after examples
5. **AI pattern removal** — what patterns to check and fix (see below)
6. **Output format** — exactly what to produce

The SKILL.md is the complete instruction set. There is no separate code — it's all natural language instructions for the AI agent.

---

## The 29 AI patterns (the core of every skill)

Every skill applies some subset of these patterns. When adding rules, tie them to one of these categories:

**Content patterns:**
1. Significance inflation — "transformative", "pivotal", "vital role"
2. Notability claims without evidence
3. Superficial -ing phrases — "contributing to...", "showcasing..."
4. Promotional language — "passionate about", "committed to excellence"
5. Vague attributions — "experts say", "industry leaders agree"
6. Formulaic structure — everything the same length and weight

**Language patterns:**
7. AI vocabulary — "leveraged", "spearheaded", "fostered", "showcased", "delved"
8. Copula avoidance — "serves as" instead of "is"
9. Negative parallelisms — "not just X, but Y"
10. Rule of three — forced triplets
11. Synonym cycling — four words for the same thing to avoid repetition
12. False ranges — "from X to Y" where X and Y aren't on a scale
13. Passive voice — "was responsible for", "was tasked with"

**Style patterns:**
14. Em dash overuse
15. Boldface overuse
16. Inline-header bullet lists
17. Title Case headings
18. Curly quotes instead of straight quotes
19. Hyphenated common word pairs — "results-driven", "data-driven"

**Communication patterns:**
20. Chatbot artifacts — "I hope this helps", "let me know if..."
21. Knowledge-cutoff disclaimers
22. Sycophantic language — "Great question!", "You're absolutely right!"

**Filler patterns:**
23. Filler phrases — "In order to", "Due to the fact that"
24. Excessive hedging — "could potentially possibly"
25. Generic positive conclusions — "the future looks bright"
26. Persuasive authority tropes — "At its core", "what really matters"
27. Signposting — "Let's dive in", "Here's what you need to know"
28. Fragmented headers — heading followed by a sentence restating it
29. Rhythm uniformity — every sentence the same length and weight

Source: [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), WikiProject AI Cleanup.

---

## Skill file format

```markdown
---
name: skill-name
version: 1.0.0
description: |
  One paragraph. What does this skill produce? Who uses it? What's the
  main constraint (length, tone, platform)? What input does it need?
license: MIT
compatibility: claude-code
allowed-tools:
  - Read
  - Write
  - AskUserQuestion
---

# Skill Title

One paragraph: what you are doing and why it matters. What failure mode does this skill exist to fix?

---

## PHASE 1 — Input

[What to ask before writing. Be specific about what's optional vs. required.]

---

## PHASE 2 — [Main writing phase]

[Rules, structure, before/after examples.]

---

## PHASE N — AI Pattern Removal

[List which of the 29 patterns are most common in this document type. Give explicit examples of what to remove and replace.]

---

## PHASE N+1 — Output

[Exact format. What the final product looks like.]
```

---

## Before/after example standards

Every rule that says "remove X" should have a before/after pair. Rules without examples are harder to apply correctly.

**Good before/after:**
```
**Before:**
> "I am writing to express my strong interest in the Senior Engineer position. I am confident my skills would be a valuable asset to your dynamic team."

**After:**
> "Hi [Name] — saw the senior engineer role posted last week. I'm at [Company], built the caching layer that serves 500K requests/sec. Worth a quick call?"
```

**Bad (rule without example):**
```
- Remove formal language and replace with natural phrasing
```

The before/after should show a real AI-generated example, not a constructed one. The best sources are actual job applications, LinkedIn messages, or cover letters that were AI-written.

---

## Adding a new skill

1. Create a folder: `human-job-seeker/<skill-name>/`
2. Write `SKILL.md` following the format above
3. Add a test file: `tests/<skill-name>/test.md` (see tests folder for format)
4. Register it in `.claude-plugin/config.json`:
   ```json
   {
     "name": "skill-name",
     "path": "skill-name/SKILL.md",
     "description": "One sentence.",
     "triggers": ["phrase that should activate this skill", "another phrase"]
   }
   ```
5. Deploy to all platform folders:
   ```bash
   for platform in .claude .cursor .agents .agent .codex .gemini .windsurf .opencode; do
     mkdir -p "$platform/skills/skill-name"
     cp skill-name/SKILL.md "$platform/skills/skill-name/SKILL.md"
   done
   ```

---

## Updating an existing skill

1. Edit the source file: `human-job-seeker/<skill-name>/SKILL.md`
2. Bump the version number in frontmatter (patch for small fixes, minor for new rules, major for structural changes)
3. Re-deploy to all platforms:
   ```bash
   for platform in .claude .cursor .agents .agent .codex .gemini .windsurf .opencode; do
     cp <skill-name>/SKILL.md "$platform/skills/<skill-name>/SKILL.md"
   done
   ```

---

## Style guide for writing skill instructions

**Do:**
- Write instructions in second person ("you") — the AI is the audience
- Be specific about what to include AND what to exclude
- Give limits: "under 150 words", "3-5 sentences", "300 characters hard limit"
- Explain the *why* behind rules — "never start with 'I hope this email finds you well' because it signals a template to anyone who reads 50 cold emails a day"
- Match the voice you're teaching — skill instructions shouldn't themselves sound AI-written

**Don't:**
- Add rules you haven't tested against real output
- Write rules that conflict with other rules in the same skill
- Add length without adding value — a 200-line skill that works beats a 400-line skill that confuses
- Use the AI vocabulary words you're trying to eliminate ("leverage", "synergize", "foster")

---

## Questions

Open an issue if you're unsure whether a contribution fits or if you want feedback before writing a full skill.
