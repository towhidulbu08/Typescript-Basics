let useID: string | number | boolean;

useID = "101";
useID = 101;
useID = true;

function displayUserInfo(useID: string | number) {
  console.log(useID);
}

displayUserInfo("101");
displayUserInfo(101);
