import { Cell } from "../state";

interface CellLsitItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellLsitItemProps> = ({ cell }) => {
  return <div>{cell.id}</div>;
};

export default CellListItem;
