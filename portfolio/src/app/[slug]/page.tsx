import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Navbar from "../navbar";
import Image from "next/image";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  // Fetch post data
  const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);

  // Safely handle image URL
  const postImageUrl = post?.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  if (!post) {
    // Handle case where the post is not found
    return <div>Post not found</div>;
  }

  return (
    <>
      <Navbar />
      <main className="py-8">
        <div className="w-[90%] mx-auto bg-white rounded-lg shadow-lg p-8">
          <Link href="/blog" className="hover:underline mb-6 inline-block">
            ← Back to posts
          </Link>

          {postImageUrl && (
            <Image
              src={postImageUrl}
              alt={post.title || "Post Image"}
              className="aspect-video rounded-xl"
              width="550"
              height="310"
            />
          )}

          <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
          <p className="text-gray-600 mb-6">
            Published: {new Date(post.publishedAt).toLocaleDateString()}
          </p>

          <div className="prose">
            {Array.isArray(post.body) && <PortableText value={post.body} />}
          </div>
        </div>
      </main>
    </>
  );
}