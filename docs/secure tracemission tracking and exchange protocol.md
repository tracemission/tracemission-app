_DRAFT_

# Secure Tracemission Tracking & Exchange Protocol (STTEP)
This protocol is meant to define a framework for securely tracking the visits of individuals at defined locations (e.g. grocery stores, public transportation, parks, ...) and exchanging contact information in a decentralized way without the ability for third parties to gather information on exchanged information. Those tracking mechanisms should be used in global pandemic cases such as the current SARS-CoV2/CoViD19 pandemy.

## Actors and Roles defined by this protocol
As it is meant to be a decentralized system, the STTEP defines different actors and roles to work together.

### Tracemission Central
The Tracemission Central is provided by the Tracemission project team. You might ask, "Central? In a decentralized system?"–yes, the central provides a universal entry point as well as further information to the people not being aware of the Tracemission movement yet. Furthermore, it provides a central registry to lookup registered Tracemission Edge Spaces. It should be possible to chain Tracemission Centrals in a hierarchy as well as setting up parallel networks. In sense for a common global Tracemission experience, it is highly recommended to link all individual networks.

The Tracemission Central triggers and coordinates the retrieval and decryption of contact information data in case of an occurred infect at a known location.

### Tracemission Edge Space
Tracemission Edge Spaces provide routing and Tracemission ID resolution services to the Tracemission Apps. Each Tracemission Edge Space maintains two local directories:
1. A directory of all issued app IDs
2. A directory of all known Tracemission Edge Spaces

As identifying authority, the Tracemission Edge Space issues Tracemission IDs to Tracemission Apps. Each ID gets linked with technical information about the data exchange protocol between the Tracemission Edge Space and the corresponding Tracemission App. These protocols might be but are not limited to e.g. push notifications, HTTP-requests, queue or event systems, ... Associated with each directory entry is a secret key to decrypt the contact data stored by each individual Tracemission App. The secret key MUST be kept secured and SHOULD only be used on verified request by the authoritative Tracemission Central.

As the gateway and router between multiple Tracemission App Instances, the Tracemission Edge Space receives linking invitations from arbitrary Tracemission Apps and forwards them to the associated Tracemission App. Undelivered requests are getting cached on the Tracemission Edge Space.

With the directory of known other Tracemission Edge Spaces, it provides a service to registered Tracemission Apps to verify the identity of foreign Tracemission Edge Spaces.

To identify and reach a specific Tracemission Edge Space, each instance has an associated identifying Web URL for the HTTPS-Protocol.

### Tracemission App
The Tracemission App is the interface to the actual User. This is the place where all of his/her personal data as well as the linked Tracemission Items are stored. A Tracemission App could be every generic device, it does not matter if it is running as native app on a mobile such as Android or iOS, as a standalone check-in on an embedded system or microcontroller or on a handheld for guided check-in.

Each Tracemission App stores and controls the data for the associated Tracemission Items. Therefore, the data MUST never leave the apps storage unencrypted. One App could manage any number of Tracemission Items, at least one. To identify Tracemission Items, the Tracemission App requests at least one Tracemission ID per managed Tracemission Item from a free chosen Tracemission Edge Space. Different Tracemission IDs could be issued by different Tracemission Edge Spaces. There is a public key belonging to each Tracemission ID used to encrypt the managed Tracemission Item data on transmission.

The Tracemission App is responsible for sending out Linking Invitations and managing a curated list of all successful linkings.

## Artifacts and Objects defined by this protocol
### Tracemission Items
A Tracemission Item represents the data exchanged between the Tracemission Apps. It is managed by one dedicated Tracemission App and MUST NOT be sent out unencrypted to guarantee privacy. The data format is free of choice.

Each Tracemission Item MUST be associated with one or more Tracemission IDs. The public key belonging to each ID MUST be used to encrypt the stored data on sharing it. A nonce MAY get used to randomize the encrypted cipher.

### Tracemission ID
Tracemission IDs are used to identify single Tracemission Items and their managing Tracemission Apps. They MUST be issued by a Tracemission Edge Space. Each Tracemission ID consists of the identifier of the issuing Tracemission Edge Space and a generated identifier sequence unique per Tracemission Edge Space. To retrieve the full unique Tracemission ID, the generated identifier sequence gets inserted into the Tracemissions identifier in a predefined way by the issuing Tracemission Edge Space.

Tracemission IDs MUST be valid URLs.

### Tracemission Container
The Tracemission Container bundles the encrypted Tracemission Item together with its corresponding Tracemission ID and optional meta data on the Tracemission Item Type and the required Tracemission Link Type into a well-known data exchange format.

The formatted Tracemission Container is represented as a URL pointing to a Tracemission Central universal entry point. The necessary payload for the Tracemission Item, Tracemission ID and further meta data is piggy-packed into a predefined URL format. This way, Tracemission Containers received by non-Tracemission Apps could get informative output for the user.

