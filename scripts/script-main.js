import data from '../json/video_games.json' assert { type: 'json' };
const game_data = data.video_games;


export function getAllSales() {
    let games = [];
    for(i = 0; i < game_data.length; i++) {
        games.push(game_data[i].Global_Sales);
        console.log(game_data[i].Global_Sales)
    }
    return games;
}
