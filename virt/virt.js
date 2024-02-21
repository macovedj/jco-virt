const base64Compile = str => WebAssembly.compile(typeof Buffer !== 'undefined' ? Buffer.from(str, 'base64') : Uint8Array.from(atob(str), b => b.charCodeAt(0)));

const emptyFunc = () => {};

const isNode = typeof process !== 'undefined' && process.versions && process.versions.node;
let _fs;
async function fetchCompile (url) {
  if (isNode) {
    _fs = _fs || await import('fs/promises');
    return WebAssembly.compile(await _fs.readFile(url));
  }
  return fetch(url).then(WebAssembly.compileStreaming);
}

const handleTables = new Map();

const instantiateCore = WebAssembly.instantiate;

function resourceTransfer(fromRid, toRid, handle) {
  const { table: fromTable } = {handle_tables}.get(fromRid);
  const entry = fromTable.get(handle);
  fromTable.delete(handle);
  const { table: toTable, createHandle } = {handle_tables}.get(toRid);
  const newHandle = createHandle();
  toTable.set(newHandle, entry);
  return newHandle;
}

const resourceHandleSymbol = Symbol('resource');

const symbolDispose = Symbol.dispose || Symbol.for('dispose');

let exports0;
let exports1;
let exports2;
let exports3;
let exports4;
let exports5;
let exports6;
let memory0;
let memory1;
let exports7;
let exports8;
function trampoline0(rep) {
  const handle = handleCnt4++;
  handleTable4.set(handle, { rep, own: true });
  return handle;
}
function trampoline1(rep) {
  const handle = handleCnt3++;
  handleTable3.set(handle, { rep, own: true });
  return handle;
}
function trampoline2(rep) {
  const handle = handleCnt2++;
  handleTable2.set(handle, { rep, own: true });
  return handle;
}
function trampoline3(rep) {
  const handle = handleCnt1++;
  handleTable1.set(handle, { rep, own: true });
  return handle;
}
function trampoline4(rep) {
  const handle = handleCnt0++;
  handleTable0.set(handle, { rep, own: true });
  return handle;
}
function trampoline5(handle) {
  const handleEntry = handleTable2.get(handle);
  if (!handleEntry) {
    throw new Error(`Resource error: Invalid handle ${handle}`);
  }
  return handleEntry.rep;
}
function trampoline6(handle) {
  const handleEntry = handleTable0.get(handle);
  if (!handleEntry) {
    throw new Error(`Resource error: Invalid handle ${handle}`);
  }
  handleTable0.delete(handle);
  if (handleEntry.own) {
    exports0['0'](handleEntry.rep);
  }
  
}
function trampoline7(handle) {
  const handleEntry = handleTable2.get(handle);
  if (!handleEntry) {
    throw new Error(`Resource error: Invalid handle ${handle}`);
  }
  handleTable2.delete(handle);
  if (handleEntry.own) {
    exports0['2'](handleEntry.rep);
  }
  
}
function trampoline8(rep) {
  const handle = handleCnt5++;
  handleTable5.set(handle, { rep, own: true });
  return handle;
}
function trampoline9(handle) {
  const handleEntry = handleTable4.get(handle);
  if (!handleEntry) {
    throw new Error(`Resource error: Invalid handle ${handle}`);
  }
  handleTable4.delete(handle);
  if (handleEntry.own) {
    exports0['22'](handleEntry.rep);
  }
  
}
function trampoline10(handle) {
  const handleEntry = handleTable85.get(handle);
  if (!handleEntry) {
    throw new Error(`Resource error: Invalid handle ${handle}`);
  }
  handleTable85.delete(handle);
  if (handleEntry.own) {
    exports0['0'](handleEntry.rep);
  }
  
}
const trampoline11 = resourceTransfer;
function trampoline12(handle) {
  const handleEntry = handleTable89.get(handle);
  if (!handleEntry) {
    throw new Error(`Resource error: Invalid handle ${handle}`);
  }
  handleTable89.delete(handle);
  if (handleEntry.own) {
    exports0['3'](handleEntry.rep);
  }
  
}
function trampoline13(handle) {
  const handleEntry = handleTable86.get(handle);
  if (!handleEntry) {
    throw new Error(`Resource error: Invalid handle ${handle}`);
  }
  handleTable86.delete(handle);
  if (handleEntry.own) {
    exports0['10'](handleEntry.rep);
  }
  
}
function trampoline14(from_ptr, len, to_ptr) {
  new Uint8Array(memory1.buffer, to_ptr, len).set(new Uint8Array(memory0.buffer, from_ptr, len));
}

