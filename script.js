function showType(fileInput) {
  const files = fileInput.files;

  for (const i = 0; i < files.length; i++) {
    const name = files[i].name;
    const type = files[i].type;
    alert('Filename: ' + name + ' , Type: ' + type);
  }
}

var submitbtn = $('.submitbtn')
submitbtn.on("click", show)
function show() {
  alert(`Thank you, we will add "${fav_show}" to our list!`)
