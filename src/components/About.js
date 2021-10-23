import React from 'react';
import '../styles/about.css';
export default function About() {
    return (
        <section className="about-section" id="about">
            <h2>About</h2>
            <div className="about-content">
                <article className="about-img">
                    <img src='./images/portfolio-pic.jpg' alt='Headshot' />
                </article>
                <article className="about-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum est a tellus mattis, sit amet tincidunt libero convallis. Sed vitae tellus quam. Curabitur posuere pharetra erat a condimentum. Curabitur ullamcorper quam quis felis lacinia, at feugiat ipsum hendrerit. Cras sagittis purus vel iaculis efficitur. Nullam in suscipit augue. Quisque dui sapien, ultrices nec elementum quis, fermentum nec sem. Nam aliquam tincidunt elit, venenatis pulvinar purus tempor sit amet. Mauris malesuada lacus et nisl volutpat cursus. Phasellus lacinia, mi id laoreet pretium, nisl nisi euismod orci, ac tincidunt elit nisi id ex. Vivamus volutpat molestie felis, in malesuada est consequat et. Vestibulum sed mattis risus, nec congue erat. Fusce vitae consectetur augue. Vivamus aliquam non magna at dictum. Nulla facilisi. Curabitur rhoncus mauris in accumsan blandit.
                </article>
            </div>
        </section>
    )
}
