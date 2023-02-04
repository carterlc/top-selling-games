import data from '../json/video_games.json' assert { type: 'json' };
const game_data = data[0].data;

console.log(game_data);
export function getAllSales() {
    let games = [];
    for(let i = 0; i < game_data.length; i++) {
        games.push(game_data[i].Global_Sales);
    }
    return games;
}

export function getAllGames() {
    let games = [];
    for(let i = 0; i < game_data.length; i++) {
        games.push(game_data[i].Name);
    }
    return games;
}