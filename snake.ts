import { Coord, Apple } from './apple';

export class Snake {
    board: any;
    dir: string;
    segments: Coord[];

    DIFFS = {
        "n": new Coord(-1, 0),
        "s": new Coord(1, 0),
        "e": new Coord(0, 1),
        "w": new Coord(0, -1)
    }

    constructor(board) {
        this.dir = "n";
        this.board = board;

        let midPoint = (board.dim/2);
        let center = new Coord(midPoint, midPoint);
        this.segments = [center];
    }

    move() {
        let head = this.segments[this.segments.length - 1];
        let newHead = head.plus(this.DIFFS[this.dir]);

        if (this.isApple(newHead)) {
            this.segments.push(head.plus(this.DIFFS[this.dir]));
            this.board.apple.replace();
            this.board.incrementScore();
        } else if (this.board.isValidMove(head.plus(this.DIFFS[this.dir]))) {
            this.segments.push(head.plus(this.DIFFS[this.dir]));
            this.segments.shift();
        } else {
            this.segments = [];
        }
    }

    turn(newDir: string) {
        this.dir = newDir;
    }

    private isApple(headPos): boolean {
        let applePos = this.board.apple.position;
        return (headPos.x === applePos.x) && (headPos.y === applePos.y);
    }
}





