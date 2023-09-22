export class Player {
    
    constructor(private name: string) {}

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }
}