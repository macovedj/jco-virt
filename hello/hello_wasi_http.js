import { stderr, stdin, stdout } from '@bytecodealliance/preview2-shim/cli';
import { types } from '@bytecodealliance/preview2-shim/http';
import { error, streams } from '@bytecodealliance/preview2-shim/io';
const { getStderr } = stderr;
const { getStdin } = stdin;
const { getStdout } = stdout;
const { Fields,
  IncomingRequest,
  OutgoingBody,
  OutgoingResponse,
  ResponseOutparam } = types;
const { Error: Error$1 } = error;
const { InputStream,
  OutputStream } = streams;

const base64Compile = str => WebAssembly.compile(typeof Buffer !== 'undefined' ? Buffer.from(str, 'base64') : Uint8Array.from(atob(str), b => b.charCodeAt(0)));

function clampGuest(i, min, max) {
  if (i < min || i > max) throw new TypeError(`must be between ${min} and ${max}`);
  return i;
}

let dv = new DataView(new ArrayBuffer());
const dataView = mem => dv.buffer === mem.buffer ? dv : dv = new DataView(mem.buffer);

const isNode = typeof process !== 'undefined' && process.versions && process.versions.node;
let _fs;
async function fetchCompile (url) {
  if (isNode) {
    _fs = _fs || await import('fs/promises');
    return WebAssembly.compile(await _fs.readFile(url));
  }
  return fetch(url).then(WebAssembly.compileStreaming);
}

function getErrorPayload(e) {
  if (e && hasOwnProperty.call(e, 'payload')) return e.payload;
  return e;
}

const handleTables = new Map();

const hasOwnProperty = Object.prototype.hasOwnProperty;

const instantiateCore = WebAssembly.instantiate;

const resourceHandleSymbol = Symbol('resource');

const symbolDispose = Symbol.dispose || Symbol.for('dispose');

const toUint64 = val => BigInt.asUintN(64, BigInt(val));

function toUint16(val) {
  val >>>= 0;
  val %= 2 ** 16;
  return val;
}

function toUint32(val) {
  return val >>> 0;
}

function toUint8(val) {
  val >>>= 0;
  val %= 2 ** 8;
  return val;
}

const utf8Decoder = new TextDecoder();

const utf8Encoder = new TextEncoder();

let utf8EncodedLen = 0;
function utf8Encode(s, realloc, memory) {
  if (typeof s !== 'string') throw new TypeError('expected a string');
  if (s.length === 0) {
    utf8EncodedLen = 0;
    return 1;
  }
  let allocLen = 0;
  let ptr = 0;
  let writtenTotal = 0;
  while (s.length > 0) {
    ptr = realloc(ptr, allocLen, 1, allocLen += s.length * 2);
    const { read, written } = utf8Encoder.encodeInto(
    s,
    new Uint8Array(memory.buffer, ptr + writtenTotal, allocLen - writtenTotal),
    );
    writtenTotal += written;
    s = s.slice(read);
  }
  utf8EncodedLen = writtenTotal;
  return ptr;
}

let exports0;

function trampoline1() {
  const ret = new Fields();
  if (!(ret instanceof Fields)) {
    throw new Error('Resource error: Not a valid "Fields" resource.');
  }
  var handle0 = handleCnt3++;
  handleTable3.set(handle0, { rep: ret, own: true });
  return handle0;
}

function trampoline2(arg0) {
  var handle1 = arg0;
  var rsc0 = handleTable3.get(handle1).rep;
  handleTable3.delete(handle1);
  const ret = new OutgoingResponse(rsc0);
  if (!(ret instanceof OutgoingResponse)) {
    throw new Error('Resource error: Not a valid "OutgoingResponse" resource.');
  }
  var handle2 = handleCnt5++;
  handleTable5.set(handle2, { rep: ret, own: true });
  return handle2;
}
let exports1;

function trampoline5() {
  const ret = getStderr();
  if (!(ret instanceof OutputStream)) {
    throw new Error('Resource error: Not a valid "OutputStream" resource.');
  }
  var handle0 = handleCnt1++;
  handleTable1.set(handle0, { rep: ret, own: true });
  return handle0;
}

function trampoline6() {
  const ret = getStdin();
  if (!(ret instanceof InputStream)) {
    throw new Error('Resource error: Not a valid "InputStream" resource.');
  }
  var handle0 = handleCnt2++;
  handleTable2.set(handle0, { rep: ret, own: true });
  return handle0;
}

function trampoline7() {
  const ret = getStdout();
  if (!(ret instanceof OutputStream)) {
    throw new Error('Resource error: Not a valid "OutputStream" resource.');
  }
  var handle0 = handleCnt1++;
  handleTable1.set(handle0, { rep: ret, own: true });
  return handle0;
}
let exports2;

