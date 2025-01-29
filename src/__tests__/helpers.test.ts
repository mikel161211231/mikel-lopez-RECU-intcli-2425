import { megaEpicFortress } from "../data/data";
import { getTowersAndGuardsByWeaponType, countVillagersByProfession } from "../helpers/helpers";
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


describe('+ Test the function countVillagersByProfession from helpers.ts', () => {

    it('it should return the record with all the values', () => {
        const professionsRecord = countVillagersByProfession(megaEpicFortress);
        expect(professionsRecord).not.toBeNull(); 
        expect(professionsRecord["Farmer"]).toBe(467);
        expect(professionsRecord["Blacksmith"]).toBe(31);
        expect(professionsRecord["Merchant"]).toBe(63);
        expect(professionsRecord["Healer"]).toBe(129);
        expect(professionsRecord["Beggar"]).toBe(97);
        expect(professionsRecord["Acolyte"]).toBe(237);
    })
})