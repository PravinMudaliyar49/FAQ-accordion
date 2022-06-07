let queriesCont = document.querySelector(".queries__cont");

queriesCont.addEventListener("click", e => {
    let clickedEle = e.target;

    if (clickedEle.classList.contains('arrow__down') || clickedEle.classList.contains('query')) {
        let div = clickedEle.parentElement.parentElement;
        let query = clickedEle.classList.contains('query') ? clickedEle : clickedEle.previousSibling.previousSibling;

        if (!div.childNodes[5]) {
            appendElement(div);
            clickedEle.classList.toggle('arrow__up');
            query.classList.toggle('bolder');
        } else {
            div.removeChild(div.childNodes[5]);
            clickedEle.classList.toggle('arrow__up');
            query.classList.toggle('bolder');
        }
    }
});

function appendElement(div) {
    let element = document.createElement('div');

    if (div.classList.contains('one')) {
        element.innerHTML = '<span class="answer">You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</span>';
    } else if (div.classList.contains('two')) {
        element.innerHTML = '<span class="answer">No more than 2GB. All files in your account must fit your allotted storage space.</span>';
    } else if (div.classList.contains('three')) {
        element.innerHTML = '<span class="answer">Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.</span>';
    } else if (div.classList.contains('four')) {
        element.innerHTML = '<span class="answer">Yes! Send us a message and we’ll process your request no questions asked.</span>';
    } else if (div.classList.contains('five')) {
        element.innerHTML = '<span class="answer">Chat and email support is available 24/7. Phone lines are open during normal business hours.</span>';
    }

    div.appendChild(element);
}
