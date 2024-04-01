import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

import Record from '../../components/Record/Record';
import './RecordList.css';
import type { RecordProps } from '../../components/Record/Record';
import { AuthContext } from '../../contexts/authContext';
import RecordLink from '../../components/RecordLink/RecordLink';

function RecordList() {
  const [records, setRecords] = useState<RecordProps[]>([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [deletingRecordId, setDeletingRecordId] = useState<string | null>(null);
  const { token } = useContext(AuthContext);
  const location = useLocation();

  const handleRecordDelete = async (id: string, confirm: boolean) => {
    if (confirm) {
      try {
        await axios.delete(`${process.env.REACT_APP_BASE_URL}/records/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRecords(records.filter((record: RecordProps) => record.id !== id));
        setSuccessMessage('学習記録を削除しました。');
      } catch (error) {
        console.error(error);
        setSuccessMessage('学習記録の削除に失敗しました。');
      }
    }
    setDeletingRecordId(null);
  };

  const openDeleteDialog = (id: string) => {
    setDeletingRecordId(id);
  };

  const closeDeleteDialog = () => {
    setDeletingRecordId(null);
  };

  useEffect(() => {
    const message = location.state?.message;
    if (message) {
      setSuccessMessage(message);
    }
  }, [location.state]);

  useEffect(() => {
    const getRecords = async (token: string | null) => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/records`, {
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
        <Link to="/records/create" className="create-link">
          新規作成
        </Link>
        {successMessage && <div className="success-message">{successMessage}</div>}
      </header>
      <main className="record-list-main">
      {records.map((record: RecordProps) => (
        <RecordLink
          key={record.id}
          record={record}
          onDeleteClick={openDeleteDialog}
        />
      ))}
    </main>
    {deletingRecordId && (
      <div className="delete-dialog-overlay">
        <div className="delete-dialog">
          <p>本当に削除しますか？</p>
          <button type="button" className="delete-confirm" onClick={() => handleRecordDelete(deletingRecordId, true)}>
            はい
          </button>
          <button type="button" className="delete-cancel" onClick={closeDeleteDialog}>
            いいえ
          </button>
        </div>
      </div>
    )}
    </div>
  );
}

export default RecordList;
