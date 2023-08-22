import React, { useRef } from "react";
import Image from "next/image";
import styles from "../../styles/GarpetCover.module.css";
import { useState } from "react";
// import { clearInterval } from "timers";
import { useCallback } from "react";
import { useEffect } from "react";

const GarpetCover = () => {
  const [rotateAngle, setRotateAngle] = useState(0)
  const [isSockDisplay, setIsSockDisplay] = useState(false)
  const [sockPosition, setSockPosition] = useState({
    x: 28,
    y: 35
  })

  const intervalIdRef = useRef(null)

  const garpetMouseEnterHandler = useCallback((e) => {
    console.log("e", e);
    setIsSockDisplay(true)
    // setSockPosition({
    //   x: e.screenX,
    //   y: e.screenY
    // })
    intervalIdRef.current = setInterval(() => {
      setRotateAngle(cur => cur + 0.1)
    }, 10)
  }, [])

  const garpetMouseLeaveHandler = useCallback(() => {
    clearInterval(intervalIdRef.current)
    intervalIdRef.current = null
    setIsSockDisplay(false)
  }, [])

  const garpetMouseMoveHandler = useCallback((e) => {
    console.log("move", e);
    setSockPosition({
      x: e.clientX,
      y: e.clientY
    })
  }, [])

  useEffect(() => {
    return () => clearInterval(intervalIdRef.current)
  }, [])

  
  return (
    <>
    <div>
      <Image
        src={`/garpet.PNG`}
        height={500}
        width={500}
        alt="yufan's garpet"
        className={styles["img-garpet"]}
        onMouseEnter={garpetMouseEnterHandler}
        onMouseLeave={garpetMouseLeaveHandler}
        onMouseMove={garpetMouseMoveHandler}
        style={{
          rotate: `${rotateAngle}deg`,
          zIndex: 9
        }}
      />
    </div>
      {
        isSockDisplay && (
          <Image
            src={`/socks.PNG`}
            height={50}
            width={50}
            alt="不准光脚在我家地毯上踩来踩去"
            className={styles["img-sock"]}
            style={{
              zIndex: 10,
              top: `${sockPosition.y}px`,
              left: `${sockPosition.x}px`
            }}
          />
        )
      }
    </>
  )
}

export default GarpetCover