import Logo from "../components/Logo";
import StatementSlider from "../components/StatementSlider";
import NameCarousel from "../components/NameCarousel";

function Welcome() {
  return (
    <main className="page">
      <Logo />
      <StatementSlider />
      <NameCarousel />
    </main>
  );
}

export default Welcome;