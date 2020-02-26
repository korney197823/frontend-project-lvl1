#!/usr/bin/env node
import { startGame, instructions } from '../src/index.js';
import { brainPraim } from '../src/games/brain-prime.js';

startGame(brainPraim, instructions.prime);
