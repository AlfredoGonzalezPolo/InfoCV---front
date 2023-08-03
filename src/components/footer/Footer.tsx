import "./Footer.scss";

export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <h3>NOSOTROS</h3>
        <ul className="footer-container_list">
          <li className="footer-container_list-item">AYUDA</li>
          <li className="footer-container_list-item">SEGURIDAD</li>
          <li className="footer-container_list-item">CONDICIONES LEGALES</li>
          <li className="footer-container_list-item">POLÍTICA DE PRIVACIDAD</li>
        </ul>
      </div>
      <div className="footer-container">
        <h3>SOBRE INFOCV</h3>
        <ul className="footer-container_list">
          <li className="footer-container_list-item">InfoCV hoy</li>
          <li className="footer-container_list-item">Trabaja con nosotros</li>
          <li className="footer-container_list-item">Ofertas de empleo</li>
        </ul>
      </div>
      <div className="footer-container">
        <h3>PRENSA</h3>
        <ul className="footer-container_list">
          <li className="footer-container_list-item">Notas de prensa</li>
          <li className="footer-container_list-item">Contacto de prensa</li>
          <li className="footer-container_list-item">Indicadores de INFOCV</li>
        </ul>
      </div>
    </footer>
  );
}
