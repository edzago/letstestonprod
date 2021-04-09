import {strict as assert} from 'assert';
import {isEmailValid} from "../public/is-email-valid.js";

assert(isEmailValid('edgar@sedgars.lv') === true, 'edgar@sedgars.lv nav valīdz epasts');
assert(isEmailValid('e') === false, 'e nav valīdz epasts');
assert(isEmailValid('edgarsedgars.lv') === false, 'edgarsedgars.lv nav valīdz epasts');
assert(isEmailValid('edgar@@sedgars.lv') === false, 'edgar@@sedgars.lv nav valīdz epasts');
assert(isEmailValid('edgar@@sedgars@.lv') === false, 'edgar@@sedgars.lv nav valīdz epasts');
assert(isEmailValid('edgar@@sedgars@.lv@') === false, 'edgar@@sedgars.lv nav valīdz epasts');
assert(isEmailValid('@edgar@@sedgars@.lv@') === false, 'edgar@@sedgars.lv nav valīdz epasts');
