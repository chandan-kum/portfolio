import React from 'react';
import { GraduationCap, Award, CheckCircle2, ShieldCheck, BarChart3, BookOpen, Calendar } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const certIcons = {
  Award,
  BarChart3,
  ShieldCheck
};

export default function EducationAndCerts() {
  return (
    <section id="education" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic & Professional Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Strong foundation in Computer Science & Engineering accompanied by industry credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 mb-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-bold text-white font-heading">
                Academic Background
              </h3>
            </div>

            <div className="space-y-4">
              {resumeData.education.map((edu, idx) => (
                <div
                  key={idx}
                  className={`p-4 sm:p-6 rounded-2xl border transition-all ${
                    idx === 0
                      ? 'bg-gradient-to-br from-slate-900 to-slate-900/90 border-cyan-500/30 shadow-lg shadow-cyan-500/5'
                      : 'bg-slate-900/50 border-slate-800'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                    {idx === 0 && (
                      <span className="self-start sm:self-auto px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                        Degree Conferred
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1">
                    {edu.degree}
                  </h4>

                  <p className="text-slate-300 text-xs sm:text-sm font-medium mb-3">
                    {edu.institution}
                  </p>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5 mb-2">
              <Award className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-bold text-white font-heading">
                Certifications & Training
              </h3>
            </div>

            <div className="space-y-4">
              {resumeData.certifications.map((cert, idx) => {
                const CertIcon = certIcons[cert.icon] || Award;
                return (
                  <div
                    key={cert.title}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all shrink-0">
                        <CertIcon className="w-5 h-5" />
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                            {cert.badge}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-slate-400 font-mono">
                          Issued by {cert.issuer}
                        </p>
                        <p className="text-xs text-slate-300 pt-1 leading-relaxed">
                          {cert.details}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Resume Verification Card */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 text-xs font-mono text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                VERIFIED CREDENTIALS
              </div>
              <p className="text-[11px] leading-relaxed text-slate-400">
                All degree transcripts, certifications, and project artifacts are verified and accessible upon request.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
