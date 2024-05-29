{
  articles.length > 0 && (
    <ul>
      {articles.map((article) => {
        <li key={article.objectID}></li>;
      })}
    </ul>
  );
}
