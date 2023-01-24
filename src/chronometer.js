class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    
      
  }

  start(printTimeCallback) {
    this.intervalId= setInterval(() => {
    this.currentTime +=1;
    if (typeof printTimeCallback == "function") 
    return printTimeCallback ()
  }, 1000);


  }

  getMinutes() {
 let minutesPassed = this.currentTime / 60
 let roundedNumber = Math.floor(minutesPassed)
  return roundedNumber;
  }

  getSeconds() {
  let  secondsPassed = this.currentTime % 60
  return secondsPassed
  }

  computeTwoDigitNumber(value) {
   let twoDigit = value.toString()
   if (twoDigit.length == 1) {return `0${twoDigit}` }
   else return twoDigit 
  
  }

  stop() {
    let stopinterval = clearInterval(this.intervalId)
    return stopinterval
    
  }

  reset() {
   this.currentTime = 0
   
  }

  split() {
    let twoMinutes = this.computeTwoDigitNumber(this.getMinutes())
    let twoSeconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${twoMinutes}:${twoSeconds}`
  }
}
