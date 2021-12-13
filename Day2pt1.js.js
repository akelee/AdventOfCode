const fs = require('fs')
const input = fs.readFileSync('input.txt').toString()

const inputArray = input.split('\n')
// forward 6
// down 2

const position = {horizontal: 0, depth: 0}

for (i = 0; i < inputArray.length; i++)
{
    line = inputArray[i]
    // forward 6

    commandAndValue = line.split(' ')
    // forward
    // 6
value = parseInt(commandAndValue[1])
    switch(commandAndValue[0]){
        case 'forward':
            position.horizontal += value // position.horizontal = position.horizontal + value
            break;
        
        case 'down':
            position.depth += value;
            break;
        
        case 'up':
            position.depth -= value // position.depth = position.depth - value
            break;
    
        default:
            console.log('invalid', command, value)
            break;
      }

}


console.log(position.horizontal * position.depth);






















// const MapOfCommands = inputArray.map(command => command.split(' ')).map(command => [command[0], +command[1]])


// {forward:3, down:6, up:2, }



// // First Part

// const position = {horizonatal: 0, depth: 0}

// for (const [command, value] of inputArray) {
//   switch(command){
//     case 'forward':
//       position.horizonatal += value
//       break;
    
//     case 'down':
//       position.depth += value;
//       break
    
//     case 'up':
//     position.depth -= value
//     break

//     default:
//       console.log('invalid', command, value)
//       break
//   }
// }

// console.log(position.horizonatal * position.depth)

// // Part 2

// const submarine = {
//   position: {
//     horizonatal: 0,
//     depth: 0
//   },
//   aim: 0
// }

// for (const [command, value] of inputArray){
//   switch(command){
//     case 'forward':
//       submarine.position.horizonatal += value
//       submarine.position.depth += value * submarine.aim
//       break;
    
//     case 'down':
//       submarine.aim += value
//       break;
    
//     case 'up':
//       submarine.aim -= value
//       break
//   }
// }

// console.log('Part two result: ', submarine.position.horizonatal*submarine.position.depth)