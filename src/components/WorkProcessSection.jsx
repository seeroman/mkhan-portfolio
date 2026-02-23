export default function WorkProcessSection() {
  const steps = [
    {
      no: "01.",
      title: "Understand",
      text: "I begin by understanding your\nproduct, brand, and goals.\nThis step ensures clarity\nbefore any design decisions\nare made.",
    },
    {
      no: "02.",
      title: "Explore",
      text: "I research, plan, and define\nthe visual direction. This\nhelps shape a clear structure\nand creative approach.",
    },
    {
      no: "03.",
      title: "Design",
      text: "Ideas turn into visuals.\nI focus on clarity, balance,\nand purposeful design\nthroughout the process.",
    },
    {
      no: "04.",
      title: "Refine & Deliver",
      text: "I refine details based on\nfeedback and finalize\neverything with care.\nClean, organized files are\ndelivered, ready to use.",
    },
  ];

  return (
    <section className="bg-[#f4f4f4]">
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        {/* Label */}
        <p className="text-[18px] text-black/70">Work Process</p>

        {/* Heading */}
        <h2 className="mt-6 leading-[1.05]">
          <span className="block text-[48px] md:text-[54px] font-medium text-black/75">
            Good design doesn’t happen by accident.
          </span>
          <span className="block text-[48px] md:text-[54px] font-light text-black/35">
            Here’s how I approach every project.
          </span>
        </h2>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div
              key={s.no}
              className="bg-[#e9e9e9] rounded-[34px] h-[520px] p-10 flex flex-col"
            >
              <div className="text-black/85 h-[110px]">
                <div className="text-[22px] font-medium">{s.no}</div>
                <div className="mt-2 text-[26px] leading-[1.1] font-medium">
                  {s.title}
                </div>
              </div>

              <div className="flex-1" />

              <div className="h-[160px] flex items-end">
                <p className="text-[16px] leading-[1.55] text-black/55 whitespace-pre-line">
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
