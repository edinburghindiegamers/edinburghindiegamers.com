const EVENTS_API = 'https://eig.vsnt.uk/api/get_guild_events/'
const LISTING_CONTAINER = document.querySelector('#events-listing')
const DISCORD = 'https://discord.gg/6vNbsq5tSV'

function getLang() {
    if (navigator.languages != undefined) 
        return navigator.languages[0]
    return navigator.language
}

const xhr = new XMLHttpRequest()
xhr.open("GET", EVENTS_API)
xhr.responseType = "json"
xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            output_events_listing(xhr.response)
        } else {
            LISTING_CONTAINER.innerHTML = `<div class="admonition failure"><p class="admonition-title">Error</p><p>The server could not get upcoming events.</p></div>`
        }
    }
}

xhr.addEventListener('error', () => {
    LISTING_CONTAINER.innerHTML = `<div class="admonition failure"><p class="admonition-title">Error</p><p>Failed to load events from the server.</p></div>`
})

window.onload = () => {
    xhr.send()
}

function output_events_listing (data) {
    const LOCALE = getLang()
    const DATE_OPTIONS = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const TIME_OPTIONS = { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }
    const LISTING = document.createElement('ul')
    LISTING_CONTAINER.innerHTML = ''
    LISTING_CONTAINER.appendChild(LISTING)
    for (let i=0; i < data.length; i++) {
        scheduled_start_time = new Date(data[i]['scheduled_start_time'])
        scheduled_end_time = new Date(data[i]['scheduled_end_time'])
        // Create Listing Card
        var event = document.createElement('li')

        // Heading
        var h3 = document.createElement('h3')
        h3.setAttribute('id', Date.parse(data[i]['scheduled_start_time']))
        h3.textContent = data[i]['name']
        event.appendChild(h3)

        // Date
        var date = document.createElement('p')
        date.textContent = scheduled_start_time.toLocaleDateString(locales=LOCALE, options=DATE_OPTIONS)
        event.appendChild(date)

        // Separator
        event.appendChild(document.createElement('hr'))

        // Event Information
        var info = document.createElement('p')
        if (data[i]['location'] !== null) {
            info.innerHTML += `<strong>Venue</strong>: ${data[i]['location']}<br />`
        } else if (data[i]['online']) {
            info.innerHTML += `<strong>Online Event</strong> (On <a href='${DISCORD}'>Discord</a>)<br />`
        }
        info.innerHTML += `<strong>Start Time</strong>: ${scheduled_start_time.toLocaleTimeString(locales=LOCALE, options=TIME_OPTIONS)}<br />`
        if (data[i]['scheduled_end_time'] !== null) {
            info.innerHTML += `<strong>End Time</strong>: ${scheduled_end_time.toLocaleTimeString(locales=LOCALE, options=TIME_OPTIONS)}<br />`
        }
        event.appendChild(info)

        if (data[i]['description'] !== null) {
            // Separator
            event.appendChild(document.createElement('hr'))
            var description = document.createElement('p')
            description.innerHTML = data[i]['description']
            event.appendChild(description)
        }

        LISTING.appendChild(event)
    }
}