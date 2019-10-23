/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) 
  { 
    const basicPrinciples = 500;
    const fullCompleteHours = 800;
    const longWayHours = basicPrinciples + fullCompleteHours;
    let hours = knowsProgramming === true ? fullCompleteHours : longWayHours; 
    return Math.ceil(hours / config[focus]);
  };
  