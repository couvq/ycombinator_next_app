import Hello from "../components/hello";

type Album = {
  id: number;
  title: string;
};

const Home = async () => {
  // fetches data on server side and returns already put together page with the data already included
  // --> improves first contentful paint, SEO, and security
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Failed to fetch data.");
  const albums = await response.json();

  return (
    <>
      <h1 className="text-3xl">Welcome to Next.js</h1>
      <Hello />
      {albums.map((album: Album) => (
        <div key={album.id}>{album.title}</div>
      ))}
    </>
  );
};

export default Home;
