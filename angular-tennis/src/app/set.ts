import { Game } from "./game";

export class Set {
    private games: Game[];

    constructor() {
        this.games = [new Game()];
    }

    updateSet(pointToP1: boolean): void {
        this.games[this.games.length - 1].updateGame(pointToP1);
        if(!this.isSetOver() && this.games[this.games.length - 1].isGameOver()){
            this.games.push(new Game());
        }
    }

    getLatestGame(): Game {
        return this.games[this.games.length - 1];
    }

    getScores(): number[] {
        let p1 = 0;
        let p2 = 0;
        for(let game of this.games){
            if(game.isGameOver()){
                if(game.isP1Winner())
                    p1++;
                else
                    p2++;
            }
        }
        return [p1, p2];
    }

    isSetOver(): boolean {
        let [p1, p2] = this.getScores();
        if(Math.abs(p1 - p2) >= 2 && Math.max(p1, p2) >= 6)
            return true;
        return false;
    }

    isP1Winner(): boolean {
        let [p1, p2] = this.getScores();
        if(this.isSetOver() && p1 > p2)
            return true;
        return false;
    }

}