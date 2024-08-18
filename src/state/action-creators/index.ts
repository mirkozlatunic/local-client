import { ActionTypes } from "../action-types";
import {
  Action,
  UpdateCellAction,
  DeleteCellAction,
  MoveCellAction,
  InsertCellAfterAction,
  Direction,
} from "../actions";
import { CellType } from "../cell";

export const updatedCell = (id: string, content: string): UpdateCellAction => {
  return {
    type: ActionTypes.UPDATE_CELL,
    payload: {
      id,
      content,
    },
  };
};

export const deleteCell = (id: string): DeleteCellAction => {
  return {
    type: ActionTypes.DELETE_CELL,
    payload: id,
  };
};

export const moveCells = (id: string, direction: Direction): MoveCellAction => {
  return {
    type: ActionTypes.MOVE_CELL,
    payload: {
      id,
      direction,
    },
  };
};

export const insertCellAfter = (
  id: string | null,
  cellType: CellType
): InsertCellAfterAction => {
  return {
    type: ActionTypes.INSERT_CELL_AFTER,
    payload: { id, type: cellType },
  };
};
