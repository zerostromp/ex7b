function checkSID() {
  let sid = (document.getElementById("sid").value).trim();
  if (sid.length == 10) {
    return true;
  } else {
    return false;
  }
}