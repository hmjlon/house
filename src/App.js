import "./App.css";
import { useState, useEffect } from "react";
import roomsData from "./data/oneroom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, useNavigate, Navigate, Link } from "react-router-dom";
import SignUp from "./pages/Signup";
import Login from "./pages/Login/";
import Listing from "./pages/Listing";
import Main from "./pages/Main";
import Apt from "./category/apt"
import Villa from "./category/villa"
import Oroom from "./category/oroom"

function App(){
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [menu, setMenu] = useState(["Home", "Shop", "About"]);
  const [roomsInfo, setRoomsInfo] = useState(roomsData);
  const [login, setLogin] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("user")) || [];
    setUsers(storedUsers);
  }, []);

  const handleLogin = (user) => {
    setCurrentUser(user);
    setLogin(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setLogin(false);
  };

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
          <Nav.Link onClick={()=>{
              navigate("/main")
            }}>
              Main
            </Nav.Link>
            <Nav.Link onClick={()=>{
              console.log(roomsInfo);
              navigate("/browse")
            }}>
              Browse
            </Nav.Link>
            {!login ? (
              <div className="d-flex gap-2">
                <Nav.Link onClick={()=>{
                  navigate("/login")
                }}>
                  로그인
                </Nav.Link>
                <Nav.Link onClick={()=>{
                  navigate("/signup")
                }}>
                  회원가입
                </Nav.Link>
              </div>
          ) : (
            <Nav.Link onClick={handleLogout}>
              로그아옷
            </Nav.Link>
          )}
          </Nav>
        </Container>
      </Navbar>
      {/* 라우터 처리 */}
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<Main/>}/>
        <Route path="/browse" element={<Listing
              roomsInfo={roomsInfo}
              setRoomsInfo = {setRoomsInfo}
              />}
        />
        <Route path="/login" element={<Login
              users={users}
              onLogin={handleLogin}
        />} />
        <Route path="/signup" element={<SignUp
              users={users}
              setUsers={setUsers}
        />} />
        <Route path="/apt" element={<Apt roomsInfo={roomsInfo}></Apt>}></Route>
        <Route path="/oroom" element={<Oroom roomsInfo={roomsInfo}></Oroom>}></Route>
        <Route path="/villa" element={<Villa roomsInfo={roomsInfo}></Villa>}></Route>
        <Route path="*" element={
          <div>
            <h4>
              404. That’s an error.
            </h4>
            <p>
              The requested URL /fdjsalflsadjfldsa was not found on this server. That’s all we know.
            </p>
          </div>
        } />
      </Routes>
    </div>
  )
}
export default App;