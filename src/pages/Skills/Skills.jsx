import React from 'react';
import { useSelector } from 'react-redux';
import './Skills.css';
import style from '../module/Page.module.css';
import Title from '../module/Title/Title';
import SkillsItem from './SkillsItem/SkillsItem';

const Skills = () => {

    const SKILLS_LIST = useSelector((state) => state.lang.skills);
    
    let skills = [];

    SKILLS_LIST.list.forEach((element) => {
        skills.push(<SkillsItem key={element.id + Math.random()} {...element} />)
    })

    return (
        <div className={`${style.page} column`}>
            <Title variant={SKILLS_LIST.title}/>
            <div className='skills column'>
                {skills}
            </div>
        </div>
    );
};

export default Skills;