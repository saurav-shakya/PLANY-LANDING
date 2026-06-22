import { TIMELINE_TASKS } from "@/lib/constants";

function timeToMinutes(time: string) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

export function PhoneMockup() {
  const dayStart = 7 * 60;
  const dayEnd = 22 * 60;
  const nowMinutes = 12 * 60 + 30; // 12:30 for demo

  return (
    <div className="mx-auto w-[280px] md:w-[300px]">
      <div className="rounded-[2.5rem] border border-plany-border-strong bg-[#111214] p-3 shadow-2xl shadow-black/50">
        <div className="overflow-hidden rounded-[2rem] bg-plany-neutral">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pb-2 pt-3 text-[10px] text-plany-secondary">
            <span>9:41</span>
            <div className="mx-auto h-5 w-24 rounded-full bg-black" />
            <span>100%</span>
          </div>

          {/* App header */}
          <div className="border-b border-plany-border px-5 pb-3">
            <p className="text-[10px] uppercase tracking-wider text-plany-secondary">
              Today
            </p>
            <h3 className="text-lg font-medium">Monday, Jun 22</h3>
          </div>

          {/* Timeline */}
          <div className="relative h-[420px] overflow-hidden px-4 py-4">
            {/* Time rail */}
            <div className="absolute bottom-4 left-8 top-4 w-px bg-plany-border" />

            {/* Now line */}
            <div
              className="absolute left-6 right-4 z-10 flex items-center gap-2"
              style={{
                top: `${((nowMinutes - dayStart) / (dayEnd - dayStart)) * 100}%`,
              }}
            >
              <div className="h-2 w-2 rounded-full bg-red-500 ring-4 ring-red-500/20" />
              <div className="h-px flex-1 bg-red-500/60" />
              <span className="text-[10px] font-medium text-red-400">Now</span>
            </div>

            {TIMELINE_TASKS.map((task) => {
              const start = timeToMinutes(task.start);
              const end = timeToMinutes(task.end);
              const top = ((start - dayStart) / (dayEnd - dayStart)) * 100;
              const height = Math.max(
                ((end - start) / (dayEnd - dayStart)) * 100,
                6
              );

              return (
                <div
                  key={task.title}
                  className="absolute left-12 right-2 rounded-lg border border-white/5 px-3 py-2"
                  style={{
                    top: `${top}%`,
                    height: `${height}%`,
                    backgroundColor: `${task.color}22`,
                    borderLeftColor: task.color,
                    borderLeftWidth: 3,
                  }}
                >
                  <p className="truncate text-[11px] font-medium">{task.title}</p>
                  <p className="text-[10px] text-plany-secondary">
                    {task.start} – {task.end}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
