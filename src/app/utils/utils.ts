export class Utils {
    public static getRandomDigit(from: number, to: number): number {
        return Math.floor(Math.random() * (to - from)) + from;
    }
}