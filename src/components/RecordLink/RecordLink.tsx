// src/pages/RecordList/RecordLink.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Record from '../Record/Record';
import type { RecordProps } from '../Record/Record';
import './RecordLink.css';

type RecordLinkProps = {
  record: RecordProps;
};

function RecordLink({ record }: RecordLinkProps) {
  return (
    <Link to={`/records/${record.id}`} className="record-link">
      <Record id={record.id} material={record.material} learningTime={record.learningTime} />
    </Link>
  );
}

export default RecordLink;
