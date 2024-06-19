// import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="navbar">
        <Link href="/libraries">show all lib</Link>
        <Link href="/libraries/new">Create new lib</Link>
      </div>
    </main>
  );
}
