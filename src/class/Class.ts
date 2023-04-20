class Class {
	private id: string = ""
	private name: string = ""
	private roomNo: string = ""
	private professorName: string = ""

	private grading: Grading = new Grading
	private routines: Routine[] = []
	private works: ClassWork[] = []

	public getID() { }
	public getName() { }
	public getRoomNo() { }
	public getProfessorName() { }

	public setName(name: string) { }
	public setRoomNo(no: string) { }
	public setProfessorName(name: string) { }

	public updateGrading(grading: Grading) { }

	public addRoutine(routine: Routine) { }
	public updateRoutine(id: string, routine: Routine) { }
	public removeRoutine(id: string) { }
}