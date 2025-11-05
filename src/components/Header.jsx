import AddIcon from "../assets/icons/AddIcon";
import BoxIcon from "../assets/icons/BoxIcon";

function Header() {
  return (
    <div
      className="w-full h-[60px] border-b-2 border-sec-gray flex justify-between items-center
"
    >
      <BoxIcon className="w-8 ml-4" />
      <h1 className=" text-2xl text-main-gray">Пакет с задачами</h1>
      <AddIcon className="w-8 mr-4" />
    </div>
  );
}

export default Header;
