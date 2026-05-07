#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');

// ─── ANSI colours (no deps) ───────────────────────────────────────────────
const c = {
  reset:  '\x1b[0m',
  bold:   '\x1b[1m',
  dim:    '\x1b[2m',
  green:  '\x1b[32m',
  yellow: '\x1b[33m',
  cyan:   '\x1b[36m',
  red:    '\x1b[31m',
  gray:   '\x1b[90m',
};
const bold  = (s) => `${c.bold}${s}${c.reset}`;
const green = (s) => `${c.green}${s}${c.reset}`;
const yellow = (s) => `${c.yellow}${s}${c.reset}`;
const cyan  = (s) => `${c.cyan}${s}${c.reset}`;
const red   = (s) => `${c.red}${s}${c.reset}`;
const gray  = (s) => `${c.gray}${s}${c.reset}`;

// ─── Skills bundled in this package ───────────────────────────────────────
const SKILLS = [
  'human-resume-writer',
  'cover-letter-writer',
  'recruiter-cold-email',
  'hiring-manager-cold-email',
  'job-application-email',
  'interview-followup-email',
  'referral-request-writer',
  'linkedin-connection-writer',
  'linkedin-inmail-writer',
  'salary-negotiation-writer',
];

// ─── Platform definitions ──────────────────────────────────────────────────
const HOME = os.homedir();
const PLATFORMS = {
  claude:    { label: 'Claude Code',      dir: path.join(HOME, '.claude', 'skills') },
  cursor:    { label: 'Cursor',           dir: path.join(HOME, '.cursor', 'skills') },
  windsurf:  { label: 'Windsurf',         dir: path.join(HOME, '.windsurf', 'skills') },
  gemini:    { label: 'Gemini CLI',       dir: path.join(HOME, '.gemini', 'skills') },
  opencode:  { label: 'OpenCode',         dir: path.join(HOME, '.config', 'opencode', 'skills') },
  codex:     { label: 'Codex',            dir: path.join(HOME, '.codex', 'skills') },
  agents:    { label: 'Amp / Augment',    dir: path.join(HOME, '.agents', 'skills') },
  agent:     { label: 'Generic agents',   dir: path.join(HOME, '.agent', 'skills') },
};

// ─── Detect which platforms the user has installed ────────────────────────
function detectPlatforms() {
  return Object.entries(PLATFORMS).filter(([key, { dir }]) => {
    // Check if the parent agent dir exists (e.g. ~/.claude), not just the skills subdir
    const parent = path.dirname(dir);
    return fs.existsSync(parent);
  });
}

// ─── Install one skill into one platform dir ──────────────────────────────
function installSkill(skillName, targetBase) {
  const srcFile = path.join(__dirname, '..', skillName, 'SKILL.md');
  const destDir  = path.join(targetBase, skillName);
  const destFile = path.join(destDir, 'SKILL.md');

  if (!fs.existsSync(srcFile)) {
    return { ok: false, reason: `source not found: ${srcFile}` };
  }

  fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(srcFile, destFile);
  return { ok: true };
}

// ─── CLI arg parsing ───────────────────────────────────────────────────────
function parseArgs(argv) {
  const args = argv.slice(2);
  const opts = { platforms: [], all: false, list: false, help: false, uninstall: false };

  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--help' || a === '-h')       opts.help = true;
    else if (a === '--all')                 opts.all = true;
    else if (a === '--list')                opts.list = true;
    else if (a === '--uninstall')           opts.uninstall = true;
    else if (a === '--platform' || a === '-p') {
      const val = args[++i];
      if (val) opts.platforms.push(val.toLowerCase());
    } else if (a.startsWith('--platform=')) {
      opts.platforms.push(a.split('=')[1].toLowerCase());
    }
  }
  return opts;
}

// ─── Help text ─────────────────────────────────────────────────────────────
function printHelp() {
  console.log(`
${bold('human-job-seeker')} — AI job-search skills installer

${bold('Usage:')}
  npx human-job-seeker                  Auto-detect installed agents, install to all
  npx human-job-seeker --all            Install to every supported platform
  npx human-job-seeker --platform claude  Install only to Claude Code
  npx human-job-seeker --list           Show what's installed and where
  npx human-job-seeker --uninstall      Remove skills from all detected platforms

${bold('Platform keys:')}
  ${Object.entries(PLATFORMS).map(([k, { label }]) => `${cyan(k.padEnd(12))} ${label}`).join('\n  ')}

${bold('Skills installed:')}
  ${SKILLS.map(s => gray('• ') + s).join('\n  ')}
`);
}

