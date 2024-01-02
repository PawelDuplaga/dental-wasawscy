import styles from './hero.module.scss';
import Image from 'next/image';
import heroImg1 from '/public/heroImg1.png';
import heroImg2 from '/public/heroImg2.png'
import ButtonSquare from '../ButtonSquare/ButtonSquare';

const Title = () => {
  return (
    <h1 className={styles.heroTitle}>
      <div className={styles.textC1}>
        <div className={styles.bigNumber}>
          25
        </div>
        <div className={styles.textC2}>
          <div>LAT</div>
          <div>PROFESJONALNEJ</div>
        </div>
      </div>
      <div className={styles.textC3}>
        &<span>KOMFORTOWEJ</span>
      </div>
      <div className={styles.textC4}>
        <div>OPIEKI</div>
        <div>DENTYSTYCZNEJ</div>
      </div>
    </h1>
  )
}


const Hero = () => {
  return (
		<div className={styles.heroContainer}>
      <Title />
      <div className={styles.innerContainer}>
        <div className={styles.img1C}>
          <Image src={heroImg1} alt='' className={styles.img1}/>
        </div>
        <div className={styles.img2C}>
          <Image src={heroImg2} alt='' className={styles.img2}/>
        </div>
      </div>
      <div className={styles.buttonSection}>
        <div className={styles.button1C}>
          <ButtonSquare />
        </div>
        <div className={styles.button2C}>
          <ButtonSquare />
        </div>
      </div>
		</div>
  );
};

export default Hero