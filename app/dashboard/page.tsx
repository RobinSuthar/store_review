export default async function Dashboard() {
  const res = await fetch("http://localhost:3000/api/analysis");
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const stores = await res.json();
  return (
    <div>
      <div className="text-4xl text-black text-center flex justify-center">
        Dashboard
      </div>

      {stores["message"].map((x: { id: number; Name: string }) => {
        return (
          <div key={x.id} className="text-2xl text-black mt-5 f">
            <div>{x.id}</div>
            <div>{x.Name}</div>
          </div>
        );
      })}
    </div>
  );
}
