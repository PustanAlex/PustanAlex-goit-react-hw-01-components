import styles from './Statistics.module.css';

function randomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


function Statistics( {title, stats}) {

    return (
    
        <section className={styles.statistics}>
            <h2 className={styles.title}>{title}</h2>

            <ul className={styles.statlist}>
                {stats.map (stat => (
                    <li key={stat.id} className={styles.item}  style={{backgroundColor: randomHexColor()}}>
                        <span className={styles.label}>{stat.label}</span>
                        <span className={styles.perce}>{stat.percentage}%</span>
                     
                    </li>
                ))}

            </ul>
        </section>
    )
}

export default Statistics;