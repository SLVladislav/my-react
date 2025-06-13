import { useId, useState } from "react"

export const LandSwitcher = () => {
    const selectId = useId();
    

    return (
        <div>
            <label htmlFor={selectId}>Choose language</label>
            <select value={lang} id={selectId} onChange={(evt => setLang(evt.target.value))}>
                <option value="uk">Ukrainian</option>
                <option value="en">English</option>
                <option value="pl">Polish</option>
            </select>
        </div>
    )
}