import BabyRegistry from "./components/BabyRegistry";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white p-8">
      <div className="container mx-auto px-4 py-8">
        <BabyRegistry />
      </div>
    </main>
  );
}
