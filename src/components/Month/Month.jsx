import  { useState } from 'react';
import g1 from '../../assets/images/g1.jpg';
import g2 from '../../assets/images/g2.jpg';
import g3 from '../../assets/images/g3.jpg';
import g4 from '../../assets/images/g4.jpg';
import g5 from '../../assets/images/g5.jpg';
import g6 from '../../assets/images/g6.avif';
import g7 from '../../assets/images/g7.jpg';
import g8 from '../../assets/images/g8.jpg';
import g9 from '../../assets/images/g9.jpg';
import g10 from '../../assets/images/g10.jpg';
import g11 from '../../assets/images/g11.jpg';
import g12 from '../../assets/images/g12.jpg';

const Month = () => {
  // const videoRef = useRef(null);
  const [clickedMonth, setClickedMonth] = useState(null);

  const smallDivStyle = 'mb-2 bg-gray-300 p-2';

  const handleMonthClick = (month) => {
    setClickedMonth(month);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Side */}
      <div className="flex-1 lg:ml-4 lg:text-center cursor-pointer">
        <div className={`${smallDivStyle} bg-[#C68824] mb-5`} onClick={() => handleMonthClick('January')}>January</div>
        <div className={`${smallDivStyle} bg-[#C68824] mb-5`} onClick={() => handleMonthClick('February')}>February</div>
        <div className={`${smallDivStyle} bg-[#C68824] mb-5`} onClick={() => handleMonthClick('March')}>March</div>
        <div className={`${smallDivStyle} bg-[#C68824] mb-5`} onClick={() => handleMonthClick('April')}>April</div>
        <div className={`${smallDivStyle} bg-[#C68824] mb-5`} onClick={() => handleMonthClick('May')}>May</div>
        <div className={`${smallDivStyle} bg-[#C68824] mb-5`} onClick={() => handleMonthClick('June')}>June</div>
      </div>

      {/* Center with Video or Image */}
      <div className="flex-1 lg:mx-4">
  {clickedMonth && (
    <img
      src={
        clickedMonth === 'January' ? g1 :
        clickedMonth === 'February' ? g2 :
        clickedMonth === 'March' ? g3 :
        clickedMonth === 'April' ? g4 :
        clickedMonth === 'May' ? g5 :
        clickedMonth === 'June' ? g6 :
        clickedMonth === 'July' ? g7 :
        clickedMonth === 'August' ? g8 :
        clickedMonth === 'September' ? g9 :
        clickedMonth === 'October' ? g10 :
        clickedMonth === 'November' ? g11 :
        clickedMonth === 'December' ? g12 :
        ''
      }
      alt={`${clickedMonth} Image`}
      className="w-full h-auto max-h-[350px]" 
    />
  )}
  {!clickedMonth && (
    <img src={g1} alt="Default Image" className="w-full h-auto max-h-[300px]" /> 
  )}
</div>

      {/* Right Side */}
      <div className="flex-1 lg:mr-4 lg:text-center cursor-pointer">
        <div className={`${smallDivStyle} bg-[#C68824] mb-5`} onClick={() => handleMonthClick('July')}>July</div>
        <div className={`${smallDivStyle} bg-[#C68824] mb-5`} onClick={() => handleMonthClick('August')}>August</div>
        <div className={`${smallDivStyle} bg-[#C68824] mb-5`} onClick={() => handleMonthClick('September')}>September</div>
        <div className={`${smallDivStyle} bg-[#C68824] mb-5`} onClick={() => handleMonthClick('October')}>October</div>
        <div className={`${smallDivStyle} bg-[#C68824] mb-5`} onClick={() => handleMonthClick('November')}>November</div>
        <div className={`${smallDivStyle} bg-[#C68824] mb-5`} onClick={() => handleMonthClick('December')}>December</div>
      </div>
    </div>
  );
};

export default Month;
