

export interface MegaEpicFortress {

    name: String,
    location: Location,
    defenses: Defenses,
    inhabitants: Inhabitants,
    resources: Resources,
    history: History,
}





export interface Location {
    continent: String,
    coordinates: Coordinate,
    nearbyLandmarks: LandMark[]
}


export interface Coordinate {
    latitude: Number,
    longitude: Number,
}

export interface LandMark {
    name: String,
    type: String,
    distance: Number,
}

export interface Defenses {
    walls: Wall,
    towers: Tower[],
}

export interface Wall {
    material: String,
    height: Number,
    enchantments: Enchantment[],
}

export interface Enchantment {
    name: String,
    level: Number,

}

export interface Tower {
    name?: String,
    height?: Number,
    armament?: Armament,
    guards?: Guard[],
}

export interface Armament {
    weaponType: String,
    ammunitionType: String,
    ammunitionCount: Number,
}

export interface Guard {
    name?: String,
    rank?: String,
}

export interface Inhabitants {
    population: Number,
    roles: Role[],
}
export interface Role {
    role: String,
    count: Number,
    equipment?: Equipment ,
    professions?: Profession[],
}

export interface Equipment {
    weapon?: String,
    staff?: String,
    armor?: String,
    robe?: String,
    shield?: String,
    amulet?: String,
}

export interface Profession {
    type: String,
    count: Number,
}


export interface Resources {
    storage: Storage,
    armory: Armory,
}

export interface Storage {
    food: Food,
    water: Water,
}

export interface Food {
    type: String,
    quantity: Number,
    unit: String,
}

export interface Water {
    source: String,
    capacity: Number,
    unit: String,
}

export interface Armory {
    weapons: Weapon[],
    shields: Shield[],
}

export interface Weapon {
    type: String,
    quantity: Number,
}

export interface Shield {
    type: String,
    quantity: Number,
}

export interface History {
    founded: Founded,
    majorEvents: MajorEvent[],
}

export interface Founded {
    year: Number,
    by: String,
}

export interface MajorEvent {
    year: Number,
    event: String,
    outcome: String,
}