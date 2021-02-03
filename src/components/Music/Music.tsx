import React from 'react'
import styles from './Music.scss'

export const Music = () => {
  const audio = new Audio('../../../public/music.mp3')
  const [playing, setPlaying] = React.useState(false)
  const toggle = () => setPlaying(!playing)

  React.useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing])

  React.useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [audio])

  return (
    <div className={styles.musicWrapper}>
      {/* <button onClick={playing}>Play</button> */}
      {/* <button onClick={() => setPlaying(false)}>close</button> */}
      <label className={styles.label}>
        <div className={styles.labelText}>Music</div>
        <div className={styles.toggle}>
          <input className={styles.toggleState} type="checkbox" name="music" onChange={toggle} />
          <div className={styles.indicator}></div>
        </div>
      </label>
    </div>
  )
}
