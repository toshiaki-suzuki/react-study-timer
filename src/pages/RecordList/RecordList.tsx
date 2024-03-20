// RecordList.js
import Record from '../../components/Record/Record';
import './RecordList.css';

function RecordList() {
  return (
    <div className="record-list">
      <header className="record-list-header">
        <h1>私の学習記録</h1>
      </header>
      <main className="record-list-main">
        <Record subject="数学" duration={90} />
        <Record subject="英語" duration={60} />
        <Record subject="物理" duration={120} />
      </main>
    </div>
  );
}

export default RecordList;
