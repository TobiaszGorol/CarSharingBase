import { Utils } from '../utils/utils';

export class Repository<T> {
    protected items: T[] = [];

    public getAll(): T[] {
        return this.items;
    }

    public getRandom(): T {
        return this.items[Utils.getRandomDigit(0, this.items.length-1)];
    }

    public add(item: T): void {
        this.items.push(item);
    }

    public delete(item: T): void {
        this.items.splice(this.items.indexOf(item), 1);
    }
}