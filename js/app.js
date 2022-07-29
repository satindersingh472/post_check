function success_send(response) {

    let box = document.getElementById(`box`);
    box[`innerHTML`] += `<h2>your post is successful</h2>`;
}
function failure_send(error) {

    let box = document.getElementById(`box`);
    box[`innerHTML`] = `<h2>error posting</h2>`;
}

function store_form(details) {
    let post_title = document.getElementById(`post_title`);
    let post_title_value = post_title[`value`];

    let post_body = document.getElementById(`post_body`);
    let post_body_value = post_body[`value`];

    let user_id = document.getElementById(`user_id`);
    let user_id_value = user_id[`value`];

    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: `POST`,
        data: {
            title: post_title_value,
            body: post_body_value,
            userId: user_id_value
        }
    }).then(success_send).catch(failure_send);
}

let submit = document.getElementById(`submit`);
submit.addEventListener(`click`, store_form);