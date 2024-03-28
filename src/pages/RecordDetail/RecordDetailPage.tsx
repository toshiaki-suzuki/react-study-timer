// src/pages/RecordDetail/RecordDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../contexts/authContext';
import { useContext } from 'react';
import './RecordDetailPage.css';

type RecordDetailParams = {
  id: string;
};

type RecordDetail = {
  id: number;
  material: string;
  learningTime: number;
};

function RecordDetail() {
  const { id } = useParams<RecordDetailParams>();
  const [record, setRecord] = useState<RecordDetail | null>(null);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchRecord = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/records/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRecord(response.data);
      } catch (error) {
        console.error('Failed to fetch record:', error);
      }
    };

    if (token && id) {
      fetchRecord();
    }
  }, [id, token]);

  if (!record) {
    return <div>Loading...</div>;
  }

  return (
    <div className="record-detail">
      <h1>レコードの詳細</h1>
      <table>
        <tbody>
          <tr>
            <th>レコードID</th>
            <td>{record.id}</td>
          </tr>
          <tr>
            <th>教材</th>
            <td>{record.material}</td>
          </tr>
          <tr>
            <th>学習時間</th>
            <td>{record.learningTime}分</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RecordDetail;
