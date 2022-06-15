import styles from '../styles/banner.module.css'

const Banner = () => {
    return ( 
        <>
            <header className={styles.banner}>
                <nav className={styles.navBar}>
                    <div className={styles.gradientDiv}>
                        <img src="https://shuffle.dev/vendor/shuffle/img/flex-landing/green-blue-shadows.png" alt="" />
                    </div>
                        
                    <div className={styles.logoDiv}>
                        <div className={styles.logo}>
                            
                            <svg width="122" height="37" viewBox="0 0 122 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46.56 27.216C51.264 27.216 53.352 25.152 53.352 22.152C53.352 19.08 51.192 17.712 48.072 17.064L45.792 16.584C44.16 16.224 43.632 15.6 43.632 14.736C43.632 13.704 44.52 12.936 46.536 12.936C48.696 12.936 49.632 14.016 49.728 15.312H53.064C53.04 12.168 50.352 9.984 46.584 9.984C42.696 9.984 40.248 11.904 40.248 14.736C40.248 17.784 42.312 19.008 45.216 19.632L47.664 20.16C49.248 20.496 49.968 21.096 49.968 22.224C49.968 23.496 48.96 24.288 46.56 24.288C44.496 24.288 43.176 23.352 43.032 21.456H39.696C39.864 24.936 42.192 27.216 46.56 27.216ZM55.6281 27H58.8441V20.112C58.8441 18.312 59.9721 17.232 61.4841 17.232C63.0921 17.232 63.8121 18.168 63.8121 19.728V27H67.0281V18.816C67.0281 16.032 65.2281 14.304 62.4681 14.304C60.7641 14.304 59.6361 15 58.9401 15.936H58.8441V9.24H55.6281V27ZM77.5374 14.52V21.648C77.5374 23.232 76.8654 24.216 75.2334 24.216C73.5774 24.216 72.9054 23.232 72.9054 21.648V14.52H69.6894V22.152C69.6894 24.84 71.4174 27.216 75.2094 27.216H75.2334C79.0014 27.216 80.7534 24.84 80.7534 22.152V14.52H77.5374ZM84.9079 27H88.1239V17.232H91.0999V14.52H88.1239V13.464C88.1239 12.264 88.8199 11.76 90.0199 11.76C90.4039 11.76 90.8359 11.808 91.2199 11.88V9.168C90.7879 9.072 90.3079 9 89.6839 9C86.9719 9 84.9079 10.656 84.9079 13.464V14.52H82.7239V17.232H84.9079V27ZM94.7985 27H98.0145V17.232H100.991V14.52H98.0145V13.464C98.0145 12.264 98.7105 11.76 99.9105 11.76C100.295 11.76 100.727 11.808 101.111 11.88V9.168C100.679 9.072 100.199 9 99.5745 9C96.8625 9 94.7985 10.656 94.7985 13.464V14.52H92.6145V17.232H94.7985V27ZM103.417 27H106.633V9.24H103.417V27ZM114.675 27.216C117.891 27.216 119.931 25.368 120.267 23.112H117.123C116.883 23.88 116.115 24.552 114.675 24.552C112.827 24.552 111.963 23.352 111.939 21.648H120.435V20.4C120.435 16.992 118.347 14.304 114.627 14.304C110.619 14.304 108.651 17.232 108.651 20.784C108.651 24.384 110.811 27.216 114.675 27.216ZM111.963 19.512C112.035 18.096 112.827 16.992 114.627 16.992C116.307 16.992 117.099 18.096 117.147 19.512H111.963Z" fill="#0D172A"/>
                            <path d="M13.2489 16.7888L3.60976 22.3534V9.73394L13.2489 4.16814L26.4979 11.8174V7.6493L13.2489 0L0 7.6493V28.6062L13.2489 20.9569L19.2795 24.4392V20.271L13.2489 16.7888Z" fill="#0D172A"/>
                            <path d="M13.2489 8.3938L7.21049 11.8806V16.0487L13.2489 12.5619L22.8881 18.1277V30.7483L13.2489 25.1826L7.21049 28.6682L4.16701 30.4235L0.0022561 32.8285L0 37L13.2489 29.3507L26.4979 37V16.0431L13.2489 8.3938Z" fill="#0D172A"/>
                            </svg>

                        </div>
                        
                    </div>
                    <div className={styles.navLinks}>
                        <a href="#">Products</a>
                        <a href="#">Case Studies</a>
                        <a href="#">Pricing</a>
                        <a href="#">About</a>
                    </div>
                    <div className={styles.logInDiv}>
                        <button className={styles.logInBtn}>Log In</button>
                        <button className={styles.demoBtn}>Try Demo</button>
                    </div>

                </nav>
                <div className = {styles.bannerSection}>
                    {/* left banner section after nav bar */}
                    <div className={styles['left-ban-sect']}>
                        <div>
                            <h1>
                                {/* Flex your skills with FlexUI */}
                                <span>F</span><span>l</span><span>e</span><span>x </span>
                                <span>y</span><span>o</span><span>u</span><span>r </span>
                                <span>s</span><span>k</span><span>i</span><span>l</span><span>l</span><span>s </span>
                                <span>w</span><span>i</span><span></span>t<span>h </span>
                                <span>F</span>l<span>e</span>x<span>U</span>I<span></span>
                            </h1>
                            
                        
                        </div>

                        <div>
                            <p>We've added the largest UI Library,new tools and we can tell you how we'll intergrate Wordpress</p>
                        </div>

                        <div className={styles['banner-sect-btn-div']}>
                            <button className={styles['banner-sect-btn1']}>Try Flex Live</button>
                            <button className={styles['banner-sect-btn2']}>Read More</button>
                        </div>
                        
                    </div>
                    {/* right banner section after nav bar */}
                    <div className={styles['right-ban-sect']}>
                        <div>
                            <img src="flex-landing-placeholder.png" alt="picture" />
                        </div>
                    </div>
                </div>
                
            </header>
        
        
        </>
     );
}
 
export default Banner;