import React from 'react';
import styles from './Card.module.scss';




const Card = (props) => {

    const [isAdded, setIsAdded] = React.useState(false);



    const onClickAdd = () => {
        setIsAdded(!isAdded)
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src={props.imgUrl} alt="Sneakers" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>{props.price} usd</b>
                </div>
            
                    <img className={styles.add} onClick={onClickAdd} src={isAdded ? "/img/btn-checked.svg" : "/img/addIcon.svg"} alt="Add" />
                
            </div>

        </div>
    )
}

export default Card;