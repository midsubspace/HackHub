const args =Shell.GetArgs();
let target: string|null = null;
if (args[0]==`-url`){
    let url = args[1];
    await Shell.Process.exec(`nslookup ${url}`);
    target = await prompt("IP Address: ")
}else {
    target=args[1]
}

await Shell.Process.exec(`nmap ${target}`)
await Shell.Process.exec(`probe ${target}`)