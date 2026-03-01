"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, MessageSquare } from "lucide-react";

export default function ContactFormDark({
  onClose,
  closed,
}: {
  onClose?: () => void;
  closed: boolean;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md h-full bg-linear-to-b from-neutral-900 to-black text-white shadow-2xl flex flex-col">
            {/* Header */}
            <div className="relative px-6 py-5 border-b border-white/10">
              <span className="flex items-center gap-2 text-xs tracking-widest text-rose-500">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                CONTACT FORM
              </span>

              {closed && (
                <button
                  onClick={onClose}
                  className="absolute top-5 right-5 text-white/50 hover:text-white"
                >
                  <X size={18} />
                </button>
              )}

              <h2 className="mt-3 text-2xl font-semibold">Get in Touch</h2>
              <p className="mt-1 text-sm text-white/60">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            {/* Form */}
            <form className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
              {/* Name */}
              <Field
                icon={<User size={16} />}
                label="Name"
                index="01"
                placeholder="Your full name"
              />

              {/* Email */}
              <Field
                icon={<Mail size={16} />}
                label="Email"
                index="02"
                placeholder="your@email.com"
              />

              {/* Phone */}
              <Field
                icon={<Phone size={16} />}
                label="Phone"
                index="03"
                placeholder="+212 6XX XXX XXX"
              />

              {/* Message */}
              <Field
                icon={<MessageSquare size={16} />}
                label="Message"
                index="04"
                placeholder="Tell us about your project..."
                textarea
              />
            </form>

            {/* Footer */}
            <div className="px-6 py-5 border-t border-white/10">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-md bg-linear-to-r from-neutral-200 to-neutral-400 text-black font-semibold py-3 hover:opacity-90 transition"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ---------- Field Component ---------- */

function Field({
  icon,
  label,
  index,
  placeholder,
  textarea,
}: {
  icon: React.ReactNode;
  label: string;
  index: string;
  placeholder: string;
  textarea?: boolean;
}) {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-medium text-white">
        <span className="text-white/70">{icon}</span>
        {label}
        <span className="text-white/40 text-xs">[{index}]</span>
      </label>

      {textarea ? (
        <textarea
          rows={4}
          placeholder={placeholder}
          className="mt-2 w-full resize-none rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/30"
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/30"
        />
      )}
    </div>
  );
}
