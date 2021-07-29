export function inputFocus(event: React.FocusEvent<HTMLFormElement>) {
  const error = document.getElementById("error");
  if (event.target.classList.contains("invalid")) {
    event.target.classList.remove("invalid");
    error?.setAttribute("hidden", 'false')
  }
}
