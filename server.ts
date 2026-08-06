const build_date :string =`2026-08-05`
const RFID :string = `LX074KU8008138372585357312`

const remote_address :string = `65.149.177.197`
const remote_user :string = `operator`
const remote_password :string = `Fj2aE9RvcpEd`
await Shell.Process.exec(`ssh -h ${remote_user}@${remote_address}`)