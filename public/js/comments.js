console.log("connected")
const commentFormHandler = async (event) => {
    event.preventDefault();

    const post_comment = document.querySelector('#post-comment').value.trim();
console.log("working")
    // const post_id = window.location.toString().split('/')[
    //     window.location.toString().split('/').length - 1
    // ];

    if (post_comment) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_comment
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            //don't redirect
            window.location.reload('')
    

        } else {
            alert(response.statusText);
            document.querySelector('.new-comment').style.display = "block";
        }
    }
}

document.querySelector('.new-comment').addEventListener('click', commentFormHandler);