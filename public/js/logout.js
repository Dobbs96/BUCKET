const logout = async () => {
  console.log("logout button clicked");
  const response = await fetch("/auth/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/login");
  } else {
    alert("Failed to log out");
  }
};

document.querySelector("#logout").addEventListener("click", logout);
