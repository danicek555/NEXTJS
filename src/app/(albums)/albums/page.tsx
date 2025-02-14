import React from "react";

async function getAlbums() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums", {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
}

export default async function Page() {
  const albums = await getAlbums();

  return (
    <div className="p-4">
      {albums.map((album: { id: number; title: string }) => (
        <div key={album.id} className="border-b p-2">
          <h3 className="text-lg font-semibold">{album.id}</h3>
          <p className="text-gray-600">{album.title}</p>
        </div>
      ))}
    </div>
  );
}
