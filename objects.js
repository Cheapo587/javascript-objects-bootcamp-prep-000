var playlist = new Object()
playlist.cake = "the distance"

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName //why doesnt this work? I've discovered no workarounds for this
  return playlist = new Object() //except this workaround.
}
