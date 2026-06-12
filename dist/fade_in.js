document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  body.classList.remove("opacity-0");
  body.classList.add("opacity-100");

  const reveal = (photo) => {
    photo.classList.remove("opacity-0");
    photo.classList.add("opacity-100");
  };

  document.querySelectorAll("img.opacity-0").forEach((photo) => {
    if (photo.complete) {
      reveal(photo);
      return;
    }

    photo.addEventListener("load", () => reveal(photo), { once: true });
    photo.addEventListener("error", () => reveal(photo), { once: true });
  });
});
