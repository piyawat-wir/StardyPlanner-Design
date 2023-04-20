class Server {
	public start() { }
	public stop() { }

	public authenticate(req: Request) { }
	public addRequestHandler(method: RestMethod, handler: RestHandler) { }
	public sendResponse(res: Response) { }
}