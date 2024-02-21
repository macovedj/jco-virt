export namespace WasiHttpIncomingHandler {
  export function handle(request: IncomingRequest, responseOut: ResponseOutparam): void;
}
import type { IncomingRequest } from '../interfaces/wasi-http-types.js';
export { IncomingRequest };
import type { ResponseOutparam } from '../interfaces/wasi-http-types.js';
export { ResponseOutparam };
