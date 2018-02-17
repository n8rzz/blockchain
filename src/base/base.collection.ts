class BaseCollection<T> {
    public static count: number = 0;

    public id: number = BaseCollection.count++;
    public items: Set<T> = new Set();

    get length(): number {
        return this.items.size;
    }

    public addItem(item: T): void {
        this.items.add(item);
    }

    public removeItem(item: T): void {
        if (!this.items.has(item)) {
            return;
        }

        this.items.delete(item);
    }
}

export default BaseCollection;
