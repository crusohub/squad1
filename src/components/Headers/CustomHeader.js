import React from "react";
import { Container, Row, Col } from "reactstrap";


// PARA UTILIZAR O CUSTOMHEAER BASTA IMPORTA O COMPONENTE 
//E CHAMAR PASSANDO AS PROPRIEDADES (urlImage="", title="", descripion="") COMO NO EXEMPLO ABAIXO
// <CustomHeader 
//    urlImage="AQUI DEVE IR O LINK NA WEB DA IMAGEM"
//    title="Configurações da sua conta"
//    descripion="Troque sua senha ou apague sua conta em nosso serviço"
// />

const UserHeader = ({urlImage, title, descripion}) => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" +
            urlImage +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">{title}</h1>
              <p className="text-white mt-0 mb-5">
                {descripion}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
