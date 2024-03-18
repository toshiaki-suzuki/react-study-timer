import { useRouteError } from "react-router-dom";

interface ErrorResponse {
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const error = useRouteError() as Error | ErrorResponse;

  console.error(error);

  // JSX を返して、エラーページの構造を定義
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{isError(error) ? error.message : (error as ErrorResponse).statusText}</i>
      </p>
    </div>
  );
}

// error が Error オブジェクトであるかどうかを判定するユーティリティ関数
function isError(error: unknown): error is Error {
  return typeof (error as Error).message === "string";
}
