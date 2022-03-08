
//server lưu trữ tài khoản
const user = {
    userName: 'tung',
    password: 123123,
}

const button = document.querySelector('#button')

button.addEventListener('click', (e) => {
    //khi click sẽ reques lên sever và kiểm tra
    const userName = document.querySelector('#userName').value
    const password = document.querySelector('#password').value

    const wrongpassword = document.querySelector('.wrongpassword')
    if (userName !== user.userName) {
        e.preventDefault()
        wrongpassword.innerHTML = `<p>không tìm thấy tên tài khoản</p>`
    } else if (+password !== user.password) {
        e.preventDefault()
        wrongpassword.innerHTML = `<p>mật khẩu sai</p>`
    } else {
         document.getElementById('form').setAttribute('action', 'dasboard.html')
    }
})