function trampoline15() {
  console.log('RESOURCE ENTER CALL');
}
const trampoline16 = resourceTransfer;
function trampoline17() {
  console.log('RESOURCE EXIT CALL');
}
function trampoline18(from_ptr, len, to_ptr) {
  new Uint8Array(memory0.buffer, to_ptr, len).set(new Uint8Array(memory1.buffer, from_ptr, len));
}


function handle(arg0, arg1) {
  var rep1 = arg0[resourceHandleSymbol];
  // if (rep1=== null) {
  //   throw new Error('Resource error: "IncomingRequest" lifetime expired.');
  // }
  // if (rep1=== undefined) {
  //   throw new Error('Resource error: Not a valid "IncomingRequest" resource.');
  // }
  
  var handle0 = handleCnt86++;
  handleTable86.set(handle0, { rep: rep1, own: true });
  finalizationRegistry86.unregister(arg0);
  arg0[symbolDispose] = emptyFunc;
  arg0[resourceHandleSymbol] = null;
  var rep3 = arg1[resourceHandleSymbol];
  // if (rep3=== null) {
  //   throw new Error('Resource error: "ResponseOutparam" lifetime expired.');
  // }
  // if (rep3=== undefined) {
  //   throw new Error('Resource error: Not a valid "ResponseOutparam" resource.');
  // }
  console.log("THIS FAR")
  var handle2 = handleCnt91++;
  handleTable91.set(handle2, { rep: rep3, own: true });
  console.log("HANDLE TABLE WAS SET")
  finalizationRegistry91.unregister(arg1);
  console.log("FINALIZED REGISTRY")
  arg1[symbolDispose] = emptyFunc;
  arg1[resourceHandleSymbol] = null;
  console.log("BEFORE EXPORT")
  exports5['wasi:http/incoming-handler@0.2.0#handle'](handle0, handle2);
  console.log("END OF HANDLE")
}
const handleTable86= new Map();
handleTables.set(86, { table: handleTable86, createHandle: () => ++handleCnt86});
let handleCnt86 = 0;
const finalizationRegistry86= new FinalizationRegistry(handle => {
  const handleEntry = handleTable86.get(handle);
  if (handleEntry) {
    handleTable86.delete(handle);
    
    if (handleEntry.own) {
      exports0['10'](handleEntry.rep);
    }
  }
});

const handleTable91= new Map();
handleTables.set(91, { table: handleTable91, createHandle: () => ++handleCnt91});
let handleCnt91 = 0;
const finalizationRegistry91= new FinalizationRegistry(handle => {
  const handleEntry = handleTable91.get(handle);
  if (handleEntry) {
    handleTable91.delete(handle);
    
    if (handleEntry.own) {
      exports0['13'](handleEntry.rep);
    }
  }
});


