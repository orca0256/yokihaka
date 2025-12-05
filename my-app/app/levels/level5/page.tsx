import Link from "next/link";

export default function Level5() {
  const challenges = [
    {
      id: 1,
      title: "WHERE句内のサブクエリ",
      description: "ordersテーブルから、平均注文額よりも高い注文を取得してください。",
      hint: "WHERE amount > (SELECT AVG(amount) FROM orders) を使用します",
    },
    {
      id: 2,
      title: "FROM句内のサブクエリ",
      description: "各ユーザーの注文数を計算し、その結果から注文数が5以上のユーザーを抽出してください。",
      hint: "FROM句にサブクエリを配置し、外側のクエリで条件を指定します",
    },
    {
      id: 3,
      title: "相関サブクエリ",
      description: "各ユーザーの最新の注文情報のみを取得してください。",
      hint: "外側のクエリと内側のクエリで同じテーブルを参照し、相関させます",
    },
    {
      id: 4,
      title: "EXISTS述語",
      description: "少なくとも1つの注文があるユーザーのみを取得してください。",
      hint: "WHERE EXISTS (SELECT 1 FROM orders WHERE orders.user_id = users.id) を使用します",
    },
    {
      id: 5,
      title: "複雑なサブクエリ",
      description: "カテゴリ別の平均注文額を計算し、その平均よりも高い注文を持つユーザーを取得してください。",
      hint: "複数のサブクエリを組み合わせて使用します",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <main className="container mx-auto px-4 py-8">
        <Link href="/" className="back-link text-purple-600 dark:text-purple-400">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          戻る
        </Link>

        <div className="level-header">
          <h1 className="level-title">Level 5</h1>
          <p className="level-subtitle">サブクエリと高度なクエリ</p>
        </div>

        <div className="grid gap-6 max-w-4xl">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="challenge-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="challenge-badge bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
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
