---
name: interview-prep
description: Build a personalized interview preparation guide from a resume and target role — likely questions, STAR-format answer frameworks drawn from the candidate's actual experience, weak spots to address, and smart questions to ask. Use this skill whenever the user has an interview coming up, wants to practice, asks "what should I prepare", "what questions will they ask", or says "I have an interview at [company] for [role]." Trigger even if they just say "I have an interview tomorrow."
---

# Interview Prep

You build a personalized interview preparation guide. Generic interview advice is useless — "tell me about yourself" prep that could apply to anyone prepares someone for no interview in particular. Everything here is grounded in the candidate's actual experience and the specific role they're interviewing for.

---

## Gather inputs

Ask for:
1. Their resume (paste or file path)
2. The job description or role title + company
3. Interview type — phone screen, technical, behavioral, final round, panel, or "not sure"
4. Who they're interviewing with, if they know (recruiter, hiring manager, team members, VP)
5. Any context about the company or team they've already picked up

The more specific the inputs, the more useful the prep. A JD + resume combination lets you predict the actual questions they'll face, not just the generic ones. If they don't have a JD, work from the role title and what you know about that function.

---

## Map the candidate to the role

Before generating any questions, do this analysis first — it's what makes the prep specific rather than generic.

**From the resume, identify:**
- Their 3-4 strongest accomplishments (best metrics, highest-stakes situations, clearest outcomes)
- Any obvious gaps relative to the JD (missing skills, shorter tenure, different industry)
- Resume lines that will attract questions ("led a team of 12" → they'll ask about managing conflict; "increased revenue 40%" → they'll ask exactly how)
- Career transitions or gaps that need a clean explanation

**From the JD, identify:**
- The 2-3 core competencies the role actually requires (not just the full list of requirements)
- The biggest unsaid challenge this role will face (scaling, turnaround, technical debt, etc.)
- Keywords that signal what the interviewer cares most about

Share this analysis briefly before the question prep — it helps the candidate understand how the interviewer is reading their resume.

---

## Likely questions

Generate questions in three categories. Don't pad the list — quality over quantity. Five well-chosen questions per category beat twenty generic ones.

### Role-specific technical or functional questions
Questions about the actual work this role does. Drawn from the JD's core requirements and the candidate's stated experience. These are the ones that reveal whether someone can actually do the job.

### Behavioral questions tied to their resume
Questions that will come directly from something on their resume. Interviewers scan resumes looking for things to probe. Flag which resume line is likely triggering each question so the candidate isn't surprised.

For each behavioral question, give a STAR-framework starter using their actual experience:
- **Situation**: the context from their resume (specific project, company, team size)
- **Task**: what they were responsible for
- **Action**: what they specifically did — this is where most answers go vague; push for the actual decisions they made
- **Result**: the metric or outcome from their resume

The point isn't to script the answer — it's to give them a skeleton they flesh out with specifics, so they don't go blank under pressure.

### Questions about gaps or weak spots
Every candidate has something that could come up as a challenge: shorter tenure, a missing skill in the JD, a role that ended unexpectedly, a step down in seniority. Prepare honest, direct answers for these rather than hoping they won't come up. They usually do.

---

## Questions to ask the interviewer

Five to seven questions calibrated to the interview stage and who they're talking to.

The purpose of these questions is twofold: they signal genuine interest and preparation, and they give the candidate real information to evaluate the role. Questions like "what does success look like in the first 90 days?" and "what's the hardest part of this role?" do both.

Calibrate by stage:
- **Recruiter screen**: company culture, team size, why the role is open, timeline
- **Hiring manager**: team dynamics, biggest challenges, what the last person in the role did well/struggled with, how they define success
- **Technical / peer round**: tech stack decisions, on-call expectations, how the team handles disagreements, current projects
- **Final / VP round**: company direction, how this team fits the larger strategy, growth path

Avoid questions that are easily answered by a 30-second Google search — they signal lack of preparation.

---

## The "tell me about yourself" answer

Draft a 90-second structured answer specific to this role. Three parts:

1. **Where you've been** — one sentence on background, calibrated to what's relevant for this role (not a career autobiography)
2. **What you've done** — one or two specific accomplishments that directly map to this role's core requirements
3. **Why you're here** — one sentence on why this role at this company specifically, grounded in something real

This answer sets the tone for the whole interview. A specific, confident opener changes how the interviewer reads everything that follows.

---

## Day-before checklist

Short and practical — things that actually affect performance:

- Re-read the JD and your three strongest accomplishments
- Research one recent thing the company has done (product launch, news, blog post) — reference it naturally
- Know your numbers: every metric on your resume, be ready to explain the methodology
- Prepare the location / Zoom link / who to ask for
- Have water. Silence your phone.

---

## Output format

Deliver the prep as a document they can review the night before, structured as:

```
## Role fit analysis
[2-3 sentences on how their background maps to this role and what the interviewer will focus on]

## Questions to prepare for

### Functional / technical
1. [Question] — [why they'll ask this]
   STAR starter: Situation: ... Task: ... Action: ... Result: ...

### From your resume
1. [Question] — [which resume line triggers this]
   STAR starter: ...

### Gaps to address
1. [Question] — [what the concern is + how to frame a direct answer]

## Your "tell me about yourself"
[90-second draft]

## Questions to ask them
[Stage-appropriate list]

## Day-before checklist
[Short list]
```

If they want to practice, offer to run a mock interview: ask them each question one at a time and give feedback on the answer before moving to the next.
