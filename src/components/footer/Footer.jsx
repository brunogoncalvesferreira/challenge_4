import styles from './Footer.module.css'
import logo from '../../assets/codi-logo.png'
import { MapPin } from 'phosphor-react'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.boxLeft}>
          <img src={logo} alt="Logo da Codi Acedemy" />
          <p>Programe seu futuro na Codi Academy 🚀</p>
        </div>

        <div className={styles.boxRight}>
          <h3>Fale conosco</h3>

          <div>
            <MapPin size={72} color="#fff" />
            <p>
              CRITT - Centro Regional de Inovação e Transferência de Tecnologia.
              Campus Universitário, s/n - martelos. Juiz de Fora. MG.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
