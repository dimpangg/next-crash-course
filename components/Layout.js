import style from "../styles/Layout.module.css";
import Header from "./Header";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={style.container}>
        <main className={style.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
