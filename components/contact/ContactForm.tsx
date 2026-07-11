'use client'

import { useState } from 'react'
import { MessageCircle, Leaf } from 'lucide-react'

const subjects = [
  'Product Enquiry',
  'Bulk Order',
  'Wholesale/Distribution',
  'General Question',
  'Feedback',
]

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Hello Leaf n Roots!\n\nName: ${form.name}\nPhone: +91${form.phone}\nEmail: ${form.email}\nSubject: ${form.subject}\n\nMessage: ${form.message}`
    )
    window.open(`https://wa.me/+917019965445?text=${text}`, '_blank')
  }

  const inputClass =
    'w-full border border-border rounded px-3 py-2.5 text-sm text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition'

  return (
    <div className="bg-card border border-border rounded-xl shadow-md p-6 lg:p-8">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Leaf size={14} className="text-primary" />
        <h2
          className="text-base font-bold tracking-widest uppercase text-foreground"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Send Us a Message
        </h2>
        <Leaf size={14} className="text-primary" />
      </div>

      <form onSubmit={handleWhatsApp} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-foreground mb-1">
            Your Name <span className="text-destructive">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-foreground mb-1">
            WhatsApp Number <span className="text-destructive">*</span>
          </label>
          <div className="flex gap-2">
            <div className="flex items-center gap-1.5 border border-border rounded px-3 py-2.5 bg-muted text-sm font-medium text-foreground shrink-0">
              🇮🇳 +91
            </div>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your WhatsApp number"
              className={`${inputClass} flex-1`}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-foreground mb-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-xs font-semibold text-foreground mb-1">
            Subject
          </label>
          {/* <select
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select a subject</option>
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select> */}
          <div>
            <label className="block text-xs font-semibold text-foreground mb-2">
              How can we help?
            </label>

            <div className="flex flex-wrap gap-2">
              {subjects.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setForm({ ...form, subject: s })}
                  className={`px-4 py-4 rounded-full text-sm font-medium transition ${form.subject === s
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-primary/10"
                    }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* <div>
          <label htmlFor="message" className="block text-xs font-semibold text-foreground mb-1">
            Message <span className="text-destructive">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            className={`${inputClass} resize-none`}
          />
        </div> */}

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded font-semibold text-sm hover:bg-primary/90 active:scale-[0.98] transition-all"
        >
          <MessageCircle size={17} />
          Send Message on WhatsApp
        </button>
        <p className="text-center text-xs text-muted-foreground">
          We typically reply within a few minutes.
        </p>
      </form>
    </div>
  )
}
