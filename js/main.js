// const hour = document.getElementById('clock-hour')
// const min = document.getElementById('clock-min')
// const sec = document.getElementById('clocks-second')

//  const clock = () =>{
//     let date = new Date()

//     let hh = date.getHours() * 30 
//     let mm = date.getMinutes() * 6 
//     let ss = date.getSeconds() * 6 

//    hour.style.transform =`rotateZ(${hh+mm/12}deg)`  ;
//    min.style.transform =`rotateZ(${mm}deg)`;
//    sec.style.transform =`rotateZ(${ss}deg)`
//  }  
 
//  setInterval(clock , 1000)
















const hour = document.getElementById('clock-hour'),
      minutes = document.getElementById('clock-minutes'),
      seconds = document.getElementById('clock-second')

const clock = () =>{
    let date = new Date()

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6
        
    // We add a rotation to the elements
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}
setInterval(clock, 1000) // 1000 = 1s
