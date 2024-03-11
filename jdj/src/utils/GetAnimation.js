import React from 'react';
import { useInView } from 'react-intersection-observer';

const GetAnimation = ({ children, beforeView = '', afterView = '' }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <div ref={ref} className={inView ? afterView : beforeView}>
            {children}
        </div>
    );
};

export default GetAnimation;
