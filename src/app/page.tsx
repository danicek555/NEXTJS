import { log } from "console";
import Hello from "./components/hello";

export default function Home() {
  console.log("where am I? I am a server component");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Hell yeah BOZE MUJ ANO</h1>
      <Hello></Hello>
    </div>
  );
}
