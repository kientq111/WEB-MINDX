let $name = document.getElementById('$name');
let $email = document.getElementById('$email');
let $company = document.getElementById('$company');
let $follower = document.getElementById('$follower');
let $btnSearch = document.getElementById('$btnSearch');
let $txtSearch = document.getElementById('$txtSearch');
let $avt = document.getElementById('$avt');

async function getUserInfoWithAsyncAwait(search) {
    try {
        const response = await fetch(`https://api.github.com/users/${search}`);
        const data = await response.json();
        const {
            login,
            followers,
            company,
            name,
            email,
            avatar_url,
            message
        } = data;
        if (message != undefined) {
            alert(message);
        }
        $name.innerHTML = name === null ? 'unknown' : name;
        $email.innerHTML = email === null ? 'unknown' : email;
        $company.innerHTML = company === null ? 'unknown' : company;
        $follower.innerHTML = followers;
        $avt.src = avatar_url;
    } catch (error) {
        console.log("Err !!!", error);
    }
}

$btnSearch.addEventListener('click', function() {
    let searchName = $txtSearch.value;
    getUserInfoWithAsyncAwait(searchName);
})