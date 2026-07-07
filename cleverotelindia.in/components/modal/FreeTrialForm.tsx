"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, ShieldCheck } from "lucide-react";
import { COUNTRIES, BUSINESS_TYPES } from "@/constants/footer";
import SuccessMessage from "./SuccessMessage";

const EMPLOYEE_COUNTS = [
  "1–10",
  "11–50",
  "51–200",
  "201–500",
  "500+",
] as const;

const SERVICES = [
  "Cloud PBX",
  "AI Call Center",
  "US Virtual Number",
  "SIP Trunk",
  "CRM Integration",
  "Voice Broadcasting",
  "WhatsApp Business",
  "AI Voice Agent",
  "Other",
] as const;

interface FormData {
  name: string;
  company: string;
  email: string;
  country: string;
  phone: string;
  businessType: string;
  employees: string;
  service: string;
  message: string;
  privacy: boolean;
}

interface FormErrors {
  [key: string]: string;
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Full name is required";
  if (!data.company.trim()) errors.company = "Company name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email";
  if (!data.country) errors.country = "Select a country";
  if (!data.phone.trim()) errors.phone = "Phone number is required";
  else if (!/^[+]?[\d\s\-()]{8,}$/.test(data.phone)) errors.phone = "Enter a valid phone number";
  if (!data.privacy) errors.privacy = "You must agree to continue";
  return errors;
}

interface FreeTrialFormProps {
  onSuccess: () => void;
}

export default function FreeTrialForm({ onSuccess }: FreeTrialFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    country: "",
    phone: "",
    businessType: "",
    employees: "",
    service: "",
    message: "",
    privacy: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, privacy: e.target.checked }));
    if (errors.privacy) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.privacy;
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSuccess(true);
    onSuccess();
  };

  if (success) {
    return <SuccessMessage />;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {/* Heading */}
      <div className="mb-2">
        <h2 className="text-2xl font-extrabold text-[#111827] sm:text-3xl">
          Get Your{" "}
          <span className="bg-gradient-to-r from-[#EC4899] via-[#7C3AED] to-[#3B82F6] bg-clip-text text-transparent">
            7-Day Free Trial
          </span>
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-500">
          Start using CleveroTel today. No credit card required. Our team will
          contact you to activate your free trial.
        </p>
      </div>

      {/* Name + Company */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name *"
            className={`w-full rounded-xl border bg-gray-50/50 px-4 py-3 text-sm text-[#111827] outline-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:shadow-sm ${
              errors.name ? "border-red-300 focus:border-red-400" : "border-gray-200 focus:border-[#7C3AED]"
            }`}
          />
          {errors.name && <p className="mt-1 text-[11px] text-red-500">{errors.name}</p>}
        </div>
        <div>
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name *"
            className={`w-full rounded-xl border bg-gray-50/50 px-4 py-3 text-sm text-[#111827] outline-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:shadow-sm ${
              errors.company ? "border-red-300 focus:border-red-400" : "border-gray-200 focus:border-[#7C3AED]"
            }`}
          />
          {errors.company && <p className="mt-1 text-[11px] text-red-500">{errors.company}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Work Email *"
          className={`w-full rounded-xl border bg-gray-50/50 px-4 py-3 text-sm text-[#111827] outline-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:shadow-sm ${
            errors.email ? "border-red-300 focus:border-red-400" : "border-gray-200 focus:border-[#7C3AED]"
          }`}
        />
        {errors.email && <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>}
      </div>

      {/* Country + Phone */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={`w-full appearance-none rounded-xl border bg-gray-50/50 px-4 py-3 text-sm text-[#111827] outline-none transition-all duration-200 focus:bg-white focus:shadow-sm ${
              errors.country ? "border-red-300 focus:border-red-400" : "border-gray-200 focus:border-[#7C3AED]"
            } ${!formData.country ? "text-gray-400" : ""}`}
          >
            <option value="">Country *</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.country && <p className="mt-1 text-[11px] text-red-500">{errors.country}</p>}
        </div>
        <div>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            className={`w-full rounded-xl border bg-gray-50/50 px-4 py-3 text-sm text-[#111827] outline-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:shadow-sm ${
              errors.phone ? "border-red-300 focus:border-red-400" : "border-gray-200 focus:border-[#7C3AED]"
            }`}
          />
          {errors.phone && <p className="mt-1 text-[11px] text-red-500">{errors.phone}</p>}
        </div>
      </div>

      {/* Business Type + Employees */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <select
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          className={`w-full appearance-none rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-[#111827] outline-none transition-all duration-200 focus:border-[#7C3AED] focus:bg-white focus:shadow-sm ${!formData.businessType ? "text-gray-400" : ""}`}
        >
          <option value="">Business Type</option>
          {BUSINESS_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <select
          name="employees"
          value={formData.employees}
          onChange={handleChange}
          className={`w-full appearance-none rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-[#111827] outline-none transition-all duration-200 focus:border-[#7C3AED] focus:bg-white focus:shadow-sm ${!formData.employees ? "text-gray-400" : ""}`}
        >
          <option value="">Number of Employees</option>
          {EMPLOYEE_COUNTS.map((e) => (
            <option key={e} value={e}>{e}</option>
          ))}
        </select>
      </div>

      {/* Service */}
      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className={`w-full appearance-none rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-[#111827] outline-none transition-all duration-200 focus:border-[#7C3AED] focus:bg-white focus:shadow-sm ${!formData.service ? "text-gray-400" : ""}`}
      >
        <option value="">Service Interested In</option>
        {SERVICES.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      {/* Message */}
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message (Optional)"
        rows={2}
        className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-[#111827] outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[#7C3AED] focus:bg-white focus:shadow-sm"
      />

      {/* Privacy */}
      <label className="flex cursor-pointer items-start gap-2.5">
        <input
          type="checkbox"
          checked={formData.privacy}
          onChange={handleCheckbox}
          className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-[#7C3AED]"
        />
        <span className="text-xs text-gray-500">
          I agree to the{" "}
          <a href="#privacy" className="font-medium text-[#7C3AED] hover:underline">Privacy Policy</a>{" "}
          and{" "}
          <a href="#terms" className="font-medium text-[#7C3AED] hover:underline">Terms of Service</a>.
        </span>
      </label>
      {errors.privacy && <p className="-mt-1 text-[11px] text-red-500">{errors.privacy}</p>}

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        className="mt-1 w-full rounded-xl bg-gradient-to-r from-[#EC4899] via-[#7C3AED] to-[#3B82F6] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-300/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-300/40 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Processing...
          </span>
        ) : (
          "Start My Free Trial"
        )}
      </motion.button>

      {/* Trust */}
      <div className="flex items-center justify-center gap-1.5">
        <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
        <span className="text-[11px] text-gray-400">Your details are 100% safe.</span>
      </div>
    </form>
  );
}
