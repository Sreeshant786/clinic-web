"use client";

import { FormEvent, useMemo, useState } from "react";

type AppointmentFormProps = {
  services: string[];
};

type FormStatus =
  | { type: "idle"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const fieldClassName =
  "mt-2 w-full rounded-2xl border border-sky-100 bg-sky-50/40 px-4 py-3.5 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100";

export function AppointmentForm({ services }: AppointmentFormProps) {
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const minimumDateTime = useMemo(() => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset() + 30);
    return now.toISOString().slice(0, 16);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      service: String(formData.get("service") || "").trim(),
      preferredAt: String(formData.get("preferredAt") || "").trim(),
    };

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to submit appointment request.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: result.message || "Appointment request received. Our team will contact you shortly.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[1.5rem] border border-sky-100 bg-white p-4 shadow-2xl shadow-sky-100 sm:rounded-[2rem] sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <label className="block">
          <span className="text-sm font-black text-slate-700">Name</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your full name"
            className={fieldClassName}
          />
        </label>

        <label className="block">
          <span className="text-sm font-black text-slate-700">Phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="Mobile number"
            className={fieldClassName}
          />
        </label>

        <label className="block">
          <span className="text-sm font-black text-slate-700">Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className={fieldClassName}
          />
        </label>

        <label className="block">
          <span className="text-sm font-black text-slate-700">Select Service</span>
          <select name="service" required defaultValue="" className={fieldClassName}>
            <option value="" disabled>
              Choose a service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>

        <label className="block sm:col-span-2">
          <span className="text-sm font-black text-slate-700">Preferred Date & Time</span>
          <input
            name="preferredAt"
            type="datetime-local"
            min={minimumDateTime}
            required
            className={fieldClassName}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-emerald-500 px-6 py-4 text-base font-black text-white shadow-xl shadow-sky-100 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:mt-6 sm:px-7"
      >
        {isSubmitting ? "Submitting..." : "Submit Appointment Request"}
      </button>

      {status.type !== "idle" ? (
        <div
          className={`mt-5 rounded-2xl border px-4 py-3 text-sm font-bold ${
            status.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
          role="status"
        >
          {status.message}
        </div>
      ) : null}

      <p className="mt-4 text-center text-xs leading-5 text-slate-500">
        By submitting, you agree to be contacted by our clinic team for appointment confirmation.
      </p>
    </form>
  );
}
