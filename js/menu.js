document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleBtn");
  const menuList = document.getElementById("menuList");
  const toggleIcon = document.getElementById("toggleIcon");
  let isOpen = true;

  toggleBtn.addEventListener("click", function () {
    isOpen = !isOpen;

    if (isOpen) {
      menuList.style.maxHeight = menuList.scrollHeight + "px";
      menuList.style.opacity = "1";
      menuList.style.visibility = "visible";
      toggleIcon.style.transform = "rotate(0deg)";
    } else {
      menuList.style.maxHeight = "0";
      menuList.style.opacity = "0";
      menuList.style.visibility = "hidden";
      toggleIcon.style.transform = "rotate(180deg)";
    }
  });
});
