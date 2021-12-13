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






















