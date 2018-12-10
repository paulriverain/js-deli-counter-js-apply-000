
function takeANumber(katzDeliLine, name){
  //katzDeliLine.push(`${name}`)

  let line = [...katzDeliLine, name]
  let firstLine = katzDeliLine.length + 1
  return `Welcome, ${name}. You are number ${firstLine} in line.`
}

//let line = [];
