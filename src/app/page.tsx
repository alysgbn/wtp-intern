import Image from "next/image";
import "./globals.scss";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <div className="text-generalSans">
      {/* Navbar  */}
      <Navbar />
      Walk the Planet
    </div>
  );
}
