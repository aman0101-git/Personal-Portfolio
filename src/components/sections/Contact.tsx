"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MessageCircle, Send, Check, Copy, ArrowUpRight, Loader2 } from "lucide-react";

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  
  // Form State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Web3Forms Form Submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", "79b9c84c-fdb3-42d0-9b5d-d89be97ef17a");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        (e.target as HTMLFormElement).reset();
        setShowToast(true); 
        setTimeout(() => setShowToast(false), 4000); 
      } else {
        console.error("Form error:", data);
        alert("Something went wrong. Please try again."); 
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      id: "email",
      label: "Email",
      value: "aman.undre01@gmail.com",
      icon: Mail,
      action: "mailto:aman.undre01@gmail.com",
      color: "text-rose-500",
      bg: "bg-rose-500/10",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      value: "+91 9325719752",
      icon: MessageCircle,
      action: "https://wa.me/919325719752",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      id: "phone",
      label: "Phone",
      value: "+91 9325719752",
      icon: Phone,
      action: "tel:+919325719752",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    }
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--primary)]/10 blur-[150px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Refined, Medium Typography Header */}
        <div className="mb-16 md:text-center flex flex-col items-start md:items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-sm tracking-widest text-[var(--primary)] mb-2 font-semibold uppercase"
          >
            Get In Touch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]"
          >
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-purple-500">together.</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl"
          >
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll surely get back to you!
          </motion.p>
        </div>

        {/* Flex Container for Contact Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* Left Side: Quick Connect Nodes */}
          <div className="w-full lg:w-5/12 flex flex-col gap-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-1 rounded-2xl bg-gradient-to-br from-[var(--border-color)] to-transparent hover:to-[var(--primary)]/20 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-[var(--card-bg)] backdrop-blur-xl rounded-2xl m-[1px] -z-10" />
                  {/* Changed layout on extra small screens to stack items if needed */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-xl gap-4 sm:gap-0">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full shrink-0 ${method.bg}`}>
                        <Icon className={`w-6 h-6 ${method.color}`} />
                      </div>
                      <div className="min-w-0"> {/* Added min-w-0 to allow text truncation/wrapping */}
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1">{method.label}</p>
                        {/* Added break-all for long emails on narrow mobile screens */}
                        <p className="text-[var(--foreground)] font-semibold text-base sm:text-lg tracking-wide break-all sm:break-normal">{method.value}</p>
                      </div>
                    </div>
                    
                    {/* Action Buttons - CRITICAL FIX: opacity-100 on mobile, fade in on desktop hover */}
                    <div className="flex items-center gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 self-end sm:self-auto">
                      <button 
                        onClick={() => handleCopy(method.value, method.id)}
                        className="p-3 sm:p-2 rounded-lg bg-[var(--background)] border border-[var(--border-color)] hover:border-[var(--primary)] text-slate-500 hover:text-[var(--primary)] transition-all active:scale-95"
                        suppressHydrationWarning
                        aria-label="Copy to clipboard"
                      >
                        {copiedField === method.id ? <Check className="w-5 h-5 sm:w-4 sm:h-4 text-emerald-500" /> : <Copy className="w-5 h-5 sm:w-4 sm:h-4" />}
                      </button>
                      <a 
                        href={method.action} target="_blank" rel="noopener noreferrer"
                        className="p-3 sm:p-2 rounded-lg bg-[var(--background)] border border-[var(--border-color)] hover:border-[var(--primary)] text-slate-500 hover:text-[var(--primary)] transition-all active:scale-95"
                        suppressHydrationWarning
                        aria-label={`Open ${method.label}`}
                      >
                        <ArrowUpRight className="w-5 h-5 sm:w-4 sm:h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:w-7/12 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-sm p-6 sm:p-8 md:p-10 relative overflow-hidden"
          >
            <form className="flex flex-col gap-8" onSubmit={handleSubmit} suppressHydrationWarning>
              <div className="relative group">
                <input 
                  type="text" id="name" name="name" required disabled={isSubmitting}
                  className="w-full bg-transparent border-b border-slate-300 dark:border-slate-700 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] peer transition-colors disabled:opacity-50"
                  placeholder=" "
                  suppressHydrationWarning
                />
                <label htmlFor="name" className="absolute left-0 top-3 text-slate-500 text-base sm:text-lg cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[var(--primary)] peer-valid:text-xs peer-valid:-top-4 transition-all duration-300">Your Name</label>
              </div>

              <div className="relative group">
                <input 
                  type="email" id="email" name="email" required disabled={isSubmitting}
                  className="w-full bg-transparent border-b border-slate-300 dark:border-slate-700 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] peer transition-colors disabled:opacity-50"
                  placeholder=" "
                  suppressHydrationWarning
                />
                <label htmlFor="email" className="absolute left-0 top-3 text-slate-500 text-base sm:text-lg cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[var(--primary)] peer-valid:text-xs peer-valid:-top-4 transition-all duration-300">Email Address</label>
              </div>

              <div className="relative group mt-2">
                <textarea 
                  id="message" name="message" required rows={4} disabled={isSubmitting}
                  className="w-full bg-transparent border-b border-slate-300 dark:border-slate-700 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] peer transition-colors resize-none disabled:opacity-50"
                  placeholder=" "
                  suppressHydrationWarning
                />
                <label htmlFor="message" className="absolute left-0 top-3 text-slate-500 text-base sm:text-lg cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[var(--primary)] peer-valid:text-xs peer-valid:-top-4 transition-all duration-300">Project Details / Message</label>
              </div>

              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} suppressHydrationWarning />

              <button 
                type="submit" disabled={isSubmitting}
                className="group relative cursor-pointer mt-4 inline-flex items-center justify-center w-full md:w-auto md:self-end px-8 py-4 rounded-full bg-[var(--foreground)] text-[var(--background)] font-semibold transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-70 disabled:hover:scale-100 overflow-hidden"
                suppressHydrationWarning
              >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square rounded-full bg-[var(--primary)] transition-transform duration-500 ease-out scale-0 group-hover:scale-100 group-disabled:hidden z-0" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                  {isSubmitting ? (
                    <>Sending... <Loader2 className="w-4 h-4 animate-spin" /></>
                  ) : (
                    <>Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" /></>
                  )}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Popup (Toast Notification) - Fixed positioning for mobile */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl bg-[var(--card-bg)] border border-emerald-500/30 shadow-2xl backdrop-blur-xl md:max-w-sm mx-auto"
          >
            <div className="p-2 rounded-full bg-emerald-500/20 shrink-0">
              <Check className="w-5 h-5 text-emerald-500" />
            </div>
            <div>
              <p className="text-[var(--foreground)] font-semibold text-sm">Message Sent!</p>
              <p className="text-slate-500 text-xs">I will get back to you shortly.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}