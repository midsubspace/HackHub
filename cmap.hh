Shell.lock()
let args :string = Shell.GetArgs();
let target: string|null = null;
if (args.length == 0){
    args = await prompt(`URL/IP ADDRESS: `)
    if (!Networking.IsIp(args)){
        await Shell.Process.exec(`whois ${args}`)
    }
}
if (!Networking.IsIp(args[0])){
    let url = args[0];
    let nslookup_output = await Shell.Process.exec(`nslookup ${url}`,{silent:true});
    const lines = nslookup_output
    target = (`${lines}`.split(`Address:	`)[1]);
}else {
    target=args[0];
}
await Shell.Process.exec(`ping ${target}`,{silent:true})
await Shell.Process.exec(`nmap ${target} -sv`)
Shell.unlock()