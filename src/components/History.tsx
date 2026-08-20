import React from "react";
import { useCountStore } from "../stores/CounterStore";

const History = () => {
  const { history, resetHistory } = useCountStore();

  return (
    <div>
      {/* 履歴一覧 */}
      {history.length > 0 ? (
        <ul>
          {history.map((elem) => (
            <li className="list-none">{elem}</li>
          ))}
        </ul>
      ) : (
        <p>履歴がありません</p>
      )}

      {/* リセットボタン */}
      <button onClick={resetHistory}>リセット</button>
    </div>
  );
};

export default History;
