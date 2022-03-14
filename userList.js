const tbody = document.getElementById("tbodyUserList");

window.onload = () => {
  alert(
    `Your api key is  => ${DecryptStringAES(localStorage.getItem("apiKey"))}`
  );
  getApiUserList1();
};

const getApiUserList1 = async () => {
  showLoading();

  try {
    const responseData = await axios({
      url: "https://reqres.in/api/users?page=1",
      method: "get",
    });
    const { data: userListArray } = responseData.data;
    console.log(userListArray);
    if (userListArray.length == 0) {
      alert("userlist not found");
      removeLoading();
    } else {
      tbody.innerHTML = "";
      userListArray.forEach((customer) => {
        tbody.innerHTML += `
                <tr>
                <td>
                    ${customer.id}
                </td>
                <td>
                    <img src ="${customer.avatar}">
                </td>
                <td>
                    ${customer.email}
                </td>
                <td>
                    ${customer.first_name}
                </td>
                <td>
                    ${customer.last_name}
                </td>
                </tr>
                `;
      });
      removeLoading();
    }
  } catch (error) {
    alert(error);
    removeLoading();
  }
};

const page2 = document.getElementById("page2button");

page2.addEventListener("click", async () => {
  showLoading();
  try {
    const responseData = await axios({
      url: "https://reqres.in/api/users?page=2",
      method: "get",
    });

    const { data: userList2 } = responseData.data;
    console.log(userList2);
    if (userList2.length == 0) {
      alert("userlist not found");
      removeLoading();
    } else {
      tbody.innerHTML = "";
      userList2.forEach((customer) => {
        tbody.innerHTML += `
            <tr>
                 <td>
                     ${customer.id}
                 </td>
                 <td>
                     <img src ="${customer.avatar}">
                 </td>
                 <td>
                     ${customer.email}
                 </td>
                 <td>
                     ${customer.first_name}
                 </td>
                 <td>
                     ${customer.last_name}
                 </td>
                 </tr>
            `;
      });
      removeLoading();
    }
  } catch (error) {
    alert(error);
    removeLoading();
  }
});

let page1 = document.getElementById("page1button");

page1.addEventListener("click", async () => {
  showLoading();

  try {
    const responseData = await axios({
      url: "https://reqres.in/api/users?page=1",
      method: "get",
    });
    const { data: userListArray } = responseData.data;
    console.log(userListArray);
    if (userListArray.length == 0) {
      alert("userlist not found");
      removeLoading();
    } else {
      tbody.innerHTML = "";
      userListArray.forEach((customer) => {
        tbody.innerHTML += `
                <tr>
                <td>
                    ${customer.id}
                </td>
                <td>
                    <img src ="${customer.avatar}">
                </td>
                <td>
                    ${customer.email}
                </td>
                <td>
                    ${customer.first_name}
                </td>
                <td>
                    ${customer.last_name}
                </td>
                </tr>
                `;
      });
      removeLoading();
    }
  } catch (error) {
    alert(error);
    removeLoading();
  }
});
