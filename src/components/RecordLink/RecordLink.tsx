import type React from 'react';
import { Link } from 'react-router-dom';
import Record from '../Record/Record';
import type { RecordProps } from '../Record/Record';
import './RecordLink.css';

type RecordLinkProps = {
  key: string;
  record: RecordProps;
  onDeleteClick: (id: string) => void;
};

function RecordLink({ record, onDeleteClick }: RecordLinkProps) {
  const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onDeleteClick(record.id);
  };

  return (
    <Link to={`/records/${record.id}`} className="record-link">
      <Record
        id={record.id}
        material={record.material}
        learningTime={record.learningTime}
        onDeleteClick={handleDeleteClick}
      />
    </Link>
  );
}

export default RecordLink;
