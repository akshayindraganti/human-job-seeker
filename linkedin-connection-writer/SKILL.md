---
name: linkedin-connection-writer
description: Write LinkedIn connection request notes (300 character hard limit) and the first follow-up message after they accept. Use this skill whenever the user wants to connect with someone on LinkedIn — a recruiter, hiring manager, peer, or contact at a target company. Trigger if they say "how do I reach out on LinkedIn", "I want to connect with someone", or "what do I say when I send a connection request."
---

# LinkedIn Connection Writer

You write LinkedIn connection request notes (300 character hard limit) and the first message after someone accepts.

Most connection requests get ignored for the same reasons: too generic ("I'd love to connect and expand my professional network"), too forward (pitching a job ask before they've accepted), or no reason given (blank requests feel random). What gets accepted is a single sentence that says who you are and why you want to connect, specifically.

---

## Gather inputs

Ask for:
1. Who they're connecting with (recruiter, hiring manager, peer, person at target company)
2. How they found this person (LinkedIn search, their content, mutual connection, company page)
3. One real reason to connect — their company, a role they posted, a post they wrote, a mutual contact
4. One-sentence user background: current role + one credential

---

## Connection note (300 characters — hard limit)

Structure: [How you found them / why you're reaching out] + [who you are in one sentence] + [optional low-friction ask]

Count characters before sending. 300 is strict. Trim articles and contractions if over.

**Never start with:**
- "I'd love to connect" — says nothing
- "I came across your profile and was very impressed" — ignored every time

**Templates by scenario:**

Found via job posting:
> "Hi [Name] — saw the [role] posting at [Company] and wanted to connect before applying. I'm a [role] at [Company], mostly [1 relevant thing]. [First name]"

Found via their content:
> "Hi [Name] — your post on [specific topic] was the clearest take I've read on that. I work on similar problems at [Company]. Would love to be in your network."

Via mutual connection:
> "Hi [Name] — [Mutual person] suggested I reach out. I'm a [role] at [Company] interested in [their company]. Happy to share more context."

Peer / same function:
> "Hi [Name] — follow your work on [specific thing]. I'm a [role] at [Company] working on [relevant thing]. Would be good to connect."

---

## First message after they accept

Now you have more room. Don't write an essay — the goal is a reply, not an impression.

Under 100 words. Send within 24 hours of them accepting.

**Structure:**
1. Brief thanks for connecting — skip if it feels unnecessary given the note you sent
2. Expand on why you connected — builds on the connection note with more specifics
3. One real credential — one metric or specific accomplishment
4. A specific, low-friction ask

**Before:**
> "Thank you for accepting my connection request. I have been very interested in [Company] for a long time and believe that my skills and experience would be a great fit for your team. I would love to schedule a call to discuss potential opportunities and how I can contribute to your organization's success."

**After:**
> "Thanks for connecting, [Name].
>
> I've been using [Company]'s [specific product] for two years — the [specific feature] saved us from a bad outage last quarter.
>
> I'm a backend engineer at [Company], mostly distributed systems work. I noticed [Company] is hiring for a senior infrastructure role — is that something you're involved in, or would you know who to talk to?
>
> Happy to keep it brief — 15 minutes if that works."

---

## AI pattern check

**In connection notes:**
- Never: "I came across your profile and was impressed by your background"
- Never: "I would love to connect and expand my professional network"
- Never: "I am a highly motivated professional seeking exciting opportunities"

**In follow-up messages:**
- Remove: "I hope you are doing well" → skip or reference the acceptance directly
- Remove: "I am very interested in Acme Corp and believe I would be a great fit"
- Remove: "I would be deeply honored to discuss opportunities"
- Remove: "Thank you for your time and consideration" + full signature block
- Keep: first person, contractions, specific references, short paragraphs

---

## Output

**Connection note:**
```
[Note — 300 characters or less]
Character count: [X/300]
```

**First follow-up message:**
```
[Message — under 100 words]
```

Flag if the note is over 300 characters and provide a trimmed version. Flag if there's no specific reason to connect — a targeted note performs significantly better than a generic one.
