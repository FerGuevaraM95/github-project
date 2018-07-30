class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        console.log(user);
        this.profile.innerHTML = `
            <div class="card mt-2 animated bounceInLeft">
                <img class="card-img-top" src="${user.avatar_url}" />
                <div class="card-body">
                    <h3 class="card-title">${user.name} / ${user.login}</h3>
                    <a class="btn btn-primary btn-block" href="${user.html_url}" target="_blank">View Profile</a>
                    <span class="badge badge-success">
                        Followers: ${user.followers}
                    </span>
                    <span class="badge badge-primary">
                        Followings: ${user.following}
                    </span>
                    <span class="badge badge-warning">
                        Company: ${user.company}
                    </span>
                    <span class="badge badge-info d-block">
                        Blog: ${user.blog}
                    </span>
                </div>
            </div>
        `;
    }
}

module.exports = UI;