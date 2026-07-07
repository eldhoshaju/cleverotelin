"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import FreeTrialForm from "./FreeTrialForm";
import ModalIllustration from "./ModalIllustration";

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FreeTrialModal({ isOpen, onClose }: FreeTrialModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

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
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  // Close on backdrop click
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  // Auto-close after success
  const handleSuccess = useCallback(() => {
    setTimeout(() => {
      onClose();
    }, 4000);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="trial-modal-title"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative z-10 flex w-full max-w-[1100px] flex-col overflow-hidden rounded-[28px] bg-white shadow-2xl lg:flex-row lg:rounded-[32px]"
            style={{ maxHeight: "90vh" }}
          >
            {/* Close button */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100/80 text-gray-500 backdrop-blur-sm transition-all duration-200 hover:bg-gray-200 hover:text-gray-700"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Left - Illustration */}
            <div className="hidden w-[42%] lg:block">
              <ModalIllustration />
            </div>

            {/* Mobile illustration strip */}
            <div className="h-40 lg:hidden">
              <ModalIllustration />
            </div>

            {/* Right - Form */}
            <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-8">
              <FreeTrialForm onSuccess={handleSuccess} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
