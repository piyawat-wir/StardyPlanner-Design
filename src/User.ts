class User {
	private id: string = ""
	private username: string = ""
	private password: string = ""
	private email: string = ""
	private name: string = ""
	private profilePicture: string = ""

	private friends: User[] = []
	private schedules: Schedule[] = []
	private todos: TodoItem[] = []

	public getID() { }
	public getUsername() { }
	public getEmail() { }
	public getName() { }
	public getProfilePicture() { }

	public getScheduleList() { }
	public addSchedule() { }
	public deleteSchedule() { }

	public getTodoList() { }
	public addTodoItem() { }
	public deleteTodoItem() { }

	public verifyPassword(password: string) { }
	public changeUsername(username: string) { }
	public changePassword(password: string) { }
	public changeEmail(email: string) { }
	public changeProfilePicture(picture: string) { }

	public getFriendList() { }
	public addFriend(id: string) { }
	public removeFriend(id: string) { }
}