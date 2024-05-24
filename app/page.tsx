import Banner from "./components/banner/Banner";
import Clients from "./components/client/Clients";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NewsLetter from "./components/newsletter/NewsLetter";
import TravelPoint from "./components/travelPoint/TravelPoint";
import styles from './pages.module.css';

export default function Home() {
  return (
    <>
		<div className={styles.atf}>
			<div className={styles.atf_linear}>
				<img
					src="/assets/atf-bg.png"
					alt="client Image"
					className={styles.atf_linear_image}
				/>
			</div>
			<Header />
			<Banner />
		</div>
		<main className={styles.main}>
			<div className={styles.btf_liner}>
				<img
					src="/assets/btf-liner.png"
					alt="client Image"
					className={styles.btf_linear_image}
				/>
			</div>
			<Clients />
			<Services />
			<TravelPoint />
			<NewsLetter />
		</main>
		<Footer />
    </>
  );
}
