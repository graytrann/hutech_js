// <!-- Write a JavaScript exercise to get the filename extension. -->

function getFileExtension(filename) {
  var dotIndex = filename.lastIndexOf(".");

  if (dotIndex !== -1 && dotIndex !== 0 && dotIndex !== filename.length - 1) {
    return filename.substring(dotIndex + 1);
  } else {
    return "";
  }
}

function getFileExtensionWithoutDot(filename) {
  var dotIndex = filename.lastIndexOf(".");

  if (dotIndex !== -1 && dotIndex !== 0 && dotIndex !== filename.length - 1) {
    return filename.substring(0, dotIndex);
  } else {
    return "";
  }
}

function getFileName() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (file) {
    let Dot = getFileExtension(file.name);
    let Name = getFileExtensionWithoutDot(file.name);
    console.log(`File: ${file.name}`);
    console.log(`Tên của tệp: ${Name}`);
    console.log(`Đuôi file: ${Dot}`);
  } else {
    console.log("Vui lòng chọn một tệp.");
  }
}
