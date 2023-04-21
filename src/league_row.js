exports.create = function (maxSize, players = []) {
  // function computeMaxSizeWithSizeCap(maxSize) {
  //   if (!process.env.hasOwnProperty("TABLE_TENNIS_LEAGUE_ROW_SIZE_CAP")) {
  //     return maxSize
  //   }
  //   const sizeCapString = process.env.TABLE_TENNIS_LEAGUE_ROW_SIZE_CAP
  //   if (isNaN(sizeCapString) || isNaN(parseInt(sizeCapString))){
  //     return maxSize
  //   }
  //   const sizeCap = parseInt(sizeCapString)
  //   return maxSize <= sizeCap 
  //           ? maxSize
  //           : sizeCap
  // }
  //  Don't pay attention to this size cap code, it will be relevant in a future exercise.

  function swap (playerToRemove, playerToAdd) {
    const playerIndex = players.findIndex(player => player === playerToRemove);
    players.splice(playerIndex, 1, playerToAdd);
  }

  return {
    getPlayers: function () { return players; },
    add: function (player) { players.push(player); },
    isFull: function () { return players.length === maxSize /* ignore this too computeMaxSizeWithSizeCap(maxSize) */ }, 
    includes: function (player) { return players.includes(player); },
    swap: swap
  };
};