// ─── List installed skills ─────────────────────────────────────────────────
function listInstalled() {
  console.log(`\n${bold('Installed skills:')}\n`);
  let anyFound = false;

  for (const [key, { label, dir }] of Object.entries(PLATFORMS)) {
    const installed = SKILLS.filter(s => fs.existsSync(path.join(dir, s, 'SKILL.md')));
    if (installed.length === 0) continue;
    anyFound = true;
    console.log(`  ${bold(label)}  ${gray(dir)}`);
    installed.forEach(s => console.log(`    ${green('✓')} ${s}`));
    console.log();
  }

  if (!anyFound) {
    console.log(`  ${yellow('Nothing installed yet.')}  Run ${cyan('npx human-job-seeker')} to install.\n`);
  }
}

// ─── Uninstall ─────────────────────────────────────────────────────────────
function uninstall(targets) {
  console.log(`\n${bold('Uninstalling...')}\n`);
  let removed = 0;

  for (const [key, { label, dir }] of targets) {
    const found = SKILLS.filter(s => fs.existsSync(path.join(dir, s, 'SKILL.md')));
    if (found.length === 0) continue;

    console.log(`  ${label}`);
    found.forEach(s => {
      fs.rmSync(path.join(dir, s, 'SKILL.md'));
      // Remove dir if now empty
      try { fs.rmdirSync(path.join(dir, s)); } catch {}
      console.log(`    ${red('✗')} removed ${s}`);
      removed++;
    });
    console.log();
  }

  console.log(removed > 0
    ? green(`  ${removed} skill file(s) removed.`)
    : yellow('  Nothing to remove.'));
  console.log();
}

// ─── Main installer ────────────────────────────────────────────────────────
function install(targets) {
  console.log(`\n${bold('Installing human-job-seeker skills...')}\n`);

  if (targets.length === 0) {
    console.log(`  ${yellow('No supported agent directories found.')}`);
    console.log(`  Run with ${cyan('--all')} to install to all platforms regardless.\n`);
    console.log(`  ${bold('Supported platforms:')}`);
    Object.entries(PLATFORMS).forEach(([k, { label, dir }]) => {
      console.log(`    ${cyan(k.padEnd(12))} ${gray(dir)}`);
    });
    console.log();
    return;
  }

  let totalOk = 0;
  let totalFail = 0;

  for (const [key, { label, dir }] of targets) {
    console.log(`  ${bold(label)}  ${gray(dir)}`);
    let ok = 0;
    let fail = 0;

    for (const skill of SKILLS) {
      const result = installSkill(skill, dir);
      if (result.ok) {
        console.log(`    ${green('✓')} ${skill}`);
        ok++;
      } else {
        console.log(`    ${red('✗')} ${skill}  ${gray(result.reason)}`);
        fail++;
      }
    }

    totalOk += ok;
    totalFail += fail;
    console.log();
  }

  // Summary
  console.log(`  ${green('✓')} ${bold(totalOk + ' skills installed')} across ${targets.length} platform(s)`);
  if (totalFail > 0) {
    console.log(`  ${red('✗')} ${totalFail} failed — check paths above`);
  }

  // Usage hint
  const firstKey = targets[0][0];
  const hint = {
    claude:   '/human-resume-writer',
    cursor:   '/human-resume-writer',
    windsurf: '/human-resume-writer',
    gemini:   '/human-resume-writer',
  }[firstKey] || '/human-resume-writer';

  console.log(`
  ${bold('Ready. Invoke any skill in your agent:')}
  ${cyan(hint + '\n  /cover-letter-writer\n  /recruiter-cold-email\n  /salary-negotiation-writer')}
`);
}

// ─── Entry point ───────────────────────────────────────────────────────────
function main() {
  const opts = parseArgs(process.argv);

  if (opts.help) { printHelp(); process.exit(0); }
  if (opts.list) { listInstalled(); process.exit(0); }

  // Resolve target platforms
  let targets;
  if (opts.platforms.length > 0) {
    targets = opts.platforms.map(key => {
      if (!PLATFORMS[key]) {
        console.error(red(`Unknown platform: "${key}". Run --help to see valid keys.`));
        process.exit(1);
      }
      return [key, PLATFORMS[key]];
    });
  } else if (opts.all) {
    targets = Object.entries(PLATFORMS);
  } else {
    targets = detectPlatforms();
  }

  if (opts.uninstall) { uninstall(targets); process.exit(0); }

  install(targets);
}

main();
