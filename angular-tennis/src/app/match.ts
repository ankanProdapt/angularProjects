import { Set } from "./set";

export class Match {
    private sets: Set[];

    constructor() {
        this.sets = [new Set()];
    }

    updateMatch(pointToP1: boolean): void {
        if(this.isMatchOver()){
            return;
        }
        this.sets[this.sets.length - 1].updateSet(pointToP1);
        if(!this.isMatchOver() && this.sets[this.sets.length - 1].isSetOver()){
            this.sets.push(new Set());
        }
    }

    getLatestSet(): Set {
        return this.sets[this.sets.length - 1];
    }

    getScores(): number[] {
        let p1 = 0;
        let p2 = 0;
        for(let set of this.sets){
            if(set.isSetOver()){
                if(set.isP1Winner())
                    p1++;
                else
                    p2++;
            }
        }
        return [p1, p2];
    }

    isMatchOver(): boolean {
        let [p1, p2] = this.getScores();
        if(Math.max(p1, p2) >= 3)
            return true;
        return false;
    }

    isP1Winner(): boolean {
        let [p1, p2] = this.getScores();
        if(this.isMatchOver() && p1 > p2)
            return true;
        return false;
    }
}