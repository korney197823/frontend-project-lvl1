#!/usr/bin/env node
import { startGame, instructions } from '../src/index.js';
import { brainEven } from '../src/games/brain-even.js';

startGame(brainEven, instructions.isEven);
