#!/usr/bin/env node
import { startGame, instructions } from '../src/index.js';
import { calc } from '../src/games/brain-calc.js';

startGame(calc, instructions.calc);