function trampoline8(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
  var handle1 = arg0;
  var rsc0 = handleTable4.get(handle1).rep;
  handleTable4.delete(handle1);
  let variant36;
  switch (arg1) {
    case 0: {
      var handle3 = arg2;
      var rsc2 = handleTable5.get(handle3).rep;
      handleTable5.delete(handle3);
      variant36= {
        tag: 'ok',
        val: rsc2
      };
      break;
    }
    case 1: {
      let variant35;
      switch (arg2) {
        case 0: {
          variant35= {
            tag: 'DNS-timeout',
          };
          break;
        }
        case 1: {
          let variant5;
          switch (arg3) {
            case 0: {
              variant5 = undefined;
              break;
            }
            case 1: {
              var ptr4 = Number(arg4);
              var len4 = arg5;
              var result4 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr4, len4));
              variant5 = result4;
              break;
            }
            default: {
              throw new TypeError('invalid variant discriminant for option');
            }
          }
          let variant6;
          switch (arg6) {
            case 0: {
              variant6 = undefined;
              break;
            }
            case 1: {
              variant6 = clampGuest(arg7, 0, 65535);
              break;
            }
            default: {
              throw new TypeError('invalid variant discriminant for option');
            }
          }
          variant35= {
            tag: 'DNS-error',
            val: {
              rcode: variant5,
              infoCode: variant6,
            }
          };
          break;
        }
        case 2: {
          variant35= {
            tag: 'destination-not-found',
          };
          break;
        }
        case 3: {
          variant35= {
            tag: 'destination-unavailable',
          };
          break;
        }
        case 4: {
          variant35= {
            tag: 'destination-IP-prohibited',
          };
          break;
        }
        case 5: {
          variant35= {
            tag: 'destination-IP-unroutable',
          };
          break;
        }
        case 6: {
          variant35= {
            tag: 'connection-refused',
          };
          break;
        }
        case 7: {
          variant35= {
            tag: 'connection-terminated',
          };
          break;
        }
        case 8: {
          variant35= {
            tag: 'connection-timeout',
          };
          break;
        }
        case 9: {
          variant35= {
            tag: 'connection-read-timeout',
          };
          break;
        }
        case 10: {
          variant35= {
            tag: 'connection-write-timeout',
          };
          break;
        }
        case 11: {
          variant35= {
            tag: 'connection-limit-reached',
          };
          break;
        }
        case 12: {
          variant35= {
            tag: 'TLS-protocol-error',
          };
          break;
        }
        case 13: {
          variant35= {
            tag: 'TLS-certificate-error',
          };
          break;
        }
        case 14: {
          let variant7;
          switch (arg3) {
            case 0: {
              variant7 = undefined;
              break;
            }
            case 1: {
              variant7 = clampGuest(Number(arg4), 0, 255);
              break;
            }
            default: {
              throw new TypeError('invalid variant discriminant for option');
            }
          }
          let variant9;
          switch (arg5) {
            case 0: {
              variant9 = undefined;
              break;
            }
            case 1: {
              var ptr8 = arg6;
              var len8 = arg7;
              var result8 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr8, len8));
              variant9 = result8;
              break;
            }
            default: {
              throw new TypeError('invalid variant discriminant for option');
            }
          }
          variant35= {
            tag: 'TLS-alert-received',
            val: {
              alertId: variant7,
              alertMessage: variant9,
            }
          };
          break;
        }
        case 15: {
          variant35= {
            tag: 'HTTP-request-denied',
          };
          break;
        }
        case 16: {
          variant35= {
            tag: 'HTTP-request-length-required',
          };
          break;
        }
        case 17: {
          let variant10;
          switch (arg3) {
            case 0: {
              variant10 = undefined;
              break;
            }
            case 1: {
              variant10 = BigInt.asUintN(64, arg4);
              break;
            }
            default: {
              throw new TypeError('invalid variant discriminant for option');
            }
          }
          variant35= {
            tag: 'HTTP-request-body-size',
            val: variant10
          };
          break;
        }
        case 18: {
          variant35= {
            tag: 'HTTP-request-method-invalid',
          };
          break;
        }
        case 19: {
          variant35= {
            tag: 'HTTP-request-URI-invalid',
          };
          break;
        }
        case 20: {
          variant35= {
            tag: 'HTTP-request-URI-too-long',
          };
          break;
        }
        case 21: {
          let variant11;
          switch (arg3) {
            case 0: {
              variant11 = undefined;
              break;
            }
            case 1: {
              variant11 = Number(arg4) >>> 0;
              break;
            }
            default: {
              throw new TypeError('invalid variant discriminant for option');
            }
          }
          variant35= {
            tag: 'HTTP-request-header-section-size',
            val: variant11
          };
          break;
        }
        case 22: {
          let variant15;
          switch (arg3) {
            case 0: {
              variant15 = undefined;
              break;
            }
            case 1: {
              let variant13;
              switch (Number(arg4)) {
                case 0: {
                  variant13 = undefined;
                  break;
                }
                case 1: {
                  var ptr12 = arg5;
                  var len12 = arg6;
                  var result12 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr12, len12));
                  variant13 = result12;
                  break;
                }
                default: {
                  throw new TypeError('invalid variant discriminant for option');
                }
              }
              let variant14;
              switch (arg7) {
                case 0: {
                  variant14 = undefined;
                  break;
                }
                case 1: {
                  variant14 = arg8 >>> 0;
                  break;
                }
                default: {
                  throw new TypeError('invalid variant discriminant for option');
                }
              }
              variant15 = {
                fieldName: variant13,
                fieldSize: variant14,
              };
              break;
            }
            default: {
              throw new TypeError('invalid variant discriminant for option');
            }
          }
          variant35= {
            tag: 'HTTP-request-header-size',
            val: variant15
          };
          break;
        }
        case 23: {
          let variant16;
          switch (arg3) {
            case 0: {
              variant16 = undefined;
              break;
            }
            case 1: {
              variant16 = Number(arg4) >>> 0;
              break;
            }
            default: {
              throw new TypeError('invalid variant discriminant for option');
            }
          }
          variant35= {
            tag: 'HTTP-request-trailer-section-size',
            val: variant16
          };
          break;
        }
        case 24: {
          let variant18;
          switch (arg3) {
            case 0: {
              variant18 = undefined;
              break;
            }
            case 1: {
              var ptr17 = Number(arg4);
              var len17 = arg5;
              var result17 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr17, len17));
              variant18 = result17;
              break;
            }
            default: {
              throw new TypeError('invalid variant discriminant for option');
            }
          }
          let variant19;
          switch (arg6) {
            case 0: {
              variant19 = undefined;
              break;
            }
            case 1: {
              variant19 = arg7 >>> 0;
              break;
            }
            default: {
              throw new TypeError('invalid variant discriminant for option');
            }
          }
          variant35= {
            tag: 'HTTP-request-trailer-size',
            val: {
              fieldName: variant18,
              fieldSize: variant19,
            }
          };
          break;
        }
        case 25: {
          variant35= {
            tag: 'HTTP-response-incomplete',
          };
          break;
        }
        case 26: {
          let variant20;
          switch (arg3) {
            case 0: {
              variant20 = undefined;
              break;
            }
            case 1: {
              variant20 = Number(arg4) >>> 0;
              break;
            }
            default: {
              throw new TypeError('invalid variant discriminant for option');
            }
          }
          variant35= {
            tag: 'HTTP-response-header-section-size',
            val: variant20
          };
          break;
        }
        case 27: {
          let variant22;
          switch (arg3) {
            case 0: {
              variant22 = undefined;
              break;
            }
            case 1: {
              var ptr21 = Number(arg4);
              var len21 = arg5;
              var result21 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr21, len21));
              variant22 = result21;
              break;
            }
            default: {
              throw new TypeError('invalid variant discriminant for option');
            }
          }
          let variant23;
          switch (arg6) {
            case 0: {
              variant23 = undefined;
              break;
            }
            case 1: {
              variant23 = arg7 >>> 0;
              break;
            }
            default: {
              throw new TypeError('invalid variant discriminant for option');
            }
          }
          variant35= {
            tag: 'HTTP-response-header-size',
            val: {
              fieldName: variant22,
              fieldSize: variant23,
            }
          };
          break;
        }
        case 28: {
          let variant24;
          switch (arg3) {
            case 0: {
              variant24 = undefined;
              break;
            }
            case 1: {
              variant24 = BigInt.asUintN(64, arg4);
              break;
            }
            default: {
              throw new TypeError('invalid variant discriminant for option');
            }
          }
          variant35= {
            tag: 'HTTP-response-body-size',
            val: variant24
          };
          break;
        }
        case 29: {
          let variant25;
          switch (arg3) {
            case 0: {
              variant25 = undefined;
              break;
            }
            case 1: {
              variant25 = Number(arg4) >>> 0;
              break;
            }
            default: {
              throw new TypeError('invalid variant discriminant for option');
            }
          }
          variant35= {
            tag: 'HTTP-response-trailer-section-size',
            val: variant25
          };
          break;
        }
        case 30: {
          let variant27;
          switch (arg3) {
            case 0: {
              variant27 = undefined;
              break;
            }
            case 1: {
              var ptr26 = Number(arg4);
              var len26 = arg5;
              var result26 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr26, len26));
              variant27 = result26;
              break;
            }
            default: {
              throw new TypeError('invalid variant discriminant for option');
            }
          }
          let variant28;
          switch (arg6) {
            case 0: {
              variant28 = undefined;
              break;
            }
            case 1: {
              variant28 = arg7 >>> 0;
              break;
            }
            default: {
              throw new TypeError('invalid variant discriminant for option');
            }
          }
          variant35= {
            tag: 'HTTP-response-trailer-size',
            val: {
              fieldName: variant27,
              fieldSize: variant28,
            }
          };
          break;
        }
        case 31: {
          let variant30;
          switch (arg3) {
            case 0: {
              variant30 = undefined;
              break;
            }
            case 1: {
              var ptr29 = Number(arg4);
              var len29 = arg5;
              var result29 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr29, len29));
              variant30 = result29;
              break;
            }
            default: {
              throw new TypeError('invalid variant discriminant for option');
            }
          }
          variant35= {
            tag: 'HTTP-response-transfer-coding',
            val: variant30
          };
          break;
        }
        case 32: {
          let variant32;
          switch (arg3) {
            case 0: {
              variant32 = undefined;
              break;
            }
            case 1: {
              var ptr31 = Number(arg4);
              var len31 = arg5;
              var result31 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr31, len31));
              variant32 = result31;
              break;
            }
            default: {
              throw new TypeError('invalid variant discriminant for option');
            }
          }
          variant35= {
            tag: 'HTTP-response-content-coding',
            val: variant32
          };
          break;
        }
        case 33: {
          variant35= {
            tag: 'HTTP-response-timeout',
          };
          break;
        }
        case 34: {
          variant35= {
            tag: 'HTTP-upgrade-failed',
          };
          break;
        }
        case 35: {
          variant35= {
            tag: 'HTTP-protocol-error',
          };
          break;
        }
        case 36: {
          variant35= {
            tag: 'loop-detected',
          };
          break;
        }
        case 37: {
          variant35= {
            tag: 'configuration-error',
          };
          break;
        }
        case 38: {
          let variant34;
          switch (arg3) {
            case 0: {
              variant34 = undefined;
              break;
            }
            case 1: {
              var ptr33 = Number(arg4);
              var len33 = arg5;
              var result33 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr33, len33));
              variant34 = result33;
              break;
            }
            default: {
              throw new TypeError('invalid variant discriminant for option');
            }
          }
          variant35= {
            tag: 'internal-error',
            val: variant34
          };
          break;
        }
        default: {
          throw new TypeError('invalid variant discriminant for ErrorCode');
        }
      }
      variant36= {
        tag: 'err',
        val: variant35
      };
      break;
    }
    default: {
      throw new TypeError('invalid variant discriminant for expected');
    }
  }
  ResponseOutparam.set(rsc0, variant36);
}
let memory0;

