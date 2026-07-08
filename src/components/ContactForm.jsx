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
      <div className="flex flex-col items-center justify-center rounded-xl bg-brand-bg p-10 text-center">
        <CheckCircle2 size={48} className="text-brand-accent" />
        <h3 className="mt-4 text-xl font-bold text-brand-primary">
          Thank you! Your request has been received.
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Our team will get back to you shortly. You can also call us
          directly for a faster response.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-md bg-brand-accent px-5 py-2 text-sm font-semibold text-white hover:bg-brand-accent-dark"
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
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Full Name *
          </label>
          <input
            required
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Company Name (optional)
          </label>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Email Address *
          </label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Phone Number *
          </label>
          <input
            required
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Service Type *
        </label>
        <select
          required
          name="serviceType"
          value={form.serviceType}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
        >
          {serviceTypeOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Requirements / Details
        </label>
        <textarea
          name="details"
          rows={4}
          value={form.details}
          onChange={handleChange}
          placeholder="Trip dates, pickup location, number of passengers, etc."
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-accent-dark sm:w-auto"
      >
        Request Quote
      </button>
    </form>
  );
}
