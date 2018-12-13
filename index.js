//var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(`${name}`)
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  let i =0;
  while(i < katzDeliLine){
  i++;
} if (katzDeliLine.length > 0){
  return `Currently serving ${katzDeliLine.shift()}.`
}else{
  return 'There is nobody waiting to be served!'
}
}

function currentLine(katzDeliLine){
let onLine = [];
  for (let i = 0; i < katzDeliLine.length; i++){
    onLine.push(" "+[i+1]+". "+ katzDeliLine[i])
  }
  if (katzDeliLine.length > 0){
    return "The line is currently:"+ onLine
  }else{
    return "The line is currently empty."
  }
}
