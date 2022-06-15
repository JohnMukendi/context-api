import styles from '../styles/january.module.css' 

const January = () => {
    let contents = [
        {id:1,title:'Plain UI for Bulma,\nBootstrap & Tailwind',img:'grid1.webp',info:"We've added a set of components that doesn't dictate style. Plain UI allows you to start with a minimalistic design and customize it in no time",readMore:true,},
        {id:2,title:'CSS Filters and \nTransitions',img:'grid2.webp',info:"You can play with components and graphics easily with the tools added in the right menu.We are consistently expanding the editor's capabilities.",readMore:true},
        {id:3,title:'Fixes improving backend\n structure',img:'grid3.webp',info:"Work you can't see,but it's there.We are improving our backend to be able to seamlessly add new functionalities.",readMore:false}
    ]
    return ( 
        <>
        <div className={styles.main}>
            <div className={styles['header']}>
                <h3>January was a <span>busy month</span></h3>
            </div>
            <div className={styles['grid-div-container']}>
                {contents.map((content) =>(
                    <div className={styles['grid-div']}>
                        <div className={styles['grid-image-div']}>
                            <img src={content.img} alt="picture" />
                        </div>
                        <div className={styles['grid-texts']}>
                            <div className={styles['grid-title']}>
                                {content.title}
                            </div>
                            <div className={styles['grid-info']}>
                                {content.info}
                            </div>
                            <div className={styles['read-more-div']}>
                                {content.readMore ? (<a href="#">Read More</a>) : ''  }
                                
                            </div>
                        </div>
                        
                        
                    </div>
                ))}    
            </div>
        </div>
        

        </>
        
     );
}
 
export default January;