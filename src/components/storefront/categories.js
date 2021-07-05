import React from 'react';
import { connect } from 'react-redux';
import { active } from '../../store/categories';

const Category = (props) => {
    console.log('props', props);
    return (
        <ul>
            {props.categories.map((item, i) => {
                return (
                    <li
                        key={i}
                        onClick={() => props.active(item.normalizedName)}>
                        {item.displayName}
                    </li>
                )
            })}
        </ul>
    );
}

const mapStateToProps = (state) => ({
    categories: state.CatigoryReducer.categories
})

const mapDispatchToProps = { active };

export default connect(mapStateToProps, mapDispatchToProps)(Category);
