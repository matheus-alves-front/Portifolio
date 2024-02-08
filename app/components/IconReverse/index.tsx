import Image from "next/image";

import styles from './styles.module.scss'

export function IconReverse({
  name,
  alt
}: {
  name: string,
  alt: string
}) {
  return (
    <div className={styles.IconReverseContainer}>
      <figure className={styles.IconReverse}>
        <Image 
          className={styles.normal}
          width={50} 
          height={50} 
          src={`/assets/icons/${name}.png`} 
          alt={alt}
        />
        <Image 
          className={styles.neon}
          width={80} 
          height={80} 
          src={`/assets/icons/${name}-neon.png`} 
          alt={name}
        />
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  )
}