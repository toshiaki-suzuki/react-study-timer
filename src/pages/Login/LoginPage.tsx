import './LoginPage.css';

function AppRouter() {
  return (
    <div>
      <h1>ログイン</h1>
      <label htmlFor="user_id">ユーザーID</label>
      <input type="text" id="user_id" name="user_id" required/><br/>

      <label htmlFor="password">パスワード</label>
      <input type="password" id="password" name="password" required /><br/>

      <input type="submit" value="ログイン" />
    </div>
  );
}

export default AppRouter;
