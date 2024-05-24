"use client";
import React, { useEffect } from "react";
import styles from "./client.module.css";
import "aos/dist/aos";
import AOS from "aos";
import "aos/dist/aos.css";

const Clients = () => {

	useEffect(() => {
		AOS.init();
    	AOS.refresh();
	}, []);

	return (
		<div className={styles.clients}>
			<div className={styles.client_wrapper}>
				<div className={styles.client_list}>
					<div className="absolute -top-[120px] left-[70px] min-[320px]:hidden sm:block" data-aos="fade-up">
						<img src="/assets/upperArrow.png" alt="uppert arrow" />
					</div>
					<div className={styles.client_images_list} 
						data-aos="fade-left"
						>
						<img
							src="/assets/tripadvisor.png"
							alt="Client Image"
							className={styles.client_images}
						/>
					</div>
					<div className={styles.client_images_list} 
						data-aos="fade-left"
						>
						<img
							src="/assets/expedia.png"
							alt="Client Image"
							className={styles.client_images}
						/>
					</div>
					<div className={styles.client_images_list} 
						data-aos="fade-left"
						>
						<img
							src="/assets/bookingClient.png"
							alt="Client Image"
							className={styles.client_images}
						/>
					</div>
					<div className={styles.client_images_list} 
						data-aos="fade-left"
						>
						<img
							src="/assets/airbnb.png"
							alt="Client Image"
							className={styles.client_images}
						/>
					</div>
					<div className={styles.client_images_list} 
						data-aos="fade-left"
						>
						<img
							src="/assets/bitz.png"
							alt="Client Image"
							className={styles.client_images}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Clients;