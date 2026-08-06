const build_date :string =`2026-08-05`
const RFID :string = `OD52I4WQ7490376692662272`

let isInstalled = await installLib("hashcat");
println(`Hash Cat: ${isInstalled}`);

isInstalled = await installLib("metasploit");
println(`Metasploit: ${isInstalled}`);

isInstalled = await installLib("python3");
println(`python3: ${isInstalled}`);

isInstalled = await installLib("clearlogs");
println(`clearlogs: ${isInstalled}`);

isInstalled = await installLib("git");
println(`git: ${isInstalled}`);

isInstalled = await installLib("probe");
println(`probe: ${isInstalled}`);

isInstalled = await installLib("bettercap");
println(`bettercap: ${isInstalled}`);

isInstalled = await installLib("john");
println(`john: ${isInstalled}`);