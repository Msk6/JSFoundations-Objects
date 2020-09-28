/**
 * REFERENCES
 *
 * Array Iteration Methods: https://www.w3schools.com/JS/js_array_iteration.asp
 * String Methods: https://www.w3schools.com/Jsref/jsref_includes.asp
 */

/**************************************************************
 * getChannelName(channel)
 * - recieves a channel object
 * - returns the name of the channel
 ****************************************************************/
function getChannelName(channel) {
  // Your code here
  let keyName = 'name';
  return channel[keyName];
}

/**************************************************************
 * numberOfVideos(channel)
 * - recieves a channel object
 * - returns the number of videos that channel has
 ****************************************************************/
function numberOfVideos(channel) {
  // Your code here
  return channel.videos.length;
}

/**************************************************************
 * channelHasVideo(videoTitle, channel):
 * - receives a video title (string)
 * - recieves a channel object
 * - returns true if the channel object has a video that matches the given video title
 * - returns false otherwise
 *
 * BONUS: use iteration method `.some()`
 ****************************************************************/
function channelHasVideo(videoTitle, channel) {
  // Your code here
  return channel.videos.some((video) => video.title === videoTitle)
}

/**************************************************************
 * getChannelByName(channelName, channels):
 * - receives a channel name (string)
 * - recieves an array of channel objects
 * - returns the channel object with the same name as the channelName provided
 *
 * BONUS: use iteration method `.find()`
 ****************************************************************/
function getChannelByName(channelName, channels) {
  // Your code here
  let keyName = 'name';
  return channels.find( channel => channel[keyName] === channelName);
}

/**************************************************************
 * getChannelByVideoTitle(videoTitle, channels):
 * - receives a video title (string)
 * - recieves an array of channel objects
 * - returns the channel object that contains a video with the video title provided
 *
 * BONUS: use iteration methods `.find()` and `.some()`
 ****************************************************************/
function getChannelByVideoTitle(videoTitle, channels) {
  // Your code here
  let keyName_1 = 'videos';
  let keyName_2 = 'title';
  return channels.find(channel => 
    channel[keyName_1].some(video => 
      video[keyName_2] === videoTitle)
      )
}

/**************************************************************
 * searchChannels(query, channels):
 * - receives a query (string)
 * - recieves an array of channel objects
 * - returns an array of the channel objects that contain the query in their name/description.
 *
 * Hint: use string method `.includes()` and iteration method `.filter()`
 ****************************************************************/
function searchChannels(query, channels) {
  // Your code here
  return channels.filter((channel) => 
  channel['name'].includes(query) || channel['description'].includes(query)
  )
}

/**************************************************************
 * totalVideosDuration(channel):
 * - receives a channel object
 * - returns the total duration of all the videos in this channel
 *
 * BONUS: use iteration method `.reduce()`
 ****************************************************************/
function totalVideosDuration(channel) {
  // Your code here
  return channel.videos.reduce(
    (total, video) => total + video.duration, 0
    );

}

/**************************************************************
 * channelWithMostContent(channels):
 * - receives an array of channel objects
 * - returns the channel with the highest total video duration
 *
 * Hint: use the `totalVideosDuration()` function
 * BONUS: use iteration method `.sort()`
 ****************************************************************/
function channelWithMostContent(channels) {
  // Your code here
  let mostContent = 0
  let channelWithMostContent;
  channels.forEach(channel => {
    if (totalVideosDuration(channel) > mostContent){
      channelWithMostContent = channel;
      mostContent = totalVideosDuration(channel);
    }
  })
  return channelWithMostContent;
  
  // ------ it works but i can't pass the test ------
  /*let sortedChanels = channels
  return sortedChanels.sort((channel_1, channel_2) =>
    totalVideosDuration(channel_1) - totalVideosDuration(channel_2)
  )[sortedChanels.length - 1]*/
}

/**************************************************************
 * longestChannelName(channels):
 * - receives an array of channel objects
 * - returns the channel with the longest name
 *
 * BONUS: use iteration method `.sort()`
 ****************************************************************/
