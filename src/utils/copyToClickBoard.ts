export function copyToClickBoard(value: string) {
  const input = document.createElement("input");
  input.style.position = "absolute";
  input.style.top = "-1000px";
  input.style.left = "-1000px";
  input.value = value;

  document.body.appendChild(input);
  input.select();

  const selection = document.getSelection();
  const range = document.createRange();

  range.selectNodeContents(input);
  if (selection) selection.addRange(range);

  const isSuccess = document.execCommand("copy");

  document.body.removeChild(input);

  return isSuccess;
}
