export class ClientError{
    public status:number;
    public message:string;

    public constructor(status:number,message:string){
        this.status=status;
        this.message=message;
    }
}

export class IdNotFoundError extends ClientError{
    public constructor(id:number){
        super(404,`id ${id} not found`)
    }
}

export class RouteNotFoundErr extends ClientError{
    public constructor(route:string){
        super(404,`route ${route} not found`);
    }
}

export class ValidationError extends ClientError{
    public constructor(message:string){
        super(400,message);
    }
}
