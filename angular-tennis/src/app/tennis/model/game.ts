import { Player } from "./player";
import { Serve } from "./serve";

export class Game {
    private serves: Serve[];

    constructor(){
        this.serves = [];
    }

    updateGame(pointToP1: boolean): void{
        this.serves.push(new Serve(pointToP1));
    }

    getScores(): number[] {
        let p1 = 0;
        let p2 = 0;
        for(let serve of this.serves){
            if(serve.isP1Winner) p1++;
            else p2++;
        }
        return [p1, p2];
    }

    isGameOver(): boolean {
        let [p1, p2] = this.getScores();
        if(Math.abs(p1 - p2) >= 2 && Math.max(p1, p2) >= 4)
            return true;
        return false;
    }

    isP1Winner(): boolean {
        let [p1, p2] = this.getScores();
        if(this.isGameOver() && p1 > p2)
            return true;
        return false;
    }
}