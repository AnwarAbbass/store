import React from 'react';
import { connect } from 'react-redux';
import { active } from '../../store/categories';
import Tab from "@material-ui/core/Tab";

const Category=(props)=>{
    return(
        {props.categories.map((item,i)=>{
            return(
                <Tab
                 color="secondary"
                 label={category.displayName}
                 key={i}
                 onClick={() => props.active(item)}
                ></Tab>
            )
        })}
    );
}

const mapStateToProps = (state) =>({
    categories : state.CategoryReducer.categories
})

const mapDispatchToProps={active};

export default connect(mapDispatchToProps,mapStateToProps)(Category);
