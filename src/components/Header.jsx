import BoxIcon from "../assets/icons/BoxIcon";

function Header() {
  return (
    <div
      className="w-full border-b-2 border-sec-gray flex justify-center items-center gap-2 p-4
"
    >
      <h1 className=" text-2xl text-main-gray">Мои задачи</h1>
      <BoxIcon className="w-6" />
    </div>
  );
}

export default Header;
