import s from './Loader.module.css'
import load from '../hw10/Spinner.svg'

// export const Loader = () => <div className={s.loader}/>
export const Loader = () => {
    return (<div className={s.loader}>
        <img src={load}/>
    </div>
    )

}
