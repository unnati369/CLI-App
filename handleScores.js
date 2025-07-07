import fs from "fs";
const getScore = () =>{
    try{
        const data = fs.readFileSync("scores.json","utf8")
        return JSON.parse(data)
    }
    catch(err){
        console.log(err)
        return []
    }
}
const updateScore = (score) =>{
    fs.writeFileSync("scores.json", JSON.stringify(score,null,2))
}
const showLeaderBoard = () =>{
    getScore().sort((a,b)=> b.score - a.score).forEach((item,index) =>{
        console.log(`${index+1}. ${item.name} - ${item.score} at ${item.time}`)
    })
}
export const addScore = (username,score) =>{
    const scores = getScore()
    scores.push({name: username, score: score, time: new Date().toLocaleDateString()})
    updateScore(scores)
    showLeaderBoard()
}

