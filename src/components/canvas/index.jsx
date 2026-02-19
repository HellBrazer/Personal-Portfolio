
import React from 'react';

const EarthCanvas = () => {
    return (
        <div className="w-full h-full min-h-[350px] bg-black-100 rounded-2xl flex items-center justify-center relative overflow-hidden border border-white/10">
            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 blur-2xl opacity-20 animate-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="w-40 h-40 rounded-full border-4 border-[#915eff]/30 flex items-center justify-center relative z-10 animate-spin-slow">
                <div className="w-32 h-32 rounded-full border-2 border-dashed border-white/20 animate-reverse-spin" />
            </div>
            <p className="absolute bottom-8 text-secondary text-sm font-mono">Global Reach</p>
        </div>
    );
}

const BallCanvas = ({ icon }) => {
    return (
        <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-card border-2 border-white">
            <img src={icon} alt="tech" className="w-16 h-16 object-contain" />
        </div>
    );
}

const ComputersCanvas = () => {
    return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800">
            <div className="w-[90%] max-w-[600px] h-[300px] bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden border border-gray-700 opacity-90 relative z-20">
                <div className="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-gray-700">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="ml-4 text-xs text-gray-400 font-mono">portfolio.py</div>
                </div>
                <div className="p-4 font-mono text-sm sm:text-base">
                    <div className="text-pink-400">class <span className="text-yellow-300">DataScientist</span>:</div>
                    <div className="pl-4 text-white">def <span className="text-blue-400">__init__</span>(self):</div>
                    <div className="pl-8 text-white">self.name = <span className="text-green-400">"Arpit"</span></div>
                    <div className="pl-8 text-white">self.role = <span className="text-green-400">"ML Engineer"</span></div>
                    <div className="pl-8 text-white">self.stack = [<span className="text-green-400">"Python"</span>, <span className="text-green-400">"React"</span>, <span className="text-green-400">"AWS"</span>]</div>
                    <div className="pl-4 text-gray-500 comment animate-pulse"># Transforming data into insights...</div>
                    <div className="pl-4 mt-2">
                        <span className="text-blue-400">print</span>(<span className="text-green-400">"Hello World!"</span>)
                        <span className="inline-block w-2 h-4 bg-white ml-1 animate-ping"></span>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />
            </div>
        </div>
    );
}

const StarsCanvas = () => {
    return <div className="absolute inset-0 z-[-1] bg-transparent"></div>;
}

export { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas };
