import { useState } from "react";
import BrandedSelect from "../components/BrandedSelect";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    source: "",
    message: "",
  });

  function onChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log("Contact form:", form);
    alert("Submitted (demo).");
  }

  const inputBase =
    "w-full h-[56px] rounded-xl border border-black/35 bg-transparent px-5 text-[16px] text-black outline-none placeholder:text-black/35 focus:border-[#f15a28] focus:ring-1 focus:ring-[#f15a28] transition-colors";
  const labelBase = "text-[16px] text-black/80 mb-3";

  const serviceOptions = [
    { value: "gallery", label: "Gallery / Listing Images" },
    { value: "aplus", label: "A+ / Enhanced Content" },
    { value: "brand", label: "Brand / Marketing Graphics" },
    { value: "other", label: "Other" },
  ];

  const sourceOptions = [
    { value: "google", label: "Google Search" },
    { value: "social", label: "Social Media" },
    { value: "referral", label: "Referral" },
    { value: "marketplace", label: "Marketplace" },
    { value: "other", label: "Other" },
  ];

  return (
    <section className="bg-[#f4f4f4]">
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <p className="text-[18px] text-black/70">Contact</p>

        <h2 className="mt-6 leading-[1.05]">
          <span className="block text-[48px] md:text-[54px] font-medium text-black/75">
            Not sure where to start?
          </span>
          <span className="block text-[48px] md:text-[54px] font-light text-black/35">
            A message is a good first step.
          </span>
        </h2>

        <form onSubmit={onSubmit} className="mt-12">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className={labelBase}>Name*</div>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="First name"
                className={inputBase}
                required
              />
            </div>

            <div>
              <div className={labelBase}>Email*</div>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="Email"
                className={inputBase}
                required
              />
            </div>
          </div>

          {/* Row 2 (custom select) */}
          <div className="mt-8">
            <div className={labelBase}>What service are you interested in?</div>
            <BrandedSelect
              name="service"
              value={form.service}
              onChange={(v) => setForm((p) => ({ ...p, service: v }))}
              options={serviceOptions}
              placeholder="Main images, Gallery images, Graphic. . ."
              required
            />
          </div>

          {/* Row 3 (custom select) */}
          <div className="mt-8">
            <div className={labelBase}>How did you find me?</div>
            <BrandedSelect
              name="source"
              value={form.source}
              onChange={(v) => setForm((p) => ({ ...p, source: v }))}
              options={sourceOptions}
              placeholder="Select an option"
              required
            />
          </div>

          {/* Row 4 */}
          <div className="mt-8">
            <div className={labelBase}>How can I help you?*</div>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Describe your project"
              className="w-full min-h-[220px] rounded-xl border border-black/35 bg-transparent px-5 py-4 text-[16px] text-black outline-none placeholder:text-black/35 focus:border-[#f15a28] focus:ring-1 focus:ring-[#f15a28] transition-colors resize-none"
              required
            />
          </div>

          {/* Submit */}
          <div className="mt-10 flex justify-end">
            <button
              type="submit"
              className="h-[56px] w-[170px] rounded-xl border border-black/35 text-black/80 hover:border-black/60 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
