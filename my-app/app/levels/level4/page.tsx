import Link from "next/link";

export default function Level4() {
  const challenges = [
    {
      id: 1,
      title: "INNER JOIN の基礎",
      description: "usersテーブルとordersテーブルをuser_id で結合し、ユーザー名と注文情報を取得してください。",
      hint: "SELECT users.name, orders.* FROM users INNER JOIN orders ON users.id = orders.user_id を使用します",
    },
    {
      id: 2,
      title: "LEFT JOIN",
      description: "usersテーブルを基準にordersテーブルを結合し、注文がないユーザーも含めて全ユーザーを取得してください。",
      hint: "LEFT JOIN を使用すると、左側のテーブルの全レコードが保持されます",
    },
    {
      id: 3,
      title: "複数テーブルのJOIN",
      description: "users, orders, products の3つのテーブルを結合し、ユーザー名、注文情報、商品情報を取得してください。",
      hint: "複数のJOINを連続して記述します",
    },
    {
      id: 4,
      title: "JOINと集約関数",
      description: "usersテーブルとordersテーブルを結合し、各ユーザーの注文総額を計算してください。",
      hint: "JOIN後にGROUP BYとSUM関数を使用します",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <main className="container mx-auto px-4 py-8">
        <Link href="/" className="back-link text-red-600 dark:text-red-400">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          戻る
        </Link>

        <div className="level-header">
          <h1 className="level-title">Level 4</h1>
          <p className="level-subtitle">JOIN</p>
        </div>

        <div className="grid gap-6 max-w-4xl">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="challenge-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="challenge-badge bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
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

              <div className="hint-box">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  💡 ヒント: {challenge.hint}
                </p>
              </div>

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