const $init = (async() => {
  const module0 = fetchCompile(new URL('./virt.core.wasm', import.meta.url));
  const module1 = fetchCompile(new URL('./virt.core2.wasm', import.meta.url));
  const module2 = base64Compile('AGFzbQEAAAABKwZgCX9/f39+f39/fwBgAn9/AGAEf39/fwBgBH9/f38Bf2ACf38Bf2ABfwADCwoAAQECAgIDBAQFBAUBcAEKCgc0CwEwAAABMQABATIAAgEzAAMBNAAEATUABQE2AAYBNwAHATgACAE5AAkIJGltcG9ydHMBAAqVAQoZACAAIAEgAiADIAQgBSAGIAcgCEEAEQAACwsAIAAgAUEBEQEACwsAIAAgAUECEQEACw8AIAAgASACIANBAxECAAsPACAAIAEgAiADQQQRAgALDwAgACABIAIgA0EFEQIACw8AIAAgASACIANBBhEDAAsLACAAIAFBBxEEAAsLACAAIAFBCBEEAAsJACAAQQkRBQALAC4JcHJvZHVjZXJzAQxwcm9jZXNzZWQtYnkBDXdpdC1jb21wb25lbnQGMC4yMC4zANsEBG5hbWUAExJ3aXQtY29tcG9uZW50OnNoaW0BvgQKADxpbmRpcmVjdC13YXNpOmh0dHAvdHlwZXNAMC4yLjAtW3N0YXRpY11yZXNwb25zZS1vdXRwYXJhbS5zZXQBPWluZGlyZWN0LXdhc2k6aHR0cC90eXBlc0AwLjIuMC1bbWV0aG9kXW91dGdvaW5nLXJlc3BvbnNlLmJvZHkCOmluZGlyZWN0LXdhc2k6aHR0cC90eXBlc0AwLjIuMC1bbWV0aG9kXW91dGdvaW5nLWJvZHkud3JpdGUDO2luZGlyZWN0LXdhc2k6aHR0cC90eXBlc0AwLjIuMC1bc3RhdGljXW91dGdvaW5nLWJvZHkuZmluaXNoBE1pbmRpcmVjdC13YXNpOmlvL3N0cmVhbXNAMC4yLjAtW21ldGhvZF1vdXRwdXQtc3RyZWFtLmJsb2NraW5nLXdyaXRlLWFuZC1mbHVzaAVNaW5kaXJlY3Qtd2FzaTppby9zdHJlYW1zQDAuMi4wLVttZXRob2Rdb3V0cHV0LXN0cmVhbS5ibG9ja2luZy13cml0ZS1hbmQtZmx1c2gGJWFkYXB0LXdhc2lfc25hcHNob3RfcHJldmlldzEtZmRfd3JpdGUHKGFkYXB0LXdhc2lfc25hcHNob3RfcHJldmlldzEtZW52aXJvbl9nZXQILmFkYXB0LXdhc2lfc25hcHNob3RfcHJldmlldzEtZW52aXJvbl9zaXplc19nZXQJJmFkYXB0LXdhc2lfc25hcHNob3RfcHJldmlldzEtcHJvY19leGl0');
  const module3 = base64Compile('AGFzbQEAAAABKwZgCX9/f39+f39/fwBgAn9/AGAEf39/fwBgBH9/f38Bf2ACf38Bf2ABfwACQgsAATAAAAABMQABAAEyAAEAATMAAgABNAACAAE1AAIAATYAAwABNwAEAAE4AAQAATkABQAIJGltcG9ydHMBcAEKCgkQAQBBAAsKAAECAwQFBgcICQAuCXByb2R1Y2VycwEMcHJvY2Vzc2VkLWJ5AQ13aXQtY29tcG9uZW50BjAuMjAuMwAcBG5hbWUAFRR3aXQtY29tcG9uZW50OmZpeHVwcw');
  const module4 = fetchCompile(new URL('./virt.core3.wasm', import.meta.url));
  const module5 = base64Compile('AGFzbQEAAAABBQFgAX8AAxkYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAUBcAEYGAd6GQEwAAABMQABATIAAgEzAAMBNAAEATUABQE2AAYBNwAHATgACAE5AAkCMTAACgIxMQALAjEyAAwCMTMADQIxNAAOAjE1AA8CMTYAEAIxNwARAjE4ABICMTkAEwIyMAAUAjIxABUCMjIAFgIyMwAXCCRpbXBvcnRzAQAK8QEYCQAgAEEAEQAACwkAIABBAREAAAsJACAAQQIRAAALCQAgAEEDEQAACwkAIABBBBEAAAsJACAAQQURAAALCQAgAEEGEQAACwkAIABBBxEAAAsJACAAQQgRAAALCQAgAEEJEQAACwkAIABBChEAAAsJACAAQQsRAAALCQAgAEEMEQAACwkAIABBDREAAAsJACAAQQ4RAAALCQAgAEEPEQAACwkAIABBEBEAAAsJACAAQRERAAALCQAgAEESEQAACwkAIABBExEAAAsJACAAQRQRAAALCQAgAEEVEQAACwkAIABBFhEAAAsJACAAQRcRAAALAC4JcHJvZHVjZXJzAQxwcm9jZXNzZWQtYnkBDXdpdC1jb21wb25lbnQGMC4yMS4wAKQKBG5hbWUAExJ3aXQtY29tcG9uZW50OnNoaW0BhwoYACZkdG9yLVtleHBvcnRdd2FzaTppby9lcnJvckAwLjIuMC1lcnJvcgEoZHRvci1bZXhwb3J0XXdhc2k6aW8vcG9sbEAwLjIuMC1wb2xsYWJsZQIvZHRvci1bZXhwb3J0XXdhc2k6aW8vc3RyZWFtc0AwLjIuMC1pbnB1dC1zdHJlYW0DMGR0b3ItW2V4cG9ydF13YXNpOmlvL3N0cmVhbXNAMC4yLjAtb3V0cHV0LXN0cmVhbQRFZHRvci1bZXhwb3J0XXdhc2k6c29ja2V0cy9pcC1uYW1lLWxvb2t1cEAwLjIuMC1yZXNvbHZlLWFkZHJlc3Mtc3RyZWFtBS5kdG9yLVtleHBvcnRdd2FzaTpzb2NrZXRzL3RjcEAwLjIuMC10Y3Atc29ja2V0Bi5kdG9yLVtleHBvcnRdd2FzaTpzb2NrZXRzL3VkcEAwLjIuMC11ZHAtc29ja2V0BzxkdG9yLVtleHBvcnRdd2FzaTpzb2NrZXRzL3VkcEAwLjIuMC1pbmNvbWluZy1kYXRhZ3JhbS1zdHJlYW0IPGR0b3ItW2V4cG9ydF13YXNpOnNvY2tldHMvdWRwQDAuMi4wLW91dGdvaW5nLWRhdGFncmFtLXN0cmVhbQkpZHRvci1bZXhwb3J0XXdhc2k6aHR0cC90eXBlc0AwLjIuMC1maWVsZHMKM2R0b3ItW2V4cG9ydF13YXNpOmh0dHAvdHlwZXNAMC4yLjAtaW5jb21pbmctcmVxdWVzdAszZHRvci1bZXhwb3J0XXdhc2k6aHR0cC90eXBlc0AwLjIuMC1vdXRnb2luZy1yZXF1ZXN0DDJkdG9yLVtleHBvcnRdd2FzaTpodHRwL3R5cGVzQDAuMi4wLXJlcXVlc3Qtb3B0aW9ucw00ZHRvci1bZXhwb3J0XXdhc2k6aHR0cC90eXBlc0AwLjIuMC1yZXNwb25zZS1vdXRwYXJhbQ40ZHRvci1bZXhwb3J0XXdhc2k6aHR0cC90eXBlc0AwLjIuMC1pbmNvbWluZy1yZXNwb25zZQ8wZHRvci1bZXhwb3J0XXdhc2k6aHR0cC90eXBlc0AwLjIuMC1pbmNvbWluZy1ib2R5EDJkdG9yLVtleHBvcnRdd2FzaTpodHRwL3R5cGVzQDAuMi4wLWZ1dHVyZS10cmFpbGVycxE0ZHRvci1bZXhwb3J0XXdhc2k6aHR0cC90eXBlc0AwLjIuMC1vdXRnb2luZy1yZXNwb25zZRIwZHRvci1bZXhwb3J0XXdhc2k6aHR0cC90eXBlc0AwLjIuMC1vdXRnb2luZy1ib2R5EztkdG9yLVtleHBvcnRdd2FzaTpodHRwL3R5cGVzQDAuMi4wLWZ1dHVyZS1pbmNvbWluZy1yZXNwb25zZRQ5ZHRvci1bZXhwb3J0XXdhc2k6Y2xpL3Rlcm1pbmFsLWlucHV0QDAuMi4wLXRlcm1pbmFsLWlucHV0FTtkdG9yLVtleHBvcnRdd2FzaTpjbGkvdGVybWluYWwtb3V0cHV0QDAuMi4wLXRlcm1pbmFsLW91dHB1dBYzZHRvci1bZXhwb3J0XXdhc2k6ZmlsZXN5c3RlbS90eXBlc0AwLjIuMC1kZXNjcmlwdG9yFz9kdG9yLVtleHBvcnRdd2FzaTpmaWxlc3lzdGVtL3R5cGVzQDAuMi4wLWRpcmVjdG9yeS1lbnRyeS1zdHJlYW0');
  const module6 = base64Compile('AGFzbQEAAAABBQFgAX8AApYBGQABMAAAAAExAAAAATIAAAABMwAAAAE0AAAAATUAAAABNgAAAAE3AAAAATgAAAABOQAAAAIxMAAAAAIxMQAAAAIxMgAAAAIxMwAAAAIxNAAAAAIxNQAAAAIxNgAAAAIxNwAAAAIxOAAAAAIxOQAAAAIyMAAAAAIyMQAAAAIyMgAAAAIyMwAAAAgkaW1wb3J0cwFwARgYCR4BAEEACxgAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcALglwcm9kdWNlcnMBDHByb2Nlc3NlZC1ieQENd2l0LWNvbXBvbmVudAYwLjIxLjAAHARuYW1lABUUd2l0LWNvbXBvbmVudDpmaXh1cHM');
  const module7 = base64Compile('AGFzbQEAAAABEQNgAAF/YAN/f38Bf2ABfwF/ApoBCAVmbGFncwlpbnN0YW5jZTEDfwEFZmxhZ3MKaW5zdGFuY2UzMgN/AQZjYWxsZWUIYWRhcHRlcjAAAAhyZXNvdXJjZQx0cmFuc2Zlci1vd24AAQZjYWxsZWUIYWRhcHRlcjEAAgZjYWxsZWUIYWRhcHRlcjIAAAZjYWxsZWUIYWRhcHRlcjMAAAZjYWxsZWUIYWRhcHRlcjQAAAMGBQACAAAABzgFCGFkYXB0ZXIwAAYIYWRhcHRlcjEABwhhZGFwdGVyMgAICGFkYXB0ZXIzAAkIYWRhcHRlcjQACgqaAwVPAQF/IwFBAXFFBEAACyMAQQJxRQRAAAsjAEF9cSQAIwBBfnEkACMAQQFyJAAQACEAIwFBfnEkASAAQSZB1wAQASMBQQFyJAEjAEECciQAC1gBAX8jAUEBcUUEQAALIwBBAnFFBEAACyMAQX1xJAAjAEF+cSQAIABB1wBBJhABIwBBAXIkABACIQEjAUF+cSQBIAFBLUHYABABIwFBAXIkASMAQQJyJAALTwEBfyMBQQFxRQRAAAsjAEECcUUEQAALIwBBfXEkACMAQX5xJAAjAEEBciQAEAMhACMBQX5xJAEgAEEDQdkAEAEjAUEBciQBIwBBAnIkAAtPAQF/IwFBAXFFBEAACyMAQQJxRQRAAAsjAEF9cSQAIwBBfnEkACMAQQFyJAAQBCEAIwFBfnEkASAAQQJB2gAQASMBQQFyJAEjAEECciQAC08BAX8jAUEBcUUEQAALIwBBAnFFBEAACyMAQX1xJAAjAEF+cSQAIwBBAXIkABAFIQAjAUF+cSQBIABBA0HZABABIwFBAXIkASMAQQJyJAAL');
  const module8 = fetchCompile(new URL('./virt.core4.wasm', import.meta.url));
  const instanceFlags1 = new WebAssembly.Global({ value: "i32", mutable: true }, 3);
  const instanceFlags32 = new WebAssembly.Global({ value: "i32", mutable: true }, 3);
  ({ exports: exports0 } = await instantiateCore(await module5));
  ({ exports: exports1 } = await instantiateCore(await module4, {
    '[export]wasi:filesystem/types@0.2.0': {
      '[resource-drop]descriptor': trampoline9,
      '[resource-new]descriptor': trampoline0,
      '[resource-new]directory-entry-stream': trampoline8,
    },
    '[export]wasi:io/error@0.2.0': {
      '[resource-drop]error': trampoline6,
      '[resource-new]error': trampoline4,
    },
    '[export]wasi:io/poll@0.2.0': {
      '[resource-new]pollable': trampoline3,
    },
    '[export]wasi:io/streams@0.2.0': {
      '[resource-drop]input-stream': trampoline7,
      '[resource-new]input-stream': trampoline2,
      '[resource-new]output-stream': trampoline1,
      '[resource-rep]input-stream': trampoline5,
    },
  }));
  ({ exports: exports2 } = await instantiateCore(await module6, {
    '': {
      $imports: exports0.$imports,
      '0': exports1['wasi:io/error@0.2.0#[dtor]error'],
      '1': exports1['wasi:io/poll@0.2.0#[dtor]pollable'],
      '10': exports1['wasi:http/types@0.2.0#[dtor]fields'],
      '11': exports1['wasi:http/types@0.2.0#[dtor]fields'],
      '12': exports1['wasi:cli/terminal-input@0.2.0#[dtor]terminal-input'],
      '13': exports1['wasi:http/types@0.2.0#[dtor]fields'],
      '14': exports1['wasi:http/types@0.2.0#[dtor]fields'],
      '15': exports1['wasi:http/types@0.2.0#[dtor]fields'],
      '16': exports1['wasi:http/types@0.2.0#[dtor]fields'],
      '17': exports1['wasi:http/types@0.2.0#[dtor]fields'],
      '18': exports1['wasi:http/types@0.2.0#[dtor]fields'],
      '19': exports1['wasi:http/types@0.2.0#[dtor]fields'],
      '2': exports1['wasi:io/streams@0.2.0#[dtor]input-stream'],
      '20': exports1['wasi:cli/terminal-input@0.2.0#[dtor]terminal-input'],
      '21': exports1['wasi:cli/terminal-input@0.2.0#[dtor]terminal-input'],
      '22': exports1['wasi:filesystem/types@0.2.0#[dtor]descriptor'],
      '23': exports1['wasi:filesystem/types@0.2.0#[dtor]directory-entry-stream'],
      '3': exports1['wasi:io/streams@0.2.0#[dtor]output-stream'],
      '4': exports1['wasi:cli/terminal-input@0.2.0#[dtor]terminal-input'],
      '5': exports1['wasi:cli/terminal-input@0.2.0#[dtor]terminal-input'],
      '6': exports1['wasi:cli/terminal-input@0.2.0#[dtor]terminal-input'],
      '7': exports1['wasi:cli/terminal-input@0.2.0#[dtor]terminal-input'],
      '8': exports1['wasi:cli/terminal-input@0.2.0#[dtor]terminal-input'],
      '9': exports1['wasi:http/types@0.2.0#[dtor]fields'],
    },
  }));
  ({ exports: exports3 } = await instantiateCore(await module2));
  ({ exports: exports4 } = await instantiateCore(await module7, {
    callee: {
      adapter0: exports1['wasi:http/types@0.2.0#[constructor]fields'],
      adapter1: exports1['wasi:http/types@0.2.0#[method]fields.entries'],
      adapter2: exports1['wasi:cli/stderr@0.2.0#get-stderr'],
      adapter3: exports1['wasi:cli/stdin@0.2.0#get-stdin'],
      adapter4: exports1['wasi:cli/stdout@0.2.0#get-stdout'],
    },
    flags: {
      instance1: instanceFlags1,
      instance32: instanceFlags32,
    },
    resource: {
      'transfer-own': trampoline11,
    },
  }));
  ({ exports: exports5 } = await instantiateCore(await module0, {
    'wasi:http/types@0.2.0': {
      '[constructor]fields': exports4.adapter0,
      '[constructor]outgoing-response': exports4.adapter1,
      '[method]outgoing-body.write': exports3['2'],
      '[method]outgoing-response.body': exports3['1'],
      '[resource-drop]incoming-request': trampoline13,
      '[static]outgoing-body.finish': exports3['3'],
      '[static]response-outparam.set': exports3['0'],
    },
    'wasi:io/error@0.2.0': {
      '[resource-drop]error': trampoline10,
    },
    'wasi:io/streams@0.2.0': {
      '[method]output-stream.blocking-write-and-flush': exports3['4'],
      '[resource-drop]output-stream': trampoline12,
    },
    wasi_snapshot_preview1: {
      environ_get: exports3['7'],
      environ_sizes_get: exports3['8'],
      fd_write: exports3['6'],
      proc_exit: exports3['9'],
    },
  }));
  ({ exports: exports6 } = await instantiateCore(await module1, {
    __main_module__: {
      cabi_realloc: exports5.cabi_realloc,
    },
    env: {
      memory: exports5.memory,
    },
    'wasi:cli/stderr@0.2.0': {
      'get-stderr': exports4.adapter2,
    },
    'wasi:cli/stdin@0.2.0': {
      'get-stdin': exports4.adapter3,
    },
    'wasi:cli/stdout@0.2.0': {
      'get-stdout': exports4.adapter4,
    },
    'wasi:io/error@0.2.0': {
      '[resource-drop]error': trampoline10,
    },
    'wasi:io/streams@0.2.0': {
      '[method]output-stream.blocking-write-and-flush': exports3['5'],
      '[resource-drop]output-stream': trampoline12,
    },
  }));
  memory0 = exports5.memory;
  memory1 = exports1.memory;
  ({ exports: exports7 } = await instantiateCore(await module8, {
    augments: {
      'mem1 I32Load8U': (ptr, off) => new DataView(exports5.memory.buffer).getUint8(ptr + off, true),
      'mem1 I32Store': (ptr, val, offset) => {
        new DataView(exports5.memory.buffer).setInt32(ptr + offset, val, true);
      },
      'mem1 I32Store16': (ptr, val, offset) => {
        new DataView(exports5.memory.buffer).setInt16(ptr + offset, val, true);
      },
      'mem1 I32Store8': (ptr, val, offset) => {
        new DataView(exports5.memory.buffer).setInt8(ptr + offset, val, true);
      },
      'mem1 I64Store': (ptr, val, offset) => {
        new DataView(exports5.memory.buffer).setBigInt64(ptr + offset, val, true);
      },
      'mem1 MemorySize': ptr => exports5.memory.buffer.byteLength / 65536,
    },
    callee: {
      adapter5: exports1['wasi:http/types@0.2.0#[static]response-outparam.set'],
      adapter6: exports1['wasi:http/types@0.2.0#[method]fields.entries'],
      adapter8: exports1['wasi:http/types@0.2.0#[method]fields.get'],
      adapter9: exports1['wasi:io/streams@0.2.0#[method]output-stream.write'],
    },
    flags: {
      instance1: instanceFlags1,
      instance32: instanceFlags32,
    },
    memory: {
      m0: exports1.memory,
    },
    post_return: {
      adapter8: exports1['cabi_post_wasi:http/outgoing-handler@0.2.0#handle'],
    },
    realloc: {
      f0: exports1.cabi_realloc,
      f8: exports5.cabi_realloc,
    },
    resource: {
      'enter-call': trampoline15,
      'exit-call': trampoline17,
      'transfer-borrow': trampoline16,
      'transfer-own': trampoline11,
    },
    transcode: {
      'utf8-to-utf8 (mem0 => mem1)': trampoline18,
      'utf8-to-utf8 (mem1 => mem0)': trampoline14,
    },
  }));
  ({ exports: exports8 } = await instantiateCore(await module3, {
    '': {
      $imports: exports3.$imports,
      '0': exports7.adapter5,
      '1': exports7.adapter6,
      '2': exports7.adapter7,
      '3': exports7.adapter8,
      '4': exports7.adapter9,
      '5': exports7.adapter9,
      '6': exports6.fd_write,
      '7': exports6.environ_get,
      '8': exports6.environ_sizes_get,
      '9': exports6.proc_exit,
    },
  }));
})();

await $init;
const incomingHandler0_2_0 = {
  handle: handle,
  
};

export { incomingHandler0_2_0 as incomingHandler, incomingHandler0_2_0 as 'wasi:http/incoming-handler@0.2.0',  }