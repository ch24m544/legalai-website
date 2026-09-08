export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Header */}
      <header className="bg-white border-b px-8 py-5 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            ⚖ LegalAI
          </h1>
          <p className="text-sm text-slate-500">
            Legal Practice Management
          </p>
        </div>

        <div className="flex items-center gap-4">

          <button className="px-4 py-2 rounded-lg border hover:bg-slate-50">
            🔔
          </button>

          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
            A
          </div>

        </div>

      </header>


      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 min-h-[calc(100vh-85px)] bg-white border-r p-5">

          <nav className="space-y-2">

            <a
              href="/dashboard"
              className="block px-4 py-3 rounded-lg bg-blue-50 text-blue-700 font-medium"
            >
              📊 Dashboard
            </a>

            <a
              href="/cases"
              className="block px-4 py-3 rounded-lg hover:bg-slate-100"
            >
              📁 Cases
            </a>

            <a
              href="/clients"
              className="block px-4 py-3 rounded-lg hover:bg-slate-100"
            >
              👥 Clients
            </a>

            <a
              href="/hearings"
              className="block px-4 py-3 rounded-lg hover:bg-slate-100"
            >
              📅 Hearings
            </a>

            <a
              href="/documents"
              className="block px-4 py-3 rounded-lg hover:bg-slate-100"
            >
              📄 Documents
            </a>

            <a
              href="/ai-assistant"
              className="block px-4 py-3 rounded-lg hover:bg-slate-100"
            >
              🤖 AI Assistant
            </a>

          </nav>

          <div className="border-t mt-8 pt-5">

            <a
              href="#"
              className="block px-4 py-3 rounded-lg hover:bg-slate-100"
            >
              ⚙ Settings
            </a>

          </div>

        </aside>


        {/* Main Content */}
        <section className="flex-1 p-8">

          <div className="mb-8">

            <h2 className="text-3xl font-bold text-slate-900">
              Good morning, Advocate
            </h2>

            <p className="text-slate-500 mt-1">
              Here's what's happening with your practice today.
            </p>

          </div>


          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

            <div className="bg-white p-6 rounded-xl border">
              <p className="text-sm text-slate-500">
                Total Cases
              </p>

              <h3 className="text-3xl font-bold mt-2">
                24
              </h3>

              <p className="text-sm text-green-600 mt-2">
                ↑ 8% this month
              </p>
            </div>


            <div className="bg-white p-6 rounded-xl border">
              <p className="text-sm text-slate-500">
                Active Cases
              </p>

              <h3 className="text-3xl font-bold mt-2">
                18
              </h3>

              <p className="text-sm text-blue-600 mt-2">
                3 updated today
              </p>
            </div>


            <div className="bg-white p-6 rounded-xl border">
              <p className="text-sm text-slate-500">
                Upcoming Hearings
              </p>

              <h3 className="text-3xl font-bold mt-2">
                7
              </h3>

              <p className="text-sm text-orange-600 mt-2">
                Next hearing in 2 days
              </p>
            </div>


            <div className="bg-white p-6 rounded-xl border">
              <p className="text-sm text-slate-500">
                Pending Tasks
              </p>

              <h3 className="text-3xl font-bold mt-2">
                12
              </h3>

              <p className="text-sm text-red-600 mt-2">
                4 high priority
              </p>
            </div>

          </div>


          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6">


            {/* Upcoming Hearings */}
            <div className="lg:col-span-2 bg-white rounded-xl border p-6">

              <div className="flex items-center justify-between mb-6">

                <h3 className="text-xl font-semibold">
                  Upcoming Hearings
                </h3>

                <a
                  href="/hearings"
                  className="text-blue-600 text-sm font-medium"
                >
                  View all
                </a>

              </div>


              <div className="space-y-4">

                <div className="p-4 rounded-lg bg-slate-50 border">

                  <div className="flex justify-between">

                    <div>
                      <h4 className="font-semibold">
                        Sharma vs Kumar
                      </h4>

                      <p className="text-sm text-slate-500 mt-1">
                        Civil · Property Dispute
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold">
                        12 Sep
                      </p>

                      <p className="text-sm text-slate-500">
                        10:30 AM
                      </p>
                    </div>

                  </div>

                </div>


                <div className="p-4 rounded-lg bg-slate-50 border">

                  <div className="flex justify-between">

                    <div>
                      <h4 className="font-semibold">
                        Singh vs State
                      </h4>

                      <p className="text-sm text-slate-500 mt-1">
                        Criminal · Bail Matter
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold">
                        15 Sep
                      </p>

                      <p className="text-sm text-slate-500">
                        11:00 AM
                      </p>
                    </div>

                  </div>

                </div>


                <div className="p-4 rounded-lg bg-slate-50 border">

                  <div className="flex justify-between">

                    <div>
                      <h4 className="font-semibold">
                        Verma vs Mehta
                      </h4>

                      <p className="text-sm text-slate-500 mt-1">
                        Family · Property Matter
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold">
                        18 Sep
                      </p>

                      <p className="text-sm text-slate-500">
                        2:00 PM
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* AI Assistant */}
            <div className="bg-slate-900 text-white rounded-xl p-6">

              <div className="text-4xl mb-5">
                🤖
              </div>

              <h3 className="text-xl font-semibold">
                AI Legal Assistant
              </h3>

              <p className="text-slate-300 text-sm mt-3">
                Get help summarizing cases, analyzing documents
                and organizing your legal work.
              </p>

              <a
                href="/ai-assistant"
                className="block text-center mt-6 bg-white text-slate-900 py-3 rounded-lg font-medium hover:bg-slate-200"
              >
                Open AI Assistant
              </a>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}