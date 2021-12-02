

const userInfo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("user info Resolved")
            // reject("User info api fail");
        }, 1000)
    })
}

const instaFeed = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("Insta Feed Resolved")
            reject("Insta feed fail");
        }, 1000)
    })
}

const loadData = async () => {
    try {
        const promises = [
            userInfo(),
            instaFeed()
        ];
        const res = await Promise.allSettled(promises)
        console.log(res);
        
        if(res[0].status === "rejected") {
            throw new Error("Display full screen Error");
        } else if(res[1].status === "rejected") {
            // write a code to dipslay error message in feed section
        } else {
            // display the data
        }
    } catch (error) {
        console.log(error);
    }
}
loadData();
