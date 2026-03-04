type Props = {
  params: {
    id: string;
  };
  searchParams : {
    type ?: string 
  }
};

export default async function PostDetails({ params , searchParams}: Props) {
 const { id } = await params;
 const { type } = await searchParams;

  return (
    <div>
      <h1>This is the id {id} / {type}</h1>
    </div>
  );
}