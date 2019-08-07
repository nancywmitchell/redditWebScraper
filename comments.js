const rp = require('request-promise')
const $ = require('cheerio')

    const url = "https://www.reddit.com/r/thebachelor/comments/cn6sv7/bip_s6e02_postepisode_discussion_thread/"

    async function getComments() {
        try {

        console.log('is this working')

        let html = await rp(url)
        // console.log('html is', html)
        
        // let array = $("p", html).get()
        // // console.log(array[0])
        // console.log('length of array is ', array.length)

        // console.log(array.isArray())
        // // array = array.toArray()

        // let comments = array.map(comment => comment.innerText
        // )
        // return comments
        
        }
        catch(err) {
            console.log(err)
        }

    }

    getComments()// .then(comments => console.log("comments are ", comments))

    // let data = await getComments()
    // return data