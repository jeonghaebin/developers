import React, { useState, useEffect } from 'react';
import Swiper from 'swiper';
import './App.css';
import PersonInfo from './component/PersonInfo';

function App() {
  const [personList, setPersonList] = useState([
    {
      name: "윤지애", charge: "Frontend", src: "image/윤지애님.png", image: "image/윤지애님투명.png",
      text: "항상 도전하고 성장하는 프론트엔드 개발자입니다. 많은 사람들과 소통하며 발전할 수 있어 좋았습니다."
    },
    { name: "임현석", charge: "Backend", src: "image/임현석님.png", image: "image/임현석님투명.png" },
    { name: "우유정", charge: "Designer", src: "image/우유정님.png", image: "image/우유정님투명.png" },
    { name: "밀크정", charge: "기획", src: "image/우유정2.png", image: "image/우유정2투명.png" },
    { name: "레제", charge: "Publisher", src: "image/윤지애2.png", image: "image/윤지애2투명.png" }
  ])
  const [currentPerson, setCurrentPerson] = useState({});

  useEffect(() => {
    console.log(currentPerson)
  }, [currentPerson]);

  const personInfo = (index) => {
    let tempPerson = personList[index];
    setCurrentPerson(tempPerson);
  }

  return (
    <div className="wrap">
      <div className="dvelopers">
        {personList.map((data, index) => {
          return(
            <a href="#"><div className='img' onClick={(e) => personInfo(index)}>
              <img className='photo' src={data.src} alt="" /></div>
              <span>{data.charge}</span><em>{data.name}</em></a>
          )
        })}
      </div>
      <PersonInfo
        currentPerson={currentPerson}
        personList={ personList }
      />
    </div>
    );

}



export default App;
