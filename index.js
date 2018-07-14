function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(!katzDeliLine) return "There is nobody waiting to be served!"
  return `Currently serving ${katzDeliLine.shift()}`;
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length = 0) return "The line is currently empty."
  katzString = "The line is currently:"
  for(let i = 1; i<= katzDeliLine.length; i++){
    if(i === katzDeliLine.length){
      katzString += `${i}. ${katzDeliLine[i]}`
    } else katzString += `${i}. ${katzDeliLine[i]},`
  }
  return katzString;
}