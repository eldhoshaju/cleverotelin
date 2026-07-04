"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Calendar, Loader2, CheckCircle2 } from "lucide-react";
import { COUNTRIES, BUSINESS_TYPES } from "@/constants/footer";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  businessType: string;
  message: string;
  privacy: boolean;
}

interface FormErrors {
  [key: string]: string;
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Invalid email";
  if (!data.phone.trim()) errors.phone = "Phone is required";
  else if (!/^[+]?[\d\s-]{8,}$/.test(data.phone)) errors.phone = "Invalid phone number";
  if (!data.message.trim()) errors.message = "Message is required";
  if (!data.privacy) errors.privacy = "You must agree to the Privacy Policy";
  return errors;
}

function FormInput({
  label,
  name,
  type = "text",
  value,
  error,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        className={`peer w-full rounded-2xl border bg-gray-50/50 px-4 pb-2.5 pt-5 text-sm text-[#111827] outline-none transition-all duration-300 placeholder-shown:pt-4 focus:bg-white focus:shadow-md focus:shadow-purple-100/50 ${
          error
            ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
            : "border-gray-200 focus:border-[#7C3AED] focus:ring-2 focus:ring-purple-100"
        }`}
      />
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-4 top-2 text-[10px] font-medium text-gray-400 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[#7C3AED]"
      >
        {label}
      </label>
      {error && <p className="mt-1 text-[11px] text-red-500">{error}</p>}
    </div>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    businessType: "",
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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      businessType: "",
      message: "",
      privacy: false,
    });
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-4 py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50"
        >
          <CheckCircle2 className="h-8 w-8 text-emerald-500" />
        </motion.div>
        <h3 className="text-xl font-bold text-[#111827]">Message Sent!</h3>
        <p className="text-center text-sm text-gray-500">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Row 1 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormInput
          label="Full Name *"
          name="name"
          value={formData.name}
          error={errors.name}
          onChange={handleChange}
        />
        <FormInput
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormInput
          label="Work Email *"
          name="email"
          type="email"
          value={formData.email}
          error={errors.email}
          onChange={handleChange}
        />
        <FormInput
          label="Phone Number *"
          name="phone"
          type="tel"
          value={formData.phone}
          error={errors.phone}
          onChange={handleChange}
        />
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="relative">
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full appearance-none rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm text-[#111827] outline-none transition-all duration-300 focus:border-[#7C3AED] focus:bg-white focus:ring-2 focus:ring-purple-100"
          >
            <option value="">Select Country</option>
            {COUNTRIES.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
        <div className="relative">
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="w-full appearance-none rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm text-[#111827] outline-none transition-all duration-300 focus:border-[#7C3AED] focus:bg-white focus:ring-2 focus:ring-purple-100"
          >
            <option value="">Business Type</option>
            {BUSINESS_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="relative">
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder=" "
          rows={4}
          maxLength={500}
          className={`peer w-full resize-none rounded-2xl border bg-gray-50/50 px-4 pb-2.5 pt-5 text-sm text-[#111827] outline-none transition-all duration-300 placeholder-shown:pt-4 focus:bg-white focus:shadow-md focus:shadow-purple-100/50 ${
            errors.message
              ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
              : "border-gray-200 focus:border-[#7C3AED] focus:ring-2 focus:ring-purple-100"
          }`}
        />
        <label
          htmlFor="message"
          className="pointer-events-none absolute left-4 top-2 text-[10px] font-medium text-gray-400 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[#7C3AED]"
        >
          Message *
        </label>
        {errors.message && <p className="mt-1 text-[11px] text-red-500">{errors.message}</p>}
        <span className="absolute bottom-3 right-4 text-[10px] text-gray-400">
          {formData.message.length}/500
        </span>
      </div>

      {/* Privacy */}
      <label className="flex items-start gap-2.5 cursor-pointer">
        <input
          type="checkbox"
          checked={formData.privacy}
          onChange={handleCheckbox}
          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#7C3AED] accent-[#7C3AED]"
        />
        <span className="text-xs text-gray-500">
          I agree to the{" "}
          <a href="#privacy" className="font-medium text-[#7C3AED] hover:underline">
            Privacy Policy
          </a>{" "}
          and consent to being contacted.
        </span>
      </label>
      {errors.privacy && <p className="-mt-2 text-[11px] text-red-500">{errors.privacy}</p>}

      {/* Buttons */}
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#6366F1] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-300/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          {loading ? "Sending..." : "Send Message"}
        </button>
        <a
          href="#schedule"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#374151] transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-lg"
        >
          <Calendar className="h-4 w-4 text-[#7C3AED]" />
          Schedule Demo
        </a>
      </div>
    </form>
  );
}
