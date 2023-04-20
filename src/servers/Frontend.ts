class FrontendServer extends Server {
	private getUserdata(req: Request): User { return new User }
	private getSchedules(req: Request): Schedule { return new Schedule }
	private getTodoList(req: Request): TodoItem[] { return [] }
	private getWebpage(path: string): string { return "" }

	private getHandler: RestHandler = (req, res) => { }
	private postHandler: RestHandler = (req, res) => { }
	private deleteHandler: RestHandler = (req, res) => { }
}