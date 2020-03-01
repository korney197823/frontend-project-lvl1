#!/usr/bin/env node
import { startGame } from '../src/index.js';
import { calc } from '../src/games/brain-calc.js';

startGame(calc);
