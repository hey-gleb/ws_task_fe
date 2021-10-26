import React from 'react';
import cn from 'classnames';

import './MainPageTemplate.css';
import MainFooter from "../../components/mainFooter/MainFooter";


interface Props {
    className?: string;
}

const MainPageTemplate: React.FC<Props> = props => {
    const {className = ''} = props;

    return <div className={cn('main-page-template', {[className]: !!className})}>
        <div className={'main-page-layout__sidebar'}/>
        <div className={'main-page-layout__header'}/>
        <div className={'main-page-layout__content'}>
            {props.children}
        </div>
        <MainFooter className={'main-page-layout__footer'}/>
    </div>
};

export default MainPageTemplate;

