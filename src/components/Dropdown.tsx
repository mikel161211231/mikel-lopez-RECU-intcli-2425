import { useState } from "react";
import { Guard, MegaEpicFortress, Tower } from "../types/MegaEpicFortress";
import { getTowersAndGuardsByWeaponType } from "../helpers/helpers";

interface DropdownProps {
    fortress: MegaEpicFortress; // Define the potion prop type
}

const Dropdown: React.FC<DropdownProps> = ({ fortress }) => {

    const [data, setData] = useState<Tower[]>();

    const updateSelectedTowerData = (weapon: string) => {

        console.log(weapon);
        
        const newData = getTowersAndGuardsByWeaponType({ ...fortress }, weapon);
        setData(newData);
        
        
    }

    const getOptions = () => {


        const filterTower: Tower[] = [];
        
        for (let i = 0; i < fortress.defenses.towers.length; i++) {
           const tower:Tower = fortress.defenses.towers[i];
           let found:boolean = false;
            for (let j = 0; j < filterTower.length; j++) {
                const towerF:Tower = filterTower[j];
                if(towerF.armament?.weaponType === tower.armament?.weaponType){
                    found = true;
                }
            }
            if (!found) {
                filterTower.push({...tower})
            }
        }
        console.log(filterTower);
        return (filterTower.map(
            (tower: Tower, index) => {
                return (<option key={index} value={"" + tower.armament?.weaponType}>{tower.armament?.weaponType}</option>)
            }

        ))
    }

    return (
        <>
            <div className="mt-5 text-center place-self-center">
                <label htmlFor={"weaponType"}>Select weapon type     </label>

                <select id="weaponType" onChange={(weaponType) => { updateSelectedTowerData(String(weaponType.target.value)) }} >
                    {getOptions()}
                </select>
            </div>

            <div className="mt-5 text-center place-self-center">
                {
                    data && (
                        data.map(
                            (tower: Tower, index) => {
                                return (<>
                                    <h3 key={index}>{tower.name}</h3>
                                    {tower.guards?.map(
                                        (guard: Guard, index) => {
                                            return <p key={index}>{guard.name}</p>
                                        }
                                    )}
                                </>)
                            }
                        )
                    )
                }
            </div>

        </>
    );
};



export default Dropdown;

