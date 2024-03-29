import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import './RecordCreatePage.css';

function RecordCreate() {
  const [material, setMaterial] = useState('');
  const [learningTime, setLearningTime] = useState(0);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(
        'http://localhost:3000/records',
        {
          material,
          learningTime,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate('/records');
    } catch (error) {
      console.error('Failed to create record:', error);
    }
  };

  return (
    <div className="record-create">
      <h1>レコードの作成</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="material">教材:</label>
          <input
            type="text"
            id="material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="learningTime">学習時間（分）:</label>
          <input
            type="number"
            id="learningTime"
            value={learningTime}
            onChange={(e) => setLearningTime(Number.parseInt(e.target.value))}
            required
          />
        </div>
        <button type="submit">作成</button>
      </form>
    </div>
  );
}

export default RecordCreate;
