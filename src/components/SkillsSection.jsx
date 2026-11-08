import React, { useState, useMemo } from 'react';
import { 
  Cloud, 
  Server, 
  GitBranch, 
  Activity, 
  Cpu, 
  Database, 
  Search, 
  Check, 
  Sparkles,
  Layers
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

const iconComponents = {
  Cloud,
  Server,
  GitBranch,
  Activity,
  Cpu,
  Database
};

export default function SkillsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...resumeData.skillCategories.map(c => c.category)];

  const filteredCategories = useMemo(() => {
    return resumeData.skillCategories.map(cat => {
      // If a specific category tab is picked
      if (selectedCategory !== 'All' && cat.category !== selectedCategory) {
        return null;
      }

      // Filter skills by search query
      const skills = cat.skills.filter(s => 
        s.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (skills.length === 0) return null;

      return {
        ...cat,
        skills
      };
    }).filter(Boolean);
  }, [searchTerm, selectedCategory]);

  return (
    <section id="skills" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Skills & Technologies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Bridging infrastructure automation, enterprise Kubernetes, and advanced Generative AI architectures.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none touch-pan-x">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                {cat === 'All' ? 'All Skills' : cat.split('&')[0]}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Terraform, RAG)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const IconComponent = iconComponents[category.icon] || Layers;
            return (
              <div
                key={category.category}
                className="rounded-2xl bg-slate-900/70 border border-slate-800/80 p-6 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-cyan-500/5 group flex flex-col justify-between"
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                        {category.category}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500">
                        {category.skills.length} core technologies
                      </span>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3.5">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className={`font-medium ${skill.highlight ? 'text-slate-200' : 'text-slate-400'}`}>
                            {skill.name}
                          </span>
                          <span className="font-mono text-[11px] text-cyan-400 font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-700 ${
                              skill.highlight 
                                ? 'bg-gradient-to-r from-cyan-500 to-blue-500' 
                                : 'bg-slate-600'
                            }`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Badges */}
                <div className="pt-5 mt-5 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400"
                    >
                      <Check className="w-2.5 h-2.5 text-cyan-400" />
                      {skill.name.split('(')[0].trim()}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No skills found matching "{searchTerm}".</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs text-cyan-400 font-semibold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
