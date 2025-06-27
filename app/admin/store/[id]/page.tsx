type Params = {
  params: {
    id: string;
  };
};

export default async function StorePage({ params }: Params) {
  const { id } = await params;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${apiUrl}/api/storereviews/${id}`);
  const data = await res.json();
  console.log(data);
  return <div className="text-3xl text-black">Store Page for ID: {id}</div>;
}
