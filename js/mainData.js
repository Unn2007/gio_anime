const mainData = () => {
    fetch("https://test-edc1f-default-rtdb.firebaseio.com/anime.json").then((response)=>{
        return response.json()

    }).then((data)=>{console.log(data)})
}

mainData()