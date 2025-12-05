import Link from "next/link";

export default function Level1() {
  const challenges = [
    {
      id: 1,
      title: "すべてのデータを取得",
      description: "usersテーブルから全てのカラムのデータを取得してください。",
      hint: "SELECT * を使用します",
    },
    {
      id: 2,
      title: "特定のカラムを取得",
      description: "usersテーブルからname, email カラムのみを取得してください。",
      hint: "SELECT カラム名1, カラム名2 を使用します",
    },
    {
      id: 3,
      title: "テーブルの行数をカウント",
      description: "usersテーブルの総行数を取得してください。",
      hint: "COUNT(*) 関数を使用します",
    },
    {
      id: 4,
      title: "最初の10行を取得",
      description: "usersテーブルから最初の10行のみを取得してください。",
      hint: "LIMIT を使用します",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <main className="container mx-auto px-4 py-8">
        <Link href="/" className="back-link text-blue-600 dark:text-blue-400">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          戻る
        </Link>

        <div className="level-header">
          <h1 className="level-title">Level 1</h1>
          <p className="level-subtitle">SELECT文の基礎</p>
        </div>

        <div className="grid gap-6 max-w-4xl">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="challenge-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="challenge-badge bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
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
