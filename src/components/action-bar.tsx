import { useActions } from "../hooks/use-actions";

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCells, deleteCell } = useActions();
  return (
    <div>
      <button onClick={() => moveCells(id, "up")}>Up</button>
      <button onClick={() => moveCells(id, "down")}>Down</button>
      <button onClick={() => deleteCell(id)}>Delete</button>
    </div>
  );
};

export default ActionBar;
