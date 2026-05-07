---
name: linkedin-inmail-writer
description: Write LinkedIn InMail messages to people you're not connected with — recruiters, hiring managers, and contacts at target companies. Under 120 words. Use this skill whenever the user needs to send a cold LinkedIn InMail, reply to a recruiter who messaged them first, or message someone who posted a job. Trigger if they say "I want to InMail someone", "a recruiter messaged me on LinkedIn", or "how do I reach out on LinkedIn to someone I'm not connected with."
---

# LinkedIn InMail Writer

You write LinkedIn InMail — messages to people you're not connected with. InMail credits cost money, so every one needs to count.

Types covered:
1. Cold InMail to a recruiter at a target company
2. Cold InMail to a hiring manager
3. Reply to a recruiter who messaged you first
4. InMail to someone who posted or shared a job

Ask which type.

---

## Rules for all InMail types

- **Under 120 words** — if it requires scrolling on mobile, it's too long
- **First sentence must be specific** — reference their company, their post, or the role they're hiring for
- **One clear ask** — not multiple options, not vague openness
- **End with first name only** — no signature block
- Never: "I hope this message finds you well"
- Never: "I am a highly motivated professional"
- Never: "I would be honored to be considered"
- Never: "Thank you for your time and consideration"

---

## Cold InMail to a recruiter

Goal: get a call or get your resume to the right team.

**Structure:**
1. Why you're messaging them — their company, a role you saw, a mutual connection
2. Who you are — one sentence, one real credential
3. What you're looking for — specific, not "exciting opportunities"
4. One real reason you want this company
5. The ask — "worth a quick call?" or "happy to send my resume"

**Before (ignored):**
> "Hello, I hope you are doing well. I am a highly motivated software engineer with 6 years of experience seeking new opportunities. I am very passionate about technology and believe I would be a great fit for Acme Corp. I would love to connect and learn about any available positions. Thank you!"

**After (gets a reply):**
> "Hi [Name],
>
> Saw Acme posted a senior backend role last week — wanted to reach out directly rather than disappear into the ATS.
>
> I'm at [Company], built the real-time sync system our 200K users depend on. Took it from 4 nines to 5 nines last year.
>
> I've been using Acme's monitoring product for two years — genuinely good, which is part of why I'm interested.
>
> Open to a quick conversation if the role is still active?
>
> [First name]"

---

## Cold InMail to a hiring manager

Goal: start a conversation about their work. Not a job pitch.

Under 80 words. Ask about the work, not whether they're hiring — if they're building something interesting, they'll tell you.

**Before (ignored):**
> "Dear [Name], I am a software engineer with a passion for innovation. I am very interested in joining your team at Acme. I believe I have the skills to make significant contributions. I would love to speak with you about potential opportunities."

**After:**
> "Hi [Name],
>
> Your team's write-up on Acme's ingestion pipeline rewrite was genuinely useful — specifically the rollback strategy mid-migration.
>
> I've been doing similar work at [Company] — took p99 from 4 seconds to 200ms over six months.
>
> Are you still scaling that system? Would be curious to compare notes for 20 minutes.
>
> [First name]"

---

## Replying to a recruiter InMail

When a recruiter messaged you first, you have the advantage — respond in kind.

**If interested:**
> "Hi [Name],
>
> Thanks for reaching out — the [role] looks interesting. I'm open to learning more.
>
> I'm at [Company] — [one sentence on what you do]. I'd be a good fit for [specific thing they mentioned or the role's main requirement].
>
> Happy to set up a call — what works for you?
>
> [First name]"

**If interested but the role isn't right — want to stay on their radar:**
> "Hi [Name],
>
> Thanks for the message. The [role] isn't quite the right fit — I'm more focused on [your actual area] — but [Company] is on my radar and I'd be glad to stay in touch for future openings.
>
> [First name]"

**If not interested:**
> "Hi [Name],
>
> Thanks for reaching out — this one isn't the right fit for where I'm headed. Best of luck filling it.
>
> [First name]"

---

## InMail to someone who posted a job

They posted or shared a job — they're expecting people to respond. Keep it tight.

> "Hi [Name] — saw you posted the [role] opening.
>
> I'm a [role] at [Company] — [one credential or metric].
>
> Would it make sense to connect? Happy to send my resume.
>
> [First name]"

---

## Output

```
SUBJECT (if required):
[Under 40 characters, specific to their company or role]

MESSAGE:
[Body — under 120 words]

[First name]
```

Flag if over 120 words with a trimmed version. Flag if the first sentence has no specific reference — generic InMail performs significantly worse than personalized. One real detail makes a measurable difference.
