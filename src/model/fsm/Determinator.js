import Fsm from "../Fsm";
import { EPSILON } from "../SymbolValidator";

export function isDeterministic(fsm) {
  if (!fsm instanceof Fsm) return "NotStance";

  let hasMuitTransition = false;
  let hasEpsilon = false;
  hasMuitTransition = fsm.transitions.some(
    tran => tran.to.split(",").length > 1 //>  1 isDeterministic is false
  );

  hasEpsilon = fsm.alphabet.some(
    letter => letter === EPSILON //>  1 isDeterministic is false
  );

  return !(hasMuitTransition || hasEpsilon);

}