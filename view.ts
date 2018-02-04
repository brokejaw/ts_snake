import { Board } from './board';

export class View {

    el: any;
    board: any;
    intervalId;

    keys = {
        38: "n",
        39: "e",
        40: "s",
        37: "w"
    }

    constructor(el, board) {
        // el is a jquery object
        this.el = el;
        this.board = board;
        this.intervalId = null;
    }

    render() {

    }

    step() {

    }

    handleKeyEvent() {

    }

    start() {

    }
}
