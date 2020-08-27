# What is the point of this repo?

Presenting a basic setup on how to coordinate multiple stimulus controller using a DOM element as an event bus for the controllers to exchange messages with each others.

# What are the use case & context?

Cards for 3 flats. When you try to book a flat, it simply increments the total of registered bookings on top.

- Each flat registration interaction (button click) is handled through a stimulus controller
- The total increment interaction is handled through a separate stimulus controller

![Setup screenshot](https://www.dropbox.com/s/8prb820ilia7x51/Screenshot%202020-08-28%20at%2000.55.03.png?raw=1)

[See the interactions on video](https://www.loom.com/share/478aba4357ab4087b83ead20851c2333)

# Setup

1. If needed, install parcel

```
yarn global add parcel-bundler
```

2. Clone this repo

3. Change directory into this repo & run

```
parcel index.html
```
