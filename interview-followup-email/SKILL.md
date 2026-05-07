---
name: interview-followup-email
description: Write post-interview emails that reference something specific from the actual conversation — thank-you notes, status check-ins after silence, and graceful withdrawals. Use this skill whenever the user just had an interview and needs to follow up, is waiting to hear back and wants to check in, or is withdrawing from a process. Trigger if they say "I just had an interview", "I haven't heard back", "how do I follow up after my interview", or "I want to decline/withdraw."
---

# Interview Follow-Up Email Writer

You write emails that job seekers send after an interview. These are among the most template-looking emails in existence — everyone sends the same version. A good follow-up references something specific from the actual conversation and gives the interviewer a reason to remember the sender.

Three types:
1. **Thank-you note** — send within 24 hours of any interview
2. **Status check-in** — after silence, typically 5-7 business days past the stated timeline
3. **Withdrawal or decline** — accepting another offer or stepping out of the process

Ask which type they need.

---

## Thank-you note

### When to send
Within 24 hours. Same day if possible.

### What you need
1. Who they interviewed with (name, title)
2. One specific thing from the conversation — a problem they mentioned, a product detail, a challenge they're facing, something that surprised you
3. The role and company

### Structure (3-5 sentences)

**Opening** — direct thanks, no gushing.
"Thanks for the time today, [Name]." Not: "I just wanted to reach out and say thank you so much for taking the time to speak with me."

**The specific callback** — this is what separates a real follow-up from a template. Reference one real thing from the conversation.
"The problem you described — maintaining consistency during the schema migration — is almost exactly what we solved at [Company] last year, just at smaller scale. Happy to dig into how we approached it if that's useful."

**Optional: reinforce fit** — one sentence connecting your experience to their stated priority. Skip if the callback already does this.

**Close** — keep it open, not desperate.
"Looking forward to next steps." or just: "Thanks again."

### Before / after

**Before:** "Thank you so much for taking the time to speak with me today. I really enjoyed our conversation and learning more about Acme Corp. I am very excited about this opportunity and feel that my skills and experience would be a great fit for the role. I look forward to next steps."

**After:** "Thanks for the time today, [Name]. The discussion about rebuilding the search index stuck with me — the constraint you described (reindex without taking the service down) is almost exactly what I solved at [Company] last year. Happy to dig into that if it's useful. Looking forward to next steps."

### Patterns that kill the effect
- "I just wanted to reach out..." → just start with "Thanks for the time"
- "I really enjoyed our conversation" → reference something specific or skip it
- "I am very excited about this opportunity" → cut
- "my skills and experience would be a great fit" → if true, reference the specific fit

---

## Status check-in

### When to send
5-7 business days after the stated decision timeline. If no timeline was given, wait one week after the interview.

The key rule: don't just "check in" — add one new piece of context. A bare "just checking in" message has a near-zero reply rate because it adds nothing and asks the recipient to do work with no reason to.

### What you need
1. Who to email and what stage they're at
2. Date of last contact or interview
3. Any new development since then (another offer, a project you finished, something you noticed about the company)

### Structure (2-4 sentences)

**What you're following up on** — specific.
"Following up on the backend engineer interview on [date]."

**New context** — add something. Don't just say you're still interested.
"I saw Acme's post about the new observability product last week — that's adjacent to the caching work I described during our call."
Or if you have a deadline: "I have another offer with a [X]-day deadline and wanted to flag it before deciding — Acme is still my first choice."

**The ask** — simple.
"Any update on timeline?" or "Happy to answer follow-up questions if that's helpful."

### Subject line
Use something specific and searchable — not "Just checking in."
- "Following up — [Role] interview, [Date]"
- "[Role] at [Company] — update from [First Name]"

### Before / after

**Before:** "I wanted to follow up regarding my application for the Software Engineer position. I remain very interested in this opportunity and would love to discuss further. Please let me know if you need any additional information from me."

**After:** "Hi [Name] — following up on the backend engineer interview from [date]. I saw Acme announced the new latency dashboard this week — that's exactly the kind of work I'd want to be building. Any update on timeline?"

---

## Withdrawal / decline

### When
Accepting another offer, withdrawing, or declining after receiving one.

Be brief, gracious, and leave the door open. People remember how you exit a process. One sentence of explanation is enough — don't over-apologize or over-explain.

### Withdrawing from a process:
> "Hi [Name],
>
> I wanted to let you know I'm withdrawing from the [role] process — I've accepted another offer.
>
> I appreciated the conversations with your team and hope our paths cross again.
>
> [First name]"

### Declining an offer:
> "Hi [Name],
>
> Thank you for the offer — I've decided to accept a position elsewhere.
>
> I genuinely enjoyed the process and the conversations about [specific thing]. I hope to stay in touch.
>
> [First name]"

---

## Output

```
SUBJECT: [subject line]

[Body]

[First name]
```

Subject line formats:
- Thank-you: "[Role] — thank you, [Date]" or "Following up — [Role] interview"
- Status check: "Following up — [Role] at [Company]"
- Withdrawal: "[Role] — update from [First Name]"
