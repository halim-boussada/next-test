type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function Posts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts" , {
    cache : "no-store"
  });
  const posts: Post[] = await res.json();
  return (
    <div>
      <h1>{new Date().getSeconds()}</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
