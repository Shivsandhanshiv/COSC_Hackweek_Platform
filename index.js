import { useEffect, useState } from 'react';
import coscData from '../data/cosc.json';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const targetDate = new Date(coscData.endDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft("Hackweek has ended!");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{coscData.title}</h1>
      <p>{coscData.description}</p>
      <p><strong>Location:</strong> {coscData.location}</p>
      <h2>⏳ Countdown to Hackweek End:</h2>
      <div className={styles.timer}>
        {timeLeft !== null ? timeLeft : "Loading..."}
      </div>
    </div>
  );
}
