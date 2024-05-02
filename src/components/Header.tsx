import Card from "./card/CardTrigger";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="
    w-full
    h-[101px]´
    bg-[#0F52BA]
    px-16
    py-7
    flex
    items-center
    justify-between
    ">
      <Logo />
      <Card />
    </header>
  )
}