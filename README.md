![#WirVsVirus Hackathon March 20-22.](./assets/WirVsVirus.png)

# Tracemission

With Tracemission, we digizize and improve the manual recording of visitors contact details in locations of public interest like grocery stores. It is an app to log your presence during specific time slots at a location. When it comes to be known that some with a virus infected persons visited the location at the same time, Tracemission supplies means to contact individuals potentially at risk of an infection.

While Tracemission sets value on our users personal data, QR codes are used for tracking instead of GPS give back control over their data to our users. As an abstraction layer, Tracemission furthermore hides away the personal data of visitors from store owners. Using QR codes for tracking, also people not using smartphones are able to use our system by scanning QR codes printed out to paper.

To further improve our path to privacy in the future, we plan on a decentralized data store to keep all personal contact data only at the users device (without any cloud storage) as well as associating users and stores on a local basis as well.

Tracemission was started as a project during the [#WirVsVirus Hackathon March 20-22.](https://wirvsvirushackathon.org/)

For the front-end, we are using react-native with expo.

Check it out:
- [Our project page on devpost](https://devpost.com/software/0008_corona_tracking-tracemission)
- [Our pitch video (German)](https://youtu.be/hWeIKGrCtwI)
- [Our backend](https://github.com/tracemission/tracemission-server)
- [Our web](https://tracemission.app)

# Builds
To run it on your device, install the Expo client [for iOS](https://itunes.apple.com/app/apple-store/id982107779) or [for Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) and scan the code on our latest build pages.

## Customer App
![Publish Customer App to Expo](https://github.com/tracemission/tracemission-app/workflows/Publish%20Customer%20App%20to%20Expo/badge.svg)
![Build and deploy customer web app](https://github.com/tracemission/tracemission-app/workflows/Build%20and%20deploy%20customer%20web%20app/badge.svg)
![Build Customer Android App (Expo)](https://github.com/tracemission/tracemission-app/workflows/Build%20Customer%20Android%20App%20(Expo)/badge.svg)

- [Launch Web App](https://tracemission.app)
- [Launch in Appetize Simulator](https://expo.io/appetize-simulator?url=https://expo.io/@tracemission/tracemission-customer)
- [Download latest Android build](https://expo.io/@tracemission/tracemission-customer/builds)

## Store Owner App
![Publish Store App to Expo](https://github.com/tracemission/tracemission-app/workflows/Publish%20Store%20App%20to%20Expo/badge.svg)
![Build and deploy store web app](https://github.com/tracemission/tracemission-app/workflows/Build%20and%20deploy%20store%20web%20app/badge.svg)
![Build Store Android App (Expo)](https://github.com/tracemission/tracemission-app/workflows/Build%20Store%20Android%20App%20(Expo)/badge.svg)

- [Launch Web App](https://store.tracemission.app)
- [Launch in Appetize Simulator](https://expo.io/appetize-simulator?url=https://expo.io/@tracemission/tracemission-store)
- [Download latest Android build](https://expo.io/@tracemission/tracemission-store/builds)
