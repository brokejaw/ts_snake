export class Coord {
    x;
    y;
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(newCoord): Coord {
      return new Coord(this.x + newCoord.x, this.y + newCoord.y);  
    }
}

export class Apple {

    board: any;
    position;

    constructor(board) {
        this.board = board;
        this.position = null;
    }

    replace() {
        // place new apple on board; need to check if snake already exists in location
        let x = Math.floor(Math.random() * this.board.dim);
        let y = Math.floor(Math.random() * this.board.dim);
        
        this.position = new Coord(x, y);
    }
}