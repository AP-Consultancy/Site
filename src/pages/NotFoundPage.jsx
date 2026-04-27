import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="section-block">
      <p className="eyebrow">404</p>
      <h2>Page not found</h2>
      <p className="section-lead">
        The page you requested does not exist. Continue browsing from home.
      </p>
      <Link className="button" to="/">
        Back to Home
      </Link>
    </section>
  );
}
