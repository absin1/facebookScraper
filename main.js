main = function () {
    var posts = getAllPosts()

    for (var asd = 0; asd < posts.length; asd++) {
        var post = posts[asd];
        var postId = getPostId(post);
        console.log(postId);
    }
}



clickAllSeeMores = function () {
    var seeMores = document.getElementsByClassName('see_more_link_inner');
    seeMores[0].click();
}

getAllPosts = function () {
    var posts = document.getElementsByClassName('_1dwg _1w_m _q7o');
    return posts;
}

function processLinkSharePost(post) {
    try {
        return post.getElementsByClassName('_3ekx _29_4')[0].getElementsByTagName('a')[1].getAttribute('href');
    } catch (error) {

    }
}

function getPostText(post) {
    try {
        var postMessage = post.getElementsByClassName('userContent')[0].innerText;
        return postMessage;
    } catch (error) {

    }
}

function getPostDate(post) {
    try {
        var postDate = post.getElementsByTagName('abbr')[0].getAttribute('title');
        return postDate;
    } catch (error) {

    }
}

function getPostId(post) {
    try {
        var postId = post.getElementsByClassName('_5pcq')[0].getAttribute('href').split('/')[3].split('?')[0];
        return postId;
    } catch (error) {

    }
}