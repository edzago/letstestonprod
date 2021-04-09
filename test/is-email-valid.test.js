import {strict as assert} from 'assert';
import {isEmailValid} from "../public/is-email-valid.js";

assert(isEmailValid('e') === false, 'e nav valīdz epasts');
assert(isEmailValid('edgarsedgars.lv') === true, 'edgarsedgars.lv nav valīdz epasts');
