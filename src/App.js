import React, { useState } from 'react';
import './App.css';

function App() {
  // 데이터 선언
  const menus = ['Home', 'Shop', 'About'];
  const prices = [50, 55, 70];
  const products = ['역삼동원룸', '천호동원룸', '마포구원룸'];
  const content = [
    '침실만 따로 있는 공용 셰어하우스입니다. 최대 2인 가능',
    '2층 원룸입니다. 비올 때 물 가끔 들어오는거 빼면 좋아요',
    '살기 좋아요. 주변에 편의점 10개 넘어요.',
  ];

  // 신고 횟수 state
  const [reportCount, setReportCount] = useState([0, 0, 0]);
  // 모달 상태 관리
  const [modal, setModal] = useState(false);
  const [currentContent, setCurrentContent] = useState('');

  // 신고 증가 함수
  const handleReport = (index) => {
    const newReportCount = [...reportCount];
    newReportCount[index] += 1;
    setReportCount(newReportCount);
  };

  // 모달 열기 함수
  const handleModal = (index) => {
    setCurrentContent(content[index]);
    setModal(true);
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setModal(false);
    setCurrentContent('');
  };

  return (
    <div className="App">
      <nav className="menu">
        {menus.map((menu, index) => (
          <span key={index} className="menu-item">
            {menu}
          </span>
        ))}
      </nav>

      <div className="list-container">
        {products.map((product, index) => (
          <div key={index} className="list">
            <h4 onClick={() => handleModal(index)} className="title">
              {product}
            </h4>
            <p>가격: {prices[index]}만 원</p>
            <p>
              ☎ 허위매물 신고: {reportCount[index]}{' '}
              <button onClick={() => handleReport(index)}>신고하기</button>
            </p>
          </div>
        ))}
      </div>

      {/* 모달 창 */}
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <p>{currentContent}</p>
            <button onClick={closeModal}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
