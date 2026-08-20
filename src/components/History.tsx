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
      <button
        onClick={resetHistory}
        className="mt-5 border px-20 py-5 rounded bg-gray-400 text-black font-bold hover:opacity-80 cursor-pointer"
      >
        リセット
      </button>
    </div>
  );
};

export default History;
