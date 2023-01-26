import React, { useState, useEffect } from 'react';


const PersonInfo = ({currentPerson, personList }) =>{
  const [resultImage, setResultImage] = useState("")

  useEffect(() => {
    if (Object.keys(currentPerson).length == 0) {
      setResultImage(personList[0].image);
    } else {
      setResultImage(currentPerson.image);
    }
  }, [currentPerson])

  return (
    <div className="wrap">
       <div className='B'>{currentPerson.charge}</div>
        <div className='A'>{currentPerson.name}</div>
          {/* 상세페이지 */}
      <div className="profile">
        <img className="circle" src="image/직사각형.png"></img>
        <img className="profilephoto" src={ resultImage }></img>
        <div className="profiletxt">
          <br></br> <br></br>
              <div>항상 도전하고 성장하는 프론트엔드 개발자입니다.</div>
              <div>많은 사람들과 소통하며 발전할 수 있어 좋았습니다.</div>
        </div>
      </div>
    </div>
  );
}


export default PersonInfo;
