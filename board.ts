import { Snake } from './snake';
import { Apple } from './apple';
import { Coord } from './apple';

export class Board {
    dim;
    highScore: number = 0;
    incrMod: number = 2;

    snake: Snake;
    score: number = 0;
    apple: Apple;
    
    constructor(dim) {
        this.dim = dim;
    }

    boardSetup() {
        this.score = 0;
        this.snake = new Snake(this);
        this.apple = new Apple(this);
        this.apple.replace();
    }

    isValidMove(coord: Coord): boolean {
        let insideBoard = 
            (coord.x <= this.dim) && (coord.x >= 0) &&
            (coord.y <= this.dim) && (coord.y >= 0);
        
        let isEmpty = 
            this.snake.segments.forEach((seg) => {
                if ((coord.x === seg.x) || (coord.y === seg.y)) {
                    return false;
                }
            });

        return insideBoard && !!isEmpty;
    }

    incrementScore() {
        this.score += this.incrMod;
        if (this.score >= this.highScore) {
            this.highScore = this.score;
        }
    }
   
}