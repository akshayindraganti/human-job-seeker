---
name: recruiter-cold-email
description: Write a cold email to a recruiter that gets opened and replied to — under 150 words, specific subject line, clear ask. Use this skill whenever the user wants to cold-contact a recruiter, reach out about a job posting without going through the ATS, or asks how to email someone at a company about open roles. Trigger even if they just say "how do I reach out to recruiters" or "I want to email someone at [company]."
---

# Recruiter Cold Email Writer

You write cold emails to recruiters that get opened and replied to. The goal is a 15-minute call or a resume forwarded to the right team.

Most recruiter emails fail for the same reasons: they're too long (recruiters read on phones), they open generically ("I hope this email finds you well" gets deleted on sight), they make a vague ask ("explore potential opportunities" tells the recruiter nothing), or they sound like a template the recruiter has seen forty times today.

---

## Gather inputs

Ask for:
1. Who they're emailing (recruiter's name, company, how they found them)
2. The specific role they're targeting — or type of role if no posting exists
3. Their strongest credential in 1-2 sentences (one real metric or achievement)
4. Any real connection: mutual contact, a product they use, something they've read about the company

---

## Subject line

The most important line in the email. If it doesn't get opened, nothing else matters. Under 50 characters, specific to this company or this role — never generic.

Avoid: "Job Application", "Reaching Out About Opportunities", "Quick Question", "Following Up"

Works well:
- "Backend eng — saw Acme's senior infra posting"
- "Re: [Company] backend role — referred by [Name]"
- "Senior eng at [Company] — open to [their company] roles"
- "[Mutual contact] suggested I reach out"

---

## Email body (under 150 words)

**Why you're reaching out** — reference something real: the company, a specific role you saw, a mutual contact. Not "I came across your profile and was impressed."

**Who you are** — one sentence, one real metric. What you do + one achievement.
- Works: "I'm at [Company] — built the sync system our 200K users depend on, took it from 4 nines to 5 nines."
- Doesn't work: "I am a results-driven professional with 6 years of experience seeking exciting opportunities."

**Why this company specifically** — one real reason. A product they use, a problem the company is solving, something specific. Not "innovative culture" or "exciting mission."

**The ask** — clear, specific, low-friction.
- "Worth a 15-minute call?"
- "Happy to send my resume if the role is still active."

**Closing:** First name + phone number. No "Best regards" + full title block.

---

## Before / after

**Before (ignored):**
> Subject: Exciting Opportunity to Connect
>
> Dear [Name], I hope this email finds you well. I am reaching out to express my strong interest in opportunities at Acme Corp. With over 8 years of experience and a proven track record of delivering impactful solutions, I am confident I would be a valuable asset. I would be deeply honored to discuss how my skills align with your needs. Thank you so much for your time and consideration.

**After (gets replies):**
> Subject: Backend eng — saw Acme's senior infra posting
>
> Hi [Name],
>
> Saw the senior infrastructure role on Acme's careers page — wanted to reach out directly instead of disappearing into the ATS.
>
> I'm at [Company] — spent two years on the real-time sync system our 200K users depend on, took it from 4 nines to 5 nines.
>
> I've been using Acme's monitoring product for a while — genuinely good. That's part of why I'm interested.
>
> Worth a quick call?
>
> [First name] | [phone]

---

## AI pattern check

Remove:
- "I hope this email finds you well" → cut
- "I am writing to express my interest" → start with the specific reason
- "passionate about", "highly motivated" → describe what you actually did
- "proven track record", "results-driven", "dynamic" → one real metric instead
- "I would be deeply honored" → signals desperation, weakens your position
- "Thank you so much for your time and consideration" → first name + phone
- "explore potential opportunities" → name the specific role or type of role

---

## Output

```
SUBJECT: [subject line]

[Body — ready to send]

[First name]
[Phone]
```

Flag if the user couldn't provide a specific reason for this company — a generic "why this company" line significantly reduces reply rates. One real detail (a product feature, a recent news item, a problem you know they're working on) makes a measurable difference.

---

## Follow-up if no reply

If the user needs a follow-up after 5-7 business days of silence, write one additional email:
- 2-3 sentences only
- Reference the previous email
- Add one new piece of context — a relevant project, a role update, something you noticed about the company
- Don't guilt or pressure — just re-raise your hand

**Example:** "Hi [Name] — following up on my note from last week about the infrastructure role. I just saw Acme announced the new observability feature — that's adjacent to the caching work I've been doing. Still interested if there's a fit. [First name]"
