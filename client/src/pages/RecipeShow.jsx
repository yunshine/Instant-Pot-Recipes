import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/RecipeShowStyles';

class RecipeShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            id: this.props.match.params.id,
            recipe: { ingredients: '' },
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true });

        await api.getRecipeById(this.state.id).then(recipe => {
            this.setState({
                recipe: recipe.data.data,
                isLoading: false,
            })
        })
        // this.setState()
    };

    render() {
        const { classes } = this.props;
        const { name, images, description, ingredients, directions } = this.state.recipe;
        const linkToUpdate = `update/${this.state.recipe._id}`;

        const newIngredients = ingredients.split(", ");


        return (
            <div className={classes.RecipeShow}>
                <div className={classes.RecipeShowTop}>
                    <div className={classes.RecipeShowTopLeft}>
                        <h1>{name}</h1>
                        <p>{description}</p>
                        <Link to={linkToUpdate} className={classes.ShowPageUpdateButton}>Update Recipe</Link>
                        <Link to="/" className={classes.ShowPageDeleteButton}>Delete Recipe</Link>
                    </div>

                    <div className={classes.RecipeShowTopRight}>
                        <img src={images} className={classes.RecipeShowCardImage} alt="" />
                    </div>
                </div>

                <hr></hr>


                <div className={classes.RecipeShowBottom}>
                    <div className={classes.RecipeShowBottomLeft}>
                        <h2>Ingredients</h2>
                        <ul>
                            {ingredients.split(', ').map(ingredient => (
                                <li>{ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    <hr className={classes.RecipeShowBottomHR}></hr>

                    <div className={classes.RecipeShowBottomRight}>
                        <h2>Directions</h2>
                        <p>{directions}</p>
                    </div>
                </div>
            </div>
        );
    };
};

export default withStyles(styles)(RecipeShow);