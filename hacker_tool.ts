let args =Shell.GetArgs();
let target: string|null = null;
if (args.length == 0){
    args = (await prompt(`URL/IP ADDRESS: `))
}
if (!Networking.IsIp(args[0])){
    let url = args[0];
    await Shell.Process.exec(`nslookup ${url}`);
    await Shell.Process.exec(`nslookup ${url} > temp.txt`);
    const lines = await FileSystem.ReadFile(`temp.txt`);
    target = (`${lines}`.split(`Address:	`)[1]);
}else {
    target=args[0];
}
await Shell.Process.exec(`whois ${target}`);
await Shell.Process.exec(`nmap ${target} -sV`);
await Shell.Process.exec(`probe ${target}`);