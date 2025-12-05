import Link from "next/link";

export default function Level2() {
  const challenges = [
    {
      id: 1,
      title: "WHERE句の基礎",
      description: "usersテーブルからage が 30 のユーザーを取得してください。",
      hint: "WHERE age = 30 を使用します",
    },
    {
      id: 2,
      title: "複数条件のWHERE",
      description: "usersテーブルからage が 25 以上で、country が 'Japan' のユーザーを取得してください。",
      hint: "AND を使用して複数条件を結合します",
    },
    {
      id: 3,
      title: "ORDER BY 昇順",
      description: "usersテーブルの全データをage の昇順で取得してください。",
      hint: "ORDER BY age ASC を使用します",
    },
    {
      id: 4,
      title: "ORDER BY 降順",
      description: "usersテーブルの全データをcreated_at の降順（新しい順）で取得してください。",
      hint: "ORDER BY created_at DESC を使用します",
    },
    {
      id: 5,
      title: "WHERE + ORDER BY",
      description: "usersテーブルからage が 20 以上のユーザーをage の昇順で取得してください。",
      hint: "WHERE と ORDER BY を組み合わせます",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <main className="container mx-auto px-4 py-8">
        <Link href="/" className="back-link text-green-600 dark:text-green-400">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          戻る
        </Link>

        <div className="level-header">
          <h1 className="level-title">Level 2</h1>
          <p className="level-subtitle">WHERE, ORDER BY</p>
        </div>

        <div className="grid gap-6 max-w-4xl">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="challenge-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="challenge-badge bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
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
