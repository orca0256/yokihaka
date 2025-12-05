import Link from "next/link";

export default function Home() {
  const levels = [
    {
      id: 1,
      title: "Level 1",
      description: "SELECT文の基礎",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      id: 2,
      title: "Level 2",
      description: "WHERE, ORDER BY",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      id: 3,
      title: "Level 3",
      description: "集約関数, GROUP BY",
      color: "bg-amber-500 hover:bg-amber-600",
    },
    {
      id: 4,
      title: "Level 4",
      description: "JOIN",
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      id: 5,
      title: "Level 5",
      description: "サブクエリと高度なクエリ",
      color: "bg-purple-500 hover:bg-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            SQL Practice
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            レベルを選択して、SQL学習を始めましょう
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {levels.map((level) => (
            <Link
              key={level.id}
              href={`/levels/level${level.id}`}
              className={`block ${level.color} text-white rounded-lg p-6 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{level.title}</h2>
                  <p className="text-white/90">{level.description}</p>
                </div>
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
