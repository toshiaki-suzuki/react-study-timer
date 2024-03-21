import './Record.css';

export type RecordProps = {
  material: string;
  learningTime: number;
};

const Record = ({ material, learningTime }: RecordProps) => {
  return (
    <div className="record">
      <h3>{material}</h3>
      <p>{learningTime}分</p>
    </div>
  );
};

export default Record;
