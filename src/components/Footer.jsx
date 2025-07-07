import { Container, Image, Navbar } from "react-bootstrap"
import { Envelope, Github, Linkedin } from "react-bootstrap-icons"
import brand from '../assets/isotipo.png'

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom" className="py-2">
      <Container className="d-flex flex-wrap flex-md-nowrap justify-content-between align-items-center gap-2 text-white px-3">
        <div className="d-flex align-items-center gap-2 flex-nowrap">
          <Image
            src={brand}
            height="20"
            alt="logo"
            className="d-inline-block"
          />
          <span className="fw-bold small text-nowrap">Mariano Giongrande (2025)</span>
        </div>
        <div className="d-flex align-items-center gap-3 flex-nowrap text-nowrap small">
          <a
            href="https://github.com/mgiongrande"
            className="text-white text-decoration-none d-flex align-items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <span className="d-none d-md-inline">mgiongrande</span>
          </a>

          <a
            href="mailto:mgiongrande@icloud.com"
            className="text-white text-decoration-none d-flex align-items-center gap-1"
          >
            <Envelope />
            <span className="d-none d-md-inline">mgiongrande@icloud.com</span>
          </a>

          <a
            href="https://linkedin.com/in/mariano-giongrande-b593a68"
            className="text-white text-decoration-none d-flex align-items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
            <span className="d-none d-md-inline">@mgiongrande</span>
          </a>
        </div>
      </Container>
    </Navbar>
  )
}

export default Footer