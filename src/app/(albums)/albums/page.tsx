//SERVER SIDE DATA FETCHING IS SO MUCH MORE BETTER than client fetching
//server side fetching has LESS CODE and the logic simplified
//imrpoves the DX - Developer Experience
//improved initial lode time - reduces the FCP (First contentful paint), it is faster
//better SEO
//server side is closer to the database
//automatic request deduplacation - reduces unnussesary https calls, stops duplicate requests
//improved security - sensitive information
//reduced network waterfall - server side can pararelly do the https requests
//WITH EVERY call do the server side - database, direct database calls
//server side will work even the javascript is disabled in the browser

//Client side data fetching
//the client sees white page and then the data is fetched
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
