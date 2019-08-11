// const board = [[],[],[]]
//const board = Array.from({length: 10}, Array.from({length:10}, ()=>''))
// functionn obstacles() {
//  return board.map((e,i,a)=>{
//  let randIndex =  Math.floor(Math.random() * 10)    
//     return board[i][randIndex]=='O'}) 
//}
//

// Rover Class 
class Rover {
    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.travelLog = [{
            x: this.x,
            y: this.y
        }];
        this.directions = ['N', 'E', 'S', 'W']; //'N' 
        //  for move for-backford...it didn't work
        //this.directions = [['N', this.x, this.y-1 ],['E',, this.x 1+, this.y], '[S', this.x, this.y+1 ], ['W', this.x-1, this.y]];
        this.idxOfDirections = 0;
        this.fieldY = ( this.y-1>= 0 && this.y + 1<= 9);
        this.fieldX = (this.x >= 0 && this.x <= 9 );
        // i will try to make tandom obstacle later...
        /*this.obstacles = [
                [x: Math.floor(Math.random() * 10, y: Math.floor(Math.random() * 10],
                [x: Math.floor(Math.random() * 10, y: Math.floor(Math.random() * 10],
                [x: Math.floor(Math.random() * 10, y: Math.floor(Math.random() * 10],
                [x: Math.floor(Math.random() * 10, y: Math.floor(Math.random() * 10],
                [x: Math.floor(Math.random() * 10, y: Math.floor(Math.random() * 10],
                [x: Math.floor(Math.random() * 10, y: Math.floor(Math.random() * 10],
                [x: Math.floor(Math.random() * 10, y: Math.floor(Math.random() * 10],
                [x: Math.floor(Math.random() * 10, y: Math.floor(Math.random() * 10],
                [x: Math.floor(Math.random() * 10, y: Math.floor(Math.random() * 10],
                [x: Math.floor(Math.random() * 10, y: Math.floor(Math.random() * 10],

            ]*/
    }
    // function for direction

    turnR = () => {
        this.idxOfDirections++;
        if (this.idxOfDirections + 1 > 4) {
            this.idxOfDirections = 0;
        }
        console.log(`${this.name} is now facing ${this.directions[this.idxOfDirections]}`);
    };
    turnL = () => {
        this.idxOfDirections--;
        if (this.idxOfDirections - 1 < -1) {
            this.idxOfDirections = this.directions.length - 1;
        }
        console.log(`${this.name} is now facing ${this.directions[this.idxOfDirections]}`);
    };


    /* //it was impossible but it could make something....!!!
    moveForward(){
       this.x = this.directions[this.idxOfDirections][1];
       this.y = this.directions[this.idxOfDirections][2];
       console.log(`${this.name} is now x: ${this.x} y: ${this.y}`);
       let newPosition = {
           x: this.x,
           y: this.y
       };
       this.travelLog.push(newPosition);
    } 
    */
    moveF() {
        //0 = north
         if (
           this.directions[this.idxOfDirections] === "N" && this.y-1 >= 0) {
           this.y--;
　　　　　　　 console.log(
             `${this.name} is now x: ${this.x} y: ${this.y}`
           );

           //1 = east
         } else if (
                  this.idxOfDirections[this.idxOfDirections] ===
                    "E" &&
                  this.x + 1 <= 9
                ) {
                  this.x++;
                  console.log(
                    `${this.name} is now x: ${this.x} y: ${
                      this.y
                    }`
                  );
                  //2 = south
                } else if (
                         this.idxOfDirections[
                           this.idxOfDirections
                         ] === "S" &&
                         this.y + 1 <= 9
                       ) {
                         this.y++;
                         console.log(
                           `${this.name} is now x: ${
                             this.x
                           } y: ${this.y}`
                         );
                         // 3 = west
                       } else if (
                                this.idxOfDirections[this.idxOfDirections] === "W" &&
                                this.x - 1 >= 0
                              ) {
                                this.x--;
                                console.log(
                                  `${
                                    this.name
                                  } is now x: ${
                                    this.x
                                  } y: ${this.y}`
                                );
                              } else {
                                console.log(
                                  `ouch..${
                                    this.name
                                  } hits the wall`
                                );
                              }
        let newPosition = {
            x: this.x,
            y: this.y
        };
        this.travelLog.push(newPosition);
    }
    moveB() {
         //0 = north
        if (
          this.idxOfDirections[this.idxOfDirections] === "N" &&
          this.y + 1 <= 9
        ) {
          this.y++;
          console.log(`${this.name} is now x: ${this.x} y: ${this.y}`);
        } else if (
                 this.idxOfDirections[this.idxOfDirections] ===
                   "E" && this.x - 1 >= 0
               ) {
                 this.x--;
                 console.log(
                   `${this.name} is now x: ${this.x} y: ${
                     this.y
                   }`
                 );
                 //2 = south
               } else if (
                 this.idxOfDirections[this.idxOfDirections] ===
                 "S" && this.y - 1 <= 0
               ) {
                 this.y--;
                 console.log(
                   `${this.name} is now x: ${this.x} y: ${
                     this.y
                   }`
                 );
               } else if (
                 this.idxOfDirections[this.idxOfDirections] ===
                   "W" &&this.x + 1 >= 9
               ) {
                 this.x++;
                 console.log(
                   `${this.name} is now x: ${this.x} y: ${
                     this.y
                   }`
                 );
               } else {
                 console.log(`ouch..${this.name} hits the wall`);
               }
        let newPosition = {
            x: this.x,
            y: this.y
        };
        this.travelLog.push(newPosition);
    }

