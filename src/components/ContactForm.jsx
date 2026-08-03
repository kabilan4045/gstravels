import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { serviceTypeOptions } from "../data/siteData";

const initialState = {
  name: "",
  companyName: "",
  email: "",
  phone: "",
  serviceType: serviceTypeOptions[0],
  details: "",
};

const inputClass =
  "w-full rounded-md border border-brand-line bg-white px-3 py-2.5 text-base text-brand-ink focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary";
const labelClass = "mb-1 block text-sm font-medium text-brand-ink/80";

// TODO: wire this up to a form handler / email service (e.g. Formspree, EmailJS,
// or a backend endpoint) once the client decides which to use.
export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("GS Travels quote request:", form);
    setSubmitted(true);
    setForm(initialState);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg bg-brand-primary/5 p-10 text-center">
        <CheckCircle2 size={48} className="text-brand-primary" />
        <h3 className="text-display-m mt-4 text-brand-ink">
          Thank you! Your request has been received.
        </h3>
        <p className="mt-2 text-base text-brand-ink/65">
          Our team will get back to you shortly. You can also call us
          directly for a faster response.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-md bg-brand-primary px-5 py-2 text-sm font-semibold text-brand-paper hover:bg-brand-primary-dark"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input
            required
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Company Name (optional)</label>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Email Address *</label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Phone Number *</label>
          <input
            required
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Service Type *</label>
        <select
          required
          name="serviceType"
          value={form.serviceType}
          onChange={handleChange}
          className={inputClass}
        >
          {serviceTypeOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>Requirements / Details</label>
        <textarea
          name="details"
          rows={4}
          value={form.details}
          onChange={handleChange}
          placeholder="Trip dates, pickup location, number of passengers, etc."
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-brand-paper transition-colors hover:bg-brand-primary-dark sm:w-auto"
      >
        Request Quote
      </button>
    </form>
  );
}
