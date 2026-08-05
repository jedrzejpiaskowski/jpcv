type LiteEventHandler<T> = (data?: T) => void;

interface ILiteEvent<T> {
	on(handler: LiteEventHandler<T>): void;
	off(handler: LiteEventHandler<T>): void;
}

export class LiteEvent<T> implements ILiteEvent<T> {
	private handlers: LiteEventHandler<T>[] = [];

	public on(handler: LiteEventHandler<T>): void {
		this.handlers.push(handler);
	}

	public off(handler: LiteEventHandler<T>): void {
		this.handlers = this.handlers.filter((h) => h !== handler);
	}

	public trigger(data?: T) {
		this.handlers.slice(0).forEach((h) => h(data));
	}

	public expose(): ILiteEvent<T> {
		return this;
	}
}
