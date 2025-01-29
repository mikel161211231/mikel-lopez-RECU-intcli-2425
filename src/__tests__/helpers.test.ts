import { megaEpicFortress } from "../data/data";
import { getTowersAndGuardsByWeaponType } from "../helpers/helpers";
import { Tower } from "../types/MegaEpicFortress";



describe('+ Test the function getTowersAndGuardsByWeaponType form helpers.ts', () => {

    it('it should return no tower', () => {
        const filteredTowers = getTowersAndGuardsByWeaponType(megaEpicFortress, "");
        expect(filteredTowers.length).toBe(0);
    })

    it('it should return one tower with name -Tower of Betrayer-', () => {
        const filteredTowers:Tower[] = getTowersAndGuardsByWeaponType(megaEpicFortress, "Banana Launcher");
        expect(filteredTowers.length).toBe(1);
        filteredTowers.map( tower => expect(tower.name).toBe("Tower of Betrayer"))
    })

    it('it should return two tower with the weapon -Arcane Cannon-', () => {
        const filteredTowers:Tower[] = getTowersAndGuardsByWeaponType(megaEpicFortress, "Arcane Cannon");
        expect(filteredTowers.length).toBe(2);
    })
    
});