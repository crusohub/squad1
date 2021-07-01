import React, { useContext, useEffect, useState } from 'react'
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
import { Context } from "../../context/AuthContext";

export default function SettingsProfile() {

    const { currentUser } = useContext(Context)
    const { handleLogout } = useContext(Context)

    const [usuario, setUsuario] = useState(currentUser)
    const [password, setPassword] = useState("")
    const [passwordValid, setPasswordValid] = useState()
    const [isStrong, setIsStrong] = useState(false)
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [repeatNewPassword, setRepeatNewPassword] = useState("")
    const [currentUsername, setCurrentUsername] = useState("")

    const handleChangePassword = (e) => {
        e.preventDefault()

        if (currentPassword !== "") {
            if (currentPassword === currentUser.password) {
                if (newPassword === repeatNewPassword && (isStrong)) {
                    UserDataService.updateUserData(currentUser.id, usuario)
                        .then(() => {
                            alert("Password Changed")
                            clearFieldsChangePassword()
                        })
                        .catch(error => alert(error))
                } else {
                    if (newPassword !== repeatNewPassword)
                        alert("New passwords do not match")
                    else
                        alert("Enter a new strong password")
                }
            } else {
                console.log(currentPassword)
                console.log(usuario.password)
                alert("Password is not valid")
            }
        } else {
            alert("Please enter your current password!")
        }
    }

    const handleDelete = (e) => {
        e.preventDefault()
        if (currentUsername === currentUser.username) {
            UserDataService.deleteUser(currentUser.id)
                .then(() => {
                    alert("User removed")
                    handleLogout()
                })
                .catch(error => alert(error))
        } else {
            alert("User informed is not valid")
        }
    }

    const handleCurrentPassword = (e) => {
        setCurrentPassword(e.target.value)
    }

    const handleNewPassword = (e) => {
        setNewPassword(e.target.value)
        HandlePassword(e)
    }

    const handleRepeatNewPassword = (e) => {
        setRepeatNewPassword(e.target.value)
    }

    function clearFieldsChangePassword() {
        setCurrentPassword("")
        setNewPassword("")
        setRepeatNewPassword("")
    }

    const handelCurrentUsername = (e) => {
        setCurrentUsername(e.target.value)
    }

    useEffect(() => {
        setUsuario({
            username: currentUser.username,
            firstname: currentUser.firstname,
            lastname: currentUser.lastname,
            email: currentUser.email,
            address: currentUser.address,
            city: currentUser.city,
            country: currentUser.country,
            postalcode: currentUser.postalcode,
            about: currentUser.about,
            date: currentUser.date,
            password: newPassword
        })
    }, [newPassword, repeatNewPassword])

    const HandlePassword = (e) => {
        const { name, value } = e.target
        setPasswordValid({ ...passwordValid, [name]: value })
        const strength = document.querySelector(".strength")
        let pass = e.target.value
        if (pass.length <= 7) {
            setPassword("Weak")
            strength.classList.add("text-danger")
            strength.classList.remove("text-success")
            setIsStrong(false)
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
                title="Your Account Settings"
                descripion="Change your password or delete your account on our service"
            />
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row>
                    <Col className="order-xl-1" xl="12">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">Change Password</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={handleChangePassword}>
                                    <h6 className="heading-small text-muted mb-4">
                                        Data for Password Change
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="currentPassword"
                                                    >
                                                        Current Password
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
                                                        New Password
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
                                                        Confirm New Password
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
                                        Change Password
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
                                        <h3 className="mb-0">User Exclusion</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={handleDelete}>
                                    <h6 className="heading-small text-muted mb-4">
                                        User Exclusion Data
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="userName"
                                                    >
                                                        Enter your username
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
                                        Delete
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