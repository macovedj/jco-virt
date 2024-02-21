
      
      try {
        process.argv[1] = "virt";
      } catch {}
      const mod = await import('./virt.js');
      
    import { HTTPServer } from '@bytecodealliance/preview2-shim/http';
    const server = new HTTPServer(mod.incomingHandler);
    
    let port = 8080;
    while (true) {
      try {
        server.listen(port, undefined);
        break;
      } catch (e) {
        if (e.code !== 'EADDRINUSE')
          throw e;
      }
      port++;
    }
    
    console.error(`Server listening on 8080...`);
  
    