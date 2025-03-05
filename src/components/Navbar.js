import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link href="/add-box" className="text-lg font-bold">
          Shipping Calculator
        </Link>
        <div>
          <Link href="/" className="px-4">
            Add Box
          </Link>
          <Link href="/list" className="px-4">
            View List
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
