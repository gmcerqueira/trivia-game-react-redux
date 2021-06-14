function emailOnChange(email) {
    return { type: 'EMAIL_CHANGE',
      payload: email };
  }

  function playerName(player) {
    return { type: 'PLAYER_CHANGE',
      payload: player };
  }


  
  export {emailOnChange,playerName };