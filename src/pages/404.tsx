import Link from "next/link";
import Layout from "../components/Layout";
export default function NotFound() {
  return (
    <Layout title="Page not found">
      <section className="page-intro">
        <p className="eyebrow">404</p>
        <h2>Page not found</h2>
        <p>
          This page may have moved. <Link href="/">Head back home →</Link>
        </p>
      </section>
    </Layout>
  );
}
