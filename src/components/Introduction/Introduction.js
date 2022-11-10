import React from "react";
import style from './Introduction.module.css';


const Introduction = () => {
    return(
        <div className={style.Intro}>
            <div className={style.IntroBox}>
                <p>
                    When considering whether to rent or buy for your next move, it can be difficult to decypher the numbers.
                    The rent or buy calculator attempts to simplify this by comparing your final equity position at the end of each scenario.
                </p>
                <p>
                    But remember! Long term financial benefit is not the only criteria that should impact your rent or buy decision.
                    This calculator should be viewed as indicative only.
                </p>
            </div>
        </div>
    );
}


export default Introduction;