import React from 'react';
import { useGameStore } from '../../store/gameStore';
import { ParticleBackground } from '../ParticleBackground';

export const WaitingLobby: React.FC = () => {
    const gameState = useGameStore(state => state.gameState);

    if (!gameState) return null;

    // Filter out bots for display in the waiting lobby
    const realPlayers = gameState.players.filter(p => !p.name.match(/^(Jordan|Taylor|Morgan|Casey|Riley|Avery|Quinn|Skylar|Reese|Dakota|Sage|River|Phoenix|Rowan|Kai|Blake|Drew|Cameron|Hayden|Peyton)$/));

    return (
        <div className="min-h-screen bg-theme-bg flex items-center justify-center text-white relative overflow-hidden">
            <ParticleBackground />
            
            <div className="z-10 bg-theme-surface/80 backdrop-blur-md p-8 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] max-w-lg w-full border border-gray-700 animate-slideUpFade flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-2 text-neon-blue uppercase tracking-widest">Waiting for Players</h2>
                <div className="text-6xl font-mono font-bold text-neon-green mb-8 shadow-neon">
                    00:{gameState.timeRemaining.toString().padStart(2, '0')}
                </div>
                
                <div className="w-full">
                    <h3 className="text-xl font-bold mb-4 text-gray-300 border-b border-gray-700 pb-2">Connected Traders</h3>
                    <ul className="space-y-3 mb-6 min-h-[150px]">
                        {realPlayers.map((player) => (
                            <li key={player.id} className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-lg border border-gray-700 animate-fadeIn">
                                <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse shadow-[0_0_10px_rgba(0,255,100,0.8)]"></div>
                                <span className="font-bold text-lg">{player.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="text-sm text-gray-400 mt-4 text-center animate-pulse">
                    The market opens soon. Get ready!
                </div>
            </div>
        </div>
    );
};
