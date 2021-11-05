function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const collectiveWisdom = {
    spiritAnimal: ['fox', 'butterfly', 'lion', 'phoenix'],
    journey: ['just beginning', 'at a fork in the road', 'coming to an end', 'over', 'at a beautiful viewpoint'],
    advice: ['stop and think', 'move on, quickly', 'keep going', 'start again']
  }
  
  // Store the 'wisdom' in an array
  let personalWisdom = []
  
  // Iterate over the object
  for(let prop in collectiveWisdom) {
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
    switch(prop) {
      case 'spiritAnimal':
        personalWisdom.push(`Your spirit animal is a "${collectiveWisdom[prop][optionIdx]}".`)
        break
      case 'journey':
        personalWisdom.push(`Your journey is: "${collectiveWisdom[prop][optionIdx]}".`)
        break
      case 'advice':
        personalWisdom.push(`You should: "${collectiveWisdom[prop][optionIdx]}".`)
        break
      default:
        personalWisdom.push('There is not enough info.')
    }
  }
  
  function formatWisdom(wisdom) {
    const formatted = personalWisdom.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(personalWisdom);