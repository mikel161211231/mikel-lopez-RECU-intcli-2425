import { useState } from "react";
import { countVillagersByProfession } from "../helpers/helpers";
import { MegaEpicFortress, Profession, Role } from "../types/MegaEpicFortress";

interface ButtonProps {
    fortress: MegaEpicFortress; // Define the potion prop type
}

const ButtonShowVillage: React.FC<ButtonProps> = ({ fortress }) => {

    const [showVillage, setShowVillage] = useState<boolean>(false);
    const [data, setData] = useState<Record<string, Number> | undefined>();



    const updateStatus = () => {
        if (showVillage) {
            setShowVillage(false)
        } else {
            const newData = countVillagersByProfession(fortress);
            setData(newData);
            setShowVillage(true)
        }

    }

    return (
        <>
            <div className="mt-5 text-center place-self-center">
                <button onClick={updateStatus} className="border-2">SHOW VILLAGER PROFESSION AND WORKERS</button>
                {showVillage && (
                    fortress.inhabitants.roles.map(
                        (role: Role) => {
                            if (role.role === "Villager" && role.professions) {
                                return role.professions?.map(
                                    (profesion: Profession) => {
                                        if (data) {
                                            console.log(profesion);

                                            return <p>{String("" + profesion.type)}: {String(data["" + profesion.type])}</p>;
                                        }
                                    }
                                )
                            } else {
                                return <></>;
                            }

                        }
                    ))}
            </div>


        </>
    );
};



export default ButtonShowVillage;