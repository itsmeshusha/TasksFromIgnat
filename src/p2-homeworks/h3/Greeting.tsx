import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";
// import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: ()=>void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    let inputClass = error ? s.error : s.someClass ;

    return (
        <div className={s.greeting}>
            {/* <SuperInputText setError={setError}
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}/> */}
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span>{error}</span>
            <button onClick={addUser} className={s.button}>add</button>
            <span>{totalUsers}</span>
        </div>
    );
}

export default Greeting;
