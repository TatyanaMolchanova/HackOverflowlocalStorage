const problems = Database.getProblems()


const cardsplaceElement = document.querySelector('[data-cardplace]')

for (const problem of problems) {
    const html = Card.getHTML(problem)
    cardsplaceElement.append(html)
}