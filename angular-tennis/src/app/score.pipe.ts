import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {
  scoreStrings: string[] = ["Love", "15", "30", "40"];

  transform(thisScore: number, otherScore = 1): string {
    if(thisScore == otherScore && thisScore >= 3) {
      return "DEUCE";
    }
    if(thisScore > 3) {
      if(thisScore > otherScore) {
        if(thisScore - otherScore >= 2) {
          return "GAME";
        }
        return "ADV";
      }
      else {
        return "40";
      }
    }
    return this.scoreStrings[thisScore];
  }

}
