import Link from "next/link";
import style from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  return (
    <Link href="/href/[id]" as={`/article/${article.id}`}>
      <a className={style.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;