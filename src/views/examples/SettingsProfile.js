import React, { useEffect, useState } from 'react'
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
import CustomHeader from "components/Headers/CustomHeader.js";
import UserDataService from '../../service/UserDataService'

export default function SettingsProfile(){

    //quando tiver context, trocar para o usuario em context
    const user = {
        id: 1,
        username: "User1",
        firstname: "User",
        lastname: "User",
        email: "User1@u1.com",
        address: "User There",
        city: "There",
        country: "Here",
        postalcode: "55",
        about: "Something about me",
        date: "2020-07-22T00:27:48.012Z",
        password: "1"
    }
    const [usuario, setUsuario] = useState(user)

    const [password, setPassword] = useState("")
    const [passwordValid, setPasswordValid] = useState()
    const [isStrong, setIsStrong]  = useState(false)
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [repeatNewPassword, setRepeatNewPassword] = useState("")
    const [currentUsername, setCurrentUsername] = useState("")
    
    const handleChansePassword= (e) =>{
        e.preventDefault()
        
        if(currentPassword !== ""){
            if (currentPassword === user.password){
                if(newPassword === repeatNewPassword && (isStrong)){
                    UserDataService.updateUserData(user.id, usuario)
                    .then(()=>{
                        alert("Senha alterada")
                        clearFieldsChangePassword()
                    })
                    .catch(error=>alert(error))
                }else{
                    if(newPassword !== repeatNewPassword)
                        alert("Novas senhas não coincidem")
                    else
                        alert("Informe uma nova senha forte")
                }
            }else{
                console.log(currentPassword)
                console.log(usuario.password)
                alert("Senha não é valida")
            }
        }else{
            alert("Porfavor informe a sua senha atual!")
        }
    }
    
    const handleDelete = (e) =>{
        e.preventDefault()
        if(currentUsername === usuario.username){
            UserDataService.deleteUser(user.id)
            .then(()=>{
                alert("Usuario Removido")
                clearFieldRemoveUser()
            })
            .catch(error => alert(error))
        }else{
            alert("Usuario informado não é valido")
        }
    }
     
    const handleCurrentPassword = (e) =>{
        setCurrentPassword(e.target.value)
    }
    
    const handleNewPassword = (e) =>{
        setNewPassword(e.target.value)
        HandlePassword(e)
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

    useEffect(()=>{
        setUsuario({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            address: user.address,
            city: user.city,
            country: user.country,
            postalcode: user.postalcode,
            about: user.about,
            date: user.date,
            password: newPassword
        })
    },[newPassword, repeatNewPassword])
    
    // adicionar no onchange do input da senha
    const HandlePassword = (e) => {
    const { name, value } = e.target
    setPasswordValid({ ...passwordValid, [name]: value })
    const strength = document.querySelector(".strength")
    let pass = e.target.value
    if (pass.length <= 7) {
        setPassword("Weak")
        strength.classList.add("text-danger")
        strength.classList.remove("text-success")
    } else {
        setPassword("Strong")
        strength.classList.add("text-success")
        strength.classList.remove("text-danger")
        setIsStrong(true)
    }
  }

    return (
    <>
      <CustomHeader 
        urlImage="https://mcdn.wallpapersafari.com/medium/90/27/pyE8zg.jpg"
        title="Configurações da sua conta"
        descripion="Troque sua senha ou apague sua conta em nosso serviço"
      />
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
                                <div className="text-muted font-italic">
                                    <small>
                                        password strength:{" "}
                                        <span className="strength font-weight-700">{password}</span>
                                    </small>
                                </div>
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