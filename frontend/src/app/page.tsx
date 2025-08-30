import Link from "next/link";

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: 'url(/bg.png)' }}
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 max-w-4xl mx-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-100/90 mb-8 drop-shadow-lg">
            Medusa Tavern
          </h1>
          <p className="text-xl text-gray-100/90 mb-12 max-w-2xl mx-auto">
          Immersive AI Roleplay web app, wattpad but you are the main character shaping the plot. Be creative and have fun. 🤗  
          </p>
          <Link 
            href="/characters"
            className="inline-block bg-pink-400/70 backdrop-blur-md px-8 py-4 rounded-2xl text-lg font-semibold text-gray-100/90 shadow-lg hover:bg-pink-400/80 transition-all duration-300 border border-white/20"
          >
            Choose Your Character
          </Link>
        </div>
      </div>
    </div>
  );
}
