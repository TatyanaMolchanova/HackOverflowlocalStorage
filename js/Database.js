;(function() {
    'use strict'


    let database = {
        idCounter: 2,
        problems: [{       
            id: 1,
            title: 'Post title',
            content: 'Post content',
            points: 0,
            viewsNumber: 10,
            badges: ['js', 'javascript'],
            comments: [
                {
                    id: 1,
                    points: 5,
                    content: 'Comment content'
                }
            ]
        },
        {       
            id: 2,
            title: 'Call an URL with Auth Token with Fetch API',
            content: 'Im using the Fetch API to Login to my Webapp using Baisc Authentication. After a successful login the server returns a token as a json object. I am then using this token to make requests to other API Endpoints',
            points: 12,
            viewsNumber: 16,
            badges: ['js', 'javascript', 'api'],
            comments: [
                {
                    id: 2,
                    content: 'Here is my code'
                },
                {
                    id: 3,
                    content: 'I am getting the "Success"'
                }
            ]   
        },
        {       
            id: 3,
            title: 'How do I automate a page in selenium where right click is disabled',
            content: 'After a successful login the server returns a token as a json object. I am then using this token to make requests to other API Endpoints',
            points: 8,
            viewsNumber: 2,
            badges: ['php', 'selenium', 'api'],
            comments: [
                {
                    id: 4,
                    content: 'Here is my code'
                },
                {
                    id: 5,
                    content: 'I am getting the "Success"-'
                },
                {
                    id: 6,
                    content: 'I am getting'
                }
            ]   
        },
        {       
            id: 4,
            title: 'Promise/axios: TypeError: Failed to fetch',
            content: 'I am then using this token to make requests to other API Endpoints',
            points: 0,
            viewsNumber: 23,
            badges: ['token', 'promise'],
            comments: [
                {
                    id: 7,
                    content: 'My code is following.'
                },
            ]   
        },
        {       
            id: 5,
            title: 'How to keep alive node server permanently?',
            content: 'I have tried so many ways to keeping node server alive on Linux environment but nothing has worked',
            points: 67,
            viewsNumber: 3,
            badges: ['server'],
            comments: []   
        }
    ],
        
    }

    load()
    save()

    const Database = {}

    Database.getProblems = function getProblems() {
        return JSON.parse(JSON.stringify(database.problems))
    }

    Database.getProblemById = function getProblemById(problemId) {
        for (const problem of database.problems) {
            if (problem.id === problemId) {
                return JSON.parse(JSON.stringify(problem))
            }
        }
        return null
    }

    Database.commentPointPlus = function commentPointPlus(commentId) {
        for (const problem of database.problems) {
            for (const comment of problem.comments) {
                if (comment.id === commentId) {
                    comment.points++
                    save()
                    return true
                }
            }
        }
        
        return false
    }

    Database.commentPointMinus = function commentPointMinus(commentId) {
        for (const problem of database.problems) {
            for (const comment of problem.comments) {
                if (comment.id === commentId) {
                    comment.points--
                    save()
                    return true
                }
            }
        }
        
        return false
    }



    Database.addProblem = function addProblem(title, content) {
        database.problems.push({
            id: database.idCounter,
            title: title,
            content: content,
            points: 0,
            comments: []
        })

        database.idCounter++
        
        save()
    }
    // console.log(Database.addProblem);
    window.Database = Database

    function save() { // Save our database in localStorage
        localStorage.setItem('db', JSON.stringify(database))
    }

    function load() { // Will return our database from localStorage
        const jsonString = localStorage.getItem('db')

        if (jsonString) {
            database = JSON.parse(jsonString)
        }
        
    }

   
})();

// Commands in console
// Database.getDatabase()
// const data = Database.getDatabase()
// data[0].title = 'new title'
// 48:33
// Database.addProblem('How close Tab', 'How close Google TABS') - create new problem, in console too
