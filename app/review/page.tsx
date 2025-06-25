import Header from "@/components/Header";
import Wine from "@/components/Wine/Wine";

export default async function Page() {
  return (
    <div className="bg-white">
      <Header />
      <Wine />
    </div>
  );
}
