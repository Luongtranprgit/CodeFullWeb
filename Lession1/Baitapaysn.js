const nameND = document.getElementById("name");
const avatar = document.getElementById("avatar");
const email = document.getElementById("email");
const tenCt = document.getElementById("tenCt");
const soNguoiFollow = document.getElementById("soNguoiFollow");
const but = document.getElementById("but_1");

const getTt = async (name) => {
  const url = `https://api.github.com/users/${name}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Không tìm thấy user bạn yêu cầu");
  } else {
    const data = await response.json();
    return data;
  }
};
const showTt = async () => {
  const input = document.getElementById("inp1");
  const name = input.value;
  try {
    const userInfo = await getTt(name);
    nameND.innerHTML = userInfo.login;
    avatar.src = userInfo.avatar_url;
    companyGit.innerHTML = userInfo.company;
    email.innerHTML = userInfo.email;
    soNguoiFollow.innerHTML = userInfo.followers;
  } catch (error) {
    alert(error.message);
  }
};

but.addEventListener("click", showTt);
