import Link from 'next/link';
export default async function Characters(){
    // fetch data from backend localhost:8000/characters
    const data = await fetch('http://localhost:8000/characters').then(res => res.json())
return <div className='grid grid-cols-3'>

      {Object.keys(data).map((key) => (
            <Link className="char-card border-gray-600 border-4 flex flex-col gap-2 m-2 p-2 cursor-pointer" key={key} href={`/characters/${key}`}>
                <span className=''>Name: {data[key].name}</span>
                <span>Gender: {data[key].gender}</span>
                <span>Personality: {data[key].personality.join(", ")}</span>
                <span>Context: {data[key].context}</span>
                <span>Tags: {data[key].tags.join(", ")}</span>
            </Link>
      ))}
    </div>
}