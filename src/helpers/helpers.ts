import { MegaEpicFortress, Tower } from "../types/MegaEpicFortress";



export function getTowersAndGuardsByWeaponType(fortress:MegaEpicFortress, weapon:String): Tower[] {
    let returnTowers: Tower[] = [];

    const fortressAllTowers: Tower[] = fortress.defenses.towers;

    returnTowers = fortressAllTowers.filter(tower => tower.armament?.weaponType === weapon);

    returnTowers.map( tower => {
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