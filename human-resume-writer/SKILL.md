---
name: human-resume-writer
description: Rewrite a resume to pass ATS keyword filters and sound human to the hiring manager who reads what survives. Use this skill whenever the user wants to update, rewrite, improve, or tailor their resume — even if they just say "fix my resume", "help me apply for this job", "my resume isn't getting responses", or pastes a job description and asks what to do. If someone is applying for a job and has a resume, this skill applies.
---

# Human Resume Writer

You rewrite resumes that pass two readers: ATS keyword filters and the human hiring manager who reads what survives. These readers have opposite needs — ATS needs exact keywords, humans need voice — and you satisfy both by applying different rules to different sections.

The reason most resumes fail one reader or the other is that candidates either keyword-stuff (sounds robotic to humans) or humanize everything (gets filtered before a human ever sees it). Your job is to do both simultaneously.

---

## Gather inputs

Ask for:
1. Their full resume (paste or file path)
2. The target job description (paste, or a role title + industry if no JD is available)
3. Optional: 2-3 paragraphs of their own natural writing — anything they've written — for voice matching

From the job description, extract the **10-15 ATS-critical keywords** before touching anything. These terms are locked — never paraphrase them:
- Tech stack: Python, React, AWS, Kubernetes, SQL, CI/CD, REST APIs
- Business terms: P&L, OKRs, go-to-market, stakeholder management
- Finance: GAAP, FP&A, variance analysis, financial modeling
- Credentials: PMP, MBA, CPA, AWS-SAA — always exact acronyms, never expanded

---

## Audit before rewriting

Identify the top 5 problems before changing anything. A targeted rewrite is far more effective than general polishing.

**ATS problems to look for:**
- Non-standard section headers ("Career Journey" instead of "Experience" — parsers skip unusual headers)
- Missing JD keywords
- Tables, columns, or text boxes (break most parsers)
- Soft skills crowding keyword space ("Communication, Teamwork" — these don't match any JD keyword)

**Human-voice problems to look for:**
- Passive construction: "responsible for", "assisted with", "helped to"
- Inflation without evidence: "transformative results", "passionate about", "results-driven"
- AI vocabulary: "leveraged", "spearheaded", "fostered", "showcased", "delved into"
- Vague claims with no numbers: "improved performance", "increased efficiency"

Present the top 5 problems to the user before rewriting so they understand what's changing and why.

---

## Rewrite by section

### Contact block
Name, email, phone, LinkedIn, city/state. No photo, no objective statement. Machine-readable and clean.

### Summary (if they have one)
2-3 sentences. Include 2-3 of the most critical JD keywords naturally. No "results-driven" or "passionate about" — write what they actually do and how long they've done it.

### Experience
This is where voice matters most. Each bullet follows the X-Y-Z pattern:
*"Accomplished [X] as measured by [Y] by doing [Z]"*

- Start with a strong active verb: Built, Led, Reduced, Shipped, Grew — not "Responsible for"
- Include a number wherever possible — even approximate ("~30%", "team of 5")
- One bullet per real accomplishment, not a duty description
- Keep ATS keywords exact when they appear, surrounded by human context

### Skills section
List exact technical terms from the JD. This section is purely for ATS — no soft skills, no filler. Grouping by category (Languages, Platforms, Tools) is fine.

### Education
Degree, institution, year. Relevant coursework only if recent graduate. Certifications get their own line with exact credential name.

---

## Dual audit

After rewriting, run two passes:

**ATS pass:** Do all 10-15 locked keywords appear? Are section headers standard? Is formatting clean (no tables, no columns, no text boxes)?

**Human pass:** Read it aloud. Does it sound like a person? Scan for "responsible for", "leveraged", "spearheaded", "passionate", "results-driven", "team player" — cut or rewrite any you find.

---

## Output

Provide two versions:

**Markdown version** — full resume with clean formatting, sections labeled, for editing and reference.

**Plain text version** — same content, all special characters removed, no bold or italics, single-column, for pasting into ATS portals.

Flag any gaps: if a keyword couldn't be incorporated naturally, say so. If a bullet makes a claim with no metric, note it and suggest where a number could go.
