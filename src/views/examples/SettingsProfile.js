import React, { } from 'react'
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import UserHeader from "components/Headers/UserHeader.js";

export default function SettingsProfile(){

    const handleChansePassword= (e) =>{
        e.preventDefault()
        const currentPassword = e.target.currentPassword.value
        const newPassword = e.target.newPassword.value
        const repeatNewPassword = e.target.repeatNewPassword.value
    
        console.log(`Senha antiga: ${currentPassword} \n Nova senha: ${newPassword} \n Repetindo nova senha: ${repeatNewPassword}`)
    }

    const handleDelete = (e) =>{
        e.preventDefault()
        const userName = e.target.userName.value
        console.log(`O usuario ${userName} foi excluido`)
    }

    return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
            <Row>
                <Col className="order-xl-1" xl="12">
                    <Card className="bg-secondary shadow">
                    <CardHeader className="bg-white border-0">
                        <Row className="align-items-center">
                        <Col xs="8">
                            <h3 className="mb-0">Trocar Senha</h3>
                        </Col>    
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={handleChansePassword}>
                        <h6 className="heading-small text-muted mb-4">
                            Dados para para Troca de Senha
                        </h6>
                        <div className="pl-lg-4">
                            <Row>
                            <Col lg="6">
                                <FormGroup>
                                <label
                                    className="form-control-label"
                                    htmlFor="currentPassword"
                                    >
                                    Senha Atual
                                </label>
                                <Input
                                    className="form-control-alternative"
                                    id="currentPassword"
                                    name="currentPassword"
                                    type="password"
                                    placeholder="Senha Atual"
                                    />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                            <Col lg="6">
                                <FormGroup>
                                <label
                                    className="form-control-label"
                                    htmlFor="newPassword"
                                    >
                                    Nova Senha
                                </label>
                                <Input
                                    className="form-control-alternative"
                                    id="newPassword"
                                    name="newPassword"
                                    placeholder="Nova Senha"
                                    type="password"
                                    />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                            <Col lg="6">
                                <FormGroup>
                                <label
                                    className="form-control-label"
                                    htmlFor="repeatNewPassword"
                                    >
                                    Confirmar Nova Senha
                                </label>
                                <Input
                                    className="form-control-alternative"
                                    id="repeatNewPassword"
                                    name="repeatNewPassword"
                                    placeholder="Repita a Nova Senha"
                                    type="password"
                                    />
                                </FormGroup>
                            </Col>
                            </Row>
                        </div>
                            <Button 
                                className="my-4" 
                                color="primary" 
                                type="submit"
                                >
                                Alterar Senha
                            </Button>
                        </Form>
                    </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className="order-xl-1" xl="12">
                    <Card className="bg-secondary shadow">
                    <CardHeader className="bg-white border-0">
                        <Row className="align-items-center">
                        <Col xs="8">
                            <h3 className="mb-0">Exclusão de Usuario</h3>
                        </Col>    
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={handleDelete}>
                        <h6 className="heading-small text-muted mb-4">
                           Dados para Exclusão de Usuario
                        </h6>
                        <div className="pl-lg-4">
                            <Row>
                            <Col lg="6">
                                <FormGroup>
                                <label
                                    className="form-control-label"
                                    htmlFor="userName"
                                    >
                                    Informe o seu username
                                </label>
                                <Input
                                    className="form-control-alternative"
                                    id="userName"
                                    name="userName"
                                    type="text"
                                    placeholder="Username"
                                    />
                                </FormGroup>
                            </Col>
                            </Row>
                        </div>
                            <Button 
                                className="my-4" 
                                color="primary" 
                                type="submit"
                                >
                                Deletar
                            </Button>
                        </Form>
                    </CardBody>
                    </Card>
                </Col>
            </Row>
      </Container>
    </>
    )
}