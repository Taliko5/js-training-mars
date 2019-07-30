
 // Rover Object Goes Here
class Rover{
    constructor(name,x,y){
       this.name = name;
       this.x: x;
       this.y: y;
       this.travelLog: [{ x: this.x, y: this.y}];
    }
        const directions: ['N', 'E', 'S', 'W'];
        // function for direction
          turnRight(turn) {
            for (let i = 0; i < turn.length; i++){
             i +=1;
            console.log(`${this.name}is now facing ${this.directions[i]}`)
            if(i > 4){
                i = 0;
            }
        }
            }
          turnLeft(turn) {
               for (let i = 4; i < turn.length; i--) {
                   i -= 1;
                   console.log(`${this.name}is now facing ${this.directions[i]}`)
                   if (i < 0 ) {
                       i = 4;
                   }
               }
           }
    


        }

        
        
//rover //
let rover001 = new Rover("rover-01", 0, 0);
let rover002 = new Rover("rover-02", 9, 9);


//obstacles list
let obstacles = [
    [" ", "O", " ", "O", " ", " ", " ", " ", "O", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", "O", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", "O", " "],
    [" ", " ", " ", " ", "O", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", "O", "O"],
    [" ", " ", " ", " ", " ", "O", " ", " ", " ", " "],
    [" ", " ", " ", "O", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", "O", " ", " ", " ", " "],
    [" ", "O", " ", " ", " ", " ", " ", "O", " ", " "],
];
//rover's position
let positions = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
];



// when the rover rurns left

function turnLeft(rover) {
    // North -> west
    let placeToBe = ``;
    if (rover.direction === "N") {
        rover.direction = "W";
        console.log(`${rover.name} is now facing West`);
        rover.travelLog.push(placeToBe);
        // west -> south
    } else if (rover.direction === "W") {
        rover.direction = "S";
        console.log(`${rover.name} is now facing South`);
        // South -> east
    } else if (rover.direction === "S") {
        rover.direction = "E";
        console.log(`${rover.name} is now facing East`);
        // east -> north
    } else {
        rover.direction = "N";
        console.log(`${rover.name} is now facing North`);

    }

};

function turnRight(rover) {
    // North -> East
    if (rover.direction === "N") {
        rover.direction = "E";
        console.log(`${rover.name}is now facing East`);
        // East -> South
    } else if (rover.direction === "E") {
        rover.direction = "S";
        console.log(`${rover.name} is now facing South`);
        // South -> West
    } else if (rover.direction === "S") {
        rover.direction = "W";
        console.log(`${rover.name} is now facing West`);
        // West -> north
    } else {
        rover.direction = "N";
        console.log(`${rover.name} is now facing North`);
    }

}


// moving to forwarD  (0<x<9, 0<y<9
function moveForwarD(rover) {

    if (rover.direction === "N" && rover.y - 1 >= 0) {
        // if the rover moves to the obstacles
        if (obstacles[rover.y - 1][rover.x] === "O") {
            console.log(`ouch..your rover hit an obstable`);
            // if the rover moves to another rover
        } else if (positions[rover.y - 1][rover.x] === "R") {
            console.log(`ouch..your rover hit another rover`);
        } else {
            // motion
            rover.y--;
            console.log(`${rover.name} is now x: ${rover.x} y: ${rover.y}`);
            let newPosition = {
                x: rover.x,
                y: rover.y
            };
            rover.travelLog.push(newPosition);
        }
        //position is South -> +1 : y
    } else if (rover.direction === "S" && rover.y + 1 <= 9) {
        // if the rover moves to the obstacles
        if (obstacles[rover.y + 1][rover.x] === "O") {
            console.log(`ouch..your rover hit an obstable`);
            // if the rover moves to another rover
        } else if (positions[rover.y + 1][rover.x] === "R") {
            console.log(`ouch..your rover hit another rover`);
        } else {
            // motion
            rover.y++;
            console.log(`${rover.name} is now x: ${rover.x} y: ${rover.y}`);
            let newPosition = {
                x: rover.x,
                y: rover.y
            };
            rover.travelLog.push(newPosition);

        }
        //position is South -> -1 : X
    } else if (rover.direction === "W" && rover.x - 1 >= 0) {
        // if the rover moves to the obstacles
        if (obstacles[rover.y][rover.x - 1] === "O") {
            console.log(`ouch..your rover hit an obstable`);
            // if the rover moves to another rover
        } else if (positions[rover.y][rover.x - 1] === "R") {
            console.log(`ouch..your rover hit another rover`);
        } else {
            // motion
            rover.x--;
            console.log(`${rover.name} is now x: ${rover.x}, y: ${rover.y}`);
            let newPosition = {
                x: rover.x,
                y: rover.y
            };
            rover.travelLog.push(newPosition);
        }
        //position is South -> +1 : X
    } else if (rover.direction === "E" && rover.x + 1 <= 9) {
        // if the rover moves to the obstacles
        if (obstacles[rover.y][rover.x + 1] === "O") {
            console.log(`ouch..your rover hit an obstable`);
            // if the rover moves to another rover
        } else if (positions[rover.y][rover.x + 1] === "R") {
            console.log(`ouch..your rover hit another rover`);
        } else {
            //motion
            rover.x++;
            console.log(`${rover.name}is now x: ${rover.x} y: ${rover.y}`);
            let newPosition = {
                x: rover.x,
                y: rover.y
            };
            rover.travelLog.push(newPosition);
        }
    } else {
        console.log(`ouch..your rover hit the wall`);
        console.log(`${rover.name} is now  x: ${rover.x} y: ${rover.y}`);
    }
};




// moving to bachworD  (0<x<9, 0<y<9
function moveBackwarD(rover) {
    //position is South -> -1 : y
    if (rover.direction === "S" && rover.y - 1 >= 0) {
        // if the rover moves to the obstacles
        if (obstacles[rover.y - 1][rover.x] === "O") {
            console.log(`ouch..your rover hit an obstable`);
            // if the rover moves to another rover
        } else if (positions[rover.y - 1][rover.x] === "R") {
            console.log(`ouch..your rover hit another rover`);
        } else {
            //motion
            rover.y--;
            console.log(`${rover.name} is now x: ${rover.x} y: ${rover.y}`);
            let newPosition = {
                x: rover.x,
                y: rover.y
            };
            rover.travelLog.push(newPosition);
        }
        //position is North -> +1 : y
    } else if (rover.direction === "N" && rover.y + 1 <= 9) {
        // if the rover moves to the obstacles
        if (obstacles[rover.y + 1][rover.x] === "O") {
            console.log(`ouch..your rover hit an obstable`);
            // if the rover moves to another rover
        } else if (positions[rover.y + 1][rover.x] === "R") {
            console.log(`ouch..your rover hit another rover`);
        } else {
            //motion
            rover.y++;
            console.log(`${rover.name} is now x: ${rover.x} y: ${rover.y}`);
            let newPosition = {
                x: rover.x,
                y: rover.y
            };
            rover.travelLog.push(newPosition);
        }
        //position is East -> -1 : X
    } else if (rover.direction === "E" && rover.x - 1 >= 0) {
        // if the rover moves to the obstacles
        if (obstacles[rover.y][rover.x - 1] === "O") {
            console.log(`ouch..your rover hit an obstable`);
            // if the rover moves to another rover
        } else if (positions[rover.y][rover.x - 1] === "R") {
            console.log(`ouch..your rover hit another rover`);
        } else {
            //motion
            rover.x--;
            console.log(`${rover.name} is now x: ${rover.x}, y: ${rover.y}`);
            let newPosition = {
                x: rover.x,
                y: rover.y
            };
            rover.travelLog.push(newPosition);
        }
        //position is West-> +1 : X
    } else if (rover.direction === "W" && rover.x + 1 <= 0) {
        // if the rover moves to the obstacles
        if (obstacles[rover.y][rover.x + 1] === "O") {
            console.log(`ouch..your rover hit an obstable`);
            // if the rover moves to another rover
        } else if (positions[rover.y][rover.x + 1] === "R") {
            console.log(`ouch..your rover hit another rover`);
        } else {
            //motion
            rover.x++;
            console.log(`${rover.name} is now x: ${rover.x} y: ${rover.y}`);
            let newPosition = {
                x: rover.x,
                y: rover.y
            };
            rover.travelLog.push(newPosition);
        }

    } else {
        console.log(`ouch..your rover hit the wall`);
        console.log(`${rover.name} is now x: ${rover.x} y: ${rover.y}`);
    }
}


//commanD and tracking


function commanD(rover, orders, rover02) {
    positions[rover02.y][rover02.x] = "R";
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];
        switch (order) {
            case "l": //left
                turnLeft(rover);
                break;
            case "r": //right
                turnRight(rover);
                break;
            case "f": //forward
                moveForwarD(rover);
                break;
            case "b": //backword
                moveBackwarD(rover);
        }
    }
    console.log(rover.travelLog);
    positions[rover02.y][rover02.x] = " ";
};


