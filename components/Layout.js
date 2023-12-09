import Navbar from "./navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="font-inter min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-100 flex flex-col">
      <Navbar />
      <main className="flex-1 px-10 md:px-20 pt-20 mb-20">{children}</main>
    </div>
  );
};

export default Layout;