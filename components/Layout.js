import style from "../styles/Layout.module.css";
import Header from "./Header";
import Nav from "./Nav";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
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
