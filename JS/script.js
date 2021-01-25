let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let user = new UserProfile();

searchBtn.addEventListener('click', (e) => {
    let userText = searchUser.value;
    if (userText != '') {
        //Using Fetch API
        fetch('https://api.github.com/users/${userText}')
            .then(result => result.json())
            .then(data => {
                if (data.message == 'Not Found') {
                    //show alert
                } else {
                    //show profile
                    user.showProfile(data);
                }
            })
    } else {
        //clear search bar
    }
});
