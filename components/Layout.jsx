import Navbar from "./navbar/Navbar";

const Layout = ({ children, isWhiteBackground }) => {
  return (
    <div className="font-inter max-h-screen flex flex-col">
      <Navbar />
      <main
        className={`flex-1 px-1 md:px-20 pt-12 mb-20 ${
          isWhiteBackground ? 'bg-white' : 'bg-gradient-to-br from-indigo-50 via-white to-cyan-100'
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;