function longestChannelName(channels) {
  // Your code here
  let sortedChanells = channels
  return sortedChanells.sort((channel_1, channel_2) => 
    channel_1['name'].length - channel_2['name'].length
  )[sortedChanells.length - 1]
}

module.exports = {
  getChannelName,
  numberOfVideos,
  channelHasVideo,
  getChannelByName,
  getChannelByVideoTitle,
  searchChannels,
  totalVideosDuration,
  channelWithMostContent,
  longestChannelName,
};

/*let obj = [
  {
    "description": "Some things are better left unsaid.",
    "name": "Example and Ample",
    "videos": [
      {"duration": 4, "title": "Billie Ellish: everything i wanted"}
    ]
  },
   {
     "description": "What ever I finds interesting.", 
     "name": "CGP Grey", 
     "videos": [
      {"duration": 7, "title": "The Trouble With Tumbleweed"}, 
      {"duration": 11, "title": "Lockdown Productivity: Spaceship You"},
      {"duration": 13, "title": "The Fable of the Dragon-Tyrant"},
      {"duration": 18, "title": "The Rules for Rulers"}, 
      {"duration": 4, "title": "The Simple Solution to Traffic"}, 
      {"duration": 5, "title": "You Are Two"}
    ]
  },
   {
     "description": "An entire channel dedicated to the 'What If?'.  Using knowledge of geography, population and other historical facts I predict what could have happened had things gone differently in history.", 
     "name": "Alternate History Hub", 
     "videos": [
      {"duration": 19, "title": "What if Rome Never Existed? Part III"},
      {"duration": 4, "title": "What if Trump Was Never Elected President?"}, 
      {"duration": 18, "title": "How A Corporation Conquered A Sub-Continent"},
      {"duration": 18, "title": "What if Antarctica Was A Green Continent?"}, 
      {"duration": 8, "title": "Why Tyrion's Solution For Westeros Doomed Everyone"}, 
      {"duration": 10, "title": "What if Napoleon Never Fell?"}
    ]
  }, 
  {
    "description": "Documentaries and list videos narratedby a 20-something Swedish guy.", 
    "name": "LEMMiNO", 
    "videos": [
      {"duration": 19, "title": "The Universal S"}, 
      {"duration": 18, "title": "Cicada 3301: An Internet Mystery"}, 
      {"duration": 29, "title": "The Search For D.B. Cooper"}, 
      {"duration": 16, "title": "The Mandela Effect: A Critical Analysis"}
    ]
  }, 
  {
    "description": "The Joe Rogan Experience podcast", 
    "name": "PowerfulJRE",
    "videos": [
      {"duration": 121, "title": "Joe Rogan Experience #1480 -Kevin Hart"},
      {"duration": 120, "title": "Joe Rogan Experience #1470 - Elon Musk"},
      {"duration": 102, "title": "Joe Rogan Experience #1477 - Tony Hawk"}, 
      {"duration": 118, "title": "Joe Rogan Experience #1413 - Bill Maher"}, 
      {"duration": 175, "title": "Joe Rogan Experience #1208 - Jordan Peterson"}
    ]
  }
]

//console.log(totalVideosDuration(getChannelByVideoTitle('The Trouble With Tumbleweed', obj)))
//console.log(`-------- Maint object:`)
//console.log(obj)
//console.log(`-------- Sorted object: \n ${channelWithMostContent(obj).name}`)
console.log(`-------- sorted object:`)
console.log(channelWithMostContent(obj));
/*console.log(obj.sort((channel_1, channel_2) =>
     totalVideosDuration(channel_1) - totalVideosDuration(channel_2)
  ))*/

//console.log(`-------- sorted object by name long:`)
//console.log(longestChannelName(obj));
/*console.log(obj.sort((channel_1, channel_2) => 
  channel_1['name'].length - channel_2['name'].length 
  ))
*/
//console.log(channelWithMostContent(obj));
