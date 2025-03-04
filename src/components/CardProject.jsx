import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const CardProject = ({ Title, Description, ProjectLink, id, Img }) => {
  return (
    <div className="group relative w-full">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

        <div className="relative p-5 z-10 flex flex-col justify-between h-full"> {/* flex-col жана h-full колдонуу */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={Img} // public папкасынан түз сүрөттү колдонуу
              alt={Title}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" // h-64 бийиктиги берилип, object-cover колдонула
            />
          </div>

          <div className="mt-4 space-y-3 flex-grow"> {/* flex-grow колдонуу */}
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              {Title}
            </h3>

            <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">
              {Description}
            </p>

            <div className="pt-4 flex items-center justify-between">
              <a
                href={ProjectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-600"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
        </div>
      </div>
    </div>
  );
};


export default CardProject;