function trampoline9(arg0, arg1) {
  var handle1 = arg0;
  var rsc0 = handleTable5.get(handle1).rep;
  let ret;
  try {
    ret = { tag: 'ok', val: OutgoingResponse.prototype.body.call(rsc0) };
  } catch (e) {
    ret = { tag: 'err', val: getErrorPayload(e) };
  }
  var variant3 = ret;
  switch (variant3.tag) {
    case 'ok': {
      const e = variant3.val;
      dataView(memory0).setInt8(arg1 + 0, 0, true);
      if (!(e instanceof OutgoingBody)) {
        throw new Error('Resource error: Not a valid "OutgoingBody" resource.');
      }
      var handle2 = handleCnt6++;
      handleTable6.set(handle2, { rep: e, own: true });
      dataView(memory0).setInt32(arg1 + 4, handle2, true);
      break;
    }
    case 'err': {
      const e = variant3.val;
      dataView(memory0).setInt8(arg1 + 0, 1, true);
      break;
    }
    default: {
      throw new TypeError('invalid variant specified for result');
    }
  }
}

function trampoline10(arg0, arg1) {
  var handle1 = arg0;
  var rsc0 = handleTable6.get(handle1).rep;
  let ret;
  try {
    ret = { tag: 'ok', val: OutgoingBody.prototype.write.call(rsc0) };
  } catch (e) {
    ret = { tag: 'err', val: getErrorPayload(e) };
  }
  var variant3 = ret;
  switch (variant3.tag) {
    case 'ok': {
      const e = variant3.val;
      dataView(memory0).setInt8(arg1 + 0, 0, true);
      if (!(e instanceof OutputStream)) {
        throw new Error('Resource error: Not a valid "OutputStream" resource.');
      }
      var handle2 = handleCnt1++;
      handleTable1.set(handle2, { rep: e, own: true });
      dataView(memory0).setInt32(arg1 + 4, handle2, true);
      break;
    }
    case 'err': {
      const e = variant3.val;
      dataView(memory0).setInt8(arg1 + 0, 1, true);
      break;
    }
    default: {
      throw new TypeError('invalid variant specified for result');
    }
  }
}

