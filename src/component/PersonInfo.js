import React, { useState, useEffect } from 'react';


const PersonInfo = ({ currentPerson, personList }) => {
  const [resultName, setResultName] = useState("")
  const [resultCharge, setResultCharge] = useState("")
  const [resultImage, setResultImage] = useState("")

  useEffect(() => {
    if (Object.keys(currentPerson).length == 0) {
      setResultName(personList[0].name);
      setResultCharge(personList[0].charge);
      setResultImage(personList[0].image);
    } else {
      setResultName(currentPerson.name);
      setResultCharge(currentPerson.charge);
      setResultImage(currentPerson.image);
    }
  }, [currentPerson])

  return (
    <div className="wrap">
      <div className='B'>{resultName}</div>
      <div className='A'>{resultCharge}</div>
      {/* 상세페이지 */}
      <div className="profile">
        <img className="circle" src="image/직사각형.png"></img>
        <div style={{ position: "absolute", width: "250px", height: "300px", marginLeft: "40px", marginTop: "25px" }}>
          <img className="profilephoto" src={resultImage}></img>
        </div>
      </div>
      <div className="profiletxt">
        <br></br> <br></br>
        <div style={{ marginLeft: "500px", marginTop: "100px" }}>항상 도전하고 성장하는 프론트엔드 개발자입니다.</div>
        <div style={{ marginLeft: "500px" }}>많은 사람들과 소통하며 발전할 수 있어 좋았습니다.</div>
      </div>
    </div>
  );
}


export default PersonInfo;
