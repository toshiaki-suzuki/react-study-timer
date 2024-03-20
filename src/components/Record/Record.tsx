import './Record.css';

type RecordProps = {
  subject: string;
  duration: number;
};

const Record = ({ subject, duration }: RecordProps) => {
  return (
    <div className="record">
      <h3>{subject}</h3>
      <p>{duration}分</p>
    </div>
  );
};

export default Record;