function trampoline11(arg0, arg1, arg2, arg3) {
  var handle1 = arg0;
  var rsc0 = handleTable6.get(handle1).rep;
  handleTable6.delete(handle1);
  let variant4;
  switch (arg1) {
    case 0: {
      variant4 = undefined;
      break;
    }
    case 1: {
      var handle3 = arg2;
      var rsc2 = handleTable3.get(handle3).rep;
      handleTable3.delete(handle3);
      variant4 = rsc2;
      break;
    }
    default: {
      throw new TypeError('invalid variant discriminant for option');
    }
  }
  let ret;
  try {
    ret = { tag: 'ok', val: OutgoingBody.finish(rsc0, variant4) };
  } catch (e) {
    ret = { tag: 'err', val: getErrorPayload(e) };
  }
  var variant43 = ret;
  switch (variant43.tag) {
    case 'ok': {
      const e = variant43.val;
      dataView(memory0).setInt8(arg3 + 0, 0, true);
      break;
    }
    case 'err': {
      const e = variant43.val;
      dataView(memory0).setInt8(arg3 + 0, 1, true);
      var variant42 = e;
      switch (variant42.tag) {
        case 'DNS-timeout': {
          dataView(memory0).setInt8(arg3 + 8, 0, true);
          break;
        }
        case 'DNS-error': {
          const e = variant42.val;
          dataView(memory0).setInt8(arg3 + 8, 1, true);
          var {rcode: v5_0, infoCode: v5_1 } = e;
          var variant7 = v5_0;
          if (variant7 === null || variant7=== undefined) {
            dataView(memory0).setInt8(arg3 + 16, 0, true);
          } else {
            const e = variant7;
            dataView(memory0).setInt8(arg3 + 16, 1, true);
            var ptr6 = utf8Encode(e, realloc0, memory0);
            var len6 = utf8EncodedLen;
            dataView(memory0).setInt32(arg3 + 24, len6, true);
            dataView(memory0).setInt32(arg3 + 20, ptr6, true);
          }
          var variant8 = v5_1;
          if (variant8 === null || variant8=== undefined) {
            dataView(memory0).setInt8(arg3 + 28, 0, true);
          } else {
            const e = variant8;
            dataView(memory0).setInt8(arg3 + 28, 1, true);
            dataView(memory0).setInt16(arg3 + 30, toUint16(e), true);
          }
          break;
        }
        case 'destination-not-found': {
          dataView(memory0).setInt8(arg3 + 8, 2, true);
          break;
        }
        case 'destination-unavailable': {
          dataView(memory0).setInt8(arg3 + 8, 3, true);
          break;
        }
        case 'destination-IP-prohibited': {
          dataView(memory0).setInt8(arg3 + 8, 4, true);
          break;
        }
        case 'destination-IP-unroutable': {
          dataView(memory0).setInt8(arg3 + 8, 5, true);
          break;
        }
        case 'connection-refused': {
          dataView(memory0).setInt8(arg3 + 8, 6, true);
          break;
        }
        case 'connection-terminated': {
          dataView(memory0).setInt8(arg3 + 8, 7, true);
          break;
        }
        case 'connection-timeout': {
          dataView(memory0).setInt8(arg3 + 8, 8, true);
          break;
        }
        case 'connection-read-timeout': {
          dataView(memory0).setInt8(arg3 + 8, 9, true);
          break;
        }
        case 'connection-write-timeout': {
          dataView(memory0).setInt8(arg3 + 8, 10, true);
          break;
        }
        case 'connection-limit-reached': {
          dataView(memory0).setInt8(arg3 + 8, 11, true);
          break;
        }
        case 'TLS-protocol-error': {
          dataView(memory0).setInt8(arg3 + 8, 12, true);
          break;
        }
        case 'TLS-certificate-error': {
          dataView(memory0).setInt8(arg3 + 8, 13, true);
          break;
        }
        case 'TLS-alert-received': {
          const e = variant42.val;
          dataView(memory0).setInt8(arg3 + 8, 14, true);
          var {alertId: v9_0, alertMessage: v9_1 } = e;
          var variant10 = v9_0;
          if (variant10 === null || variant10=== undefined) {
            dataView(memory0).setInt8(arg3 + 16, 0, true);
          } else {
            const e = variant10;
            dataView(memory0).setInt8(arg3 + 16, 1, true);
            dataView(memory0).setInt8(arg3 + 17, toUint8(e), true);
          }
          var variant12 = v9_1;
          if (variant12 === null || variant12=== undefined) {
            dataView(memory0).setInt8(arg3 + 20, 0, true);
          } else {
            const e = variant12;
            dataView(memory0).setInt8(arg3 + 20, 1, true);
            var ptr11 = utf8Encode(e, realloc0, memory0);
            var len11 = utf8EncodedLen;
            dataView(memory0).setInt32(arg3 + 28, len11, true);
            dataView(memory0).setInt32(arg3 + 24, ptr11, true);
          }
          break;
        }
        case 'HTTP-request-denied': {
          dataView(memory0).setInt8(arg3 + 8, 15, true);
          break;
        }
        case 'HTTP-request-length-required': {
          dataView(memory0).setInt8(arg3 + 8, 16, true);
          break;
        }
        case 'HTTP-request-body-size': {
          const e = variant42.val;
          dataView(memory0).setInt8(arg3 + 8, 17, true);
          var variant13 = e;
          if (variant13 === null || variant13=== undefined) {
            dataView(memory0).setInt8(arg3 + 16, 0, true);
          } else {
            const e = variant13;
            dataView(memory0).setInt8(arg3 + 16, 1, true);
            dataView(memory0).setBigInt64(arg3 + 24, toUint64(e), true);
          }
          break;
        }
        case 'HTTP-request-method-invalid': {
          dataView(memory0).setInt8(arg3 + 8, 18, true);
          break;
        }
        case 'HTTP-request-URI-invalid': {
          dataView(memory0).setInt8(arg3 + 8, 19, true);
          break;
        }
        case 'HTTP-request-URI-too-long': {
          dataView(memory0).setInt8(arg3 + 8, 20, true);
          break;
        }
        case 'HTTP-request-header-section-size': {
          const e = variant42.val;
          dataView(memory0).setInt8(arg3 + 8, 21, true);
          var variant14 = e;
          if (variant14 === null || variant14=== undefined) {
            dataView(memory0).setInt8(arg3 + 16, 0, true);
          } else {
            const e = variant14;
            dataView(memory0).setInt8(arg3 + 16, 1, true);
            dataView(memory0).setInt32(arg3 + 20, toUint32(e), true);
          }
          break;
        }
        case 'HTTP-request-header-size': {
          const e = variant42.val;
          dataView(memory0).setInt8(arg3 + 8, 22, true);
          var variant19 = e;
          if (variant19 === null || variant19=== undefined) {
            dataView(memory0).setInt8(arg3 + 16, 0, true);
          } else {
            const e = variant19;
            dataView(memory0).setInt8(arg3 + 16, 1, true);
            var {fieldName: v15_0, fieldSize: v15_1 } = e;
            var variant17 = v15_0;
            if (variant17 === null || variant17=== undefined) {
              dataView(memory0).setInt8(arg3 + 20, 0, true);
            } else {
              const e = variant17;
              dataView(memory0).setInt8(arg3 + 20, 1, true);
              var ptr16 = utf8Encode(e, realloc0, memory0);
              var len16 = utf8EncodedLen;
              dataView(memory0).setInt32(arg3 + 28, len16, true);
              dataView(memory0).setInt32(arg3 + 24, ptr16, true);
            }
            var variant18 = v15_1;
            if (variant18 === null || variant18=== undefined) {
              dataView(memory0).setInt8(arg3 + 32, 0, true);
            } else {
              const e = variant18;
              dataView(memory0).setInt8(arg3 + 32, 1, true);
              dataView(memory0).setInt32(arg3 + 36, toUint32(e), true);
            }
          }
          break;
        }
        case 'HTTP-request-trailer-section-size': {
          const e = variant42.val;
          dataView(memory0).setInt8(arg3 + 8, 23, true);
          var variant20 = e;
          if (variant20 === null || variant20=== undefined) {
            dataView(memory0).setInt8(arg3 + 16, 0, true);
          } else {
            const e = variant20;
            dataView(memory0).setInt8(arg3 + 16, 1, true);
            dataView(memory0).setInt32(arg3 + 20, toUint32(e), true);
          }
          break;
        }
        case 'HTTP-request-trailer-size': {
          const e = variant42.val;
          dataView(memory0).setInt8(arg3 + 8, 24, true);
          var {fieldName: v21_0, fieldSize: v21_1 } = e;
          var variant23 = v21_0;
          if (variant23 === null || variant23=== undefined) {
            dataView(memory0).setInt8(arg3 + 16, 0, true);
          } else {
            const e = variant23;
            dataView(memory0).setInt8(arg3 + 16, 1, true);
            var ptr22 = utf8Encode(e, realloc0, memory0);
            var len22 = utf8EncodedLen;
            dataView(memory0).setInt32(arg3 + 24, len22, true);
            dataView(memory0).setInt32(arg3 + 20, ptr22, true);
          }
          var variant24 = v21_1;
          if (variant24 === null || variant24=== undefined) {
            dataView(memory0).setInt8(arg3 + 28, 0, true);
          } else {
            const e = variant24;
            dataView(memory0).setInt8(arg3 + 28, 1, true);
            dataView(memory0).setInt32(arg3 + 32, toUint32(e), true);
          }
          break;
        }
        case 'HTTP-response-incomplete': {
          dataView(memory0).setInt8(arg3 + 8, 25, true);
          break;
        }
        case 'HTTP-response-header-section-size': {
          const e = variant42.val;
          dataView(memory0).setInt8(arg3 + 8, 26, true);
          var variant25 = e;
          if (variant25 === null || variant25=== undefined) {
            dataView(memory0).setInt8(arg3 + 16, 0, true);
          } else {
            const e = variant25;
            dataView(memory0).setInt8(arg3 + 16, 1, true);
            dataView(memory0).setInt32(arg3 + 20, toUint32(e), true);
          }
          break;
        }
        case 'HTTP-response-header-size': {
          const e = variant42.val;
          dataView(memory0).setInt8(arg3 + 8, 27, true);
          var {fieldName: v26_0, fieldSize: v26_1 } = e;
          var variant28 = v26_0;
          if (variant28 === null || variant28=== undefined) {
            dataView(memory0).setInt8(arg3 + 16, 0, true);
          } else {
            const e = variant28;
            dataView(memory0).setInt8(arg3 + 16, 1, true);
            var ptr27 = utf8Encode(e, realloc0, memory0);
            var len27 = utf8EncodedLen;
            dataView(memory0).setInt32(arg3 + 24, len27, true);
            dataView(memory0).setInt32(arg3 + 20, ptr27, true);
          }
          var variant29 = v26_1;
          if (variant29 === null || variant29=== undefined) {
            dataView(memory0).setInt8(arg3 + 28, 0, true);
          } else {
            const e = variant29;
            dataView(memory0).setInt8(arg3 + 28, 1, true);
            dataView(memory0).setInt32(arg3 + 32, toUint32(e), true);
          }
          break;
        }
        case 'HTTP-response-body-size': {
          const e = variant42.val;
          dataView(memory0).setInt8(arg3 + 8, 28, true);
          var variant30 = e;
          if (variant30 === null || variant30=== undefined) {
            dataView(memory0).setInt8(arg3 + 16, 0, true);
          } else {
            const e = variant30;
            dataView(memory0).setInt8(arg3 + 16, 1, true);
            dataView(memory0).setBigInt64(arg3 + 24, toUint64(e), true);
          }
          break;
        }
        case 'HTTP-response-trailer-section-size': {
          const e = variant42.val;
          dataView(memory0).setInt8(arg3 + 8, 29, true);
          var variant31 = e;
          if (variant31 === null || variant31=== undefined) {
            dataView(memory0).setInt8(arg3 + 16, 0, true);
          } else {
            const e = variant31;
            dataView(memory0).setInt8(arg3 + 16, 1, true);
            dataView(memory0).setInt32(arg3 + 20, toUint32(e), true);
          }
          break;
        }
        case 'HTTP-response-trailer-size': {
          const e = variant42.val;
          dataView(memory0).setInt8(arg3 + 8, 30, true);
          var {fieldName: v32_0, fieldSize: v32_1 } = e;
          var variant34 = v32_0;
          if (variant34 === null || variant34=== undefined) {
            dataView(memory0).setInt8(arg3 + 16, 0, true);
          } else {
            const e = variant34;
            dataView(memory0).setInt8(arg3 + 16, 1, true);
            var ptr33 = utf8Encode(e, realloc0, memory0);
            var len33 = utf8EncodedLen;
            dataView(memory0).setInt32(arg3 + 24, len33, true);
            dataView(memory0).setInt32(arg3 + 20, ptr33, true);
          }
          var variant35 = v32_1;
          if (variant35 === null || variant35=== undefined) {
            dataView(memory0).setInt8(arg3 + 28, 0, true);
          } else {
            const e = variant35;
            dataView(memory0).setInt8(arg3 + 28, 1, true);
            dataView(memory0).setInt32(arg3 + 32, toUint32(e), true);
          }
          break;
        }
        case 'HTTP-response-transfer-coding': {
          const e = variant42.val;
          dataView(memory0).setInt8(arg3 + 8, 31, true);
          var variant37 = e;
          if (variant37 === null || variant37=== undefined) {
            dataView(memory0).setInt8(arg3 + 16, 0, true);
          } else {
            const e = variant37;
            dataView(memory0).setInt8(arg3 + 16, 1, true);
            var ptr36 = utf8Encode(e, realloc0, memory0);
            var len36 = utf8EncodedLen;
            dataView(memory0).setInt32(arg3 + 24, len36, true);
            dataView(memory0).setInt32(arg3 + 20, ptr36, true);
          }
          break;
        }
        case 'HTTP-response-content-coding': {
          const e = variant42.val;
          dataView(memory0).setInt8(arg3 + 8, 32, true);
          var variant39 = e;
          if (variant39 === null || variant39=== undefined) {
            dataView(memory0).setInt8(arg3 + 16, 0, true);
          } else {
            const e = variant39;
            dataView(memory0).setInt8(arg3 + 16, 1, true);
            var ptr38 = utf8Encode(e, realloc0, memory0);
            var len38 = utf8EncodedLen;
            dataView(memory0).setInt32(arg3 + 24, len38, true);
            dataView(memory0).setInt32(arg3 + 20, ptr38, true);
          }
          break;
        }
        case 'HTTP-response-timeout': {
          dataView(memory0).setInt8(arg3 + 8, 33, true);
          break;
        }
        case 'HTTP-upgrade-failed': {
          dataView(memory0).setInt8(arg3 + 8, 34, true);
          break;
        }
        case 'HTTP-protocol-error': {
          dataView(memory0).setInt8(arg3 + 8, 35, true);
          break;
        }
        case 'loop-detected': {
          dataView(memory0).setInt8(arg3 + 8, 36, true);
          break;
        }
        case 'configuration-error': {
          dataView(memory0).setInt8(arg3 + 8, 37, true);
          break;
        }
        case 'internal-error': {
          const e = variant42.val;
          dataView(memory0).setInt8(arg3 + 8, 38, true);
          var variant41 = e;
          if (variant41 === null || variant41=== undefined) {
            dataView(memory0).setInt8(arg3 + 16, 0, true);
          } else {
            const e = variant41;
            dataView(memory0).setInt8(arg3 + 16, 1, true);
            var ptr40 = utf8Encode(e, realloc0, memory0);
            var len40 = utf8EncodedLen;
            dataView(memory0).setInt32(arg3 + 24, len40, true);
            dataView(memory0).setInt32(arg3 + 20, ptr40, true);
          }
          break;
        }
        default: {
          throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant42.tag)}\` (received \`${variant42}\`) specified for \`ErrorCode\``);
        }
      }
      break;
    }
    default: {
      throw new TypeError('invalid variant specified for result');
    }
  }
}
let realloc0;

