// appraiser.ts
// m1ndgames@gomail.com
const DOWNLOADS = "~/downloads";

function shellEscape(name: string): string {
  return name.replace(/ /g, "\\ ");
}

const lsOutput = await Shell.Process.exec(`ls ${DOWNLOADS}`, { silent: true });
const files = lsOutput.replace(/\r/g, "").trim().split("\n").filter(Boolean);

for (const file of files) {
  const escaped = shellEscape(file);
  println(`Appraising: ${file}`);
  const output = await Shell.Process.exec(`appraise ${DOWNLOADS}/${escaped}`, { silent: true });
  println(output.replace(/\r/g, "").trim());
  newLine();
}