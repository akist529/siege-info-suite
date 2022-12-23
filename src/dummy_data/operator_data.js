export const operatorList = [
    {
        name: 'Ace',
        team: 'Attack',
        ability: 'S.E.L.M.A. Aqua Breacher',
        description: "SELMAs act as a form of hard breach, creating a rectangular shaped hole in any surface it is thrown onto, including reinforcements. When thrown onto a wall, it will create two of these holes, one on top of the other, unless shot out prematurely. On reinforced floor hatches, they will detonate only once, and a second SELMA will be required to open the hatch. When used properly, these charges can create kill holes or new points of entry for attackers.",
        health: 2,
        role: ["Hard Breacher"],
        synergies: [
            {
                name: 'Thatcher',
                description: "Thatcher's EMP grenades can destroy any electronic defender utility that prevents the SELMA charges from detonating.",
            },
            {
                name: 'Twitch',
                description: "Twitch's shock drone can destroy any electronic defender utility that prevents the SELMA charges from detonating.",
            },
            {
                name: 'Kali',
                description: "Kali's LV Lance can destroy any electronic defender utility that prevents the SELMA charges from detonating.",
            },
            {
                name: 'Zero',
                description: "Zero's ARGUS cameras can destroy any electronic defender utility that prevents the SELMA charges from detonating.",
            },
            {
                name: 'Flores',
                description: "Flores' explosive drones can destroy any electronic defender utility that prevents the SELMA charges from detonating.",
            },
        ],
        counters: [
            {
                name: 'Aruni',
                description: "Aruni can destroy Ace's breach charges used on hatches, if she has placed a laser gate on the opposite side.",
            },
            {
                name: 'Wamai',
                description: "Wamai's Mag-NETs will intercept any of Ace's breach charges thrown in their vicinity.",
            },
            {
                name: 'Kaid',
                description: "Walls and hatches electrified by Kaid will instantly destroy Ace's breach charges.",
            },
            {
                name: 'Maestro',
                description: "Maestro's Evil Eye can be used to destroy Ace's breach charges.",
            },
            {
                name: 'Mute',
                description: 'Breach charges used in the radius of a jammer will fail to activate.',
            },
            {
                name: 'Jager',
                description: "Jager's ADSs will intercept any of Ace's breach charges thrown in their vicinity.",
            },
            {
                name: 'Bandit',
                description: 'Breach charges thrown onto a surface electrified by a Bandit battery will be instantly destroyed.',
            },
        ],
        tips: [
            {
                description: "Ace's SELMA charges can destroy Mira's windows if thrown onto them.",
            },
            {
                description: "To create a standard size hole to vault through, wait for the SELMA charge to detonate twice. To create a smaller opening to use as a kill hole, shoot out the SELMA charge after it has detonated once.",
            },
            {
                description: "To destroy a reinforced hatch, use two SELMA charges.",
            },
            {
                description: "If a SELMA charge is thrown onto a non-breachable surface, it can be picked back up.",
            },
        ],
    }, 
    {
        name: 'Alibi',
        team: 'Defend',
        ability: 'Prisma',
        description: "Alibi's prismas act as holographic displays of herself, holding the potential to fool unsuspecting attackers. When shot, targets will be marked with a red ping. More than just a way to hunt careless attackers, prismas are also useful for keeping attackers on edge or obstructing lines of sight.",
        health: 1,
        role: ["Roamer"],
        counters: [
            {
                name: 'Thatcher',
                description: "Thatcher's EMP grenades will temporarily disable a prisma for ten seconds.",
            },
            {
                name: 'Twitch',
                description: "A shot from one of Twitch's shock drones to the base of a prisma will destroy it.",
            },
            {
                name: 'IQ',
                description: "IQ's electronics detector will spot a prisma, allowing for it to be destroyed through destructible surfaces.",
            },
            {
                name: 'Zero',
                description: "A shot from one of Zero's ARGUS cameras to the base of a prisma will destroy it.",
            },
            {
                name: 'Kali',
                description: "A shot from Kali's LV Lance will destroy a prisma.",
            },
            {
                name: 'Flores',
                description: "Flores' explosive drones can be used to destroy a prisma from a safe distance.",
            },
            {
                name: 'Glaz',
                description: "Glaz's thermal scope will not highlight prismas, allowing him to easily ignore them.",
            },
            {
                name: 'Jackal',
                description: "Vigilant Jackal players will be able to discern what operator a footstep belongs to, even if Alibi's ability hides their identity.",
            },
            {
                name: 'N0kk',
                description: "When her cloak is activated, N0kk cannot be tracked by Alibi regardless if she shoots or steps into a prisma.",
            },
        ],
        tips: [
            {
                description: "Ordinary bullets can only destroy Alibi's prismas by striking their base; therefore, placing them behind a deployable shield or behind a window can make them difficult or impossible for attackers to destroy.",
            },
            {
                description: "Try placing a prisma at a typical spawnpeek location for an easy enemy ping and kill opportunity.",
            },
            {
                description: "Prismas can be strategically placed to block strong attacker lines of sight, such as windows or long hallways.",
            },
            {
                description: "Prismas will always use Alibi's default appearance, regardless of what skins the player may be using.",
            },
            {
                description: "Prismas can be easily identified by the fact that they are completely still (the real Alibi will move a bit even when stationary) and their eyes are not visible through their goggles; this is not the case with the real Alibi.",
            },
            {
                description: "Prismas will not be scanned when targeted by a drone.",
            },
            {
                description: "Prismas will temporarily disappear when the real Alibi (or any other defender) stands directly over them, allowing her to potentially trick attackers.",
            },
            {
                description: "When an attacker attacks a prisma, their location will be pinged once per second for five seconds total.",
            },
            {
                description: "Defenders that are exposed by Lion's drone or by going outside will have their identities hidden when an Alibi is on the team.",
            },
        ],
    },
    {
        name: 'Amaru',
        team: 'Attack',
        ability: 'Garra Hook',
        description: "The Garra Hook grants Amaru added mobility. It can be aimed at exterior windows, ledges, skylights and unreinforced hatches, and when used, will latch onto the target and quickly pull Amaru towards it, allowing for faster map control and unpredictable plays.",
        health: 2,
        role: ["Entry Fragger"],
        synergies: [
            {
                name: 'Lion',
                description: "Synchronizing a Lion scan with Amaru's grapple ability can put defenders in an uncomfortable spot, revealing their location or preventing them from responding to her entry. ",
            },
            {
                name: 'Finka',
                description: "An adrenaline boost by Finka can help aid Amaru as she enters a room with the grappling hook."
            },
            {
                name: 'Dokkaebi',
                description: "Making a call as Amaru enters a room will help mask the sound of the grappling hook as well as alert her to any defenders nearby."
            },
            {
                name: 'Kali',
                description: "Kali's LV Lance can destroy castle barricades that may be blocking a window Amaru needs to enter.",
            },
            {
                name: 'Ash',
                description: "Ash's breaching rounds can destroy castle barricades that may be blocking a window Amaru needs to enter.",
            },
            {
                name: 'Zofia',
                description: "Ash's explosive grenades can destroy castle barricades that may be blocking a window Amaru needs to enter."
            },
            {
                name: 'Ying',
                description: "Flashing a room with a candela immediately before Amaru enters can mask the sound of her grappling hook as well as stun any defenders inside, leaving them vulnerable."
            },
            {
                name: 'Fuze',
                description: "Launching a cluster charge into a room immediately before Amaru enters can mask the sound of her grappling hook as well as distract any defenders inside, leaving them vulnerable. Just be careful not to kill Amaru herself!"
            },
        ],
        counters: [
            {
                name: 'Castle',
                description: "Amaru can't grapple through windows that are covered with an armor panel.",
            },
            {
                name: 'Kapkan',
                description: "Amaru will detonate Kapkan's EDDs upon grappling through a window, resulting in death or injury.",
            },
            {
                name: 'Frost',
                description: "Amaru will not be able to bring her weapon up fast enough to shoot out Frost mats placed underneath windows and will become trapped upon entering.",
            },
            {
                name: 'Melusi',
                description: "Amaru is powerful at quickly obtaining map control or rushing defenders; by placing a banshee device at her entry point, this advantage can be nullified by slowing her down and placing her in a vulnerable state.",
            },
            {
                name: 'Clash',
                description: "If positioned in front of a window, Clash's shield will prevent Amaru from entering.",
            },
            {
                name: 'Aruni',
                description: "If Amaru attempts to grapple through a window blocked by a Surya laser gate, she will take the standard 30HP damage.",
            },
        ],
        tips: [
            {
                description: "Amaru is the only operator besides Oryx and the only attacker that can vertically climb hatches, allowing for sneaky plays that defenders normally won't expect. Use this to avoid typical defender chokepoints such as staircases.",
            },
            {
                description: "While it's not usually advised to immediately rush an objective site as Amaru (unless death is desired), it can be advantageous to rush a location near the objective room and establish strong map control before defenders can prepare themselves.",
            },
            {
                description: "Amaru can be powerful in particular post-plant situations, if a hatch is above the objective site. Simply climb up and create a kill hole above the defuser after it's been planted.",
            },
            {
                description: "Any defenders on the other side of a window that is grappled through by Amaru will be instantly killed.",
            },
        ],
    },
    {
        name: 'Aruni',
        team: 'Defend',
        ability: 'Surya Laser Gate',
        description: "The Surya Laser Gate acts as a form of entry denial for attackers. In addition to simply obscuring lines of sight and masking defender noise with a humming sound, these gates will cause damage to any attackers that walk through them. While they are easily deactivated by any attacker throwable, this waste of attacker utility can be very valuable for defenders. As an added bonus, Aruni's cybernetic arm grants her superior strength, allowing her to create much bigger holes in walls than other operators can.",
        health: 2,
        role: ["Anchor", "Roamer", "Breach Denier"],
        synergies: [
            {
                name: 'Wamai',
                description: "Placing a Wamai disc near a laser gate can trick attackers and waste their utility, as grenades thrown into the laser gate will be deflected away.",
            },
            {
                name: "Maestro",
                descrption: "Maestro can use his Evil Eyes to re-activate disabled laser gates from safety, provided the gate has finished re-charging.",
            },
            {
                name: "Mira",
                description: "Mira can observe a doorway or window protected by a laser gate from behind one of her windows and easily re-activate it by quick-peeking."
            },
        ],
        counters: [
            {
                name: 'Finka',
                description: "Finka's adrenal surge grants attackers additional damage resistance, allowing them to bypass a laser gate with little damage.",
            },
            {
                name: 'Iana',
                description: "Walking through a laser gate with Iana's clone will instantly disable the gate, allowing for her to bypass the laser gate unharmed.",
            },
            {
                name: 'Thatcher',
                description: "Thatcher's EMP grenades will disable a laser gate for 15 seconds when detonated nearby, or for 30 seconds if they make contact with the gate.",
            },
        ],
        tips: [
            {
                description: "Aruni's strengthened melee ability allows allows her to one-shot soft hatches, barricades and Castle's armor panels, providing for easy and fast rotations and runouts.",
            },
            {
                description: "The Surya laser gates are completely invulnerable.",
            },
        ],
    }, 
    {
        name: 'Ash',
        team: 'Attack',
        ability: 'Breaching Round',
        description: "Ash's breaching rounds are launched from a grenade launcher that must be reloaded with every shot. They are useless on reinforcements, but can destroy any soft surfaces or defender utility, and from any range as they are not affected by dropoff.",
        health: 1,
        role: ["Entry Fragger", "Soft Breacher"],
        counters: [
            {
                name: 'Jager',
                description: "Jager's ADSs can intercept Ash's breaching rounds mid-air.",
            },
            {
                name: 'Wamai',
                description: "Wamai's discs can intercept Ash's breaching rounds mid-air.",
            },
        ],
        tips: [
            {
                description: "Breaching rounds are small enough to fit through any size opening, even a bullet hole.",
            },
            {
                description: "The damage resulting from a breaching round detonating is very minimal - this means that it doesn't have much kill potential, but it also means that Ash can quickly enter an opening almost immediately after detonation.",
            },
            {
                description: "Breaching rounds can destroy Mira's windows, provided they are on an unreinforced wall."
            },
            {
                description: "Breaching rounds can destroy deployable shields and barbed wire."
            },
            {
                description: "Many reinforced walls have sections of wall above them that are uncovered, allowing Ash to destroy them and expose strong angles or openings for grenades.",
            },
        ],
    },
    {
        name: 'Azami',
        team: 'Defend',
        ability: 'Kiba Barrier',
        description: "Upon being thrown onto a surface, Kiba Barriers form a bulletproof obstruction that can be used to block lines of sight and entry points for attackers. When used properly, they can create very advantageous lines of sight for Azami and other defenders, such as pixel peeks.",
        health: 2,
        role: ["Anchor", "Roamer"],
        synergies: [
            {
                name: "Wamai",
                description: "Wamai's discs will divert and destroy any explosive gadgets that are thrown or shot at a Kiba Barrier.",
            },
            {
                name: "Mira",
                description: "Kiba Barriers can be used to seal any Mira windows that are opened.",
            },
            {
                name: "Castle",
                description: "Kiba Barriers can be used to seal any windows or doors that were covered by destroyed Castle barricades.",
            },
            {
                name: "Jager",
                description: "Jager's ADSs will destroy any explosive gadgets that are thrown or shot at a Kiba Barrier.",
            },
        ],
        counters: [
            {
                name: 'Ash',
                description: "Kiba Barriers can be destroyed by Ash's breaching rounds.",
            },
            {
                name: 'Kali',
                description: "Kiba Barriers can be destroyed by Kali's LV Lance.",
            },
            {
                name: 'Flores',
                description: "Kiba Barriers can be destroyed by Flores' explosive drones.",
            },
            {
                name: 'Zofia',
                description: "Kiba Barriers can be destroyed by Zofia's impact grenades.",
            },
            {
                name: 'Sledge',
                description: "Kiba Barriers can be destroyed by Sledge's breaching hammer.",
            },
        ],
        tips: [
            {
                description: "Kiba Barriers can be destroyed by any operator with three melee hits.",
            },
        ],
    },
    {
        name: 'Bandit',
        team: 'Defend',
        ability: 'Shock Wire',
        description: "When deployed, Bandit's batteries will electrify any metal they touch, namely reinforcements and barbed wire. This will cause minor damage to any attackers that come into contact, and destroy any attacker utility as well, including breach charges. Ultimately, Bandit's main potential is preventing attackers from obtaining map control.",
        health: 1,
        role: ["Anchor", "Roamer", "Breach Denier"],
        synergies: [
            {
                name: "Mute",
                description: "By pairing with Mute, defenders can deny many hard breach points for attackers, and the jammers can prevent Twitch's drones from destroying Bandit's batteries.",
            },
            {
                name: "Frost",
                description: "If an attacker is placed in a DBNO state on electrified barbed wire, they will be instantly killed."
            },
            {
                name: "Mira",
                description: "Mira's windows can be placed on electrified walls, preventing hard breachers such as Hibana and Ace from destroying them.",
            },
        ],
        counters: [
            {
                name: 'IQ',
                description: "IQ will see Bandit's batteries on her electronics scanner and can easily destroy them through walls. This can grant an easy kill if the defender is Bandit-tricking.",
            },
            {
                name: 'Thatcher',
                description: "Thatcher's EMP grenades will disable Bandit's batteries for ten seconds.",
            },
            {
                name: 'Twitch',
                description: "Twitch can destroy Bandit's batteries with her shock drone.",
            },
            {
                name: 'Kali',
                description: "Kali's LV Lance can destroy Bandit's batteries through reinforced walls.",
            },
            {
                name: 'Zero',
                description: "Zero can destroy Bandit's batteries with his ARGUS cameras.",
            },
            {
                name: 'Flores',
                description: "Flores can destroy Bandit's batteries with his explosive drones.",
            },
        ],
        tips: [
            {
                description: 'Bandit is capable of strategically placing his batteries at the correct time to destroy hard breach gadgets as they are placed, without allowing EMP grenades to nullify them. This is known as "Bandit Tricking".',
            },
        ],
    }, 
    {
        name: 'Blackbeard',
        team: 'Attack',
        ability: 'Rifle-Shield',
        description: "Blackbeard's Rifle-Shield can be mounted onto the end of his primary weapon and allows for added protection to his head during gunfights. Consequently, he will suffer from movement and recoil penalties when the shield is active. If he so chooses, this shield can be freely removed to remove any such penalties.",
        health: 2,
        role: ["Entry Fragger"],
        synergies: [
            {
                name: "Osa",
                description: "Placing one of Osa's shields on a window that Blackbeard is using will give him added protection and visibility of a room, and the ability to quick-peek an enemy.",
            },
            {
                name: "Montagne",
                description: "Playing behind Montagne can give Blackbeard protection to his body.",
            },
            {
                name: "Blitz",
                description: "Playing behind Blitz can give Blackbeard protection to his body.",
            },
            {
                name: "Fuze",
                description: "Playing behind Fuze can give Blackbeard protection to his body, provided that Fuze is using his ballistic shield.",
            },
            {
                name: "Maverick",
                description: "Maverick can create small holes in reinforced walls with his blowtorch, creating very protective kill holes for Blackbeard.",
            },
            {
                name: "Ace",
                description: "If Ace throws a SELMA charge on a reinforced wall and destroys it after it has detonated just once, it will create a very protective kill hole which Blackbeard can use.",
            },
            {
                name: "Hibana",
                description: "If Hibana uses the least number of pellets on her X-KAIROS launcher on a reinforced wall, it will create a 2x1 rectangle that Blackbeard can use as a very protective kill hole.",
            },
        ],
        tips: [
            {
                description: "With the shield up, Blackbeard is still very vulnerable to damage to his shoulders and upper body, making it important that he expose only his head.",
            },
            {
                description: "Blackbeard comes equipped with two shields that can be freely swapped between if one of them takes any damage.",
            },
        ],
    },
    {
        name: 'Blitz',
        team: 'Attack',
        ability: 'Flash Shield',
        description: "Blitz's ballistic shield comes equipped with flash charges that will blind anyone immediately in front of him when used. For an added dose of lethality, he holds the unique ability to sprint while holding his shield forward, allowing him to quickly push and eliminate defenders.",
        health: 2,
        role: ["Entry Fragger"],
        counters: [
            {
                name: 'Mute',
                description: '',
                image: '',
            },
            {
                name: 'Warden',
                description: '',
                image: '',
            },
            {
                name: 'Smoke',
                description: '',
                image: '',
            },
            {
                name: 'Ela',
                description: '',
                image: '',
            },
            {
                name: 'Lesion',
                description: '',
                image: '',
            },
            {
                name: 'Oryx',
                description: '',
                image: '',
            },
            {
                name: 'Clash',
                description: '',
                image: '',
            },
            {
                name: 'Melusi',
                description: '',
                image: '',
            },
        ],
    },
    {
        name: 'Buck',
        team: 'Attack',
        ability: 'Skeleton Key',
        description: "Buck's primary weapon comes equipped with an underbarrel shotgun, allowing for some added close-quarters combat versatility but primarily destructive capabilities. With a larger spread, shots can quickly open large holes in soft floors, ceilings and walls, allowing for quick mobility and fast lines of sight from above or below a particular room.",
        health: 2,
        role: "Entry Fragger",
    },
    {
        name: 'Capitao',
        team: 'Attack',
        ability: 'Tactical Crossbow',
        description: "Capitao's tactical crossbow has two fire modes: fire and smoke. The former can be used to deny points of movement for attackers, such as doorways, or to flush out and kill attackers hiding behind objects. The latter can be used the same as any smoke grenade, to block lines of sight for defenders. This versatility makes Capitao a great choice for post-plant situations.",
        health: 1,
        role: ["Entry Fragger", "Bomb Defusal"],
        counters: [
            {
                name: 'Wamai',
                description: '',
                image: '',
            },
            {
                name: 'Warden',
                description: '',
                image: '',
            },
            {
                name: 'Tachanka',
                description: '',
                image: '',
            },
        ]
    },
    {
        name: 'Castle',
        team: 'Defend',
        ability: 'Armor Panel',
        description: "Castle's bulletproof armor panels can be deployed on any window or door and will prevent entry or line of sight for any attackers. Since they are vulnerable to explosives, attackers will need to waste such utility to destroy them. They can also be destroyed with 9 melee hits, but this leaves attackers vulnerable to nitro cells or shots to the feet, if attempting on a doorway.",
        health: 2,
        role: ["Anchor"],
        counters: [
            {
                name: 'Sledge',
                description: '',
                image: '',
            },
            {
                name: 'Ash',
                description: '',
                image: '',
            },
            {
                name: 'Zofia',
                description: '',
                image: '',
            },
            {
                name: 'Fuze',
                description: '',
                image: '',
            },
            {
                name: 'Ying',
                description: '',
                image: '',
            },
            {
                name: 'Maverick',
                description: '',
                image: '',
            },
            {
                name: 'Kali',
                description: '',
                image: '',
            },
            {
                name: 'Ace',
                description: '',
                image: '',
            },
            {
                name: 'Flores',
                description: '',
                image: '',
            },
        ],
    },
    {
        name: 'Caveira',
        team: 'Defend',
        ability: 'Silent Step',
        description: "Caveira's silent step ability will almost completely mask her movement sounds while walking and greatly reduce them while running, allowing for fast and stealthy movement around the map. Upon downing an enemy, she can interrogate them to instantly kill them and mark the locations of any remaining attackers on the map to all defenders. Her unique secondary weapon, the Luison, is a silenced pistol that grants guaranteed one-shot downs with a headshot.",
        health: 1,
        role: ["Roamer"],
        counters: [
            {
                name: 'Jackal',
                description: '',
                image: '',
            },
            {
                name: 'Dokkaebi',
                description: '',
                image: '',
            },
        ],
    },
    {
        name: 'Clash',
        team: 'Defend',
        ability: 'CCE Shield',
        description: "Clash's CCE shield allows for the same frontal protection that any attacker ballistic shield has, and when in use will protect her entire body from the front, much like Montagne. However, this shield also has a unique ability when activated - a taser, which will damage and impose a movement penalty on any attacker it is used on. This leaves victims vulnerable to attack from fellow defenders, and makes it more difficult for afflicted enemies to counterattack.",
        health: 3,
        role: ["Anchor"],
        counters: [
            {
                name: 'Zofia',
                description: '',
                image: '',
            },
            {
                name: 'Ela',
                description: '',
                image: '',
            },
            {
                name: 'Kali',
                description: '',
                image: '',
            },
            {
                name: 'Capitao',
                description: '',
                image: '',
            },
            {
                name: 'IQ',
                description: '',
                image: '',
            },
            {
                name: 'Nomad',
                description: '',
                image: '',
            },
            {
                name: 'Gridlock',
                description: '',
                image: '',
            },
            {
                name: 'Thatcher',
                description: '',
                image: '',
            },
            {
                name: 'Flores',
                description: '',
                image: '',
            },
        ],
    },
    {
        name: 'Doc',
        team: 'Defend',
        ability: 'Stim Pistol',
        description: "Doc's stim pistol acts as a projectile weapon, shooting a medicinal dart. When a player is hit by a dart, their health will instantly be restored to 100. If a downed player is hit, they will be revived to a standing state. It must be reloaded after every shot and has limited use, making good aim a necessity. Be careful - enemies can be healed, too!",
        health: 3,
    },
    {
        name: 'Dokkaebi',
        team: 'Attack',
        ability: 'Logic Bomb',
        health: 2,
        counters: [
            {
                name: 'Mute',
                description: '',
                image: '',
            },
            {
                name: 'Vigil',
                description: '',
                image: '',
            },
        ],
    },
    {
        name: 'Echo',
        team: 'Defend',
        ability: 'Yokai',
        health: 3,
        counters: [
            {
                name: 'Thatcher',
                description: '',
                image: '',
            },
            {
                name: 'IQ',
                description: '',
                image: '',
            },
            {
                name: 'Zero',
                description: '',
                image: '',
            },
            {
                name: 'Dokkaebi',
                description: '',
                image: '',
            },
        ],
    },
    {
        name: 'Ela',
        team: 'Defend',
        ability: 'Grzmot Mine',
        health: 1,
        counters: [
            {
                name: 'IQ',
                description: '',
                image: '',
            },
            {
                name: 'Thatcher',
                description: '',
                image: '',
            },
            {
                name: 'Twitch',
                description: '',
                image: '',
            },
            {
                name: 'Zero',
                description: '',
                image: '',
            },
            {
                name: 'Finka',
                description: '',
                image: '',
            },
            {
                name: 'Flores',
                description: '',
                image: '',
            },
        ],
    },
    {
        name: 'Finka',
        team: 'Attack',
        ability: 'Adrenal Surge',
        health: 2,
        counters: [
            {
                name: 'Pulse',
                description: '',
                image: '',
            },
            {
                name: 'Smoke',
                description: '',
                image: '',
            },
            {
                name: 'Echo',
                description: '',
                image: '',
            },
            {
                name: 'Lesion',
                description: '',
                image: '',
            },
        ],
    },
    {
        name: 'Flores',
        team: 'Attack',
        ability: 'RCE-Ratero Charge',
        health: 2,
        counters: [
            {
                name: 'Mute',
                description: '',
                image: '',
            },
            {
                name: 'Bandit',
                description: '',
                image: '',
            },
            {
                name: 'Kaid',
                description: '',
                image: '',
            },
            {
                name: 'Maestro',
                description: '',
                image: '',
            },
            {
                name: 'Aruni',
                description: '',
                image: '',
            },
            {
                name: 'Mozzie',
                description: '',
                image: '',
            },
            {
                name: 'Vigil',
                description: '',
                image: '',
            },
        ]
    },
    {
        name: 'Frost',
        team: 'Defend',
        ability: 'Welcome Mat',
        health: 2,
    },
    {
        name: 'Fuze',
        team: 'Attack',
        ability: 'Cluster Charge',
        health: 3,
        counters: [
            {
                name: 'Mute',
                description: '',
                image: '',
            },
            {
                name: 'Jager',
                description: '',
                image: '',
            },
            {
                name: 'Wamai',
                description: '',
                image: '',
            },
        ],
    },
    {
        name: 'Glaz',
        team: 'Attack',
        ability: 'Thermal Flip Scope',
        health: 1,
        counters: [
            {
                name: 'Warden',
                description: '',
                image: '',
            },
        ],
    },
    {
        name: 'Goyo',
        team: 'Defend',
        ability: 'Volcan Canister',
        health: 2,
        counters: [
            {
                name: 'Ash',
                description: '',
                image: '',
            },
            {
                name: 'Zofia',
                description: '',
                image: '',
            },
            {
                name: 'Zero',
                description: '',
                image: '',
            },
            {
                name: 'Amaru',
                description: '',
                image: '',
            },
            {
                name: 'Twitch',
                description: '',
                image: '',
            },
        ],
    },
    {
        name: 'Gridlock',
        team: 'Attack',
        ability: 'Trax Stinger',
        health: 3,
    },
    {
        name: 'Grim',
        team: 'Attack',
        ability: 'Kawan Hive Launcher',
        health: 1,
        counters: [
            {
                name: 'Mute',
                description: '',
                image: '',
            },
            {
                name: 'Bandit',
                description: '',
                image: '',
            },
            {
                name: 'Kaid',
                description: '',
                image: '',
            },
            {
                name: 'Jager',
                description: '',
                image: '',
            },
            {
                name: 'Wamai',
                description: '',
                image: '',
            },
            {
                name: 'Aruni',
                description: '',
                image: '',
            },
            {
                name: 'Vigil',
                description: '',
                image: '',
            },
        ],
    },
    {
        name: 'Hibana',
        team: 'Attack',
        ability: 'X-KAIROS',
        health: 1,
        counters: [
            {
                name: 'Mute',
                description: '',
                image: '',
            },
            {
                name: 'Bandit',
                description: '',
                image: '',
            },
            {
                name: 'Kaid',
                description: '',
                image: '',
            },
        ],
    },
    {
        name: 'Iana',
        team: 'Attack',
        ability: 'Gemini Replicator',
        health: 2,
        counters: [
            {
                name: 'Bandit',
                description: '',
                image: '',
            },
            {
                name: 'Kaid',
                description: '',
                image: '',
            },
            {
                name: 'Mute',
                description: '',
                image: '',
            },
            {
                name: 'Vigil',
                description: '',
                image: '',
            },
            {
                name: 'Maestro',
                description: '',
                image: '',
            },
        ],
    },
    {
        name: 'IQ',
        team: 'Attack',
        ability: 'Electronics Detector',
        health: 1,
    },
    {
        name: 'Jackal',
        team: 'Attack',
        ability: 'Eyenox Model III',
        health: 2,
        counters: [
            {
                name: 'Caveira',
                description: '',
                image: '',
            },
            {
                name: 'Mute',
                description: '',
                image: '',
            },
        ],
    },
    {
        name: 'Jager',
        team: 'Defend',
        ability: 'Magpie Defense System',
        health: 2,
        counters: [
            {
                name: 'Thatcher',
                description: '',
                image: '',
            },
            {
                name: 'Twitch',
                description: '',
                image: '',
            },
            {
                name: 'IQ',
                description: '',
                image: '',
            },
            {
                name: 'Zero',
                description: '',
                image: '',
            },
            {
                name: 'Flores',
                description: '',
                image: '',
            },
        ],
    },
    {
        name: 'Kaid',
        team: 'Defend',
        ability: 'Rtila Electroclaw',
        health: 3,
        counters: [
            {
                name: 'Thatcher',
                description: '',
                image: '',
            },
            {
                name: 'Twitch',
                description: '',
                image: '',
            },
            {
                name: 'IQ',
                description: '',
                image: '',
            },
            {
                name: 'Kali',
                description: '',
                image: '',
            },
            {
                name: 'Flores',
                description: '',
                image: '',
            },
            {
                name: 'Zero',
                description: '',
                image: '',
            },
        ],
    },
    {
        name: 'Kali',
        team: 'Attack',
        ability: 'LV Explosive Lance',
        health: 2,
        counters: [
            {
                name: 'Jager',
                description: '',
                image: '',
            },
            {
                name: 'Wamai',
                description: '',
                image: '',
            },
            {
                name: 'Rook',
                description: '',
                image: '',
            },
        ],
    },
    {
        name: 'Kapkan',
        team: 'Defend',
        ability: 'EDD Booby Trap',
        health: 2,
        counters: [
            {
                name: 'Twitch',
                description: '',
                image: '',
            },
            {
                name: 'Thatcher',
                description: '',
                image: '',
            },
            {
                name: 'Zero',
                description: '',
                image: '',
            },
            {
                name: 'Flores',
                description: '',
                image: '',
            },
        ],
    },
    {
        name: 'Lesion',
        team: 'Defend',
        ability: 'Gu Mine',
        health: 2,
    },
    {
        name: 'Lion',
        team: 'Attack',
        ability: 'EE-ONE-D',
        health: 2,
    },
    {
        name: 'Maestro',
        team: 'Defend',
        ability: 'Evil Eye',
        health: 3,
    },
    {
        name: 'Maverick',
        team: 'Attack',
        ability: 'Breaching Torch',
        health: 1,
    },
    {
        name: 'Melusi',
        team: 'Defend',
        ability: 'Banshee Sonic Defense',
        health: 1,
    },
    {
        name: 'Mira',
        team: 'Defend',
        ability: 'Black Mirror',
        health: 3,
    },
    {
        name: 'Montagne',
        team: 'Attack',
        ability: 'Extendable Shield',
        health: 3,
    },
    {
        name: 'Mozzie',
        team: 'Defend',
        ability: 'Pest Launcher',
        health: 2,
    },
    {
        name: 'Mute',
        team: 'Defend',
        ability: 'Signal Disruptor',
        health: 2,
    },
    {
        name: 'N0kk',
        team: 'Attack',
        ability: 'HEL Presence Reduction',
        health: 2,
    },
    {
        name: 'Nomad',
        team: 'Attack',
        ability: 'Airjab Launcher',
        health: 2,
    },
    {
        name: 'Oryx',
        team: 'Defend',
        ability: 'Remah Dash',
        health: 2,
    },
    {
        name: 'Osa',
        team: 'Attack',
        ability: 'Talon-8 Clear Shield',
        health: 2,
    },
    {
        name: 'Pulse',
        team: 'Defend',
        ability: 'Heartbeat Sensor',
        health: 1,
    },
    {
        name: 'Rook',
        team: 'Defend',
        ability: 'Armor Pack',
        health: 3, 
    },
    {
        name: 'Sens',
        team: 'Attack',
        ability: 'R.O.U. Projector System',
        health: 3,
    },
    {
        name: 'Sledge',
        team: 'Attack',
        ability: 'Tactical Breaching Hammer',
        health: 2,
    },
    {
        name: 'Smoke',
        team: 'Defend',
        ability: 'Remote Gas Grenade',
        health: 2,
    },
    {
        name: 'Solis',
        team: 'Defend',
        ability: 'Electro Sensor',
        health: 2,
    },
    {
        name: 'Tachanka',
        team: 'Defend',
        ability: 'Grenade Launcher',
        health: 3,
    },
    {
        name: 'Thatcher',
        team: 'Attack',
        ability: 'EMP Grenade',
        health: 2,
    },
    {
        name: 'Thermite',
        team: 'Attack',
        ability: 'Exothermic Charge',
        health: 2,
    },
    {
        name: 'Thorn',
        team: 'Defend',
        ability: 'Razorbloom Shell',
        health: 2,
    },
    {
        name: 'Thunderbird',
        team: 'Defend',
        ability: 'Kona Station',
        health: 1,
    },
    {
        name: 'Twitch',
        team: 'Attack',
        ability: 'Shock Drone',
        health: 2,
    },
    {
        name: 'Valkyrie',
        team: 'Defend',
        ability: 'Black Eye Camera',
        health: 2,
    },
    {
        name: 'Vigil',
        team: 'Defend',
        ability: 'ERC-7',
        health: 1,
    },
    {
        name: 'Wamai',
        team: 'Defend',
        ability: 'Mag-NET',
        health: 2,
    },
    {
        name: 'Warden',
        team: 'Defend',
        ability: 'Glance Smart Glasses',
        health: 2,
    },
    {
        name: 'Ying',
        team: 'Attack',
        ability: 'Candela Device',
        health: 2,
    },
    {
        name: 'Zero',
        team: 'Attack',
        ability: 'ARGUS Launcher',
        health: 2,
    },
    {
        name: 'Zofia',
        team: 'Attack',
        ability: 'KS79 LIFELINE',
        health: 2,
    },
    {
        name: 'Recruit', 
        health: 2,
    },
]