function trampoline12(arg0, arg1, arg2, arg3) {
  var handle1 = arg0;
  var rsc0 = handleTable1.get(handle1).rep;
  var ptr2 = arg1;
  var len2 = arg2;
  var result2 = new Uint8Array(memory0.buffer.slice(ptr2, ptr2 + len2 * 1));
  let ret;
  try {
    ret = { tag: 'ok', val: OutputStream.prototype.blockingWriteAndFlush.call(rsc0, result2) };
  } catch (e) {
    ret = { tag: 'err', val: getErrorPayload(e) };
  }
  var variant5 = ret;
  switch (variant5.tag) {
    case 'ok': {
      const e = variant5.val;
      dataView(memory0).setInt8(arg3 + 0, 0, true);
      break;
    }
    case 'err': {
      const e = variant5.val;
      dataView(memory0).setInt8(arg3 + 0, 1, true);
      var variant4 = e;
      switch (variant4.tag) {
        case 'last-operation-failed': {
          const e = variant4.val;
          dataView(memory0).setInt8(arg3 + 4, 0, true);
          if (!(e instanceof Error$1)) {
            throw new Error('Resource error: Not a valid "Error" resource.');
          }
          var handle3 = handleCnt0++;
          handleTable0.set(handle3, { rep: e, own: true });
          dataView(memory0).setInt32(arg3 + 8, handle3, true);
          break;
        }
        case 'closed': {
          dataView(memory0).setInt8(arg3 + 4, 1, true);
          break;
        }
        default: {
          throw new TypeError(`invalid variant tag value \`${JSON.stringify(variant4.tag)}\` (received \`${variant4}\`) specified for \`StreamError\``);
        }
      }
      break;
    }
    default: {
      throw new TypeError('invalid variant specified for result');
    }
  }
}
let exports3;
function trampoline0(handle) {
  const handleEntry = handleTable0.get(handle);
  if (!handleEntry) {
    throw new Error(`Resource error: Invalid handle ${handle}`);
  }
  handleTable0.delete(handle);
  if (handleEntry.own && handleEntry.rep[symbolDispose]) {
    handleEntry.rep[symbolDispose]();
  }
}
function trampoline3(handle) {
  const handleEntry = handleTable1.get(handle);
  if (!handleEntry) {
    throw new Error(`Resource error: Invalid handle ${handle}`);
  }
  handleTable1.delete(handle);
  if (handleEntry.own && handleEntry.rep[symbolDispose]) {
    handleEntry.rep[symbolDispose]();
  }
}
function trampoline4(handle) {
  const handleEntry = handleTable7.get(handle);
  if (!handleEntry) {
    throw new Error(`Resource error: Invalid handle ${handle}`);
  }
  handleTable7.delete(handle);
  if (handleEntry.own && handleEntry.rep[symbolDispose]) {
    handleEntry.rep[symbolDispose]();
  }
}

