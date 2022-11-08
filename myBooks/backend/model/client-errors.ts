export class ClientError {
    public status: number;
    public message: string;

    constructor(status: number, message: string) {
        this.status = status;
        this.message = message;
    }
}

export class IdNotFoundError extends ClientError {
    public constructor(id: number) {
        super(404, `id ${id} not found`);
        //this.status = 404;
        //this.message = `id ${id} not found`;
    }
}

export class RouteNotFoundError extends ClientError {
    public constructor(route: string) {
        super(404, `{"status":"404","msg":"route ${route} not found"}`);
    }
}

export class ValidationError extends ClientError {
    public constructor(message: string) {
        super(400, message);
    }
}