// command function
commanD(rover001, "llf", rover002);
commanD(rover002, "f", rover001);


// ======================
function turnLeft(rover) {
    console.log("turnLeft was calleD!");
}

function turnRight(rover) {
    console.log("turnRight was calleD!");
}

function moveForwarD(rover) {
    console.log("moveForwarD was calleD");

}

function moveBackwarD(rover) {
    console.log("moveBackwarD was calleD");

}





/* moving to forwarD  (0<x<9, 0<y<9
function moveForwarD(rover) {
    
    if (rover.direction === "N" && rover.y - 1 >= 0) {
        if(obstacles[rover.y-1][rover.x] === "O"){
         console.log(`ouch..your rover hit an obstable`);
        
        } else if (positions[rover.y - 1][rover.x] === "R") {
          console.log(`ouch..your rover hit another rover`);
        }else {
        rover.y--;
        console.log(`Rover is now the position  x: ${rover.x} y: ${rover.y}`);
        let newPosition = {
            x: rover.x,
            y: rover.y
        };
        rover.travelLog.push(newPosition);
        }
        //position is South -> +1 : y
    } else if (rover.direction === "S" && rover.y + 1 <= 9) {
        if (obstacles[rover.y + 1][rover.x] === "O") {
            console.log(`ouch..your rover hit an obstable`);

        } else if (positions[rover.y + 1][rover.x] === "R") {
            console.log(`ouch..your rover hit another rover`);
        } else {
        rover.y++;
        console.log(`Rover is now the position  x: ${rover.x} y: ${rover.y}`);
        let newPosition = {
            x: rover.x,
            y: rover.y
        };
        rover.travelLog.push(newPosition);

        }
        //position is South -> -1 : X
    } else if (rover.direction === "W" && rover.x - 1 >= 0) {
        if (obstacles[rover.y][rover.x - 1] === "O") {
            console.log(`ouch..your rover hit an obstable`);

        } else if (positions[rover.y][rover.x - 1] === "R") {
            console.log(`ouch..your rover hit another rover`);
        } else {
        rover.x--;
        console.log(`Rover is now the position  x: ${rover.x}, y: ${rover.y}`);
        let newPosition = {
            x: rover.x,
            y: rover.y
        };
        rover.travelLog.push(newPosition);
         }
        //position is South -> +1 : X
    } else if (rover.direction === "E" && rover.x + 1 <= 9) {
        if (obstacles[rover.y][rover.x + 1] === "O") {
            console.log(`ouch..your rover hit an obstable`);

        } else if (positions[rover.y][rover.x + 1] === "R") {
            console.log(`ouch..your rover hit another rover`);
        } else {
        rover.x++;
        console.log(`Rover is now the position  x: ${rover.x} y: ${rover.y}`);
        let newPosition = {
            x: rover.x,
            y: rover.y
        };
        rover.travelLog.push(newPosition);
        }
    } else {
        console.log(`ouch..your rover hit the wall`);
        console.log(`Rover is now the position  x: ${rover.x} y: ${rover.y}`);
    }
};

function commanD(rover, orders, rover02) {
   positions[rover02.y][rover02.x] = "R";
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];
        switch (order) {
            case "l": //left
                turnLeft(rover);
                break;
            case "r": //right
                turnRight(rover);
                break;
            case "f": //forward
                moveForwarD(rover);
                break;
            case "b": //backword
                moveBackwarD(rover);
        }
    }
    console.log(rover.travelLog);
    positions[rover02.y][rover02.x] = " ";
};

commanD(rover001,"llf", rover002);
commanD(rover002, "f", rover001);

*/