import Link from 'next/link';

export default async function Characters(){
    // fetch data from backend localhost:8000/characters
    const data = await fetch('http://localhost:8000/characters').then(res => res.json())
    
    return (
        <div 
            className="min-h-screen bg-cover bg-center bg-no-repeat p-6"
            style={{ backgroundImage: 'url(/bg.png)' }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {Object.keys(data).map((key) => (
                    <Link 
                        key={key} 
                        href={`/characters/${key}`}
                        className="bg-pink-400/50 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:bg-pink-400/60 transition-all duration-300 hover:scale-105 cursor-pointer border border-white/20"
                    >
                        <div className="flex flex-col gap-3">
                            <h3 className="text-xl font-semibold text-gray-700">{data[key].name}</h3>
                            <p className="text-gray-600"><span className="font-medium">Gender:</span> {data[key].gender}</p>
                            <p className="text-gray-600"><span className="font-medium">Personality:</span> {data[key].personality.join(", ")}</p>
                            <p className="text-gray-600 text-sm line-clamp-3"><span className="font-medium">Context:</span> {data[key].context}</p>
                            <div className="flex flex-wrap gap-1 mt-2">
                                {data[key].tags.map((tag: string, index: number) => (
                                    <span key={index} className="bg-white/40 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-gray-700">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}