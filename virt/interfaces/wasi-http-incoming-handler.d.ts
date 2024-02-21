export namespace WasiHttpIncomingHandler {
  export function handle(request: IncomingRequest, responseOut: ResponseOutparam): void;
  export { IncomingRequest };
  export { ResponseOutparam };
}

export class ResponseOutparam {
}

export class IncomingRequest {
}
