export const SelectTravelersList=[
    {
        id:1,
        title:'Just Me',
        desc:'A sole traveler in exploration',
        icon:'✈️',
        people:'1 Person'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two travelers in tandem',
        icon:'🥂',
        people:'2 People'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving individuals',
        icon:'🏡',
        people:'3 to 5 People'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekers',
        icon:'⛵',
        people:'5 to 10 People'
    },
]


export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💵',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep costs on the average side',
        icon:'💰',
    },
    {
        id:3,
        title:'Luxury',
        desc:'Do not worry about the costs',
        icon:'💸',
    },
]


export const AI_PROMPT='Generate Travel Plan for Location : {location} for {totalDays} Days for {traveler} with a {budget} Budget, give me a hotels option list with hotel name, hotel address, price, hotel image url, geo coordinates, rating, descriptions, and suggest an itinerary with the time at each place (i.e. 1:00 PM - 4:00 PM), place name, place details, place image url, geo coordinates, ticket pricing, rating, and time to travel to each of the location (in hours or minutes or both, not just words) for {totalDays} days with each day plan with best time to visit in JSON format. For the days for the itinerary, in JSON format, make sure that it is indexed in a list, so index 0 would have day: Day 1, index 1 would have day: Day 2, and the same for the rest of the days.'