const request = require('postman-request')

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=f25876e7776ba5da8d99030859d645c1&query=${long},${lat}&units=f`

    
    request({url, json: true}, (error, {body}) => {
        if(error) {
        callback('Unable to connect to weather service', undefined)
        }else if(body.error) {
            callback('Unable to find location, check coordinates', undefined)
        }else {
            const data = body
            const temperature = data.current.temperature
            const feels = data.current.feelslike
            const description = data.current.weather_descriptions[0]
            const humidity = data.current.humidity
            const precipitation = data.current.precip
            callback(undefined, `${description}. It is currently ${temperature} degrees out but it feels like ${feels} degrees with a humidity of ${humidity}% and ${precipitation} precipitation.`)
        }
    })
}

module.exports = forecast;