/*    turn(this.direction, right){
        let idx = this.directions.indexOf(direction);
        idx += (right) ? 1 : -1 ;
       if(idx ===this.directions.length) {
           idx = 0;
       } else idx(idx < 0){
           idx = this.direction.length -1 ;
       }
        return this.directions[this.idx];

           },
       toString(){
           return this.directions[this.idx];
       }

       turnStupid(where){
        if(this.idxOfDirections===0){
            where==='right'?this.idxOfDirections=1:this.idxOfDirections=3
        } elseif(this.idxOfDirections===1){
            where==='right'?
        } elseif(){}
        else{}
       }
   */ 


}

//rover //
let rover001 = new Rover("rover-01", 2, 2);
let rover002 = new Rover("rover-02", 9, 9);
//rover001.turnLeft();
rover001.moveF();
rover001.moveF();
rover001.moveF();
rover001.moveF();
rover001.moveF();
rover001.travelLog;


function moveForward(rover) {
    console.log("moveForward was calleD");
}

function moveBackward(rover) {
    console.log("moveBackward was calleD");

}
moveForward(rover001);
moveForward(rover002);
moveBackward(rover001);
moveBackward(rover002);



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
    if (rover.theDirection === "N") {
        rover.theDirection = "W";
        console.log(`${rover.name} is now facing West`);
        rover.travelLog.push(placeToBe);
        // west -> south
    } else if (rover.theDirection === "W") {
        rover.theDirection = "S";
        console.log(`${rover.name} is now facing South`);
        // South -> east
    } else if (rover.theDirection === "S") {
        rover.theDirection = "E";
        console.log(`${rover.name} is now facing East`);
        // east -> north
    } else {
        rover.theDirection = "N";
        console.log(`${rover.name} is now facing North`);

    }

};

function turnRight(rover) {
    // North -> East
    if (rover.theDirection === "N") {
        rover.theDirection = "E";
        console.log(`${rover.name}is now facing East`);
        // East -> South
    } else if (rover.theDirection === "E") {
        rover.theDirection = "S";
        console.log(`${rover.name} is now facing South`);
        // South -> West
    } else if (rover.theDirection === "S") {
        rover.theDirection = "W";
        console.log(`${rover.name} is now facing West`);
        // West -> north
    } else {
        rover.theDirection = "N";
        console.log(`${rover.name} is now facing North`);
    }

}


// moving to forward
// (0<x<9, 0<y<9)
function moveForward(rover) {
    if (rover.theDirection === "N" && rover.y - 1 >= 0) {
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
    } else if (rover.theDirection === "S" && rover.y + 1 <= 9) {
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
    } else if (rover.theDirection === "W" && rover.x - 1 >= 0) {
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
    } else if (rover.theDirection === "E" && rover.x + 1 <= 9) {
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
function moveBackward(rover) {
    //position is South -> -1 : y
    if (rover.theDirection === "S" && rover.y - 1 >= 0) {
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
    } else if (rover.theDirection === "N" && rover.y + 1 <= 9) {
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
    } else if (rover.theDirection === "E" && rover.x - 1 >= 0) {
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
    } else if (rover.theDirection === "W" && rover.x + 1 <= 0) {
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

                moveForward
                    (rover);
                break;
            case "b": //backword
                moveBackward
                    (rover);
        }
    }
    console.log(rover.travelLog);
    positions[rover02.y][rover02.x] = " ";
};


// command function
commanD(rover001, "llf", rover002);
commanD(rover002, "f", rover001);


// =====================

function turnLeft(rover) {
    console.log("turnLeft was calleD!");
}

function turnRight(rover) {
    console.log("turnRight was calleD!");
}

function moveForward(rover) {
    console.log("moveForward was calleD");

}

function moveBackward(rover) {
    console.log("moveBackward was calleD");

}





/* moving to forward
  (0<x<9, 0<y<9
function moveForward
(rover) {
    
    if (rover.theDirection === "N" && rover.y - 1 >= 0) {
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
    } else if (rover.theDirection === "S" && rover.y + 1 <= 9) {
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
    } else if (rover.theDirection === "W" && rover.x - 1 >= 0) {
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
    } else if (rover.theDirection === "E" && rover.x + 1 <= 9) {
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
            
                moveForward
                (rover);
                break;
            case "b": //backword
                moveBackward
            (rover);
        }
    }
    console.log(rover.travelLog);
    positions[rover02.y][rover02.x] = " ";
};

commanD(rover001,"llf", rover002);
commanD(rover002, "f", rover001);

*/