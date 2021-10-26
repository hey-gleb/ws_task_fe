import React from 'react';
import cn from 'classnames';


import './MainFooter.css'

interface Props {
    className?: string;
}

const MainFooter: React.FC<Props> = props => {
    const { className = '' } = props;

    return <div className={cn('main-footer', {[className]: !!className})}>
        <div className={'main-footer__media-list'}>
            <div className={'media-list__item media-list__item_facebook'}/>
            <div className={'media-list__item media-list__item_linkedin'}/>
        </div>
        <a href={'mailto:jobspoland@worldsensing.com'}>jobspoland@worldsensing.com</a>
    </div>
};

export default MainFooter;
