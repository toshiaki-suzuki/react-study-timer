import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Record from '../../components/Record/Record';
import './RecordList.css';
import type { RecordProps } from '../../components/Record/Record';
import { AuthContext } from '../../contexts/authContext';
import RecordLink from '../../components/RecordLink/RecordLink';

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
      if (token) {
        const data = await getRecords(token);
        setRecords(data);
      }
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
          <RecordLink key={record.id} record={record} />
        ))}
      </main>
    </div>
  );
}

export default RecordList;
