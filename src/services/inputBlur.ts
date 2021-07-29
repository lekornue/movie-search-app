export function inputBlur(event: React.FocusEvent<HTMLFormElement>) {
  const error = document.getElementById("error");

  if (event.target.value.length > 0) {
    event.target.classList.remove("invalid");
    error?.setAttribute("hidden", "false");
  } else {
    event.target.classList.add("invalid");
    error?.removeAttribute("hidden");
  }

  if (event.target.id === "e-mail") {
    console.log("hello");
    if (!event.target.value.includes("@")) {
      event.target.classList.add("invalid");
      error?.removeAttribute("hidden");
    }
  }

  if (event.target.id === "password") {
    if (event.target.value.length < 6) {
      event.target.classList.add("invalid");
      error?.removeAttribute("hidden");
    }
  }
}
