import { useState } from "react";

function Signup({ users, setUsers }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!email || !password) {
      alert("이메일과 비밀번호를 입력하세요");
      return;
    }

    if (users.some(user => user.email === email)) {
      alert("이미 등록된 이메일 입니다!");
      return;
    }

    const newUser = { email, password };
    const storedUsers = JSON.parse(localStorage.getItem("user")) || [];
    storedUsers.push(newUser);
    localStorage.setItem("user", JSON.stringify(storedUsers));
    setUsers(storedUsers);
    alert("회원가입 완료!");
  };

  return (
    <div>
      <h2>회원가입</h2>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>회원가입</button>
    </div>
  );
}

export default Signup;