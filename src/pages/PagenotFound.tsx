import "./PagenotFound.css";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="not-found-container">
        <h1>404</h1>
        <p>Page Not Found</p>
        <a href="/">Go Back Home</a>
      </div>
    </div>
  );
};
export default PageNotFound;
