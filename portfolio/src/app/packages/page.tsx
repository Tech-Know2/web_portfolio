import Footer from "../footer";
import Navbar from "../navbar";
import Scroll from "../scroll";
import Packages from "./packages";


export default function Page() {
  return (
    <div className="min-h-screen">
      <Scroll />
      <Navbar />
      <Packages />
      <Footer />
    </div>
  );
}