import React from 'react';
import { connect } from 'react-redux';
import { active } from '../../store/categories';
import { List,Typography,ListItem} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline'
    },
}));

const Category = (props) => {
    const classes = useStyles()
    console.log('props', props);
    return (
        <div>
            <Typography variant="h5">Browse Our Products</Typography>
        <List component="nav" aria-label="secondary mailbox folder">
            {props.categories.map((item, i) => {
                return (
                    <ListItem
                    className={classes.root}
                    key={i}
                    onClick={() => props.active(item.normalizedName)}>
                        ||{item.displayName}
                    </ListItem>
                )
            })}
        </List>
        </div>
    );
}

const mapStateToProps = (state) => ({
    categories: state.CatigoryReducer.categories
})

const mapDispatchToProps = { active };

export default connect(mapStateToProps, mapDispatchToProps)(Category);
