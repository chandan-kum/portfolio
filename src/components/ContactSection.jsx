import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Clock, 
  ExternalLink
} from 'lucide-react';
import { Linkedin } from './Icons';
import { resumeData } from '../data/resumeData';

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Resilient Cloud & AI Systems
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in discussing DevOps architecture, Kubernetes deployments, or GenAI integrations? Reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 block">EMAIL ADDRESS</span>
                  <a 
                    href={`mailto:${resumeData.personal.email}`}
                    className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                  >
                    {resumeData.personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(resumeData.personal.email, 'email')}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Copy email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 block">PHONE / WHATSAPP</span>
                  <a 
                    href={`tel:${resumeData.personal.rawPhone}`}
                    className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors font-mono"
                  >
                    {resumeData.personal.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(resumeData.personal.rawPhone, 'phone')}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Copy phone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 block">LINKEDIN PROFILE</span>
                  <a 
                    href={resumeData.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors flex items-center gap-1"
                  >
                    linkedin.com/in/chandan-kumar
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-mono text-slate-500 block">LOCATION</span>
                <span className="text-sm font-semibold text-white truncate block">
                  Ghaziabad, Uttar Pradesh, India
                </span>
                <span className="block text-[11px] text-slate-400 font-mono">Open to Relocation & Remote</span>
              </div>
            </div>

            {/* Availability Box */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-cyan-500/30 text-xs space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 font-mono font-semibold">
                <Clock className="w-4 h-4 text-cyan-400" />
                RAPID RESPONSE TIME
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                I typically respond to inquiries within 24 hours. For urgent opportunities, feel free to call or reach out on WhatsApp directly.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Ready!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you, {formState.name}! You can also send this directly to{' '}
                    <a href={`mailto:${resumeData.personal.email}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(formState.message)}`} className="text-cyan-400 font-semibold underline">
                      {resumeData.personal.email}
                    </a>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white font-heading mb-1">
                    Send Chandan a Direct Message
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    Fill out the form below to initiate a conversation or schedule an interview.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">YOUR EMAIL *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">SUBJECT</label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Opportunity / DevOps / GenAI project"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">MESSAGE *</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Chandan, we saw your portfolio and would love to discuss..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Transmit Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* Floating Copied Toast */}
      {copiedField && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-xs shadow-2xl shadow-cyan-500/40 border border-white/20 animate-fade-in">
          <Check className="w-4 h-4 stroke-[3]" />
          <span>Copied {copiedField} to clipboard!</span>
        </div>
      )}
    </section>
  );
}
