import { produce } from "immer";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";

interface BundlesState {
  [key: string]: {
    loading: boolean;
    code: string;
    err: string;
  };
}

const intitialState: BundlesState = {};

const reducer = produce(
  (state: BundlesState = intitialState, action: Action): BundlesState => {
    switch (action.type) {
      case ActionTypes.BUNDLE_START:
        return state;
      case ActionTypes.BUNDLE_COMPLETE:
        return state;
      default:
        return state;
    }
  },
  intitialState
);

export default reducer;
