import { produce } from "immer";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";

interface BundlesState {
  [key: string]:
    | {
        loading: boolean;
        code: string;
        err: string;
      }
    | undefined;
}

const intitialState: BundlesState = {};

const reducer = produce(
  (state: BundlesState = intitialState, action: Action): BundlesState => {
    switch (action.type) {
      case ActionTypes.BUNDLE_START:
        state[action.payload.cellId] = {
          loading: true,
          code: "",
          err: "",
        };
        return state;
      case ActionTypes.BUNDLE_COMPLETE:
        state[action.payload.cellId] = {
          loading: false,
          code: action.payload.bundle.code,
          err: action.payload.bundle.err,
        };
        return state;
      default:
        return state;
    }
  },
  intitialState
);

export default reducer;
