import React from 'react';
import { connect } from 'react-redux';
import { active } from '../../store/categories';
import { useDispatch } from 'react-redux';
import { getRemoteData } from '../../store/actions';

const Category = (props) => {
    const dispatch = useDispatch();
    console.log('props', props);
    return (
        <ul>
            {props.categories.map((item, i) => {
                return (
                    <li
                        key={i}
                        onClick={() => dispatch(getRemoteData(item.normalizedName,'get',{}))}>
                        {console.log('llllllllllllllll',item)}
                        {item.displayName}
                    </li>
                )
            })}
        </ul>
    );
}

const mapStateToProps = (state) => ({
    categories: state.CatigoryReducer.categories
});

const mapDispatchToProps = { active };

export default connect(mapStateToProps, mapDispatchToProps)(Category);
