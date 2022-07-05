export const Header = () => {
  return (
    <header className="flex px-2 py-3 bg-gray-200 justify-between">
      <div className="flex justify-center flex-col space-y-1">
        <div className="border-t-2 border-black w-4"></div>
        <div className="border-t-2 border-black w-4"></div>
        <div className="border-t-2 border-black w-4"></div>
      </div>
      <div className="flex">
        <p>Avatar &nbsp;</p>
        <p>Username</p>
      </div>
    </header>
  )
}
