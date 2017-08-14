import { uid } from "./utils";

import { INSTR } from "./labels";

import {
  instructionToString,
  isBreakableFrameType,
  isSwitchCaseFrameType,
  isReturnableFrameType,
  isContinuableFrameType,
  isTryStatementFrameType,
  isInstantiationFrameType
} from "./helpers";

import Instruction from "./instruction";

export default class Frame {
  constructor(type, hash) {
    this.uid = uid();
    this.hash = hash;
    this.type = type;
    this.isSloppy = false;
    this.isBreakable = false;
    this.isReturnable = false;
    this.isTryStatement = false;
    this.isSwitchDefault = false;
    this.isInstantiation = false;
    this.cleanType = instructionToString(type);
    this.parent = null;
    this.values = [];
    this.children = [];
    // apply frame flow kinds
    this.isBreakable = isBreakableFrameType(type);
    this.isSwitchCase = isSwitchCaseFrameType(type);
    this.isReturnable = isReturnableFrameType(type);
    this.isContinuable = isContinuableFrameType(type);
    this.isTryStatement = isTryStatementFrameType(type);
    this.isInstantiation = isInstantiationFrameType(type);
  }
  pushInstruction(type) {
    let instr = new Instruction(type);
    this.children.push(instr);
    return instr;
  }
  isGlobal() {
    return (
      this.parent === null &&
      this.type === INSTR.PROGRAM
    );
  }
  getGlobal() {
    let frame = this;
    while (true) {
      if (frame.isGlobal()) break;
      frame = frame.parent;
    };
    return frame;
  }
  getDepth() {
    let depth = 0;
    let frame = this;
    while (true) {
      if (frame.isGlobal()) break;
      frame = frame.parent;
      depth++;
    };
    return depth;
  }
  equals(frame) {
    return (
      this.uid === frame.uid
    );
  }
};
