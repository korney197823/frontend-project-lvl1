#!/usr/bin/env node
import { startGame, instructions } from '../src/index.js';
import { brainProgression } from '../src/games/brain-progression.js';

startGame(brainProgression, instructions.progression);