function handle(arg0, arg1) {
  // if (!(arg0 instanceof IncomingRequest)) {
    // throw new Error('Resource error: Not a valid "IncomingRequest" resource.');
  // }
  var handle0 = handleCnt7++;
  handleTable7.set(handle0, { rep: arg0, own: true });
  if (!(arg1 instanceof ResponseOutparam)) {
    throw new Error('Resource error: Not a valid "ResponseOutparam" resource.');
  }
  var handle1 = handleCnt4++;
  handleTable4.set(handle1, { rep: arg1, own: true });
  exports1['wasi:http/incoming-handler@0.2.0#handle'](handle0, handle1);
}
const handleTable0= new Map();
handleTables.set(0, { table: handleTable0, createHandle: () => ++handleCnt0});
let handleCnt0 = 0;
const handleTable1= new Map();
handleTables.set(1, { table: handleTable1, createHandle: () => ++handleCnt1});
let handleCnt1 = 0;
const handleTable2= new Map();
handleTables.set(2, { table: handleTable2, createHandle: () => ++handleCnt2});
let handleCnt2 = 0;
const handleTable3= new Map();
handleTables.set(3, { table: handleTable3, createHandle: () => ++handleCnt3});
let handleCnt3 = 0;
const handleTable4= new Map();
handleTables.set(4, { table: handleTable4, createHandle: () => ++handleCnt4});
let handleCnt4 = 0;
const handleTable5= new Map();
handleTables.set(5, { table: handleTable5, createHandle: () => ++handleCnt5});
let handleCnt5 = 0;
const handleTable6= new Map();
handleTables.set(6, { table: handleTable6, createHandle: () => ++handleCnt6});
let handleCnt6 = 0;
const handleTable7= new Map();
handleTables.set(7, { table: handleTable7, createHandle: () => ++handleCnt7});
let handleCnt7 = 0;

