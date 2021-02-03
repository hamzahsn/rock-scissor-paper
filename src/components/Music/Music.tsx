import React from 'react'
import styles from './Music.scss'

export const Music = () => {
  const [playing, setPlaying] = React.useState(false)
  const toggle = () => setPlaying(!playing)

  const audio = React.useMemo(() => {
    return new Audio('../../../public/music.mp3')
  }, [])

  React.useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing])

  return (
    <div className={styles.musicWrapper}>
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
