const ADDITION = 1;
const MULTIPLICATION = 2;
const EXIT = 99;

const exampleInput = '1,9,10,3,2,3,11,0,99,30,40,50';
const input = '1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,13,19,23,2,23,9,27,1,6,27,31,2,10,31,35,1,6,35,39,2,9,39,43,1,5,43,47,2,47,13,51,2,51,10,55,1,55,5,59,1,59,9,63,1,63,9,67,2,6,67,71,1,5,71,75,1,75,6,79,1,6,79,83,1,83,9,87,2,87,10,91,2,91,10,95,1,95,5,99,1,99,13,103,2,103,9,107,1,6,107,111,1,111,5,115,1,115,2,119,1,5,119,0,99,2,0,14,0'

function intCode(input) {
    const code = input.split(',').map(value => +value);
    let pointer = 0;
    let opCode = code[pointer];

    while (opCode !== EXIT) {
        let index1 = code[pointer + 1]
        let index2 = code[pointer + 2]
        let resultIndex = code[pointer + 3];
        let value1 = code[index1];
        let value2 = code[index2];
        let result;

        if (opCode === ADDITION) {
            result = value1 + value2;
        } else if (opCode === MULTIPLICATION) {
            result = value1 * value2;
        }
        code[resultIndex] = result;
        pointer = pointer + 4;
        opCode = code[pointer];
    }

    return code;
}


// Part 2

function intCode2(noun, verb) {
    const code = input.split(',').map(value => +value);
    code[1] = noun;
    code[2] = verb;
    let pointer = 0;
    let opCode = code[pointer];

    while (opCode !== EXIT) {
        let index1 = code[pointer + 1]
        let index2 = code[pointer + 2]
        let resultIndex = code[pointer + 3];
        let value1 = code[index1];
        let value2 = code[index2];
        let result;

        if (opCode === ADDITION) {
            result = value1 + value2;
        } else if (opCode === MULTIPLICATION) {
            result = value1 * value2;
        }
        code[resultIndex] = result;
        pointer = pointer + 4;
        opCode = code[pointer];
    }

    return code;
}

function part2() {
    const expectedResult = 19690720;
    for (let noun = 0; noun < 100; noun++) {
        for (let verb = 0; verb < 100; verb++) {
            const output = intCode2(noun, verb);
            if (expectedResult === output[0]) {
                return 100 * noun + verb;
            }
        }
    }
}

document.write(intCode(input));