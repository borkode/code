switch(message.content.toString().toLowerCase()){
  case default:
    message.channel.send("That is not a valid game");
  case "filler":
    requests.game[message.author.id.toString()]="none";
    updatejson(requests,'requests');
    break;
}
