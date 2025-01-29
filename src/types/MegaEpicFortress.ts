

export interface MegaEpicFortress {

    name: String,
    location: Location,
    defenses: Defenses,
    inhabitants: Inhabitants,
    resources: Resources,
    history: History,
}





interface Location {
    continent: String,
    coordinates: Coordinate,
    nearbyLandmarks: LandMark[]
}


interface Coordinate {
    latitude: Number,
    longitude: Number,
}

interface LandMark {
    name: String,
    type: String,
    distance: Number,
}

interface Defenses {
    walls: Wall,
    towers: Tower[],
}

interface Wall {
    material: String,
    height: Number,
    enchantments: Enchantment[],
}

interface Enchantment {
    name: String,
    level: Number,

}

interface Tower {
    name: String,
    height: Number,
    armament: Armament,
    guards: Guard[],
}

interface Armament {
    weaponType: String,
    ammunitionType: String,
    ammunitionCount: Number,
}

interface Guard {
    name: String,
    rank: String,
}

interface Inhabitants {
    population: Number,
    roles: Role[],
}
interface Role {
    role: String,
    count: Number,
    equipment?: Equipment ,
    professions?: Profession[],
}

interface Equipment {
    weapon?: String,
    staff?: String,
    armor?: String,
    robe?: String,
    shield?: String,
    amulet?: String,
}

interface Profession {
    type: String,
    count: Number,
}


interface Resources {
    storage: Storage,
    armory: Armory,
}

interface Storage {
    food: Food,
    water: Water,
}

interface Food {
    type: String,
    quantity: Number,
    unit: String,
}

interface Water {
    source: String,
    capacity: Number,
    unit: String,
}

interface Armory {
    weapons: Weapon[],
    shields: Shield[],
}

interface Weapon {
    type: String,
    quantity: Number,
}

interface Shield {
    type: String,
    quantity: Number,
}

interface History {
    founded: Founded,
    majorEvents: MajorEvent[],
}

interface Founded {
    year: Number,
    by: String,
}

interface MajorEvent {
    year: Number,
    event: String,
    outcome: String,
}