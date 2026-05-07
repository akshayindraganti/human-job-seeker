---
name: cover-letter-writer
description: Write a cover letter that sounds like a real person wrote it for this specific job — not a template sent to fifty companies. Use this skill whenever the user needs a cover letter, asks how to explain their interest in a role, or says things like "what should I say in my application", "help me apply", or "write something to go with my resume." If they have a job description and want to apply, this skill applies.
---

# Cover Letter Writer

You write cover letters that answer the one question every hiring manager asks while reading: "Does this person actually want *this* job at *this* company, or are they batch-applying?"

Most cover letters fail because they're generic (could go to any company) or obviously AI-written (formal, inflated, hollow). A good one opens with something specific to this company and stays under 400 words.

---

## Gather inputs

Ask for:
1. Their resume or a summary of relevant experience
2. The job description
3. One specific reason they want *this* company — not "great culture" or "exciting mission"

If they can't name a specific reason, push a little: "What made you click Apply on this job over similar ones? A product you use? A problem they're solving you care about? Something you read about them?"

If they're still stuck, prompt them to find one real thing: a recent product launch, an engineering blog post, a company news item, a market problem the company is known for solving. A generic hook is the most common reason cover letters get ignored.

From the job description, identify the 2-3 most critical requirements — the proof paragraph needs to address these directly.

---

## Structure (4 paragraphs, under 400 words)

### Opening — The hook

Lead with the specific thing that made them want this role. The goal is to make it immediately clear this letter wasn't copied from a template.

Avoid the standard openers that signal template:
- "I am writing to express my interest in the [role] position at [Company]."
- "I am excited to apply for..."
- "I have always been passionate about..."

Instead, lead with a real observation about the company, product, or problem.

**Before:** "I am excited to apply for the Senior PM role at Acme Corp. With over 7 years of product experience, I am confident I would be a valuable addition to your team."

**After:** "I've been using Acme's API monitoring tool for two years. Last month it caught a latency spike before our SLA breach window — that's the kind of silent reliability that's genuinely hard to build. That's why I want to work on it."

### Proof — One or two real achievements

Pick the 1-2 accomplishments that most directly map to the job's core requirements. Use the X-Y-Z pattern: "Accomplished [X] as measured by [Y] by doing [Z]."

Don't summarize the whole resume — one specific, concrete story is worth more than a list of competencies.

**Before:** "Throughout my career I have demonstrated strong leadership skills, managed cross-functional teams, and delivered results across multiple projects."

**After:** "At my last company I led the team that rebuilt our checkout flow. We cut abandonment from 34% to 19% by removing two friction steps the original design team had assumed users wanted. That kind of assumption-testing is what I'd bring here."

### Connection — Why this company

Reference something real: a product feature, a recent launch, a public post, a market problem they're solving. This paragraph is where generic letters die.

Avoid: "Acme's commitment to innovation and vibrant culture..." / "I admire your remarkable growth..." / "Your mission resonates with my values..."

**After:** "I noticed Acme just launched the new latency dashboard — that's clearly what enterprise customers have been asking for. I'd want to be in the room where those decisions get made."

### Close — Direct invitation

One or two sentences. No groveling, no "I would be deeply honored." Just availability.

"Happy to talk through any of this. [Name] | [phone]"
Or: "Worth a 15-minute call? [Name] | [phone]"

---

## AI pattern check

After drafting, scan for and remove:
- "passionate about", "deeply committed to", "excited to" → show it with the proof, don't say it
- "transformative opportunity", "dynamic team", "exciting journey" → cut or replace with specifics
- "I would be honored to be considered" → too formal, too needy
- "Thank you for your time and consideration" → replace with the direct close
- Lists of three: "strategic, collaborative, and results-oriented" → cut to one real thing
- "leveraged", "spearheaded", "fostered alignment" → plain verbs

Keep first person, contractions, specific references, and varied sentence length. Cover letters should sound personal.

---

## ATS formatting

Cover letters are rarely parsed by ATS, but when submitted through a portal, include the job title in the first paragraph and 3-4 keywords from the JD woven in naturally. Use plain formatting — no columns, no headers, no bold.

---

## Output

**Formatted version** (for email or PDF):
```
[City, Date — optional]

[Hiring Manager name if known]
[Company]

[4 paragraphs]

[First name]
[Phone] | [Email]
```

**Plain text version** — same content, no formatting, for pasting into ATS text fields.

Flag if the hook is still generic after drafting — it's the most important sentence in the letter and worth one more round of iteration.
