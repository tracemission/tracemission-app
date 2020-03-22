_DRAFT_

# Secure Tracemission Tracking & Exchange Protocol (STTEP)
This protocol is meant to define a framework for securely tracking the visits of individuals at defined locations (e.g. grocery stores, public transportation, parks, ...) and exchanging contact information in a decentralized way without the ability for third parties to gather information on exchanged information. Those tracking mechanisms should be used in global pandemic cases such as the current SARS-CoV2/CoViD19 pandemy.

## Actors and Roles defined by this protocol
As it is meant to be a decentralized system, the STTEP defines different actors and roles to work together.

### Tracemission Central
The Tracemission Central is provided by the Tracemission project team. You might ask, "Central? In a decentralized system?"–yes, the central provides a universal entry point as well as further information to the people not being aware of the Tracemission movement yet. Furthermore, it provides a central registry to lookup registered Tracemission Edge Spaces. It should be possible to chain Tracemission Centrals in a hierarchy as well as setting up parallel networks. In sense for a common global Tracemission experience, it is highly recommended to link all individual networks.

The Tracemission Central triggers and coordinates the retrieval and decryption of contact information data in case of an occurred infect at a known location.

### Tracemission Edge Space
Tracemission Edge Spaces provide routing and ID resolution services to the Tracemission Apps. Each Tracemission Edge Space maintains two local directories:
1. A directory of all issued app IDs
2. A directory of all known Tracemission Edge Spaces

As identifying authority, the Tracemission Edge Space issues app IDs to Tracemission Apps. Each ID gets linked with technical information about the data exchange protocol between the Tracemission Edge Space and the corresponding Tracemission App. These protocols might be but are not limited to e.g. push notifications, HTTP-requests, queue or event systems, ... Associated with each directory entry is a secret key to decrypt the contact data stored by each individual Tracemission App. The secret key MUST be kept secured and SHOULD only be used on verified request by the authoritative Tracemission Central.

As the gateway and router between multiple Tracemission App Instances, the Tracemission Edge Space receives linking invitations from arbitrary Tracemission Apps and forwards them to the associated Tracemission App. Undelivered requests are getting cached on the Tracemission Edge Space.

With the directory of known other Tracemission Edge Spaces, it provides a service to registered Tracemission Apps to verify the identity of foreign Tracemission Edge Spaces.

### Tracemission App
The Tracemission App 

## Artifacts and Objects defined by this protocol
### Tracemission Container
### Linking Invitations
