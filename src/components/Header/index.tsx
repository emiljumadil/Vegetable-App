import FilterandSearch from "../FilterandSearch";

const Header: React.FC = () => {
  return (
    <header className=" pt-14 px-4 pb-4 flex justify-between">
      <h1 className="font-semibold text-2xl">Fresh Goodies</h1>
      <FilterandSearch />
    </header>
  );
};

export default Header;