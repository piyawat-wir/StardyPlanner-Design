class Schedule {
	private id: string = ""
	private name: string = ""
	private color: string = ""
	private icon: string = ""
	private accessMode: AccessMode = "Private"

	private classes: Class[] = []

	public getID() { }
	public getName() { }
	public getColor() { }
	public getIcon() { }
	public getAccessMode() { }

	public setName(name: string) { }
	public setColor(color: string) { }
	public setIcon(icon: string) { }
	public setAccessMode(mode: AccessMode) { }

	public getClassList() { }
	public addClass(c: Class) { }
	public removeClass(id: string) { }
}