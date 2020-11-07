async function setupPlugin({ config }) {
    console.log("Setting up the team!")
    console.log(config)
}

async function processEvent(event, { config, cache }) {
    const counter = await cache.get('counter', 0)
    cache.set('counter', counter + 1)

    if (event.properties) {
        event.properties['hello'] = 'world'
        event.properties['bar'] = config.bar
        event.properties['$counter'] = counter
        event.properties['lib_number'] = libFunction(3)
    }

    return event
}
