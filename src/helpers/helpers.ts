import { MegaEpicFortress, Role, Tower } from "../types/MegaEpicFortress";



export function getTowersAndGuardsByWeaponType(fortress: MegaEpicFortress, weapon: String): Tower[] {
    let returnTowers: Tower[] = [];

    const fortressAllTowers: Tower[] = fortress.defenses.towers;
    returnTowers = fortressAllTowers.filter(tower => tower.armament?.weaponType === weapon);

    returnTowers.map(tower => {
        delete tower.armament;
        delete tower.height;
        tower.guards?.map(guard => {
            delete guard.rank;
        })
    })

    console.log("getTowersAndGuardsByWeaponType result\n");
    console.log(returnTowers);
    return returnTowers;
}


export function countVillagersByProfession(fortress: MegaEpicFortress) {
    const professions: Record<string,  Number> = {};
    
    const indexOfVillagers: number = fortress.inhabitants.roles.findIndex((roleType: Role) => roleType.role === "Villager");
    if (indexOfVillagers !== -1) {

        const villages = fortress.inhabitants.roles[indexOfVillagers];
        if (villages.professions) {
            villages.professions.forEach((profession) => {
                professions[""+ profession.type] = profession.count;
            });
        }
    }
    console.log(professions);
    
    return professions;
}
