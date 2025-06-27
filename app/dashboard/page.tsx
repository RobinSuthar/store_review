export default async function Dashboard() {
  const data = await fetch("http://localhost:3000/api/analysis");
  console.log(data);
  const stores = await data.json();
  console.log(stores["message"]);
  return (
    <div>
      <div className="text-4xl text-black text-center flex justify-center">
        Dashboard
      </div>

      {stores["message"].map((x: { id: number; Name: string }) => {
        return (
          <div className="text-2xl text-black mt-5 " key={x.id}>
            {x.id}
            {x.Name}
          </div>
        );
      })}
    </div>
  );
}
