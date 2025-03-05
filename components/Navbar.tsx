import { Vault } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className='px-5 py-4 flex items-center justify-between '>
      <div className="inline-flex gap-4">
        <Vault className='size-8 ml-4' />
        <h1 className="capitalize font-extrabold text-2xl">Project Vault</h1>
      </div>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
