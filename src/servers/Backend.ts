class BackendServer extends Server {
	private dataManager: DataManager = new DataManager
	private userManager: UserManager = new UserManager
	private scheduleManager: ScheduleManager = new ScheduleManager
	private classManager: ClassManager = new ClassManager
	private todosManager: TodoManager = new TodoManager

	private getHandler: RestHandler = (req, res) => { }
	private postHandler: RestHandler = (req, res) => { }
	private deleteHandler: RestHandler = (req, res) => { }
}