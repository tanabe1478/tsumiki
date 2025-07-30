#!/usr/bin/env node

import { Command } from 'commander';
import { installCommand } from './commands/install.js';

const program = new Command();

program
  .name('tsumiki')
  .description('CLI tool for installing Claude Code command templates')
  .version('1.0.0');

program
  .command('install')
  .description('Install Claude Code command templates to .claude/commands/')
  .action(installCommand);

program.parse();