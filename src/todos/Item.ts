class TodoItem {
	protected id: string = ""
	protected name: string = ""
	protected description: string = ""
	protected datetime: datetime = ""
	protected remindTime: datetime = ""
	protected done: boolean = false

	public getID() { }
	public getName() { }
	public getDescription() { }
	public getDatetime() { }
	public getRemindTime() { }

	public setName(name: string) { }
	public setDescription(desc: string) { }
	public setDatetime(datetime: datetime) { }
	public setRemindTime(datetime: datetime) { }

	public markDone() { }
	public unmarkDone() { }
}