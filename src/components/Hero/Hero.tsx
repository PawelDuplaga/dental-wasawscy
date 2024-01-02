import styles from './hero.module.scss';
import Image from 'next/image';
import heroImg1 from '/public/heroImg1.png';
import heroImg2 from '/public/heroImg2.png'

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
    </h1>
  )
}


const Hero = () => {
  return (
		<div className={styles.heroContainer}>
      <Title />
      <div className={styles.innerContainer}>
        <div className={styles.img1}>
          <Image src={heroImg1} alt='' width={260} height={446}/>
        </div>
        <div className={styles.img2}>
          <Image src={heroImg2} alt='' width={298} height={592}/>
        </div>
      dT</div>
		</div>
  );
};

export default Hero