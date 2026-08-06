const build_date :string =`2026-08-05`
const RFID :string = `RP217U2E0000002229667157245952`

let args =Shell.GetArgs();
let target: string|null = null;
if (args.length == 0){
    args = (await prompt(`URL/IP ADDRESS: `))
}
if (!Networking.IsIp(args[0])){
    let url = args[0];
    let nslookup_output = await Shell.Process.exec(`nslookup ${url}`);
    println(nslookup_output)
    const lines = nslookup_output
    target = (`${lines}`.split(`Address:	`)[1]);
}else {
    target=args[0];
}
await Shell.Process.exec(`whois ${target}`);
await Shell.Process.exec(`nmap ${target} -sV`);
await Shell.Process.exec(`probe ${target}`);