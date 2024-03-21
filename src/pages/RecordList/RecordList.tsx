import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Record, {RecordProps} from '../../components/Record/Record';
import './RecordList.css';

const getRecords = async () => {
  try {
    const response = await axios.get('http://localhost:3000/records');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

function RecordList() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      const data = await getRecords();
      setRecords(data);
    };

    fetchRecords();
  }, []);

  return (
    <div className="record-list">
      <header className="record-list-header">
        <h1>私の学習記録</h1>
      </header>
      <main className="record-list-main">
        {records.map((record: RecordProps, index: number) => (
          <Record key={index} material={record.material} learningTime={record.learningTime} />
        ))}
      </main>
    </div>
  );
}

export default RecordList;
