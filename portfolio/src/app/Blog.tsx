import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";

const POSTS_QUERY = `*[ 
  _type == "post" 
  && defined(slug.current) 
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function Blog() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="min-h-screen py-8">
      <div className="w-[90%] mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-8">Posts</h1>
        <ul className="flex flex-col gap-y-4 border border-black border-1 0 px-4 py-4">
          {posts.map((post) => (
            <li className="hover:underline" key={post._id}>
              <Link href={`/${post.slug.current}`}>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}