const $init = (async() => {
  const module0 = fetchCompile(new URL('./hello_wasi_http.core.wasm', import.meta.url));
  const module1 = fetchCompile(new URL('./hello_wasi_http.core2.wasm', import.meta.url));
  const module2 = base64Compile('AGFzbQEAAAABKwZgCX9/f39+f39/fwBgAn9/AGAEf39/fwBgBH9/f38Bf2ACf38Bf2ABfwADCwoAAQECAgIDBAQFBAUBcAEKCgc0CwEwAAABMQABATIAAgEzAAMBNAAEATUABQE2AAYBNwAHATgACAE5AAkIJGltcG9ydHMBAAqVAQoZACAAIAEgAiADIAQgBSAGIAcgCEEAEQAACwsAIAAgAUEBEQEACwsAIAAgAUECEQEACw8AIAAgASACIANBAxECAAsPACAAIAEgAiADQQQRAgALDwAgACABIAIgA0EFEQIACw8AIAAgASACIANBBhEDAAsLACAAIAFBBxEEAAsLACAAIAFBCBEEAAsJACAAQQkRBQALAC4JcHJvZHVjZXJzAQxwcm9jZXNzZWQtYnkBDXdpdC1jb21wb25lbnQGMC4yMC4zANsEBG5hbWUAExJ3aXQtY29tcG9uZW50OnNoaW0BvgQKADxpbmRpcmVjdC13YXNpOmh0dHAvdHlwZXNAMC4yLjAtW3N0YXRpY11yZXNwb25zZS1vdXRwYXJhbS5zZXQBPWluZGlyZWN0LXdhc2k6aHR0cC90eXBlc0AwLjIuMC1bbWV0aG9kXW91dGdvaW5nLXJlc3BvbnNlLmJvZHkCOmluZGlyZWN0LXdhc2k6aHR0cC90eXBlc0AwLjIuMC1bbWV0aG9kXW91dGdvaW5nLWJvZHkud3JpdGUDO2luZGlyZWN0LXdhc2k6aHR0cC90eXBlc0AwLjIuMC1bc3RhdGljXW91dGdvaW5nLWJvZHkuZmluaXNoBE1pbmRpcmVjdC13YXNpOmlvL3N0cmVhbXNAMC4yLjAtW21ldGhvZF1vdXRwdXQtc3RyZWFtLmJsb2NraW5nLXdyaXRlLWFuZC1mbHVzaAVNaW5kaXJlY3Qtd2FzaTppby9zdHJlYW1zQDAuMi4wLVttZXRob2Rdb3V0cHV0LXN0cmVhbS5ibG9ja2luZy13cml0ZS1hbmQtZmx1c2gGJWFkYXB0LXdhc2lfc25hcHNob3RfcHJldmlldzEtZmRfd3JpdGUHKGFkYXB0LXdhc2lfc25hcHNob3RfcHJldmlldzEtZW52aXJvbl9nZXQILmFkYXB0LXdhc2lfc25hcHNob3RfcHJldmlldzEtZW52aXJvbl9zaXplc19nZXQJJmFkYXB0LXdhc2lfc25hcHNob3RfcHJldmlldzEtcHJvY19leGl0');
  const module3 = base64Compile('AGFzbQEAAAABKwZgCX9/f39+f39/fwBgAn9/AGAEf39/fwBgBH9/f38Bf2ACf38Bf2ABfwACQgsAATAAAAABMQABAAEyAAEAATMAAgABNAACAAE1AAIAATYAAwABNwAEAAE4AAQAATkABQAIJGltcG9ydHMBcAEKCgkQAQBBAAsKAAECAwQFBgcICQAuCXByb2R1Y2VycwEMcHJvY2Vzc2VkLWJ5AQ13aXQtY29tcG9uZW50BjAuMjAuMwAcBG5hbWUAFRR3aXQtY29tcG9uZW50OmZpeHVwcw');
  ({ exports: exports0 } = await instantiateCore(await module2));
  ({ exports: exports1 } = await instantiateCore(await module0, {
    'wasi:http/types@0.2.0': {
      '[constructor]fields': trampoline1,
      '[constructor]outgoing-response': trampoline2,
      '[method]outgoing-body.write': exports0['2'],
      '[method]outgoing-response.body': exports0['1'],
      '[resource-drop]incoming-request': trampoline4,
      '[static]outgoing-body.finish': exports0['3'],
      '[static]response-outparam.set': exports0['0'],
    },
    'wasi:io/error@0.2.0': {
      '[resource-drop]error': trampoline0,
    },
    'wasi:io/streams@0.2.0': {
      '[method]output-stream.blocking-write-and-flush': exports0['4'],
      '[resource-drop]output-stream': trampoline3,
    },
    wasi_snapshot_preview1: {
      environ_get: exports0['7'],
      environ_sizes_get: exports0['8'],
      fd_write: exports0['6'],
      proc_exit: exports0['9'],
    },
  }));
  ({ exports: exports2 } = await instantiateCore(await module1, {
    __main_module__: {
      cabi_realloc: exports1.cabi_realloc,
    },
    env: {
      memory: exports1.memory,
    },
    'wasi:cli/stderr@0.2.0': {
      'get-stderr': trampoline5,
    },
    'wasi:cli/stdin@0.2.0': {
      'get-stdin': trampoline6,
    },
    'wasi:cli/stdout@0.2.0': {
      'get-stdout': trampoline7,
    },
    'wasi:io/error@0.2.0': {
      '[resource-drop]error': trampoline0,
    },
    'wasi:io/streams@0.2.0': {
      '[method]output-stream.blocking-write-and-flush': exports0['5'],
      '[resource-drop]output-stream': trampoline3,
    },
  }));
  memory0 = exports1.memory;
  realloc0 = exports1.cabi_realloc;
  ({ exports: exports3 } = await instantiateCore(await module3, {
    '': {
      $imports: exports0.$imports,
      '0': trampoline8,
      '1': trampoline9,
      '2': trampoline10,
      '3': trampoline11,
      '4': trampoline12,
      '5': trampoline12,
      '6': exports2.fd_write,
      '7': exports2.environ_get,
      '8': exports2.environ_sizes_get,
      '9': exports2.proc_exit,
    },
  }));
})();

await $init;
const incomingHandler0_2_0 = {
  handle: handle,
  
};

export { incomingHandler0_2_0 as incomingHandler, incomingHandler0_2_0 as 'wasi:http/incoming-handler@0.2.0',  }