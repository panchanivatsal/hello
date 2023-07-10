const logout = () => {
    localStorage.removeItem('checkuer');
    window.location.href = "sign-in.html";
    alert("Thank you for vist");
  }