import React, { useState, useEffect } from "react";
function CountdownTimer() {

  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [second, setSecond] = useState('');
  const [change, setChange] = useState(false);
  const [final, setFinal] = useState('');

  useEffect(() => {
    finalHour();
    setTimeout(() => {
      setChange(!change);
    }, 1000);
  }, [change]);

  const finalHour = () => {
    const limitHour = '23'
    const limitMinutes = '59'
    const limitSeconds = '59'

    const date = new Date()

    let hour = date.getHours().toLocaleString()

    if (hour <= 9) {
      hour = '0' + hour

    }
    setHours(hour);

    let minutes = date.getMinutes().toLocaleString()

    if (minutes <= 9) {
      minutes = '0' + minutes

    }
    setMinutes(minutes);

    let seconds = date.getSeconds().toLocaleString();

    if (seconds <= 9) {
      seconds = '0' + seconds

    }
    setSecond(seconds);
    // console.log(seconds);

    let deadlinehour = limitHour - hour

    if (deadlinehour <= 9) {
      deadlinehour = '0' + deadlinehour
    }

    let deadlineMinutes = limitMinutes - minutes

    if (deadlineMinutes <= 9) {
      deadlineMinutes = '0' + deadlineMinutes
    }

    let deadlineSeconds = limitSeconds - seconds
    if (deadlineSeconds <= 9) {
      deadlineSeconds = '0' + deadlineSeconds
    }

    const deadline = `${deadlinehour}:${deadlineMinutes}:${deadlineSeconds}`
    setFinal(deadline);

  }
  // console.log(final);


  return (
    <div className="flex items-center z-50">
      <div className="flex gap-5 text-5xl">
        <div className="bg-[#1a1a1a] py-4 px-3 rounded-2xl w-20">{final.slice(0, 2)}<span className="block text-sm mt-1">hours</span></div>
        <div className="bg-[#1a1a1a] py-4 px-3 rounded-2xl w-20">{final.slice(3, 5)}<span className="block text-sm mt-1">minutes</span></div>
        <div className="bg-[#1a1a1a] py-4 px-3 rounded-2xl w-20">{final.slice(6, 8)}<span className="block text-sm mt-1">seconds</span></div>
      </div>

    </div>
  )
}

export default CountdownTimer;


// function CountdownTimer() {
//   const [timeLeft, setTimeLeft] = useState(null);
//   const [seconds, setSeconds] = useState(0);


//   useEffect(() => {
//     // Obtiene la fecha y hora límite
//     const deadline = new Date("December 31 2022 23:59:59").getTime();
//     //000000 mes variable, dia variable, año variable, 

//     // Calcula la diferencia entre la fecha y hora actual y la fecha y hora límite
//     const diff = deadline - new Date().getTime();

//     // Si aún no ha llegado la fecha y hora límite, actualiza el contador de tiempo
//     if (diff > 0) {
//       // Calcula el tiempo restante en días, horas, minutos y segundos
//       const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((diff % (1000 * 60)) / 1000);
//       setTimeout(() => {
//         setSeconds(seconds);
//       }, 1000);
//       // Establece el tiempo restante en el estado del componente
//       setTimeLeft({ days, hours, minutes, seconds });
//     }
//   }, [seconds]);

//   return (
//     <div>
//       {timeLeft
//         ? (`Tiempo restante: ${timeLeft.days} días, ${timeLeft.hours} horas, ${timeLeft.minutes} minutos y ${timeLeft.seconds} segundos
//         `) : ('La fecha y hora límite ya ha pasado')}
//     </div>
//   );
// }