### Linking Invitation
A linking invitation informs a Tracemission App about a contact between a managed Tracemission Item with another Tracemission Item. It is used to link both Tracemission Items.

A Linking Invitation consists of a Tracemission Container containing the Tracemission Item initiating the contact. It is not required to accept Linking Invitations.

### Tracemission Link
With the Tracemission Link, the contact between two Tracemission Items is documented. It is stored locally on the Tracemission App that manages each affected Tracemission Item. Beneath the local Tracemission Item, the encrypted foreign Tracemission Item as well as the associated Tracemission ID and the timestamp for the contact are stored together with the Tracemission Link. Depending on the Link Type, further meta information could get supplied.

## Processes
### Registration
During the registration, a new Tracemission Item is created on a (fresh or existing) Tracemission App instance. It is filled by the individual creating it with sensitive contact data. The requirements for those data might be defined by the Tracemission App itself. During the creation, the Tracemission App requests a new Tracemission ID from a Tracemission Edge Space. The Tracemission Edge Space to be used to request the ID  from COULD be freely chosen in favor of the Tracemission App. It MAY be e.g. predefined, (randomly) selected from a list, supplied by the user or proposed by the Tracemission Central.

### Check-In
The Check-In is triggered when a Tracemission App managing at least one active Tracemission Item gets into touch with a foreign Tracemission Container. This MAY be happen by but is not limited to e.g. a scanned QR code, a received radio signal (bluetooth including beacons, NFC, ...), crossing of a geo fence, ...

After receiving the Tracemission Container, it is getting unpacked from the supplying format and the supplied data is linked to the local Tracemission Item. Furthermore, the associated Tracemission ID gets resolved for the issuing Tracemission Edge Space. The identity of the Tracemission Edge Space is verified using a trusted Tracemission Edge Space. In case of no trustful relationship, the linking gets canceled.

Otherwise, a Linking Invitation is sent to the issuing Tracemission Edge Space for the supplied Tracemission ID. The Linking Invitation contains the local Tracemission Item packed into another Tracemission Container.

### Check-Out
Some Linking Types MAY require a check-out. The check-out runs similar to the Check-In except that the initiating Tracemission App checks for existing links before checking in again. If there are any valid links without a Check-Out left, it sends the Linking Invitation as a Check-Out.

### Refresh Tracemission ID/Request new Tracemission ID
Each Tracemission App MAY refresh the Tracemission ID for managed Tracemission Items or additional Tracemission IDs for those. The IDs could just get requested from the trusted Tracemission Edge Spaces, according to the Registration process.

### Contact individuals in doubt after infection
When an individual gots infected or a location using Tracemission needs to get a list of all individuals in doubt, it is sufficient to know the Tracemission ID of the root Tracemission Item.

The process is either triggered by an individual informing about his disease or by the local health authorities to safeguard individuals potentially at risk.

With this Tracemission ID, a further processing at the Tracemission Central could be requested. The processing is split into four stages:
1. The Tracemission Central requests a list of all linked Tracemission Items from the Tracemission App managing the requested Tracemission Item using its Tracemission ID. The user NEEDS to consent on the transmit before the data is collected and replied.
2. All Tracemission Items from this list that are classified as Location are requested to hand over a list of all the Tracemission Items having been associated in similar time slots as the Tracemission Item requesting for. The lists are returned automatically.
3. The Tracemission Edge Spaces that issued the associated Tracemission IDs are requested to decrypt the supplied encrypted Tracemission Items. The Tracemission Edge Space notifies the Tracemission App about the decryption request. Depending on the trust relationship, it returns the decrypted Tracemission Items to the Tracemission Central.
4. The Tracemission Central could either inform the users using the Tracemission Edge Spaces about an infection in doubt. It could also hand over the list of decrypted personal contact data to the local health authorities.

## Special Tracemission App Types with belonging Tracemission Items
### Location
### Community Spot
### Analog Proxy

## Special Tracemission Link Types
Special Tracemission Link Types REQUIRE a Linking Invitation acceptance with further information on the Tracemission Link.

### Well-defined time slots
Well-defined time slots REQUIRE a user to check-out on leaving a Location. Therefore, a Well-defined time slot Tracemission Link stores an additional timestamp for the end of the contact is registered.

# Missing in this specification & further ideas
- Make use of the Public-Key-Infrastructure for establishing trust between the different parties and to enable validity checks on the issued Tracemission Keys
- How to manage backups and recoveries of the Tracemission Apps, stored Tracemission Items and associated Tracemission Items?
- How to build connecting graphs?
- How to handle huge data amounts on links and IDs?
- APIs to use for the requests
- What about security?
- Handle path/graph requests?
- How to handle outdated data?
- How to handle deletion requests?