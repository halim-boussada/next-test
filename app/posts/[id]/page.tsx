type Props = {
  params: {
    id: string;
  };
};

type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function PostDetails({ params }: Props) {
  const { id } = await params;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const post: Post = await res.json();
  return (
    <div>
      <h1>This is the id {id}</h1>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
