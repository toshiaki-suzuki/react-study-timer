import './Record.css';

export type RecordProps = {
  id: string;
  material: string;
  learningTime: number;
};

const Record = ({ id, material, learningTime }: RecordProps) => {
  return (
    <div className="record">
      <h3>{material}</h3>
      <p>{learningTime}分</p>
    </div>
  );
};

export default Record;
