import Head from "next/head";

function Meta({ title, keywords, description }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: "WebDev News",
  keywords: "web development, programming",
  description: "Get the Latest new in web dev",
};

export default Meta;
