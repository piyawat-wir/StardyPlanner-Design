class ClassWork extends TodoItem {
	private subjectID: string = ""
	protected fullscore: number = 0
	protected score: number = 0
	protected deadline: datetime = this.datetime

	public getSubject() { }
	public getFullscore() { }
	public getScore() { }
	public getDeadline() { }

	public setSubject(id: string) { }
	public setFullscore(n: number) { }
	public setScore(n: number) { }
	public setDeadline(datetime: datetime) { }
}