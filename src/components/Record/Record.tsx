import type React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './Record.css';

export type RecordProps = {
  id: string;
  material: string;
  learningTime: number;
  onDeleteClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Record = ({ id, material, learningTime, onDeleteClick }: RecordProps) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  return (
    <div className="record">
      <h3>{material}</h3>
      <p>{learningTime}分</p>
      <button type="button" className="delete-button" onClick={(event) => { onDeleteClick(event); setShowConfirmation(true); }}>
        削除
      </button>
    </div>
  );
};

export default Record;
