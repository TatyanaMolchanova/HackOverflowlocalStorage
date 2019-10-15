const problemId = Location.getId()
// console.log(problemId)
const problem = Database.getProblemById(problemId)
const badgeTemplate = '<a href="#" class="badge badge-dark">%BADGE_LABEL%</a>'

if (!problem) {
    throw Error('Problem is not defined.')
}

// console.log(problem)

document.querySelector('[data-titleplace]').textContent = problem.title
document.querySelector('[data-contentplace]').textContent = problem.content
document.querySelector('[data-bagesplace]').append(
    ...problem.badges.map(badge => {
        const divElement = document.createElement('div')
        divElement.innerHTML = badgeTemplate.replace('%BADGE_LABEL%', badge)
        return divElement.firstElementChild
    })
)
document.querySelector('[data-commentsnumberplace]').textContent = problem.comments.length

document.querySelector('[data-commentsplace]').append(
    ...problem.comments.sort((a,b) => b.points - a.points).map(comment => {
        const commentHTML = CommentView.getCommentHTML(comment)

        commentHTML
            .querySelector('[data-plus]')
            .addEventListener('click', function(event) {
                // console.log('up')
                event.preventDefault()
                const result = Database.commentPointPlus(comment.id)
                if (result) {
                    const commentElement = commentHTML.querySelector('[data-pointsplace]')
                    const points = parseInt(commentElement.textContent)
                    commentElement.textContent = points + 1
                }
        })

        commentHTML
            .querySelector('[data-minus]')
            .addEventListener('click', function(event) {
                // console.log('up')
                event.preventDefault()
                const result = Database.commentPointMinus(comment.id)
                if (result) {
                    const commentElement = commentHTML.querySelector('[data-pointsplace]')
                    const points = parseInt(commentElement.textContent)
                    commentElement.textContent = points - 1
                }
        })



        // commentHTML.addEventListener('click', function(event) {
        //     console.log('fire')
        // })
        return commentHTML
    })
)

document
    .querySelector('[data-addcommentbutton]')
    .addEventListener('click', function(event){
        event.preventDefault()
        // console.log('fired');
        const commentContent = document.querySelector('[data-commentplace]').value
        // console.log(commentContent)

        const result = Database.addComment(problemId, commentContent)
        // console.log(result)
        
        if (result) {
            location.reload()
        }
})












// 41-30  https://www.youtube.com/watch?v=1Ag6qUCf0t8


