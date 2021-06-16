import React, { useState } from 'react'
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

    const [usuario, setUsuario] = useState({
        "id": "1",
        "username": "username 1",
        "firstname": "firstname 123",
        "lastname": "lastname 123",
        "email": "usuario@gmail.com",
        "address": "address 1",
        "city": "city 1",
        "country": "country 1",
        "postalcode": "postalcode 1",
        "about": "about 1",
        "": "username 1as",
        "password": "1"
    })

    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [repeatNewPassword, setRepeatNewPassword] = useState("")
    const [currentUsername, setCurrentUsername] = useState("")

    const handleChansePassword= (e) =>{
        e.preventDefault()

        if (currentPassword === usuario.password){
            if(newPassword === repeatNewPassword){
                setUsuario({
                    "id": "1",
                    "username": "username 1",
                    "firstname": "firstname 123",
                    "lastname": "lastname 123",
                    "email": "usuario@gmail.com",
                    "address": "address 1",
                    "city": "city 1",
                    "country": "country 1",
                    "postalcode": "postalcode 1",
                    "about": "about 1",
                    "": "username 1as",
                    "password": newPassword,
                })
                alert("Senha alterada")
                //Quando tiver o Context adicionar aqui a 
                //requisição http para o moki put passando o id do usuario a ser alterado e o {usuario} 
                //com o password alterado
                clearFieldsChangePassword()
            }else{
                alert("Novas senhas não coincidem")
            }
        }else{
            alert("Porfavor informe a sua senha atual!")
        }
    }

    const handleDelete = (e) =>{
        e.preventDefault()
        if(currentUsername === usuario.username){
            alert("Usuario Removido")
            //Quando tiver o Context adicionar aqui a requisição http para o moki delete  passando o id do usuario
            clearFieldRemoveUser()
        }else{
            alert("Usuario informado não é valido")
        }
    }

    const handleCurrentPassword = (e) =>{
        setCurrentPassword(e.target.value)
    }

    const handleNewPassword = (e) =>{
        setNewPassword(e.target.value)
    }

    const handleRepeatNewPassword = (e) =>{
        setRepeatNewPassword(e.target.value)
    }

    function clearFieldsChangePassword(){
        setCurrentPassword("")
        setNewPassword("")
        setRepeatNewPassword("")
    }

    const handelCurrentUsername = (e) => {
        setCurrentUsername(e.target.value)
    }

    function clearFieldRemoveUser(){
        setCurrentUsername("")
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
                                    onChange={handleCurrentPassword}
                                    value={currentPassword}
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
                                    onChange={handleNewPassword}
                                    value={newPassword}
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
                                    onChange={handleRepeatNewPassword}
                                    value={repeatNewPassword}
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
                                    onChange={handelCurrentUsername}
                                    value={currentUsername}
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