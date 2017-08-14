import { DEBUG_KEY } from "./cfg";

export let OP = {};
export let INSTR = {};

let ii = 0;
(() => {

  INSTR.PROGRAM = ii++;

  INSTR.FUNCTION_RETURN = ii++;
  INSTR.FUNCTION_CALL = ii++;
  INSTR.FUNCTION_CALL_END = ii++;
  INSTR.FUNCTION_ENTER = ii++;
  INSTR.FUNCTION_LEAVE = ii++;

  INSTR.LOOP_TEST = ii++;
  INSTR.LOOP_ENTER = ii++;
  INSTR.LOOP_LEAVE = ii++;

  INSTR.BREAK = ii++;
  INSTR.CONTINUE = ii++;

  INSTR.SWITCH_TEST = ii++;
  INSTR.SWITCH_ENTER = ii++;
  INSTR.SWITCH_LEAVE = ii++;

  INSTR.CASE_TEST = ii++;
  INSTR.CASE_ENTER = ii++;
  INSTR.CASE_LEAVE = ii++;

  INSTR.IF_TEST = ii++;
  INSTR.IF_ENTER = ii++;
  INSTR.IF_LEAVE = ii++;

  INSTR.ELSE_ENTER = ii++;
  INSTR.ELSE_LEAVE = ii++;

  INSTR.VAR_INIT = ii++;
  INSTR.VAR_DECLARE = ii++;

  INSTR.OP_NEW = ii++;
  INSTR.OP_NEW_END = ii++;

  INSTR.UNARY = ii++;

  INSTR.SUPER = ii++;

  INSTR.THIS = ii++;

  INSTR.LITERAL = ii++;
  INSTR.IDENTIFIER = ii++;

  INSTR.BINARY = ii++;
  INSTR.LOGICAL = ii++;
  INSTR.TERNARY = ii++;
  INSTR.ASSIGN = ii++;

  INSTR.METHOD_ENTER = ii++;
  INSTR.METHOD_LEAVE = ii++;

  INSTR.TRY_ENTER = ii++;
  INSTR.TRY_LEAVE = ii++;

  INSTR.ALLOC = ii++;

  INSTR.MEMBER_EXPR = ii++;

  INSTR.BLOCK_ENTER = ii++;
  INSTR.BLOCK_LEAVE = ii++;

  INSTR.PROGRAM_FRAME_VALUE = ii++;
  INSTR.PROGRAM_ENTER = ii++;
  INSTR.PROGRAM_LEAVE = ii++

})();

(() => {

  OP["="] = ii++;
  OP["+"] = ii++;
  OP["-"] = ii++;
  OP["*"] = ii++;
  OP["/"] = ii++;
  OP["%"] = ii++;
  OP["**"] = ii++;
  OP["<<"] = ii++;
  OP[">>"] = ii++;
  OP[">>>"] = ii++;
  OP["&"] = ii++;
  OP["^"] = ii++;
  OP["|"] = ii++;
  OP["!"] = ii++;
  OP["~"] = ii++;
  OP["in"] = ii++;
  OP["void"] = ii++;
  OP["typeof"] = ii++;
  OP["delete"] = ii++;
  OP["instanceof"] = ii++;
  OP["&&"] = ii++;
  OP["||"] = ii++;
  OP["=="] = ii++;
  OP["==="] = ii++;
  OP["!="] = ii++;
  OP["!=="] = ii++;
  OP[">"] = ii++;
  OP[">="] = ii++;
  OP["<"] = ii++;
  OP["<="] = ii++;

})();
