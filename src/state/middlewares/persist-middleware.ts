import { Dispatch } from "redux";
import { Action } from "../actions";
import { ActionTypes } from "../action-types";
import { saveCells } from "../action-creators";

export const persistMiddleware = ({
  dispatch,
}: {
  dispatch: Dispatch<Action>;
}) => {
  return (next: (action: Action) => void) => {
    return (action: Action) => {
      next(action);
    };
  };
};
