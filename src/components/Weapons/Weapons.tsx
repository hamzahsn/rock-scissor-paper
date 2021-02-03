import React from 'react'
import styles from './Weapons.scss'
import Paper from '../../assets/paper.svg'
import Rock from '../../assets/rock.svg'
import Scissor from '../../assets/scissors.svg'

interface IWeaponProps {
  handlePlayerWeapon: (weapon: number) => void
}
export const Weapons: React.FC<IWeaponProps> = ({ handlePlayerWeapon }) => {
  return (
    <div className={styles.weaponContainer}>
      <button type="button" className={styles.weaponImagesContainer} onClick={() => handlePlayerWeapon(0)}>
        <img src={Rock} alt="rock" className={styles.weaponImage} />
      </button>
      <button type="button" className={styles.weaponImagesContainer} onClick={() => handlePlayerWeapon(-1)}>
        <img src={Paper} alt="paper" className={styles.weaponImage} />
      </button>
      <button type="button" className={styles.weaponImagesContainer} onClick={() => handlePlayerWeapon(1)}>
        <img src={Scissor} alt="scissor" className={styles.weaponImage} />
      </button>
    </div>
  )
}
