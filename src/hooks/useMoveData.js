import { useState } from 'react';

const useMoveData = () => {
    const [skill, setSkill] = useState(null);
    const [loadingSkill, setLoadingSkill] = useState(false);

    async function fetchMoveData(move, moveUrl) {
        if (loadingSkill || !localStorage || !moveUrl) return;

        let cache = {};
        if (localStorage.getItem('pokemon-moves')) {
            cache = JSON.parse(localStorage.getItem('pokemon-moves'));
        }
        if (move in cache) {
            setSkill(cache[move]);
            console.log('Found move in cache');
            return;
        }

        try {
            setLoadingSkill(true);
            const res = await fetch(moveUrl);
            const moveData = await res.json();
            const description = moveData?.flavor_text_entries.filter((val) => {
                return val.version_group.name == 'firered-leafgreen';
            })[0]?.flavor_text;
            const skillData = {
                name: move,
                description: description,
            };
            setSkill(skillData);
            cache[move] = skillData;
            localStorage.setItem('pokemon-moves', JSON.stringify(cache));
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoadingSkill(false);
        }
    }

    return { skill, loadingSkill, fetchMoveData, setSkill };
};

export default useMoveData;
