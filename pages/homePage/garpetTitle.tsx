import React from "react";
import Image from "next/image";
import styles from "../../styles/GarpetTitle.module.css"

const GarpetTitle = () => {
  return (
    <>
      <Image
        src={`/title_no_1.PNG`}
        height={120}
        width={120}
        alt="gou's"
        className={styles["img_no_1"]}
      />
      <Image
        src={`/title_no_2.PNG`}
        height={120}
        width={120}
        alt="gou's"
        className={styles["img_no_2"]}
      />
      <Image
        src={`/title_no_3.PNG`}
        height={120}
        width={120}
        alt="gou's"
        className={styles["img_no_3"]}
      />
      <Image
        src={`/title_no_4.PNG`}
        height={120}
        width={120}
        alt="gou's"
        className={styles["img_no_4"]}
      />
    </>
  )
}

export default GarpetTitle