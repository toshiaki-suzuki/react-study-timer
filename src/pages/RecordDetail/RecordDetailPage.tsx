// src/pages/RecordDetail/RecordDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './RecordDetailPage.css';

type RecordDetailParams = {
  id: string;
};

function RecordDetail() {
  const { id } = useParams<RecordDetailParams>();

  return (
    <div className="record-detail">
      <h1>レコードの詳細</h1>
      <p>レコードID: {id}</p>
    </div>
  );
}

export default RecordDetail;
