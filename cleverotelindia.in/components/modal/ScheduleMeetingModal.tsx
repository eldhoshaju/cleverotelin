"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MapPin,
  Phone,
  Mail,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";

interface ScheduleMeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  orgSize: string;
  topic: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const COUNTRIES = [
  "United States",
  "India",
  "United Kingdom",
  "UAE",
  "Canada",
  "Australia",
  "Germany",
  "Singapore",
  "Saudi Arabia",
  "Other",
] as const;

const ORG_SIZES = [
  "0–50",
  "51–200",
  "201–500",
  "501–1000",
  "1000+",
] as const;

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Enter a valid email address";
  if (!data.phone.trim()) errors.phone = "Phone number is required";
  else if (!/^[+]?[\d\s\-()]{7,}$/.test(data.phone))
    errors.phone = "Enter a valid phone number";
  if (!data.country) errors.country = "Please select a country";
  if (!data.orgSize) errors.orgSize = "Please select organization size";
  if (!data.topic.trim()) errors.topic = "Business topic is required";
  return errors;
}

export default function ScheduleMeetingModal({
  isOpen,
  onClose,
}: ScheduleMeetingModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    country: "",
    orgSize: "",
    topic: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ESC key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Focus close button on open
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      orgSize: "",
      topic: "",
      message: "",
    });
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 3500);
  };

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setErrors({});
      setSuccess(false);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="schedule-modal-title"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative z-10 w-full max-w-[1000px] overflow-hidden rounded-2xl bg-white shadow-2xl"
            style={{ maxHeight: "90vh" }}
          >
            {/* Close button */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid max-h-[85vh] overflow-y-auto lg:grid-cols-[55%_45%]">
              {/* Left - Form */}
              <div className="p-6 sm:p-8 lg:p-10">
                {success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50"
                    >
                      <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-[#0F172A]">
                      Thank You!
                    </h3>
                    <p className="max-w-xs text-sm text-[#64748B]">
                      We&apos;ll be in touch shortly. Our team will reach out
                      within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {/* Heading */}
                    <div className="mb-6">
                      <h2
                        id="schedule-modal-title"
                        className="text-2xl font-bold text-[#0F172A]"
                      >
                        Get in Touch
                      </h2>
                      <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-[#5B5CF6] to-[#D946EF]" />
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4"
                    >
                      {/* Name */}
                      <div>
                        <label className="mb-1 block text-xs font-medium text-[#334155]">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-[#0F172A] outline-none transition-all placeholder:text-[#94A3B8] focus:shadow-sm ${
                            errors.name
                              ? "border-red-300 focus:border-red-400"
                              : "border-gray-200 focus:border-[#5B5CF6]"
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1 text-[11px] text-red-500">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="mb-1 block text-xs font-medium text-[#334155]">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="work@company.com"
                          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-[#0F172A] outline-none transition-all placeholder:text-[#94A3B8] focus:shadow-sm ${
                            errors.email
                              ? "border-red-300 focus:border-red-400"
                              : "border-gray-200 focus:border-[#5B5CF6]"
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-[11px] text-red-500">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="mb-1 block text-xs font-medium text-[#334155]">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (678) 993-0012"
                          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-[#0F172A] outline-none transition-all placeholder:text-[#94A3B8] focus:shadow-sm ${
                            errors.phone
                              ? "border-red-300 focus:border-red-400"
                              : "border-gray-200 focus:border-[#5B5CF6]"
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-[11px] text-red-500">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Country + Org Size */}
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1 block text-xs font-medium text-[#334155]">
                            Country <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className={`w-full appearance-none rounded-lg border px-4 py-2.5 text-sm text-[#0F172A] outline-none transition-all focus:shadow-sm ${
                              errors.country
                                ? "border-red-300 focus:border-red-400"
                                : "border-gray-200 focus:border-[#5B5CF6]"
                            } ${!formData.country ? "text-[#94A3B8]" : ""}`}
                          >
                            <option value="">Select</option>
                            {COUNTRIES.map((c) => (
                              <option key={c} value={c}>
                                {c}
                              </option>
                            ))}
                          </select>
                          {errors.country && (
                            <p className="mt-1 text-[11px] text-red-500">
                              {errors.country}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="mb-1 block text-xs font-medium text-[#334155]">
                            Organization Size{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="orgSize"
                            value={formData.orgSize}
                            onChange={handleChange}
                            className={`w-full appearance-none rounded-lg border px-4 py-2.5 text-sm text-[#0F172A] outline-none transition-all focus:shadow-sm ${
                              errors.orgSize
                                ? "border-red-300 focus:border-red-400"
                                : "border-gray-200 focus:border-[#5B5CF6]"
                            } ${!formData.orgSize ? "text-[#94A3B8]" : ""}`}
                          >
                            <option value="">Select</option>
                            {ORG_SIZES.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                          {errors.orgSize && (
                            <p className="mt-1 text-[11px] text-red-500">
                              {errors.orgSize}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Business Topic */}
                      <div>
                        <label className="mb-1 block text-xs font-medium text-[#334155]">
                          Business Topic{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="topic"
                          value={formData.topic}
                          onChange={handleChange}
                          placeholder="e.g. Cloud PBX, AI Call Center, Virtual Numbers"
                          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-[#0F172A] outline-none transition-all placeholder:text-[#94A3B8] focus:shadow-sm ${
                            errors.topic
                              ? "border-red-300 focus:border-red-400"
                              : "border-gray-200 focus:border-[#5B5CF6]"
                          }`}
                        />
                        {errors.topic && (
                          <p className="mt-1 text-[11px] text-red-500">
                            {errors.topic}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label className="mb-1 block text-xs font-medium text-[#334155]">
                          Additional Information
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us more about your requirements..."
                          rows={3}
                          className="w-full resize-none rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-[#0F172A] outline-none transition-all placeholder:text-[#94A3B8] focus:border-[#5B5CF6] focus:shadow-sm"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#5B5CF6] to-[#D946EF] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#5B5CF6]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#5B5CF6]/30 disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>

              {/* Right - Contact Info */}
              <div className="border-t border-gray-100 bg-[#F8FAFC] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                {/* Locations heading */}
                <h3 className="text-lg font-bold text-[#0F172A]">
                  Our Locations
                </h3>
                <div className="mt-2 mb-6 h-1 w-10 rounded-full bg-gradient-to-r from-[#5B5CF6] to-[#D946EF]" />

                {/* CleveroTel USA */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-[#0F172A]">
                    CleveroTel
                  </h4>
                  <div className="mt-2 flex flex-col gap-2">
                    <a
                      href="https://goo.gl/maps/zgJ3aw2dJKu4jeiE7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 text-xs text-[#64748B] transition-colors hover:text-[#5B5CF6]"
                    >
                      <MapPin className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#5B5CF6]" />
                      6495 Shiloh Rd Suite 220, Alpharetta, GA 30005
                    </a>
                    <a
                      href="tel:+16789930012"
                      className="flex items-center gap-2 text-xs text-[#64748B] transition-colors hover:text-[#5B5CF6]"
                    >
                      <Phone className="h-3.5 w-3.5 flex-shrink-0 text-[#5B5CF6]" />
                      (678) 993-0012
                    </a>
                    <a
                      href="mailto:sales@clevero.com"
                      className="flex items-center gap-2 text-xs text-[#64748B] transition-colors hover:text-[#5B5CF6]"
                    >
                      <Mail className="h-3.5 w-3.5 flex-shrink-0 text-[#5B5CF6]" />
                      sales@clevero.com
                    </a>
                  </div>
                </div>

                {/* Clevero Inc - India */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-[#0F172A]">
                    Clevero Inc
                  </h4>
                  <div className="mt-2 flex flex-col gap-2">
                    <span className="flex items-start gap-2 text-xs text-[#64748B]">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#5B5CF6]" />
                      Ground Floor, Lulu Cyber Tower 1, Infopark Expy, P O,
                      Kakkanad, Kochi, Kerala 682042
                    </span>
                    <a
                      href="tel:+914842984072"
                      className="flex items-center gap-2 text-xs text-[#64748B] transition-colors hover:text-[#5B5CF6]"
                    >
                      <Phone className="h-3.5 w-3.5 flex-shrink-0 text-[#5B5CF6]" />
                      0484 298 4072
                    </a>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-gray-200" />

                {/* Points of Contact */}
                <h3 className="text-lg font-bold text-[#0F172A]">
                  Technical Support
                </h3>
                <div className="mt-2 mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-[#5B5CF6] to-[#D946EF]" />

                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-xs font-semibold text-[#334155]">USA</p>
                    <a
                      href="tel:+16789930012"
                      className="mt-1 flex items-center gap-2 text-xs text-[#64748B] transition-colors hover:text-[#5B5CF6]"
                    >
                      <Phone className="h-3.5 w-3.5 flex-shrink-0 text-[#5B5CF6]" />
                      (678) 993-0012
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#334155]">India</p>
                    <a
                      href="tel:+914842984072"
                      className="mt-1 flex items-center gap-2 text-xs text-[#64748B] transition-colors hover:text-[#5B5CF6]"
                    >
                      <Phone className="h-3.5 w-3.5 flex-shrink-0 text-[#5B5CF6]" />
                      0484 298 4072
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
