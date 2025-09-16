export default function two_crystal_balls(breaks: boolean[]): number {
    const totalFloors = breaks.length;
    const jumpStep = Math.floor(Math.sqrt(totalFloors));

    let currentFloor = jumpStep;

    for (; currentFloor < breaks.length; currentFloor += jumpStep) {
        if (breaks[currentFloor]) {
            break;
        }
    }

    currentFloor -= jumpStep;

    for (let i = 0; i < jumpStep; ++i, ++currentFloor) {
        if (breaks[currentFloor]) {
            return currentFloor;
        }
    }
    return -1;
}

two_crystal_balls([false, false, false, true, true]);
