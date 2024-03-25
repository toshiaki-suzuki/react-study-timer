import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Record from '../../components/Record/Record';
import './RecordList.css';
import type { RecordProps } from '../../components/Record/Record';
import { AuthContext } from '../../contexts/authContext';

const getRecords = async (token: string | null) => {
  try {
    const response = await axios.get('http://localhost:3000/records', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

function RecordList() {
  const [records, setRecords] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchRecords = async () => {
      const data = await getRecords(token);
      setRecords(data);
    };

    fetchRecords();
  }, [token]);

  return (
    <div className="record-list">
      <header className="record-list-header">
        <h1>私の学習記録</h1>
      </header>
      <main className="record-list-main">
        {records.map((record: RecordProps) => (
          <Record key={record.id} id={record.id} material={record.material} learningTime={record.learningTime} />
        ))}
      </main>
    </div>
  );
}

export default RecordList;
