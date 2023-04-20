class Grading {
	private portion: ScorePortion[] = []
	private sumOfScore: number = 0
	private overallScore: number = 0
	private percentScore: number = 0
	private standardType: GradingStandardType = "Normal"

	private standard: SimpleStandard = new SimpleStandard

	public calculate() { }
	public getPortion() { }
	public getStandard() { }
}