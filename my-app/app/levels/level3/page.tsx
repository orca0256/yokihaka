import Link from "next/link";

export default function Level3() {
  const challenges = [
    {
      id: 1,
      title: "COUNT関数",
      description: "ordersテーブルの総レコード数をカウントしてください。",
      hint: "SELECT COUNT(*) FROM orders を使用します",
    },
    {
      id: 2,
      title: "SUM関数",
      description: "ordersテーブルのamount カラムの合計値を取得してください。",
      hint: "SELECT SUM(amount) FROM orders を使用します",
    },
    {
      id: 3,
      title: "AVG関数",
      description: "ordersテーブルのamount カラムの平均値を取得してください。",
      hint: "SELECT AVG(amount) FROM orders を使用します",
    },
    {
      id: 4,
      title: "GROUP BY の基礎",
      description: "ordersテーブルをuser_id でグループ化し、各ユーザーの注文数をカウントしてください。",
      hint: "SELECT user_id, COUNT(*) FROM orders GROUP BY user_id を使用します",
    },
    {
      id: 5,
      title: "GROUP BY + HAVING",
      description: "ordersテーブルをuser_id でグループ化し、注文数が3以上のユーザーのみを取得してください。",
      hint: "HAVING COUNT(*) >= 3 を使用します",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <main className="container mx-auto px-4 py-8">
        <Link href="/" className="back-link text-amber-600 dark:text-amber-400">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          戻る
        </Link>

        <div className="level-header">
          <h1 className="level-title">Level 3</h1>
          <p className="level-subtitle">集約関数, GROUP BY</p>
        </div>

        <div className="grid gap-6 max-w-4xl">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="challenge-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="challenge-badge bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                    問題 {challenge.id}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {challenge.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-700 dark:text-slate-300 mb-4">
                {challenge.description}
              </p>

              <details className="hint-toggle">
                <summary>
                  💡 ヒントを表示
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="hint-box mt-2">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {challenge.hint}
                  </p>
                </div>
              </details>

              <button disabled className="disabled-button">
                実行する（準備中）
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
