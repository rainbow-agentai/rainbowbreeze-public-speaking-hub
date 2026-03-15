import React, { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { Search, ExternalLink, Play, FileText, Calendar, MapPin } from 'lucide-react';

interface Talk {
  title: string;
  year: string;
  language: string;
  event: string;
  slides?: string;
  video?: string;
}

interface Props {
  talks: Talk[];
}

const TalkArchive: React.FC<Props> = ({ talks }) => {
  const [query, setQuery] = useState('');

  const fuse = useMemo(() => new Fuse(talks, {
    keys: ['title', 'event', 'year', 'language'],
    threshold: 0.3,
  }), [talks]);

  const results = useMemo(() => {
    if (!query) return talks;
    return fuse.search(query).map(r => r.item);
  }, [query, talks, fuse]);

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-yellow-400 transition-colors" />
        <input
          type="text"
          placeholder="Search talks by title, event, or year..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl py-4 pl-12 pr-6 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 focus:border-yellow-400 transition-all"
        />
      </div>

      {/* Results Count */}
      <p className="text-slate-500 text-sm font-mono uppercase tracking-widest">
        Showing {results.length} talks
      </p>

      {/* Talk Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {results.map((talk, idx) => (
          <div key={idx} className="group p-6 bg-slate-900/30 border border-slate-800 rounded-2xl hover:bg-slate-900/50 hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-mono px-2 py-1 bg-slate-800 rounded text-yellow-400">
                {talk.year}
              </span>
              <span className="text-[10px] uppercase tracking-tighter text-slate-500">
                {talk.language}
              </span>
            </div>
            
            <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors leading-tight">
              {talk.title}
            </h3>
            
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
              <MapPin className="w-4 h-4" />
              <span>{talk.event}</span>
            </div>

            <div className="flex gap-3 mt-auto">
              {talk.slides && (
                <a 
                  href={talk.slides} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 px-3 py-2 rounded-lg transition-colors"
                >
                  <FileText className="w-3 h-3" /> SLIDES
                </a>
              )}
              {talk.video && (
                <a 
                  href={talk.video} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 px-3 py-2 rounded-lg transition-colors"
                >
                  <Play className="w-3 h-3 text-red-400" /> VIDEO
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {results.length === 0 && (
        <div className="text-center py-20 border-2 border-dashed border-slate-800 rounded-3xl">
          <p className="text-slate-500">No talks found matching "{query}"</p>
        </div>
      )}
    </div>
  );
};

export default TalkArchive;
