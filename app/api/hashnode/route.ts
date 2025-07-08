export const dynamic = "force-dynamic";

export async function GET() {
  const query = `
    query GetUserWithPosts {
    user(username: "DivijPirankar") {
      posts(page: 1, pageSize: 5) {
        nodes {
          id
          title
          slug
          brief
          readTimeInMinutes
          coverImage{
            url
          }
        }
      }
    }
  }

  `;

  try {
    const res = await fetch("https://gql.hashnode.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    const json = await res.json();

    const posts = json?.data?.user?.posts?.nodes;

    if (!posts) {
      return new Response("No posts found", { status: 404 });
    }

    return Response.json(posts);
  } catch (error) {
    console.error("Error fetching Hashnode data:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
