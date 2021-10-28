import style from "../styles/Header.module.css";

const Header = () => {
  const x = 2;
  return (
    <div>
      <h1 className={style.title}>
        <span>WebDev</span> News
      </h1>
      <p className={style.description}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
        voluptates, possimus vitae neque eveniet dolor quibusdam, assumenda,
        suscipit est aliquid adipisci nam iste mollitia ipsa consectetur modi
        eaque cumque enim.
      </p>
    </div>
  );
};

export default Header;
